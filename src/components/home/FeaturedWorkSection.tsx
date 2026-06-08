import { Link } from 'react-router-dom'
import ImageWithFallback from '../ImageWithFallback'
import { workGalleryImages } from '../../data/workGalleries'
import { trackButtonClick } from '../../lib/analytics'

const featuredCategories = [
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    description: 'Conferences, launches, and high-stakes institutional moments',
  },
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Love stories told with grace and cinematic care',
  },
  {
    id: 'government-media',
    title: 'Government & Public',
    description: 'Institutional moments documented with dignity',
  },
]

export default function FeaturedWorkSection() {
  return (
    <section id="featured-work" className="featured-work">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Selected Work</span>
          <h2>Proof before promises.</h2>
          <p>
            Start with the work itself: public events, private ceremonies, and institutional stories shaped with care from brief to final frame.
          </p>
        </div>

        <div className="featured-work-grid">
          {featuredCategories.map((category) => {
            const categoryImages = workGalleryImages[category.id]?.images || []
            const featuredImage = categoryImages[0]

            return (
              <Link
                key={category.id}
                to={`/work/${category.id}`}
                className="featured-work-card"
                onClick={() =>
                  trackButtonClick(`View ${category.title}`, `/work/${category.id}`, 'featured-work')
                }
              >
                <div className="featured-work-image">
                  {featuredImage && (
                    <ImageWithFallback
                      src={featuredImage.src}
                      alt={featuredImage.alt}
                      className="featured-work-img"
                    />
                  )}
                  <div className="featured-work-overlay" />
                </div>
                <div className="featured-work-content">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <span className="featured-work-cta">View story →</span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="featured-work-footer">
          <Link
            to="/work"
            className="btn btn-secondary"
            onClick={() => trackButtonClick('View All Work', '/work', 'featured-work')}
          >
            Explore the Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
