import { useState, type FormEvent } from 'react'
import Modal from '../components/Modal'

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <span className="eyebrow">Get in Touch</span>
            <h1>Strategic inquiries and project briefs.</h1>
            <p>
              Partner with Asol Media to craft institutional stories with clarity, authority, and cinematic
              detail. Share a brief or open a structured planning template.
            </p>
            <div className="page-hero-actions">
              <button className="btn btn-primary" type="button" onClick={() => setIsModalOpen(true)}>
                Open Project Planner
              </button>
              <a className="btn btn-secondary" href="mailto:asol.media21@gmail.com">
                Email Us Directly
              </a>
            </div>
          </div>
          <div className="page-hero-media">
            <div className="media-shell">
              <div className="media-placeholder">Placeholder</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <div className="panel">
                <span className="eyebrow">Engagement</span>
                <h2>Tell us what you need. We will map the path.</h2>
                <p>
                  Share your objectives, timelines, and audiences. Our team will respond with a tailored
                  production approach and a clear deliverable roadmap.
                </p>
              </div>
              <div className="panel">
                <span className="eyebrow">Direct Lines</span>
                <div className="contact-meta">
                  <span>Email: asol.media21@gmail.com</span>
                  <span>Phone: +254 (703) 968-743</span>
                  <span>Location: Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            <div className="form-panel">
              <form className="form-grid" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="contact-name">Name</label>
                  <input id="contact-name" className="input" placeholder="Full name" />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email">Email</label>
                  <input id="contact-email" className="input" placeholder="Work email" />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-org">Organization</label>
                  <input id="contact-org" className="input" placeholder="Institution or company" />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-brief">Project summary</label>
                  <textarea
                    id="contact-brief"
                    className="textarea"
                    rows={6}
                    placeholder="Brief overview of your objectives and timeline"
                  />
                </div>
                <div className="form-actions">
                  <button className="btn btn-primary" type="submit">
                    Send Inquiry
                  </button>
                  <button className="btn btn-secondary" type="button" onClick={() => setIsModalOpen(true)}>
                    View Planner
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Project Planner"
        actions={
          <>
            <button className="btn btn-ghost" type="button" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
            <a className="btn btn-primary" href="mailto:asol.media21@gmail.com">
              Send a Brief
            </a>
          </>
        }
      >
        <p>
          Use this quick outline to frame your request. It helps us respond faster with the right scope,
          crew, and delivery plan.
        </p>
        <ul className="modal-list">
          <li>Project objective and audience</li>
          <li>Key message or narrative arc</li>
          <li>Preferred formats (film, photography, aerial)</li>
          <li>Timeline, launch dates, and locations</li>
          <li>Internal stakeholders and approvals</li>
        </ul>
      </Modal>
    </>
  )
}
