// import { Link } from 'react-router-dom'

const clientLogos = [
  {
    name: 'Ministry of Trade',
    src: '/Ministry%20logo.png',
    scale: 1.2,
  },
  {
    name: 'PBORA',
    src: '/PBORA%20FINAL%20LOGO.png',
    scale: 1.2,
  },
  {
    name: 'PS',
    src: '/PS%20NO%20BG.png',
  },
  {
    name: 'Nam Lolwe',
    src: '/NAM%20LOLWE%20LOGO.PNG',
  },
  {
    name: 'Client Logo',
    src: '/1000329968-removebg.png',
  },

]



export default function Clients() {
  return (
    <>
      {/* <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <h1>Institutions that trust us with their most visible stories.</h1>
            <p>We collaborate with public sector, corporate, and NGO leaders who need credibility at scale.</p>
            <div className="page-hero-actions">
              <Link className="btn btn-primary" to="/contact">Start a Conversation</Link>
              <Link className="btn btn-secondary" to="/work">View Case Studies</Link>
            </div>
          </div>
          <div className="page-hero-media">
            <div className="media-shell">
              <div className="media-placeholder">Placeholder</div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="clients" className="section clients">
        <div className="container">
          <div className="section-header center">
            {/* <span className="eyebrow">Our Clients</span> */}
            <h2>Trusted across public and private institutions</h2>
          </div>

          <div className="client-logos">
            {clientLogos.map((logo, index) => (
              <div key={index} className="client-logo-item">
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  decoding="async"
                  style={{ '--logo-scale': logo.scale ?? 1 } as React.CSSProperties}
                />
              </div>
            ))}
          </div>

         
        </div>
      </section>
    </>
  )
}
