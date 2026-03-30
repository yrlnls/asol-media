export default function About() {
  const servicePillars = [
    { title: 'Capture', detail: 'Photography, film, and aerial coverage' },
    { title: 'Broadcast', detail: 'Livestreams and hybrid event production' },
    { title: 'Finish', detail: 'Editing, grading, and delivery' },
  ]

  const values = [
    { symbol: '', name: 'Precision' },
    { symbol: '', name: 'Integrity' },
    { symbol: '', name: 'Excellence' },
    { symbol: '', name: 'Discretion' },
    { symbol: '', name: 'Cultural Awareness' },
  ]

  return (
    <div className="about-page">
      <section className="section about-compact">
        <div className="container">
          <div className="panel center-panel">
            <span className="eyebrow">ASOL MEDIA</span>
            <h1>Creating Visuals That Connect People</h1>
            <p>
              We make story-first visual work for businesses, families, and communities that want
              to be seen with clarity, care, and beauty.
            </p>
            <div className="about-pillars" aria-label="Core studio pillars">
              {servicePillars.map((pillar) => (
                <article className="about-pillar" key={pillar.title}>
                  <strong>{pillar.title}</strong>
                  <span>{pillar.detail}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">What We Do</span>
            <h2>Professional visuals with a story-first approach.</h2>
            <p>
              End-to-end visuals, from capture to final delivery.
            </p>
          </div>
          <div className="panel">
            <p>
              We plan carefully, shoot intentionally, and finish with polish so the final work feels
              honest, elevated, and easy to share.
            </p>
            <ul className="about-list">
              <li>Professional videography and photography</li>
              <li>Aerial media and film production</li>
              <li>Livestreaming and content creation</li>
              <li>Post-production and finishing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Our Philosophy</span>
            <h2>Natural, honest, and meaningful storytelling.</h2>
          </div>
          <div className="grid-3">
            <article className="strength-card">
              <h3>Our Philosophy</h3>
              <p>
                The best visuals do not feel forced. They feel honest, composed, and alive.
              </p>
            </article>
            <article className="strength-card">
              <h3>Our Mission</h3>
              <p>
                To help people communicate, connect, and preserve what matters.
              </p>
            </article>
            <article className="strength-card">
              <h3>Our Vision</h3>
              <p>
                To be the trusted visual partner for meaningful work and memory.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Our Values</span>
            <h2>The principles that guide every project.</h2>
          </div>
          <div className="panel">
            <div className="about-value-grid" aria-label="Studio values">
              {values.map((value) => (
                <article className="about-value-card" key={value.name}>
                  <span>{value.symbol}</span>
                  <strong>{value.name}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Why Choose Asol Media</span>
            <h2>People trust us because we care about the story.</h2>
            <p>
              We listen first, move with care, and deliver work that feels intentional.
            </p>
          </div>
          <div className="panel">
            <p>
              Quality, reliability, and story sense stay present from brief to delivery.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
