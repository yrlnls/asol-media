import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)
  const heroImages = [
    '/lp1.jpeg',
    '/lp2.jpeg',
    '/lp3.jpeg',
    '/lp4.jpeg',
    '/lp5.jpeg',
    '/lp6.jpeg',
    '/lp7.jpeg',
    '/lp8.jpeg',
  ]

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % heroImages.length)
    }, 6000)

    return () => window.clearInterval(intervalId)
  }, [heroImages.length])

  return (
    <section id="home" className="hero">
      <div className="hero-carousel" aria-hidden="true">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`hero-carousel-slide${index === activeIndex ? ' is-active' : ''}`}
            style={{
              backgroundImage: `url(${src})`,
              zIndex: index === activeIndex ? 2 : 1,
            }}
          />
        ))}
        <div className="hero-carousel-overlay" />
      </div>
      <div className="hero-inner">
        <div className="hero-content">
          <span className="eyebrow">Strategic Visual Communications</span>
          <h1>
            Some stories
            <br />
            are too <span className="text-accent text-accent-italic">sacred</span>
            <br />
            for ordinary
            <br />
            frames.
          </h1>
          <p>
            Asol Media is a luxury visual storytelling studio — where cinematic craft meets the depth of human memory. We don't capture moments. We preserve legacies.
          </p>
          <div className="hero-actions">
            <Link to="/work" className="btn btn-primary">View Our Work</Link>
            <Link to="/contact" className="btn btn-secondary">Start a Conversation</Link>
          </div>
        </div>
        {/* <div className="hero-visual">
          <div className="hero-visual-frame">
            <div className="hero-visual-placeholder">Placeholder</div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
