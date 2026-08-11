const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME?.trim()

function isRemoteAsset(source: string) {
  return (
    /^https?:\/\//.test(source) ||
    source.startsWith('data:') ||
    source.startsWith('blob:') ||
    source.includes('res.cloudinary.com')
  )
}

function normalizePublicId(source: string) {
  const withoutLeadingSlash = source.replace(/^\/+/, '')
  const withoutQuery = withoutLeadingSlash.split('?')[0]
  const withoutHash = withoutQuery.split('#')[0]
  const withoutExtension = withoutHash.replace(/\.[^.]+$/, '')

  return withoutExtension || 'image'
}

function formatTransformations(options: Record<string, unknown>) {
  const entries = Object.entries(options)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => {
      if (key === 'quality') return `q_${value}`
      if (key === 'fetch_format') return `f_${value}`
      if (typeof value === 'boolean') return key
      return `${key}_${value}`
    })

  return entries.length > 0 ? `${entries.join(',')},` : ''
}

export function getCloudinaryImageUrl(source: string, options: Record<string, unknown> = {}) {
  if (!source || isRemoteAsset(source)) {
    return source
  }

  if (!cloudName) {
    return source
  }

  const publicId = normalizePublicId(source)
  const transformation = `${formatTransformations(options)}f_auto,q_auto`

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformation}/${publicId}`
}
