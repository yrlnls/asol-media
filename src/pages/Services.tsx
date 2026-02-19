import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'

type ServiceCta = {
  label: string
  to: string
  variant?: 'primary' | 'secondary'
}

type Service = {
  id: string
  title: string
  image: {
    src: string
    alt: string
  }
  // summary: string
  intro: string
  highlights: string[]
  whatWeDo: string[]
  whyChooseUs: string
  ctas: ServiceCta[]
}

const services: Service[] = [
  {
    id: 'videography',
    title: 'Videography',
    image: {
      src: '/videography.jpg',
      alt: 'Videography production in progress',
    },
    // summary: 'Story-first event and brand films that feel as real as the moment.',
    intro:
      'Think about the last event you attended - the nervous excitement backstage, the speeches, the laughter, the music. Now imagine being able to relive every moment exactly as it felt. That is what we do. Every video tells a story, not just records it.',
    highlights: ['Event videography', 'Brand and promotional videos', 'Documentary-style storytelling'],
    whatWeDo: [
      'Event videography (corporate events, conferences, weddings, launches)',
      'Brand and promotional videos',
      'Interviews and testimonial videos',
      'Documentary-style storytelling',
      'Highlight and recap videos',
    ],
    whyChooseUs:
      'We take time to understand why your video matters. Our calm presence, attention to detail, and careful editing make sure every video feels professional, personal, and memorable.',
    ctas: [
      { label: 'Book Videography', to: '/contact', variant: 'primary' },
      { label: 'Request a Quote', to: '/contact', variant: 'secondary' },
    ],
  },
  {
    id: 'photography',
    title: 'Photography',
    image: {
      src: '/photography.jpg',
      alt: 'Photography coverage at an event',
    },
    // summary: 'Natural, candid photography that preserves the energy of real moments.',
    intro:
      'A photo is not just a picture - it is a memory frozen in time. Think of a product launch, a smiling team at a conference, or candid moments at an event. That is what we capture, naturally, without staging or interrupting the flow.',
    highlights: ['Event photography', 'Corporate portraits and headshots', 'Brand and product photography'],
    whatWeDo: [
      'Event photography',
      'Corporate portraits and professional headshots',
      'Brand and product photography',
      'Lifestyle and documentary photography',
      'Professional photo editing and retouching',
    ],
    whyChooseUs:
      'We know when to step in and when to stay back. Our photography captures moments as they happen, making each image feel real, authentic, and shareable.',
    ctas: [
      { label: 'Book Photography', to: '/contact', variant: 'primary' },
      { label: 'View Gallery', to: '/work', variant: 'secondary' },
    ],
  },
  {
    id: 'aerial',
    title: 'Aerial Photography and Videography',
    image: {
      src: '/aerial-photo-video.jpg',
      alt: 'Aerial photography and videography',
    },
    // summary: 'A higher perspective with safe, cinematic drone capture.',
    intro:
      'Some stories need a higher perspective - like capturing a wedding venue, corporate retreat, or property from above. Our drones give your story scale, perspective, and cinematic impact.',
    highlights: ['Aerial photography', 'Aerial videography', 'Cinematic aerial shots'],
    whatWeDo: [
      'Aerial photography',
      'Aerial videography',
      'Event aerial coverage',
      'Location and property visuals',
      'Cinematic aerial shots for films and promotions',
    ],
    whyChooseUs:
      'We plan every drone flight with purpose. Each shot is safe, smooth, and designed to complement the story on the ground. The result is stunning visuals that elevate your story.',
    ctas: [{ label: 'Book Aerial Services', to: '/contact', variant: 'primary' }],
  },
  {
    id: 'film-production',
    title: 'Film Production',
    image: {
      src: '/film-production.jpg',
      alt: 'Film production setup',
    },
    // summary: 'Cinematic short films and documentaries built for emotion and meaning.',
    intro:
      'Film is powerful. Remember the last short film or documentary that stayed with you? That feeling of journey, emotion, and meaning - that is what we create. We turn stories into cinematic experiences.',
    highlights: ['Short films', 'Documentary films', 'Script-to-screen production support'],
    whatWeDo: [
      'Short films',
      'Documentary films',
      'Corporate films',
      'Concept-based storytelling',
      'Script-to-screen production support',
    ],
    whyChooseUs:
      'We treat film as a process, not a rush. From idea development to final edit, we work closely to make sure every story feels authentic, polished, and engaging.',
    ctas: [{ label: 'Discuss a Film Project', to: '/contact', variant: 'primary' }],
  },
  {
    id: 'livestreaming',
    title: 'Livestreaming and Event Broadcasting',
    image: {
      src: '/live-event.jpg',
      alt: 'Live event broadcasting setup',
    },
    // summary: 'Reliable livestreams that keep your audience fully connected.',
    intro:
      'Ever watched a live event online and felt frustrated because the video kept cutting out? We make sure that never happens. From conferences to community events, our livestreams make viewers feel like they are right there.',
    highlights: ['Conferences and seminars', 'Hybrid events', 'Event recording for future use'],
    whatWeDo: [
      'Conferences and seminars',
      'Corporate and institutional livestreams',
      'Church and community events',
      'Hybrid events (physical and online)',
      'Event recording for future use',
    ],
    whyChooseUs:
      'We prepare thoroughly, test everything in advance, and monitor live broadcasts to ensure smooth, clear, and reliable coverage.',
    ctas: [{ label: 'Book Livestreaming', to: '/contact', variant: 'primary' }],
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    image: {
      src: '/content-creation.jpg',
      alt: 'Content creation for brands',
    },
    // summary: 'Scroll-stopping social content built for relevance and consistency.',
    intro:
      'Think of the last social media post that made you stop scrolling - maybe it was funny, inspiring, or beautiful. That is the kind of content we create: natural, engaging, and memorable.',
    highlights: ['Social media videos and reels', 'Campaign-based content', 'Monthly content packages'],
    whatWeDo: [
      'Social media videos and reels',
      'Promotional photos and videos',
      'Campaign-based content',
      'Monthly content creation packages',
      'Brand storytelling visuals',
    ],
    whyChooseUs:
      'We focus on relevance and consistency. Every piece of content is made to connect with your audience naturally, helping your brand stay visible and engaging.',
    ctas: [{ label: 'Start Content Creation', to: '/contact', variant: 'primary' }],
  },
  {
    id: 'post-production',
    title: 'Video Editing and Post-Production',
    image: {
      src: '/video-editing.jpg',
      alt: 'Video editing and post-production',
    },
    // summary: 'Polished edits that keep the story clear, fluid, and engaging.',
    intro:
      'Raw footage is like an uncut story. We take it and turn it into something polished, coherent, and captivating. Every edit is made with intention.',
    highlights: ['Video editing', 'Color correction and grading', 'Sound enhancement'],
    whatWeDo: [
      'Video editing',
      'Color correction and grading',
      'Sound enhancement',
      'Subtitles and captions',
      'Platform-specific formatting',
    ],
    whyChooseUs:
      'We edit with care. Every cut, color, and sound tweak is done to make your story flow naturally and keep viewers engaged.',
    ctas: [{ label: 'Request Editing Services', to: '/contact', variant: 'primary' }],
  },
  {
    id: 'event-packages',
    title: 'Event Media Packages',
    image: {
      src: '/event-support.jpg',
      alt: 'Event media support crew',
    },
    // summary: 'One team, complete event coverage, zero stress.',
    intro:
      'Imagine handing your entire event to one team and knowing every photo, video, and livestream will be covered. That is what our packages do - complete coverage without the stress.',
    highlights: ['Combined video and photo', 'Photography and livestreaming', 'Custom packages'],
    whatWeDo: [
      'Combined videography and photography',
      'Photography and livestreaming packages',
      'Full event coverage including aerial visuals',
      'Custom packages for specific event needs',
    ],
    whyChooseUs:
      'One team means smoother coordination, consistent quality, and peace of mind for you.',
    ctas: [{ label: 'View Event Packages', to: '/contact', variant: 'primary' }],
  },
  {
    id: 'corporate-media',
    title: 'Corporate and Institutional Media Services',
    image: {
      src: '/corporate-institution.jpg',
      alt: 'Corporate and institutional media',
    },
    // summary: 'Professional media that communicates organizational stories with clarity.',
    intro:
      'Every organization has stories worth sharing - from milestone projects to training programs. We help tell those stories clearly and professionally, making them resonate with the right audience.',
    highlights: ['Corporate profile videos', 'Training and internal comms', 'Professional media coverage'],
    whatWeDo: [
      'Corporate profile videos',
      'Institutional documentation',
      'Training and internal communication videos',
      'Professional photography and media coverage',
    ],
    whyChooseUs:
      'We combine creativity with professionalism. We deliver media that aligns with your brand and communicates your message effectively.',
    ctas: [{ label: 'Contact Us for Corporate Services', to: '/contact', variant: 'primary' }],
  },
  {
    id: 'media-crew',
    title: 'Media Crew and Event Support',
    image: {
      src: '/event-support.jpg',
      alt: 'Event media support crew',
    },
    // summary: 'Dependable crews that keep production smooth under pressure.',
    intro:
      'Behind every great shoot is a team that makes it look effortless. Our crew has seen live events, last-minute changes, and technical challenges - and knows how to stay calm and capture the perfect shot.',
    highlights: ['Camera operators', 'Drone operators', 'Livestream technicians'],
    whatWeDo: [
      'Camera operators',
      'Drone operators',
      'Video editors',
      'Livestream technicians',
      'Event media coordination',
    ],
    whyChooseUs:
      'Dependable, adaptable, and professional - our team ensures your media project runs smoothly from start to finish.',
    ctas: [{ label: 'Hire Media Crew', to: '/contact', variant: 'primary' }],
  },
]

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const activeService = services.find((service) => service.id === activeServiceId) ?? null

  useEffect(() => {
    if (activeServiceId !== null) return
    const trigger = triggerRef.current
    if (trigger && document.contains(trigger)) {
      trigger.focus()
    }
  }, [activeServiceId])

  const openService = (serviceId: string, event: MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = event.currentTarget
    setActiveServiceId(serviceId)
  }

  const closeService = () => setActiveServiceId(null)

  return (
    <>
      {/* <section className="page-hero services-hero">
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <span className="eyebrow">ASOL MEDIA - SERVICES</span>
            <h1>Creative Media That Tells Stories, Builds Brands, and Captures Moments</h1>
            <p>
              At Asol Media, we do not just create content - we create experiences. We listen, plan,
              and produce media that feels real, engaging, and meaningful. From events to brands and
              institutions, our services are designed to communicate clearly, connect with audiences,
              and leave lasting impressions.
            </p>
            <div className="page-hero-actions">
              <Link className="btn btn-primary" to="/contact">Request a Quote</Link>
              <Link className="btn btn-secondary" to="/work">View Our Work</Link>
            </div>
          </div>
          <div className="page-hero-media">
            <div className="media-shell">
              <div className="media-placeholder">Placeholder</div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="services" className="section services">
        <div className="container">
          <div className="section-header center">
            {/* <span className="eyebrow">Our Services</span> */}
            {/* <h2>Everything you need to capture, craft, and communicate</h2> */}
            {/* <p>
              See the essentials here. Click a service to view the full scope, process, and next steps.
            </p> */}
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article key={service.id} className="service-card">
                <div className="service-card-media">
                  <img
                    src={service.image.src}
                    alt={service.image.alt}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </div>
                <h3>{service.title}</h3>
                {/* <p className="service-card-summary">{service.summary}</p> */}
                <ul className="service-card-highlights">
                  {service.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="service-card-footer">
                  <button
                    type="button"
                    className="service-card-cta"
                    onClick={(event) => openService(service.id, event)}
                    aria-haspopup="dialog"
                    aria-expanded={activeServiceId === service.id}
                  >
                    View Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={Boolean(activeService)}
        onClose={closeService}
        title={activeService?.title}
        actions={
          activeService && (
            <>
              {activeService.ctas.map((cta) => (
                <Link
                  key={cta.label}
                  className={`btn ${cta.variant === 'secondary' ? 'btn-secondary' : 'btn-primary'}`}
                  to={cta.to}
                >
                  {cta.label}
                </Link>
              ))}
            </>
          )
        }
      >
        {activeService && (
          <div className="service-modal-content">
            <p className="service-modal-lede">{activeService.intro}</p>
            <div className="service-modal-grid">
              <div className="service-modal-section">
                <h4>What We Do</h4>
                <ul className="modal-list">
                  {activeService.whatWeDo.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="service-modal-section">
                <h4>Why Choose Us</h4>
                <p>{activeService.whyChooseUs}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}
