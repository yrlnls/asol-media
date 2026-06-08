import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import { trackButtonClick } from '../../lib/analytics'

const FEATURED_SERVICES = ['videography', 'photography', 'aerial', 'content-creation']

export default function ServicesPreview() {
  const featuredServices = services.filter((s) => FEATURED_SERVICES.includes(s.id))

  return (
    <section id="services-preview" className="services-preview">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Capabilities</span>
          <h2>One studio for the full visual brief.</h2>
          <p>From planning to production to delivery, our core services are designed to keep complex moments calm, polished, and useful.</p>
        </div>

        <div className="services-preview-grid">
          {featuredServices.map((service) => (
            <Link
              key={service.id}
              to="/services"
              className="service-preview-card"
              onClick={() =>
                trackButtonClick(`Explore ${service.title}`, '/services', 'services-preview')
              }
            >
              <div className="service-preview-icon">
                <span className="service-number">
                  {FEATURED_SERVICES.indexOf(service.id) + 1}
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.intro.substring(0, 120)}...</p>
              <div className="service-preview-highlights">
                {service.highlights.slice(0, 2).map((highlight) => (
                  <span key={highlight} className="highlight-tag">
                    {highlight}
                  </span>
                ))}
              </div>
              <span className="service-preview-cta">Explore capability →</span>
            </Link>
          ))}
        </div>

        <div className="services-preview-footer">
          <Link
            to="/services"
            className="btn btn-primary"
            onClick={() => trackButtonClick('View All Services', '/services', 'services-preview')}
          >
            Build Your Production Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
