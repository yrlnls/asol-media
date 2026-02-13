import { Link } from 'react-router-dom'

const clients = [
  'National Government',
  'Corporate Institutions',
  'International NGOs',
  'Financial Services',
  'Infrastructure & Energy',
  'Public Health Agencies',
]

const testimonials = [
  {
    quote: 'Asol Media has transformed how we communicate with our stakeholders.',
    author: 'Hon. Sarah Mitchell',
    role: 'Permanent Secretary, Ministry of Information',
  },
  {
    quote: 'Their discipline on set and clarity in messaging made our launch film a success.',
    author: 'Daniel Mwangi',
    role: 'Director of Communications, State Infrastructure Authority',
  },
]

export default function Clients() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <span className="eyebrow">Our Clients</span>
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
      </section>

      <section id="clients" className="section clients">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Client Sectors</span>
            <h2>Trusted across public and private institutions</h2>
          </div>

          <div className="client-logos">
            {clients.map((client, index) => (
              <div key={index} className="client-logo-item">{client}</div>
            ))}
          </div>

          <div className="testimonials">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <blockquote>"{testimonial.quote}"</blockquote>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{testimonial.author.split(' ').map(n => n[0]).join('')}</div>
                  <div className="testimonial-info">
                    <label>{testimonial.author}</label>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
