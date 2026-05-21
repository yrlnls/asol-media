import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_SCRIPT_ID = 'google-analytics'
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

export default function GoogleAnalytics() {
  const location = useLocation()

  useEffect(() => {
    if (!measurementId || typeof window === 'undefined') {
      return
    }

    window.dataLayer = window.dataLayer || []
    window.gtag =
      window.gtag ||
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args)
      }

    window.gtag('js', new Date())
    window.gtag('config', measurementId, { send_page_view: false })

    if (document.getElementById(GA_SCRIPT_ID)) {
      return
    }

    const script = document.createElement('script')
    script.id = GA_SCRIPT_ID
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)
  }, [])

  useEffect(() => {
    if (!measurementId || typeof window === 'undefined' || !window.gtag) {
      return
    }

    const pagePath = `${location.pathname}${location.search}${location.hash}`

    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pagePath,
      send_to: measurementId,
    })
  }, [location])

  return null
}
