import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { v2 as cloudinary } from 'cloudinary'

async function parseDotEnv(filePath) {
  try {
    const txt = await fs.readFile(filePath, 'utf8')
    const out = {}
    for (const line of txt.split(/\r?\n/)) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const idx = trimmed.indexOf('=')
      if (idx === -1) continue
      const key = trimmed.slice(0, idx).trim()
      let val = trimmed.slice(idx + 1).trim()
      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1)
      out[key] = val
    }
    return out
  } catch (err) {
    return {}
  }
}

function isVideo(ext) {
  return ['.mp4', '.mov', '.webm', '.avi', '.mkv'].includes(ext.toLowerCase())
}

function isImage(ext) {
  return ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp'].includes(ext.toLowerCase())
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      files.push(...await walk(full))
    } else if (e.isFile()) {
      files.push(full)
    }
  }
  return files
}

function normalizePublicIdFromRelative(rel) {
  // rel is like "lp1.jpeg" or "folder/name.jpg"
  const segments = rel.split('/').map(seg => {
    const noext = seg.replace(/\.[^.]+$/, '')
    return encodeURIComponent(noext)
  })
  return segments.join('/')
}

async function main() {
  const repoRoot = path.resolve(process.cwd())
  const envPath = path.join(repoRoot, '.env')
  const env = await parseDotEnv(envPath)

  const cloudName = env.VITE_CLOUDINARY_CLOUD_NAME || process.env.VITE_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = env.VITE_CLOUDINARY_API_KEY || process.env.VITE_CLOUDINARY_API_KEY || process.env.CLOUDINARY_API_KEY
  const apiSecret = env.VITE_CLOUDINARY_API_SECRET || process.env.VITE_CLOUDINARY_API_SECRET || process.env.CLOUDINARY_API_SECRET

  if (!cloudName || !apiKey || !apiSecret) {
    console.error('Cloudinary credentials not found. Set them in .env or environment variables.')
    process.exit(1)
  }

  cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret })

  const publicDir = path.join(repoRoot, 'public')
  let files = []
  try {
    files = await walk(publicDir)
  } catch (err) {
    console.error('Failed to read public directory:', err.message)
    process.exit(1)
  }

  const mediaFiles = files.filter(f => {
    const ext = path.extname(f).toLowerCase()
    return isImage(ext) || isVideo(ext)
  })

  console.log(`Found ${mediaFiles.length} media files to upload.`)

  const mapping = {}

  for (const file of mediaFiles) {
    const rel = path.relative(publicDir, file).split(path.sep).join('/')
    const sourcePath = '/' + rel
    const ext = path.extname(file)
    const publicId = normalizePublicIdFromRelative(rel)
    const resourceType = isVideo(ext) ? 'video' : 'image'

    try {
      console.log(`Uploading ${sourcePath} -> ${resourceType} public_id=${publicId}`)
      const res = await cloudinary.uploader.upload(file, { public_id: publicId, resource_type: resourceType, overwrite: true })
      mapping[sourcePath] = { public_id: res.public_id, url: res.secure_url, resource_type: res.resource_type }
    } catch (err) {
      console.error(`Failed to upload ${sourcePath}:`, err.message || err)
      mapping[sourcePath] = { error: String(err) }
    }
  }

  const outPath = path.join(repoRoot, 'cloudinary-mapping.json')
  await fs.writeFile(outPath, JSON.stringify(mapping, null, 2), 'utf8')
  console.log('Wrote mapping to', outPath)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
