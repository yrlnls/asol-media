import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { trackButtonClick } from '../lib/analytics'

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)
  const heroHighlights = ['Film', 'Photography', 'Livestream', 'Drone']
  const heroStats = [
    { value: '4', label: 'core disciplines' },
    { value: '18+', label: 'featured moments on rotation' },
    { value: '1', label: 'story-first studio' },
  ]
  const droneSchoolTracks = [
    { label: 'Flight', detail: 'Practical flying sessions' },
    { label: 'Safety', detail: 'Regulations and planning' },
    { label: 'Story', detail: 'Camera movement and coverage' },
  ]
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
    { src: '/lp17.jpeg' },
    { src: '/lp18.jpeg' },
    { src: '/lp19.jpeg' },
    { src: '/lp20.jpeg' },
    { src: '/lp21.jpeg' },
    { src: '/lp22.jpeg' },
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
    <>
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
              Cinematic visuals for memory, heritage, and high-stakes moments.
            </p>
            <div className="hero-highlights" aria-label="Core offerings">
              {heroHighlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="hero-actions">
              <Link 
                to="/work" 
                className="btn btn-primary"
                onClick={() => trackButtonClick('View Our Work', '/work', 'hero')}
              >View Our Work</Link>
              <Link 
                to="/contact" 
                className="btn btn-secondary"
                onClick={() => trackButtonClick('Start a Conversation', '/contact', 'hero')}
              >Start a Conversation</Link>
            </div>
          </div>
          <div className="hero-stat-strip" aria-label="Studio snapshot">
            {heroStats.map((item) => (
              <article className="hero-stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="drone-school" className="section drone-school">
        <div className="container">
          <div className="drone-school-card">
            <div className="drone-school-content">
              <span className="eyebrow">Coming soon</span>
              <h2>Asol Drone School</h2>
              <p>
                A training space for safe, cinematic, story-first drone flight.
              </p>
              <ul className="drone-school-list">
                <li>Beginner and advanced flight tracks</li>
                <li>Safety, regulations, and pre-flight planning</li>
                <li>Camera movement, composition, and aerial storytelling</li>
              </ul>
              <div className="drone-school-actions">
                <Link 
                  to="/contact" 
                  className="btn btn-primary"
                  onClick={() => trackButtonClick('Join the waitlist', '/contact', 'drone-school')}
                >
                  Join the waitlist
                </Link>
                <Link 
                  to="/contact" 
                  className="btn btn-secondary"
                  onClick={() => trackButtonClick('Ask about the school', '/contact', 'drone-school')}
                >
                  Ask about the school
                </Link>
              </div>
            </div>
            <div className="drone-school-panel">
              <span className="drone-school-tag">Future campus</span>
              <h3>Nairobi-based, open to East Africa</h3>
              <p>
                Curriculum, instructors, and equipment are being finalised now.
              </p>
              <div className="drone-school-track-grid" aria-label="School focus areas">
                {droneSchoolTracks.map((track) => (
                  <article className="drone-school-track" key={track.label}>
                    <strong>{track.label}</strong>
                    <span>{track.detail}</span>
                  </article>
                ))}
              </div>
              <div className="drone-school-panel-meta">
                <span>Small cohort sizes</span>
                <span>Hands-on flight hours</span>
                <span>Certification-ready guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="legacy" className="section legacy">
        <div className="container">
          <div className="panel legacy-card">
            <span className="legacy-eyebrow">
              Named in legacy · rooted in Rarieda · carried forward
            </span>
            <h2 className="legacy-title">Asol</h2>
            <p className="legacy-copy">
              Not a brand invention, but an inheritance. Named for Mama Esther Asol Were, the studio exists to treat everyday lives with the same care, dignity, and cinematic craft often reserved for power.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
