import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)
  const heroImages = [
    { src: '/lp1.jpeg' },
    { src: '/lp2.jpeg' },
    { src: '/lp3.jpeg' },
    { src: '/lp4.jpeg' },
    { src: '/lp5.jpeg' },
    { src: '/lp7.jpeg' },
    { src: '/lp9.jpeg' },
    { src: '/lp10.jpeg', position: 'center 25%' },
    { src: '/lp13.jpeg' },
    { src: '/lp14.jpeg', position: 'center 25%' },
    { src: '/lp15.jpeg', position: 'center 25%' },
    { src: '/lp16.jpeg' },
    { src: '/lp17.jpeg' },
    { src: '/lp18.jpeg' },
    { src: '/lp19.jpeg' },
    { src: '/lp20.jpeg' },
    { src: '/lp21.jpeg' },
    { src: '/lp22.jpeg' },
    { src: '/lp23.jpeg' },
    { src: '/lp24.jpeg' },
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
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`hero-carousel-slide${index === activeIndex ? ' is-active' : ''}`}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundPosition: image.position ?? 'center',
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
      
      </div>
    </section>
  )
}
