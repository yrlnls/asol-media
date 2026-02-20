import { Link } from 'react-router-dom'
import type { Service } from '../../data/services'

type ServiceModalActionsProps = {
  service: Service
}

export default function ServiceModalActions({ service }: ServiceModalActionsProps) {
  return (
    <>
      {service.ctas.map((cta) => (
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
