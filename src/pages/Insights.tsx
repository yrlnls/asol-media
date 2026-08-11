import ImageWithFallback from '../components/ImageWithFallback'
import { getCloudinaryImageUrl } from '../lib/cloudinary'

const insights = [
  {
    title: 'Visual Storytelling',
    body:
      'Images and film often carry trust, feeling, and identity faster than explanation ever can. Strong visuals do not just look polished. They stay with people.',
  },
  {
    title: 'Behind the Frame',
    body:
      'The calmness of the final piece usually comes from careful planning, timing, and team rhythm. What looks effortless on screen is almost always built intentionally.',
  },
  {
    title: 'Culture & Heritage',
    body:
      'Documenting ceremonies, traditions, and community memory helps keep identity visible across generations. Cultural work deserves both sensitivity and artistry.',
  },
  {
    title: 'Visual Strategy for Organizations',
    body:
      'Organizations need visuals that clarify impact, not just decorate reports. Good documentation helps people understand work, trust it, and share it.',
  },
  {
    title: 'Creative Perspective',
    body:
      'Creativity is not gear alone. It is perspective, patience, and the ability to notice what others pass by. Technique matters, but meaning matters more.',
  },
]

const reflectionPoints = [
  { title: 'Observe', detail: 'Start with context before capture.' },
  { title: 'Compose', detail: 'Shape the frame around what matters.' },
  { title: 'Preserve', detail: 'Make the final work worth returning to.' },
]

export default function Insights() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner insights-hero">
          <div className="page-hero-content">
            <span className="eyebrow">ASOL INSIGHT ARTICLES</span>
            <h1>
              We write because
              <br />
              we think, and we think
              <br />
              so our <span className="text-accent text-accent-italic">work goes deeper</span>.
            </h1>
          </div>
          <div className="page-hero-media insights-hero-media">
            <div className="media-shell insights-hero-shell">
              <ImageWithFallback
                src={getCloudinaryImageUrl('/insights.jpg')}
                alt="Editorial workspace for Asol Media insights"
                className="insights-hero-image"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="section insights">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Director’s Reflection</span>
            <h2>Seeing Stories Beyond the Frame</h2>
            <p>
              Short reflections on how we think about story, memory, culture, and visual meaning.
            </p>
          </div>
          <div className="insights-reflection-strip" aria-label="Editorial principles">
            {reflectionPoints.map((point) => (
              <article className="insight-reflection-card" key={point.title}>
                <strong>{point.title}</strong>
                <span>{point.detail}</span>
              </article>
            ))}
          </div>
          <div className="insights-grid">
            {insights.map((insight) => (
              <article key={insight.title} className="insight-card">
                <div className="insight-card-top">
                </div>
                <h3>{insight.title}</h3>
                <p>{insight.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
