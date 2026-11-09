import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { trackButtonClick } from '../lib/analytics'
import { useReveal } from '../lib/useReveal'
import FeaturedWorkSection from '../components/home/FeaturedWorkSection'
import ClientsShowcase from '../components/home/ClientsShowcase'
import ServicesPreview from '../components/home/ServicesPreview'
import ShopHighlight from '../components/home/ShopHighlight'
import InsightsPreview from '../components/home/InsightsPreview'

const heroBackgroundSlides = [
  '/1.mp4',
  '/2.mp4',
  '/3.mp4',
  '/4.mp4',
  '/5.mp4',
  '/6.mp4',
  '/7.mp4',
  '/8.mp4',
  '/9.mp4',
] as const

export default function Home() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [nextSlideIndex, setNextSlideIndex] = useState<number | null>(null)
  const [nextSlideReady, setNextSlideReady] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const heroRef = useRef<HTMLElement | null>(null)
  const heroVideoRef = useRef<HTMLVideoElement | null>(null)
  const transitionPendingRef = useRef(false)
  const failedSlidesRef = useRef(new Set<number>())
  const featuredWorkRef = useReveal(0.1)
  const clientsRef = useReveal(0.1)
  const servicesRef = useReveal(0.1)
  const shopRef = useReveal(0.1)
  const insightsRef = useReveal(0.1)
  
  const heroHighlights = ['Film', 'Photography', 'Livestream', 'Drone']
  const heroStats = [
    { value: '4', label: 'core disciplines' },
    { value: '18+', label: 'field-tested story sets' },
    { value: '1', label: 'strategy-led studio' },
  ]
  const heroProofPoints = [
    'Trusted by public institutions, NGOs, companies, and cultural leaders.',
    'Built for moments where the final image has to carry memory and meaning.',
  ]
  const droneSchoolTracks = [
    { label: 'Flight', detail: 'Practical flying sessions' },
    { label: 'Safety', detail: 'Regulations and planning' },
    { label: 'Story', detail: 'Camera movement and coverage' },
  ]
  const findNextAvailableSlide = useCallback((slideIndex: number, excludedSlideIndex?: number) => {
    for (let offset = 1; offset < heroBackgroundSlides.length; offset += 1) {
      const nextIndex = (slideIndex + offset) % heroBackgroundSlides.length
      if (nextIndex !== excludedSlideIndex && !failedSlidesRef.current.has(nextIndex)) {
        return nextIndex
      }
    }

    return null
  }, [])

  const prepareNextSlide = useCallback((slideIndex = activeSlideIndex) => {
    if (transitionPendingRef.current) {
      return
    }

    const nextIndex = findNextAvailableSlide(slideIndex)
    if (nextIndex === null) {
      console.error('Unable to load any homepage background videos.')
      return
    }

    transitionPendingRef.current = true
    setNextSlideReady(false)
    setNextSlideIndex(nextIndex)
  }, [activeSlideIndex, findNextAvailableSlide])

  const markNextSlideReady = useCallback(() => {
    setNextSlideReady(true)
    setIsTransitioning(true)
  }, [])

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setPrefersReducedMotion(motionPreference.matches)

    motionPreference.addEventListener('change', updateMotionPreference)
    return () => motionPreference.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || !heroRef.current) {
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsHeroVisible(entry.isIntersecting)
    })
    observer.observe(heroRef.current)

    return () => observer.disconnect()
  }, [prefersReducedMotion])

  useEffect(() => {
    const video = heroVideoRef.current
    if (!video || prefersReducedMotion) {
      return
    }

    const updatePlayback = () => {
      if (document.hidden || !isHeroVisible) {
        video.pause()
      } else {
        void video.play().catch((error: unknown) => {
          console.error(`Unable to play homepage background video: ${heroBackgroundSlides[activeSlideIndex]}`, error)
        })
      }
    }

    updatePlayback()
    document.addEventListener('visibilitychange', updatePlayback)
    return () => document.removeEventListener('visibilitychange', updatePlayback)
  }, [activeSlideIndex, isHeroVisible, prefersReducedMotion])

  useEffect(() => {
    if (nextSlideIndex === null || !nextSlideReady) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setActiveSlideIndex(nextSlideIndex)
      setNextSlideIndex(null)
      setNextSlideReady(false)
      setIsTransitioning(false)
      transitionPendingRef.current = false
    }, 1800)

    return () => window.clearTimeout(timeoutId)
  }, [nextSlideIndex, nextSlideReady])

  const renderSlide = (slideIndex: number, layer: 'current' | 'next') => {
    const src = heroBackgroundSlides[slideIndex]
    const isCurrent = layer === 'current'
    const className = [
      'hero-carousel-video',
      isCurrent ? (isTransitioning ? 'is-leaving' : 'is-current') : (isTransitioning ? 'is-entering' : 'is-next'),
    ].join(' ')

    return (
      <video
        key={src}
        ref={isCurrent ? heroVideoRef : undefined}
        className={className}
        src={src}
        autoPlay={!prefersReducedMotion}
        muted
        playsInline
        preload={isCurrent ? 'auto' : 'metadata'}
        onCanPlay={isCurrent ? undefined : (event) => {
          markNextSlideReady()
          if (document.hidden || !isHeroVisible) {
            event.currentTarget.pause()
          }
        }}
        onTimeUpdate={isCurrent ? (event) => {
          const video = event.currentTarget
          if (video.duration - video.currentTime <= 2.5) {
            prepareNextSlide()
          }
        } : undefined}
        onEnded={isCurrent ? () => prepareNextSlide() : undefined}
        onError={() => {
          console.error(`Unable to load homepage background video: ${src}`)
          failedSlidesRef.current.add(slideIndex)

          if (isCurrent) {
            transitionPendingRef.current = false
            prepareNextSlide(slideIndex)
            return
          }

          const nextAvailableSlide = findNextAvailableSlide(slideIndex, activeSlideIndex)
          if (nextAvailableSlide === null) {
            console.error(
              failedSlidesRef.current.has(activeSlideIndex)
                ? 'Unable to load any homepage background videos.'
                : 'Unable to load additional homepage background videos.'
            )
            setNextSlideIndex(null)
            setNextSlideReady(false)
            setIsTransitioning(false)
            transitionPendingRef.current = false
          } else {
            setNextSlideReady(false)
            setNextSlideIndex(nextAvailableSlide)
          }
        }}
      />
    )
  }

  return (
    <>
      <section id="home" className="hero" ref={heroRef}>
        <div className="hero-carousel" aria-hidden="true">
          {renderSlide(activeSlideIndex, 'current')}
          {nextSlideIndex !== null && renderSlide(nextSlideIndex, 'next')}
          <div className="hero-carousel-overlay" />
        </div>
        <div className="hero-inner">
          <div className="hero-content">
            <span className="eyebrow">Strategic Visual Communications</span>
            <h1>
              Premium visual
              <br />
              stories for
              <br />
              moments that
              <br />
              cannot feel
              <br />
              <span className="text-accent text-accent-italic">ordinary.</span>
            </h1>
            <p>
              Asol Media creates cinematic film, photography, livestream, and aerial coverage for institutions, families, and brands with something important to preserve.
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
                onClick={() => trackButtonClick('Explore Signature Work', '/work', 'hero')}
              >Explore Signature Work</Link>
              <Link 
                to="/contact" 
                className="btn btn-secondary"
                onClick={() => trackButtonClick('Plan a Project', '/contact', 'hero')}
              >Plan a Project</Link>
            </div>
            <div className="hero-proof-list" aria-label="Brand proof points">
              {heroProofPoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
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

      {/* New Homepage Sections */}
      <div ref={featuredWorkRef}>
        <FeaturedWorkSection />
      </div>
      <div ref={clientsRef}>
        <ClientsShowcase />
      </div>
      <div ref={servicesRef}>
        <ServicesPreview />
      </div>
      <div ref={shopRef}>
        <ShopHighlight />
      </div>
      <div ref={insightsRef}>
        <InsightsPreview />
      </div>

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
               <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSevBXD-8UOw_xsAmimy4Kbp_c41VGIwEapQ3OUnAmabIRi_2Q/viewform?usp=sharing&ouid=101404145964398270074"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary"
  onClick={() =>
    trackButtonClick(
      'Join the waitlist',
      'https://docs.google.com/forms/d/e/1FAIpQLSevBXD-8UOw_xsAmimy4Kbp_c41VGIwEapQ3OUnAmabIRi_2Q/viewform?usp=sharing&ouid=101404145964398270074',
      'drone-school'
    )
  }
>
  Join the waitlist
</a>
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
    </>
  )
}
