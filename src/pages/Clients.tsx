import ClientLogoGrid from '../components/clients/ClientLogoGrid'
import ReviewsSection from '../components/ReviewsSection'

export default function Clients() {
  return (
    <>
      <section id="clients" className="section clients">
        <div className="container">
          <div className="section-header center">
            <h2>Trusted across public and private institutions</h2>
          </div>

          <ClientLogoGrid />
        </div>
      </section>

      <section className="section clients-reviews">
        <div className="container">
          <div className="section-header center clients-reviews-header">
            <span className="eyebrow">Client Reviews</span>
            <h2>What clients say about working with us</h2>
            <p>
              Honest reflections from couples, teams, and institutions we have served.
            </p>
          </div>

          <ReviewsSection embedded showIntro={false} />
        </div>
      </section>
    </>
  )
}
