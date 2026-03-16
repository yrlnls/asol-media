import { Link, useParams } from 'react-router-dom'
import ImageWithFallback from '../components/ImageWithFallback'
import { workCategories } from '../data/workCategories'
import { workGalleryImages } from '../data/workGalleries'

const PASS_GALLERY_URL = 'https://asolmediaproduction.passgallery.com/client'

export default function WorkGallery() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const category = workCategories.find((item) => item.id === categoryId)
  const gallery = categoryId ? workGalleryImages[categoryId] : undefined

  if (!category || !gallery) {
    return (
      <section className="page-hero">
        <div className="page-hero-inner single">
          <div className="page-hero-content">
            <span className="eyebrow">Work Gallery</span>
            <h1>Gallery not found</h1>
            <p>The gallery you are looking for is unavailable. Please pick a category from the work page.</p>
            <div className="page-hero-actions">
              <Link className="btn btn-primary" to="/work">
                Back to Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner single">
          <div className="page-hero-content">
            <span className="eyebrow">Work Gallery</span>
            <h1>{category.title}</h1>
            <p>{category.intro}</p>
            <div className="page-hero-actions">
              <Link className="btn btn-secondary" to="/work">
                Back to Work
              </Link>
              <a
                className="btn btn-primary"
                href={PASS_GALLERY_URL}
                target="_blank"
                rel="noopener"
              >
                View More on Pass Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section work-gallery">
        <div className="container">
          <div className="gallery-grid">
            {gallery.images.map((image) => (
              <figure className="gallery-card" key={image.src}>
                <div className="gallery-media">
                  <ImageWithFallback src={image.src} alt={image.alt} />
                </div>
                <figcaption>{image.alt}</figcaption>
              </figure>
            ))}
          </div>

          <div className="gallery-cta">
            <a className="btn btn-primary" href={PASS_GALLERY_URL} target="_blank" rel="noopener">
              View More on Pass Gallery
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
