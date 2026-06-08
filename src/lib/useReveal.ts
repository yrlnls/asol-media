import { useEffect, useRef } from 'react'

/**
 * Hook to apply reveal animations when elements enter viewport
 * Observes elements and applies 'reveal' class when they become visible
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.1) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal')
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold])

  return ref
}

/**
 * Hook for staggered animations on child elements
 * Each child gets animated with a staggered delay
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.1) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll('[data-stagger]')
          children.forEach((child, index) => {
            const element = child as HTMLElement
            element.style.animation = `fadeInUp 0.8s ease-out forwards`
            element.style.animationDelay = `${index * 0.1 + 0.1}s`
          })
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
