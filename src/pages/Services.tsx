import { Link } from 'react-router-dom'

const serviceDivisions = [
  {
    title: 'Institutional & Government Media',
    description: 'Strategic visual communications for government bodies, parastatals, and public institutions.',
    services: ['Policy communication films', 'Annual report documentaries', 'Public engagement campaigns', 'Event coverage and live capture'],
  },
  {
    title: 'Corporate Media Production',
    description: 'High-end visual content for corporations, NGOs, and private sector organizations.',
    services: ['Brand films and repositions', 'Executive interviews', 'Investor and stakeholder media', 'Product and facility showcases'],
  },
  {
    title: 'Aerial & Drone Operations',
    description: 'Licensed aerial cinematography for large-scale projects and panoramic documentation.',
    services: ['Infrastructure aerial coverage', 'High-safety environments', 'Mapping and progress tracking', 'Cinematic aerial sequences'],
  },
]

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <span className="eyebrow">Our Expertise</span>
            <h1>Structured for impact. Executed with precision.</h1>
            <p>Three specialized divisions serving distinct institutional needs across narrative, production, and aerial capture.</p>
            <div className="page-hero-actions">
              <Link className="btn btn-primary" to="/contact">Request Capabilities</Link>
              <Link className="btn btn-secondary" to="/work">See Proof of Work</Link>
            </div>
          </div>
          <div className="page-hero-media">
            <div className="media-shell">
              <div className="media-placeholder">Placeholder</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Divisions</span>
            <h2>Focused teams with a unified standard</h2>
            <p>Each division is built to solve a specific institutional challenge with speed and discipline.</p>
          </div>

          {serviceDivisions.map((division, index) => (
            <div key={index} className="service-division">
              <div className="division-header">
                <span className="label">Division {String(index + 1).padStart(2, '0')}</span>
                <h3>{division.title}</h3>
                <p>{division.description}</p>
                <div className="media-shell small division-visual">
                  <div className="media-placeholder">Placeholder</div>
                </div>
              </div>
              <div className="service-list">
                {division.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="service-item">
                    <h4>{service}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
