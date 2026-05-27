import { lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import { trackPageView } from './lib/analytics'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Work = lazy(() => import('./pages/Work'))
const WorkGallery = lazy(() => import('./pages/WorkGallery'))
const Shop = lazy(() => import('./pages/Shop'))
const Clients = lazy(() => import('./pages/Clients'))
const Insights = lazy(() => import('./pages/Insights'))
const Contact = lazy(() => import('./pages/Contact'))

// Map routes to page names for analytics
const getPageName = (pathname: string): { name: string; category: string } => {
  const path = pathname.toLowerCase().split('/').filter(Boolean)[0] || 'home'
  const pageMap: { [key: string]: { name: string; category: string } } = {
    '': { name: 'Home', category: 'home' },
    'home': { name: 'Home', category: 'home' },
    'about': { name: 'About', category: 'company' },
    'services': { name: 'Services', category: 'services' },
    'work': { name: 'Work Portfolio', category: 'portfolio' },
    'shop': { name: 'Shop', category: 'ecommerce' },
    'clients': { name: 'Clients', category: 'company' },
    'insights': { name: 'Insights', category: 'blog' },
    'contact': { name: 'Contact', category: 'conversion' },
  }
  return pageMap[path] || { name: pathname, category: 'other' }
}

function App() {
  const location = useLocation()

  useEffect(() => {
    // Track page views on route changes
    const { name, category } = getPageName(location.pathname)
    
    // Standard gtag page_view for GA4
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
        page_title: document.title,
        page_location: window.location.href,
      })
    }

    // Custom page_view event with additional context
    trackPageView(name, category)

    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [location])

  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:categoryId" element={<WorkGallery />} />
          <Route path="shop" element={<Shop />} />
          <Route path="clients" element={<Clients />} />
          <Route path="insights" element={<Insights />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
  )
}

export default App
