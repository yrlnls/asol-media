import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
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
        title={undefined}
        actions={undefined}
        className={activeCategory ? 'modal-portfolio' : undefined}
      >
        {activeCategory &&
          ((
            <div className="portfolio-request">
              <h3 className="portfolio-request-title">
                Portfolio available on request for <em>qualified engagements</em>.
              </h3>
              <p className="portfolio-request-body">
                We share our work selectively, in conversations where context can accompany the
                content. This protects our clients and ensures the work is understood as intended.
              </p>
              <div className="portfolio-request-actions">
                <Link className="btn btn-primary portfolio-cta" to="/contact">
                  Request Portfolio Access
                </Link>
              </div>
            </div>
          ))}
      </Modal>
    </>
  )
}
