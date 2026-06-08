import ClientLogoGrid from '../clients/ClientLogoGrid'
import { trackButtonClick } from '../../lib/analytics'
import { useNavigate } from 'react-router-dom'

export default function ClientsShowcase() {
  const navigate = useNavigate()

  const openClientsPage = () => {
    trackButtonClick('View Client Stories', '/clients', 'clients-showcase')
    navigate('/clients')
  }

  return (
    <section id="clients-showcase" className="clients-showcase">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">Trusted Company</span>
          <h2>Chosen when the work needs to feel composed, credible, and human.</h2>
          <p>
            Our clients span government institutions, international NGOs, corporations, cultural leaders, and private families.
          </p>
        </div>

        <ClientLogoGrid />

        <div className="clients-showcase-footer">
          <p className="clients-showcase-note">
            Explore client stories, testimonials, and the relationships behind the work.
          </p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={openClientsPage}
          >
            View Client Page
          </button>
        </div>
      </div>
    </section>
  )
}
