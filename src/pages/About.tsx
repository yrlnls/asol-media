import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <span className="eyebrow">Who We Are</span>
            <h1>Visual narratives built for institutions that matter.</h1>
            <p>
              Asol Media blends documentary authenticity with cinematic precision to help institutions
              communicate with clarity, trust, and authority.
            </p>
            <div className="page-hero-actions">
              <Link className="btn btn-primary" to="/contact">Start a Project</Link>
              <Link className="btn btn-secondary" to="/work">View Case Studies</Link>
            </div>
          </div>
          <div className="page-hero-media">
            <div className="media-shell">
              <div className="media-placeholder">Placeholder</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content panel">
              <span className="eyebrow">Our Approach</span>
              <h2>Strategic storytelling engineered for impact.</h2>
              <p>
                Asol Media was founded on a simple premise: institutions serving the public good deserve
                visual communications as sophisticated as their mission.
              </p>
              <p>
                We align narrative, production, and stakeholder needs to craft films and media that elevate
                credibility while moving audiences to action.
              </p>
              <p>
                Our team brings together expertise from journalism, film production, and strategic
                communications to deliver work that resonates across cultures and decision-makers.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">150+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Institutional Clients</div>
              </div>
              <div className="stat">
                <div className="stat-number">8</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="stat">
                <div className="stat-number">12</div>
                <div className="stat-label">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
