import { Link } from 'react-router-dom'

const caseStudies = [
  {
    client: 'Ministry of Trade',
    title: 'National Export Initiative Campaign',
    year: '2024',
    objective: "Showcase export potential to international investors",
    approach: 'Cinematic documentary style highlighting success stories',
    outcome: '2M+ views, featured at trade summit, increased investor inquiries by 40%',
  },
  {
    client: 'Kenya Airways',
    title: 'Corporate Reimagined',
    year: '2023',
    objective: 'Position the airline as the pride of African aviation',
    approach: 'Premium brand film combining heritage with innovation',
    outcome: 'Award-winning campaign and improved brand perception',
  },
]

export default function Work() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <span className="eyebrow">Selected Work</span>
            <h1>Case studies demonstrating measurable impact.</h1>
            <p>Strategic visual solutions for complex institutional challenges across public and corporate sectors.</p>
            <div className="page-hero-actions">
              <Link className="btn btn-primary" to="/contact">Discuss a Project</Link>
              <Link className="btn btn-secondary" to="/insights">View Insights</Link>
            </div>
          </div>
          <div className="page-hero-media">
            <div className="media-shell">
              <div className="media-placeholder">Placeholder</div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section work">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Case Studies</span>
            <h2>Evidence of credibility and outcomes</h2>
            <p>Each engagement is built on strategy, disciplined production, and measurable results.</p>
          </div>

          <div className="case-studies">
            {caseStudies.map((study, index) => (
              <article key={index} className="case-study">
                <div className="case-study-visual">
                  <div className="media-shell small">
                    <div className="media-placeholder">{study.client}</div>
                  </div>
                </div>
                <div className="case-study-content">
                  <span className="case-study-label">Case Study</span>
                  <h3>{study.title}</h3>
                  <div className="case-study-meta">
                    <div className="meta-item">
                      <label>Client</label>
                      <span>{study.client}</span>
                    </div>
                    <div className="meta-item">
                      <label>Year</label>
                      <span>{study.year}</span>
                    </div>
                    <div className="meta-item">
                      <label>Objective</label>
                      <span>{study.objective}</span>
                    </div>
                    <div className="meta-item">
                      <label>Approach</label>
                      <span>{study.approach}</span>
                    </div>
                  </div>
                  <p className="case-study-outcome">
                    <strong>Outcome:</strong> {study.outcome}
                  </p>
                  <Link to="/contact" className="case-study-link">
                    Discuss similar project
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
