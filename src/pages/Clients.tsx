import ClientLogoGrid from '../components/clients/ClientLogoGrid'

const clientTestimonials = [
  {
    quote:
      'Asol Media handled our event coverage with professionalism, calm coordination, and a strong eye for detail from start to finish.',
    name: 'Communications Lead',
    organisation: 'Public Institution',
  },
  {
    quote:
      'The team understood the importance of the occasion and delivered visuals that felt dignified, clear, and true to the moment.',
    name: 'Programme Coordinator',
    organisation: 'Development Organisation',
  },
  {
    quote:
      'They were reliable on the ground, easy to work with, and the final coverage reflected exactly the standard we needed.',
    name: 'Corporate Affairs Manager',
    organisation: 'Private Sector Client',
  },
]

export default function Clients() {
  return (
    <>
      <section id="clients" className="section clients">
        <div className="container">
          <div className="section-header center">
            <h2>Trusted across public and private institutions</h2>
          </div>

          <ClientLogoGrid />

          <div className="section-header center">
            <span className="eyebrow">Client Reviews</span>
            <h2>What clients say about working with us</h2>
          </div>

          <div className="testimonials" aria-label="Client testimonials">
            {clientTestimonials.map((testimonial) => (
              <article className="testimonial" key={`${testimonial.name}-${testimonial.organisation}`}>
                <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" aria-hidden="true">
                    {testimonial.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <div className="testimonial-info">
                    <label>{testimonial.name}</label>
                    <span>{testimonial.organisation}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
