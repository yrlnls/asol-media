import type { MouseEvent } from 'react'
import type { Service } from '../../data/services'
import ServiceCard from './ServiceCard'

type ServicesGridProps = {
  services: Service[]
  onOpen: (serviceId: string, event: MouseEvent<HTMLButtonElement>) => void
}

export default function ServicesGrid({ services, onOpen }: ServicesGridProps) {
  return (
    <div className="services-grid">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          onOpen={(event) => onOpen(service.id, event)}
        />
      ))}
    </div>
  )
}
