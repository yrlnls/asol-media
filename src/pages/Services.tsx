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

      <section id="services" className="section services">
        <div className="container">
          <div className="section-header center">
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
