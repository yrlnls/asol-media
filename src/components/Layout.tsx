import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="site-shell">
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="logo">ASOL MEDIA</Link>
          <nav className="nav">
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/work" className="nav-link">Work</Link>
            <Link to="/clients" className="nav-link">Clients</Link>
            <Link to="/insights" className="nav-link">Insights</Link>
            <Link to="/contact" className="nav-cta">Get in Touch</Link>
          </nav>
          <button className="mobile-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-minimal">
          <div className="footer-brand">
            <Link to="/" className="logo">ASOL MEDIA</Link>
            <div className="footer-copy">© 2026 General Exhibit. All rights reserved.</div>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn" className="social-link social-linkedin">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.6-1.9 3.9 0 4.6 2.5 4.6 5.8V21h-4v-5.2c0-1.3 0-3-1.9-3-1.9 0-2.2 1.4-2.2 2.9V21h-4V9z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="social-link social-instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zm6.1-1.7a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="social-link social-youtube">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23 12.2c0-2-.2-3.4-.5-4.1-.3-.8-1.1-1.4-2-1.6C18.8 6 12 6 12 6s-6.8 0-8.5.5c-.9.2-1.7.8-2 1.6C1.2 8.8 1 10.2 1 12.2s.2 3.4.5 4.1c.3.8 1.1 1.4 2 1.6 1.7.5 8.5.5 8.5.5s6.8 0 8.5-.5c.9-.2 1.7-.8 2-1.6.3-.7.5-2.1.5-4.1zM10 15.3v-6.6l6 3.3-6 3.3z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
