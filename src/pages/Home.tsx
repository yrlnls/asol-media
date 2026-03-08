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
              Asol Media is a luxury visual storytelling studio — where cinematic craft meets the depth of human memory. We don't capture moments. We preserve legacies.
            </p>
            <div className="hero-actions">
              <Link to="/work" className="btn btn-primary">View Our Work</Link>
              <Link to="/contact" className="btn btn-secondary">Start a Conversation</Link>
            </div>
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
                We are building a training space for safe, cinematic, and story-first drone flight. The school
                will open with beginner to advanced tracks, practical flying sessions, and production-ready
                workflows for creators and teams.
              </p>
              <ul className="drone-school-list">
                <li>Beginner and advanced flight tracks</li>
                <li>Safety, regulations, and pre-flight planning</li>
                <li>Camera movement, composition, and aerial storytelling</li>
              </ul>
              <div className="drone-school-actions">
                <Link to="/contact" className="btn btn-primary">
                  Join the waitlist
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Ask about the school
                </Link>
              </div>
            </div>
            <div className="drone-school-panel">
              <span className="drone-school-tag">Future campus</span>
              <h3>Nairobi-based, open to East Africa</h3>
              <p>
                We are finalising curriculum, instructors, and equipment. Leave your details and we will keep
                you updated on launch dates and intake.
              </p>
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
              The name Asol is not a brand construct. It is an inheritance. It holds the memory of Mama Esther Asol Were — her dignity, her storytelling, her unrecorded grace. In naming this studio after her, we made a promise: that the stories of ordinary extraordinary people will be told with the same craft we bring to presidents and programmes. Legacy does not belong only to the powerful.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
