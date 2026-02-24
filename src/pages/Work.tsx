import { useEffect, useRef, useState, type MouseEvent } from 'react'
import Modal from '../components/Modal'
import ServiceModalActions from '../components/services/ServiceModalActions'
import ServiceModalContent from '../components/services/ServiceModalContent'
import ServicesGrid from '../components/services/ServicesGrid'
import { workCategories } from '../data/workCategories'

export default function Work() {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const activeCategory =
    workCategories.find((category) => category.id === activeCategoryId) ?? null

  useEffect(() => {
    if (activeCategoryId !== null) return
    const trigger = triggerRef.current
    if (trigger && document.contains(trigger)) {
      trigger.focus()
    }
  }, [activeCategoryId])

  const openCategory = (categoryId: string, event: MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = event.currentTarget
    setActiveCategoryId(categoryId)
  }

  const closeCategory = () => setActiveCategoryId(null)

  return (
    <>

      <section id="work" className="section work">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Coverage Areas</span>
            <h2>Event categories we document end-to-end.</h2>
            <p>From public institutions to private celebrations, we tailor coverage to each moment.</p>
          </div>

          <ServicesGrid
            services={workCategories}
            activeServiceId={activeCategoryId}
            onOpen={openCategory}
          />
        </div>
      </section>

      <Modal
        isOpen={Boolean(activeCategory)}
        onClose={closeCategory}
        title={activeCategory?.title}
        actions={activeCategory && <ServiceModalActions service={activeCategory} />}
      >
        {activeCategory && <ServiceModalContent service={activeCategory} />}
      </Modal>
    </>
  )
}
