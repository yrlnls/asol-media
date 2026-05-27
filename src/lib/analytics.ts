/**
 * Google Analytics 4 Event Tracking Utility
 * Measurement ID: G-CLXT24E7RG
 */

interface EventParams {
  [key: string]: string | number | boolean
}

/**
 * Track custom events in Google Analytics 4
 */
export const trackEvent = (eventName: string, eventParams?: EventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

/**
 * Track button/link clicks with context
 */
export const trackButtonClick = (buttonText: string, destination?: string, category?: string) => {
  trackEvent('button_click', {
    button_text: buttonText,
    destination: destination || 'unknown',
    category: category || 'engagement',
  })
}

/**
 * Track form submissions
 */
export const trackFormSubmission = (formName: string, success: boolean, errorMessage?: string) => {
  trackEvent('form_submission', {
    form_name: formName,
    success: success,
    error_message: errorMessage || '',
  })
}

/**
 * Track external link clicks
 */
export const trackExternalLink = (url: string, linkText?: string) => {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText || url,
  })
}

/**
 * Track e-commerce interactions
 */
export const trackAddToCart = (productName: string, price?: number) => {
  trackEvent('add_to_cart', {
    product_name: productName,
    price: price || 0,
  })
}

/**
 * Track page view with custom data
 */
export const trackPageView = (pageName: string, pageCategory?: string) => {
  trackEvent('page_view_custom', {
    page_name: pageName,
    page_category: pageCategory || 'general',
  })
}

/**
 * Track video/media engagement
 */
export const trackMediaEngagement = (mediaType: string, mediaTitle: string, action: string) => {
  trackEvent('media_engagement', {
    media_type: mediaType,
    media_title: mediaTitle,
    action: action, // play, pause, complete, etc.
  })
}

/**
 * Track scroll depth (use in scroll event handlers)
 */
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    depth_percentage: Math.round(depth),
  })
}
