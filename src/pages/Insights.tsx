import { Link } from 'react-router-dom'

const insights = [
  {
    title: 'The Rise of Visual Communication in Government',
    date: 'December 2024',
    category: 'Strategy',
    excerpt:
      'Institutional audiences respond to clarity, pacing, and credibility signals. We break down the visual choices that earn public trust.',
  },
  {
    title: 'Drone Operations in Sensitive Environments',
    date: 'November 2024',
    category: 'Production',
    excerpt:
      'How to build safe, repeatable aerial workflows for high-stakes locations without compromising story or safety.',
  },
  {
    title: 'One-Page Cinematic Experiences That Convert',
    date: 'October 2024',
    category: 'Experience',
    excerpt:
      'A landing journey can feel like a short film: long-scroll pacing, intentional typography, and image-led sections that feel bespoke.',
  },
]

export default function Insights() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <span className="eyebrow">Perspectives</span>
            <h1>Insights on institutional storytelling and visual strategy.</h1>
            <p>Short reads on narrative structure, production discipline, and what builds public trust.</p>
            <div className="page-hero-actions">
              <Link className="btn btn-primary" to="/contact">Discuss a Brief</Link>
              <Link className="btn btn-secondary" to="/work">See Our Work</Link>
            </div>
          </div>
          <div className="page-hero-media">
            <div className="media-shell">
              <div className="media-placeholder">Placeholder</div>
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="section insights">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Insights</span>
            <h2>Thought leadership from our team</h2>
            <p>Designed to help communications leaders sharpen their visual strategy.</p>
          </div>

          <div className="insights-grid">
            {insights.map((insight, index) => (
              <article key={index} className="insight-card">
                <div className="insight-visual">
                  <div className="media-shell small">
                    <div className="media-placeholder">Placeholder</div>
                  </div>
                </div>
                <div className="insight-meta">
                  <span className="insight-category">{insight.category}</span>
                  <span className="insight-date">{insight.date}</span>
                </div>
                <h3>{insight.title}</h3>
                <p>{insight.excerpt}</p>
                <Link to="/contact" className="insight-link">Read more</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
