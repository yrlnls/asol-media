import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Work from './pages/Work'
import Clients from './pages/Clients'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="work" element={<Work />} />
        <Route path="clients" element={<Clients />} />
        <Route path="insights" element={<Insights />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App


