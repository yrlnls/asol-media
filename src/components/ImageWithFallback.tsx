import { useEffect, useState, type ImgHTMLAttributes, type ReactEventHandler } from 'react'

const FALLBACK_EXTENSIONS = [
  '.webp',
  '.jpg',
  '.png',
  '.jpeg',
  '.JPG',
  '.PNG',
  '.JPEG',
]

type ImageWithFallbackProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  fetchPriority?: 'high' | 'low' | 'auto'
}

export default function ImageWithFallback({
  src,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'low',
  onError,
  ...props
}: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    setCurrentSrc(src)
    setAttempt(0)
  }, [src])

  const handleError: ReactEventHandler<HTMLImageElement> = (event) => {
    const match = currentSrc.match(/\.(webp|jpg|jpeg|png)(\?.*)?$/i)
    if (!match) {
      onError?.(event)
      return
    }

    const currentExt = `.${match[1].toLowerCase()}`
    const currentIndex = FALLBACK_EXTENSIONS.indexOf(currentExt)
    const nextIndex = Math.max(currentIndex, attempt) + 1

    if (nextIndex >= FALLBACK_EXTENSIONS.length) {
      onError?.(event)
      return
    }

    const nextExt = FALLBACK_EXTENSIONS[nextIndex]
    const nextSrc = currentSrc.replace(/\.(webp|jpg|jpeg|png)(\?.*)?$/i, `${nextExt}$2`)

    setAttempt(nextIndex)
    setCurrentSrc(nextSrc)
  }

  return (
    <img
      src={currentSrc}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      onError={handleError}
      {...props}
    />
  )
}
