import { type FormEvent } from 'react'
import { services } from '../data/services'

export default function Contact() {
  const quickFacts = [
    {
      icon: '⌂',
      label: 'Studio',
      value: 'Nairobi, Kenya',
      detail: 'Available by appointment',
    },
    {
      icon: '✉',
      label: 'Email',
      value: 'asol.media21@gmail.com',
      detail: 'Best for all enquiries',
    },
    {
      icon: '◎',
      label: 'Coverage',
      value: 'Kenya, East Africa, and international',
      detail: 'Selected projects',
    },
    {
      icon: '↺',
      label: 'Response',
      value: 'Usually within 24 hours',
      detail: 'Within two business days at most',
    },
  ]

  const briefPrompts = [
    'What you need made or covered',
    'Your timeline, date, or deadline',
    'Where the project is happening',
  ]

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
                Let&#39;s make
                <br />
                your next story <span className="text-accent text-accent-italic">clear</span>.
              </h1>
              <p>
                Share the essentials and we&#39;ll guide the next step. For urgent productions or event
                coverage, include your timeline so we can prioritise quickly.
              </p>

              <div className="contact-quick-facts" aria-label="Contact highlights">
                {quickFacts.map((fact) => (
                  <article className="contact-fact-card" key={fact.label}>
                    <span className="contact-fact-icon" aria-hidden="true">
                      {fact.icon}
                    </span>
                    <span className="contact-fact-label">{fact.label}</span>
                    <strong>{fact.value}</strong>
                    <p>{fact.detail}</p>
                  </article>
                ))}
              </div>

              <div className="contact-callout">
                <div className="contact-callout-head">
                  <span className="contact-callout-mark" aria-hidden="true">
                    ✦
                  </span>
                  <span className="contact-callout-label">Coming soon</span>
                </div>
                <h2>Asol Drone School is on the way.</h2>
                <p>
                  Interested in training? Tick the Drone School box and mention your goals. We&#39;ll keep
                  you updated as it launches.
                </p>
              </div>
            </div>

            <div className="contact-form-panel">
              <span className="eyebrow">Begin here</span>
              <div className="contact-form-intro">
                <h2>Send the essentials.</h2>
                <p>Short is fine. A few useful details help us respond faster.</p>
              </div>
              <div className="contact-form-note" aria-label="Helpful details to include">
                {briefPrompts.map((prompt) => (
                  <span key={prompt}>
                    <span aria-hidden="true">+</span>
                    {prompt}
                  </span>
                ))}
              </div>
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
                  <input
                    id="contact-email"
                    className="contact-input"
                    type="email"
                    placeholder="Your preferred email"
                  />
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
                    placeholder="Tell us what you need, when it is happening, and anything important we should know."
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
