import emailjs from '@emailjs/browser'
import { type ChangeEvent, type FormEvent, useState } from 'react'
import { services } from '../data/services'

type ContactFormData = {
  name: string
  organization: string
  email: string
  projectType: string
  droneInterest: boolean
  brief: string
}

const initialFormData: ContactFormData = {
  name: '',
  organization: '',
  email: '',
  projectType: '',
  droneInterest: false,
  brief: '',
}

const readEnv = (key: 'VITE_EMAILJS_SERVICE_ID' | 'VITE_EMAILJS_TEMPLATE_ID' | 'VITE_EMAILJS_PUBLIC_KEY') => {
  const value = import.meta.env[key]

  return typeof value === 'string' ? value.trim() : ''
}

const getErrorMessage = (error: unknown) => {
  if (typeof error === 'object' && error !== null) {
    const text = 'text' in error && typeof error.text === 'string' ? error.text : null
    const status = 'status' in error && typeof error.status === 'number' ? error.status : null

    if (status === 400 && text?.toLowerCase().includes('template id not found')) {
      return 'EmailJS could not find that template ID. Confirm `VITE_EMAILJS_TEMPLATE_ID` matches the template in EmailJS exactly, save the template, then restart the Vite dev server.'
    }

    if (status === 400 && text?.toLowerCase().includes('service id not found')) {
      return 'EmailJS could not find that service ID. Confirm `VITE_EMAILJS_SERVICE_ID` matches your EmailJS service exactly, then restart the Vite dev server.'
    }

    if (text && status) {
      return `EmailJS error ${status}: ${text}`
    }

    if (text) {
      return `EmailJS error: ${text}`
    }
  }

  return 'We could not send your enquiry just now. Please confirm your EmailJS service, template, and public key, then try again.'
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(
    null,
  )

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
      value: 'info@asolmedia.com',
      detail: 'Best for all enquiries',
    },
    {
      icon: '☎',
      label: 'Mobile',
      value: ' +254 703 968743 / +254 748 668421 ',
      detail: 'Call or WhatsApp for urgent enquiries',
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

  const fallbackMailtoHref = (() => {
    const subject = `Website enquiry from ${formData.name || 'a client'}`
    const body = [
      `Name: ${formData.name || 'Not provided'}`,
      `Organization: ${formData.organization || 'Not provided'}`,
      `Email: ${formData.email || 'Not provided'}`,
      `Project Type: ${
        services.find((service) => service.id === formData.projectType)?.title || formData.projectType || 'Not provided'
      }`,
      `Interested in Drone School: ${formData.droneInterest ? 'Yes' : 'No'}`,
      '',
      'Project Brief:',
      formData.brief || 'Not provided',
    ].join('\n')

    return `mailto:info@asolmedia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  })()

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, type, value } = event.target
    const checked = event.target instanceof HTMLInputElement ? event.target.checked : false

    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const serviceId = readEnv('VITE_EMAILJS_SERVICE_ID')
    const templateId = readEnv('VITE_EMAILJS_TEMPLATE_ID')
    const publicKey = readEnv('VITE_EMAILJS_PUBLIC_KEY')

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus({
        type: 'error',
        message:
          'Email service is not configured yet. Add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`, then restart the Vite server.',
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      emailjs.init({ publicKey })

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          organization: formData.organization || 'Not provided',
          reply_to: formData.email,
          project_type:
            services.find((service) => service.id === formData.projectType)?.title || formData.projectType,
          drone_interest: formData.droneInterest ? 'Yes' : 'No',
          message: formData.brief,
        },
        { publicKey },
      )

      setSubmitStatus({
        type: 'success',
        message: 'Your enquiry has been sent. We will be in touch soon.',
      })
      setFormData(initialFormData)
    } catch (error) {
      console.error('EmailJS send failed', error)
      setSubmitStatus({
        type: 'error',
        message: getErrorMessage(error),
      })
    } finally {
      setIsSubmitting(false)
    }
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
                  <input
                    id="contact-name"
                    className="contact-input"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-org">Organization / Company</label>
                  <input
                    id="contact-org"
                    className="contact-input"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Where you work or who you represent"
                    autoComplete="organization"
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    id="contact-email"
                    className="contact-input"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your preferred email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-type">Type of project</label>
                  <select
                    id="contact-type"
                    className="contact-select"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                  >
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
                      name="droneInterest"
                      checked={formData.droneInterest}
                      onChange={handleChange}
                    />
                    <span>I&#39;m interested in Asol Drone School (coming soon).</span>
                  </label>
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-brief">Tell us about your project</label>
                  <textarea
                    id="contact-brief"
                    className="contact-textarea"
                    name="brief"
                    value={formData.brief}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us what you need, when it is happening, and anything important we should know."
                    required
                  />
                </div>
                {submitStatus ? (
                  <>
                    <p
                      className={`contact-form-status contact-form-status-${submitStatus.type}`}
                      role={submitStatus.type === 'error' ? 'alert' : 'status'}
                    >
                      {submitStatus.message}
                    </p>
                    {submitStatus.type === 'error' ? (
                      <a className="contact-mailto-link" href={fallbackMailtoHref}>
                        Send using your email app instead
                      </a>
                    ) : null}
                  </>
                ) : null}
                <button className="contact-submit" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending enquiry...' : 'Send your enquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
