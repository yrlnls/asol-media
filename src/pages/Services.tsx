import { useEffect, useRef, useState, type MouseEvent } from 'react'
import Modal from '../components/Modal'
import ServiceModalActions from '../components/services/ServiceModalActions'
import ServiceModalContent from '../components/services/ServiceModalContent'
import ServicesGrid from '../components/services/ServicesGrid'
import { services } from '../data/services'

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

          <ServicesGrid
            services={services}
            activeServiceId={activeServiceId}
            onOpen={openService}
          />
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
