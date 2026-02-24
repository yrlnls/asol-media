import type { MouseEvent } from 'react'
import type { Service } from '../../data/services'
import ImageWithFallback from '../ImageWithFallback'

type ServiceCardProps = {
  service: Service
  isActive: boolean
  onOpen: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function ServiceCard({ service, isActive, onOpen }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-card-media">
        <ImageWithFallback src={service.image.src} alt={service.image.alt} />
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
          onClick={onOpen}
          aria-haspopup="dialog"
          aria-expanded={isActive}
        >
          View Details
        </button>
      </div>
    </article>
  )
}
