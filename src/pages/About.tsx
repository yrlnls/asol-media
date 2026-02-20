import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="about-page">
      <section className="section about-compact">
        <div className="container">
          <div className="panel center-panel">
            <span className="eyebrow">Why We Create</span>
            <h1>We believe strong stories deserve thoughtful execution.</h1>
            <p>
              Founded in 2020 in Nairobi, Kenya, ASOL MEDIA blends artistry, technical precision, and
              cultural context to create visual stories that feel human, intentional, and lasting.
            </p>
            <div className="page-hero-actions">
              <Link className="btn btn-primary" to="/contact">Start a Project</Link>
              <Link className="btn btn-secondary" to="/services">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel about-profile">
            <div>
              <span className="eyebrow">Meet Donald Miseda</span>
              <h2>Founder & Lead Creative Director</h2>
              <p>
                Donald is a Nairobi-based creative leader specializing in filmmaking, photography, and
                visual storytelling. He founded ASOL MEDIA in 2020 to deliver world-class production
                with a deep focus on client outcomes.
              </p>
            </div>
            <div className="media-shell small">
              <div className="media-placeholder">Founder Portrait</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Awards</span>
            <h2>Recognition for excellence.</h2>
          </div>
          <div className="panel">
            <ul className="about-list">
              <li>2023 Best Producer — Nairobi Diocese Youth Ministry Film Competition</li>
              <li>Best Cinematography</li>
              <li>Best Editing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section about-team">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Meet Our Team</span>
            <h2>Small team. Big results.</h2>
            <p>Experienced specialists who keep every production smooth and story-first.</p>
          </div>
          <div className="grid-3">
            <article className="team-card">
              <h3>Denis Adhoch</h3>
              <p className="team-role">Project Manager</p>
              <p>Denis keeps projects on time and communication clear from start to finish.</p>
            </article>
            <article className="team-card">
              <h3>Sarah Natasha</h3>
              <p className="team-role">Lead Graphics Design</p>
              <p>Natasha delivers captivating graphics that complement our visual narratives.</p>
            </article>
            <article className="team-card">
              <h3>Joshua Orwa</h3>
              <p className="team-role">Head Livestream Expert</p>
              <p>Joshua ensures high-quality live broadcasts that engage audiences anywhere.</p>
            </article>
          </div>
          <p className="team-note">
            Supported by a trusted crew of videographers, photographers, and production specialists.
          </p>
        </div>
      </section>

    </div>
  )
}
