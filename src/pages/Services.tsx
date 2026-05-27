import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import ServiceModalActions from '../components/services/ServiceModalActions'
import ServiceModalContent from '../components/services/ServiceModalContent'
import { services } from '../data/services'
import { trackButtonClick } from '../lib/analytics'

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const serviceSignals = [
    { value: '5', label: 'featured disciplines' },
    { value: 'Story', label: 'before spectacle' },
    { value: 'End-to-end', label: 'capture to delivery' },
  ]

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
    const service = services.find((s) => s.id === serviceId)
    if (service) {
      trackButtonClick(`View Service: ${service.title}`, undefined, 'services-modal')
    }
  }

  const closeService = () => setActiveServiceId(null)

  const disciplines = [
    {
      id: 'film-production',
      title: 'Cinematic Film Production',
      description:
        'Feature-quality films for organizations, campaigns, and cultural documentation. From concept through colour grade — built for screens that command attention.',
      image: services.find((service) => service.id === 'film-production')?.image.src ?? '',
    },
    {
      id: 'photography',
      title: 'Luxury Photography',
      description:
        'Editorial and documentary photography with the stillness of a master and the eye of a poet. Corporate identity, events, portraiture, and heritage documentation.',
      image: services.find((service) => service.id === 'photography')?.image.src ?? '',
    },
    {
      id: 'livestreaming',
      title: 'Professional Livestream',
      description:
        'Multi-camera broadcast production for conferences, summits, galas, and global audiences — with the technical precision of television and the soul of live performance.',
      image: services.find((service) => service.id === 'livestreaming')?.image.src ?? '',
    },
    {
      id: 'event-packages',
      title: 'Executive & Memorial Coverage',
      description:
        'Quiet authority in high-stakes moments. State ceremonies, leadership transitions, memorial tributes — handled with the gravity they deserve.',
      image: services.find((service) => service.id === 'event-packages')?.image.src ?? '',
    },
    {
      id: 'corporate-media',
      title: 'Organizational Storytelling',
      description:
        'Impact films and documentary narratives for NGOs, governments, and international bodies — translating complex missions into stories the world can feel.',
      image: services.find((service) => service.id === 'corporate-media')?.image.src ?? '',
    },
  ]

  return (
    <>
      <section id="services" className="section services">
        <div className="container">
          <div className="section-header services-intro">
            <span className="eyebrow">What we do</span>
            <h2>
              Five disciplines.
              <br />
              One obsession.
            </h2>
            <p>
              High-touch production built to look cinematic, feel human, and land clearly.
            </p>
          </div>

          <div className="services-signal-strip" aria-label="Services overview">
            {serviceSignals.map((signal) => (
              <article className="services-signal-card" key={signal.label}>
                <strong>{signal.value}</strong>
                <span>{signal.label}</span>
              </article>
            ))}
          </div>

          <div className="disciplines-grid">
            {disciplines.map((discipline) => (
              <button
                key={discipline.id}
                type="button"
                className="discipline-card"
                onClick={(event) => openService(discipline.id, event)}
                style={
                  discipline.image
                    ? { backgroundImage: `url(${discipline.image})` }
                    : undefined
                }
              >
                <h3>{discipline.title}</h3>
                <p>{discipline.description}</p>
              </button>
            ))}
            <Link to="/services" className="discipline-card discipline-card-cta">
              <p className="discipline-quote">
                “Every frame we make carries the weight of what it means to be remembered.”
              </p>
              <span className="discipline-link">View all services →</span>
            </Link>
          </div>
        </div>
      </section>

      <Modal
        isOpen={Boolean(activeService)}
        onClose={closeService}
        title={activeService?.title}
        actions={activeService && <ServiceModalActions service={activeService} />}
      >
        {activeService && <ServiceModalContent service={activeService} />}
      </Modal>
    </>
  )
}
