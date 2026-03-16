import { type MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import ServicesGrid from '../components/services/ServicesGrid'
import { workCategories } from '../data/workCategories'

export default function Work() {
  const navigate = useNavigate()

  const openCategory = (categoryId: string, event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget?.blur()
    navigate(`/work/${categoryId}`)
  }

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
            onOpen={openCategory}
          />
        </div>
      </section>
    </>
  )
}
