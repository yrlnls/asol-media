import type { Service } from '../../data/services'

type ServiceModalContentProps = {
  service: Service
}

export default function ServiceModalContent({ service }: ServiceModalContentProps) {
  return (
    <div className="service-modal-content">
      <p className="service-modal-lede">{service.intro}</p>
      <div className="service-modal-grid">
        <div className="service-modal-section">
          <h4>What We Do</h4>
          <ul className="modal-list">
            {service.whatWeDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="service-modal-section">
          <h4>Why Choose Us</h4>
          <p>{service.whyChooseUs}</p>
        </div>
      </div>
    </div>
  )
}
