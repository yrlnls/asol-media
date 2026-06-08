import { Link } from 'react-router-dom'
import { trackButtonClick } from '../../lib/analytics'

const insights = [
  {
    title: 'Visual Storytelling',
    body: 'Images and film often carry trust, feeling, and identity faster than explanation ever can. Strong visuals do not just look polished. They stay with people.',
  },
  {
    title: 'Behind the Frame',
    body: 'The calmness of the final piece usually comes from careful planning, timing, and team rhythm. What looks effortless on screen is almost always built intentionally.',
  },
  {
    title: 'Culture & Heritage',
    body: 'Documenting ceremonies, traditions, and community memory helps keep identity visible across generations. Cultural work deserves both sensitivity and artistry.',
  },
]

export default function InsightsPreview() {
  return (
    <section id="insights-preview" className="insights-preview">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Perspective</span>
          <h2>Thoughtful visuals begin before the camera is lifted.</h2>
          <p>
            Notes on visual meaning, cultural memory, and the production choices that make stories endure.
          </p>
        </div>

        <div className="insights-preview-grid">
          {insights.map((insight, index) => (
            <article key={insight.title} className="insight-preview-card">
              <div className="insight-number">{index + 1}</div>
              <h3>{insight.title}</h3>
              <p>{insight.body}</p>
            </article>
          ))}
        </div>

        <div className="insights-preview-footer">
          <Link
            to="/insights"
            className="btn btn-secondary"
            onClick={() => trackButtonClick('Read More Insights', '/insights', 'insights-preview')}
          >
            Read the Notes
          </Link>
        </div>
      </div>
    </section>
  )
}
