import { type FormEvent } from 'react'
import { services } from '../data/services'

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <>
      <section id="contact" className="contact-page">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">We&#39;d like to hear from you</span>
              <h1>
                Not every enquiry becomes a project.
                <br />
                Every conversation <span className="text-accent text-accent-italic">matters</span>.
              </h1>
              <p>
                We respond to all serious enquiries within two business days. For time-sensitive productions
                or event coverage, please note your timeline in the message field — we will prioritise
                accordingly.
              </p>
              <p>
                We are based in Nairobi, Kenya, and serve clients across East Africa, the continent, and
                internationally for the right projects.
              </p>
              <div className="contact-callout">
                <span className="contact-callout-label">Coming soon</span>
                <h2>Asol Drone School</h2>
                <p>
                  Interested in training? Tick the Drone School box in the form and mention your goals. We
                  will keep you updated as the school launches.
                </p>
              </div>
              <div className="contact-meta-list">
                <div className="contact-meta-row">
                  <span className="contact-meta-label">Studio</span>
                  <span className="contact-meta-value">
                    Nairobi, Kenya
                    <br />
                    Available by appointment
                  </span>
                </div>
                <div className="contact-meta-row">
                  <span className="contact-meta-label">Email</span>
                  <span className="contact-meta-value">asol.media21@gmail.com</span>
                </div>
                <div className="contact-meta-row">
                  <span className="contact-meta-label">Coverage</span>
                  <span className="contact-meta-value">
                    Kenya · East Africa · International
                    <br />
                    on selected projects
                  </span>
                </div>
                <div className="contact-meta-row">
                  <span className="contact-meta-label">Response</span>
                  <span className="contact-meta-value">Within 24 hours</span>
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              <span className="eyebrow">Begin here</span>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-field">
                  <label htmlFor="contact-name">Your name</label>
                  <input id="contact-name" className="contact-input" placeholder="Full name" />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-org">Organization / Company</label>
                  <input
                    id="contact-org"
                    className="contact-input"
                    placeholder="Where you work or who you represent"
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email">Email address</label>
                  <input id="contact-email" className="contact-input" placeholder="Your preferred email" />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-type">Type of project</label>
                  <select id="contact-type" className="contact-select" defaultValue="">
                    <option value="" disabled>
                      Select a service area
                    </option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="contact-field">
                  <label className="contact-checkbox" htmlFor="contact-drone-interest">
                    <input
                      id="contact-drone-interest"
                      className="contact-checkbox-input"
                      type="checkbox"
                    />
                    <span>I&#39;m interested in Asol Drone School (coming soon).</span>
                  </label>
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-brief">Tell us about your project</label>
                  <textarea
                    id="contact-brief"
                    className="contact-textarea"
                    rows={5}
                    placeholder="What are you trying to communicate, preserve, or share? The more context you give, the better we can serve you."
                  />
                </div>
                <button className="contact-submit" type="submit">
                  Send your enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
