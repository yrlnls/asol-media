import { lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Work = lazy(() => import('./pages/Work'))
const WorkGallery = lazy(() => import('./pages/WorkGallery'))
const Shop = lazy(() => import('./pages/Shop'))
const Clients = lazy(() => import('./pages/Clients'))
const Insights = lazy(() => import('./pages/Insights'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  const location = useLocation()

  useEffect(() => {
    // Track page views on route changes
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
        page_title: document.title,
      })
    }
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
