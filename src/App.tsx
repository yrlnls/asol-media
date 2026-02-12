import { useEffect, useRef } from 'react'
import './App.css'

// Scroll reveal animation hook
function useScrollReveal() {
  const elementsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el)
    }
  }

  return { addToRefs }
}

const mediaLinks = [
  {
    title: 'Uros Podlogar Inspiration',
    subtitle: 'Editorial pacing and clean composition reference',
    href: 'https://urospodlogar.com/',
    tone: 'tone-forest',
  },
  {
    title: 'ASOL Client Gallery',
    subtitle: 'Private client delivery and event highlights',
    href: 'https://asolmediaproduction.passgallery.com/client',
    tone: 'tone-stone',
  },
]

const services = [
  'Wedding and event cinematography',
  'Brand campaigns and launch films',
  'Portrait and lifestyle photography',
  'Social-first short form edits',
]

const processSteps = [
  {
    title: 'Direction',
    text: 'We align on mood, shot list, timelines, and platform goals.',
  },
  {
    title: 'Capture',
    text: 'Multi-angle filming and photography with an editorial eye.',
  },
  {
    title: 'Craft',
    text: 'Color, sound, pacing, and retouching shaped for impact.',
  },
  {
    title: 'Delivery',
    text: 'Final galleries and video cuts delivered in client-ready formats.',
  },
]

function App() {
  const { addToRefs } = useScrollReveal()

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          ASOL MEDIA.
        </a>
        <nav className="top-nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#media">Media</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-block">
          <div className="hero-content reveal" ref={addToRefs}>
            <p className="eyebrow">Cinematic Storytelling</p>
            <h1>Distinct visuals for brands, weddings, and modern events.</h1>
            <p className="hero-copy">
              ASOL Media blends documentary honesty with a luxury visual finish.
              Every frame is crafted to feel timeless, intentional, and alive.
            </p>
            <div className="hero-actions">
              <a className="btn btn-light" href="#media">
                View Media
              </a>
              <a
                className="btn btn-outline"
                href="https://asolmediaproduction.passgallery.com/client"
                target="_blank"
                rel="noreferrer"
              >
                Client Gallery
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section-block story">
          <div className="section-heading reveal" ref={addToRefs}>
            <p className="eyebrow">Who We Are</p>
            <h2>Visual narratives built with discipline and edge.</h2>
          </div>
          <div className="story-grid">
            <article className="story-panel reveal" ref={addToRefs}>
              <h3>Brand Articulation</h3>
              <p>
                We translate identity into imagery that feels authentic on web,
                social, and premium campaigns. The goal is clear recognition
                and emotional pull.
              </p>
            </article>
            <article className="story-panel reveal" ref={addToRefs}>
              <h3>Attention to Signature</h3>
              <p>
                Our direction balances bold hero moments with subtle signature
                details, so every gallery can perform as a complete brand
                experience.
              </p>
            </article>
          </div>
        </section>

        <section id="services" className="section-block services">
          <div className="section-heading reveal" ref={addToRefs}>
            <p className="eyebrow">What We Do</p>
            <h2>Production built for attention and retention.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service} className="service-card reveal" ref={addToRefs}>
                <p>{service}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="media" className="section-block media">
          <div className="section-heading reveal" ref={addToRefs}>
            <p className="eyebrow">Media Vault</p>
            <h2>Explore live galleries and inspiration references.</h2>
          </div>
          <div className="media-grid">
            {mediaLinks.map((item) => (
              <article key={item.title} className={`media-card ${item.tone} reveal`} ref={addToRefs}>
                <p className="card-kicker">Featured Link</p>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <a href={item.href} target="_blank" rel="noreferrer">
                  Open Link
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block process">
          <div className="section-heading reveal" ref={addToRefs}>
            <p className="eyebrow">Process</p>
            <h2>Simple workflow. Premium output.</h2>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article key={step.title} className="process-card reveal" ref={addToRefs}>
                <p className="step-number">0{index + 1}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="contact section-block">
        <p className="eyebrow">Contact</p>
        <h2>Ready to create something unforgettable?</h2>
        <p>
          Reach out for bookings, campaigns, or private event documentation.
        </p>
        <div className="hero-actions">
          <a className="btn btn-light" href="mailto:asol.media21@gmail.com">
            asol.media21@gmail.com
          </a>
          <a className="btn btn-outline" href="tel:+254703968743">
            +254 (703) 968-743
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App

