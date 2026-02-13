import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <span className="eyebrow">Strategic Visual Communications</span>
          <h1>Cinematic storytelling for institutions that shape nations.</h1>
          <p>
            Asol Media is a strategic visual communications firm serving corporate, government, and institutional clients.
          </p>
          <div className="hero-actions">
            <Link to="/work" className="btn btn-primary">View Our Work</Link>
            <Link to="/contact" className="btn btn-secondary">Start a Conversation</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-frame">
            <div className="hero-visual-placeholder">Placeholder</div>
          </div>
        </div>
      </div>
    </section>
  )
}
