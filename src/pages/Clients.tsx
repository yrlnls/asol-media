// import { Link } from 'react-router-dom'
import ClientLogoGrid from '../components/clients/ClientLogoGrid'

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

          <ClientLogoGrid />
        </div>
      </section>
    </>
  )
}
