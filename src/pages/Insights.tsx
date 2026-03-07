const insights = [
  {
    title: 'Visual Storytelling',
    body:
      'Visual storytelling is the language people remember long after words are forgotten. Images and videos carry emotion, atmosphere, and meaning in ways that written communication sometimes cannot. In a world where attention moves quickly, a single well-crafted visual can communicate trust, identity, and purpose. At Asol Media, we believe every project should tell a story that connects with people, not just display technical quality.',
  },
  {
    title: 'Behind the Frame',
    body:
      'Every visual project has moments that happen before the camera is switched on. Behind every production are discussions, planning, patience, and creative decisions that shape the final result. What appears effortless on screen is often the outcome of careful preparation and teamwork. Behind the frame is where ideas become structure, and structure becomes story.',
  },
  {
    title: 'Culture & Heritage',
    body:
      'Culture lives through memory, celebration, and shared experience. Documenting traditions, ceremonies, and community moments helps preserve identity for future generations. Visual media plays an important role in protecting stories that connect people to their history and heritage. At Asol Media, we approach cultural documentation with respect, sensitivity, and artistic care.',
  },
  {
    title: 'Visual Strategy for Organizations',
    body:
      'Organizations communicate impact through more than reports and statistics. Professional visual documentation helps institutions share achievements, build public trust, and explain complex work in a simple and accessible way. Strong visual strategy supports communication, advocacy, and organizational storytelling.',
  },
  {
    title: 'Creative Perspective',
    body:
      'Creativity is not only about equipment or technique, it is about seeing stories differently. Visual production is a dialogue between the storyteller and the audience. It requires observation, patience, and intention. At Asol Media, we believe great media should feel natural, meaningful, and emotionally connected to real human experience.',
  },
]

export default function Insights() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner single">
          <div className="page-hero-content">
            <span className="eyebrow">ASOL INSIGHT ARTICLES</span>
            <h1>Director’s Reflection</h1>
            <p className="text-accent text-accent-italic">Seeing Stories Beyond the Frame</p>
            <p>
              At Asol Media, we believe visual storytelling is a quiet art. It is not about noise, but about meaning the
              kind that stays long after the camera stops recording. Every project is approached with patience and
              respect for the moment being documented. Our work is guided by the belief that media should preserve
              authenticity, emotion, and cultural memory while maintaining the highest level of professional quality. We
              do not simply capture images; we capture experiences, stories, and connections that people can return to
              and remember.
            </p>
          </div>
        </div>
      </section>

      <section id="insights" className="section insights">
        <div className="container">
          <div className="insights-grid">
            {insights.map((insight) => (
              <article key={insight.title} className="insight-card">
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
