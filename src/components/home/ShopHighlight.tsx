import { Link } from 'react-router-dom'
import ImageWithFallback from '../ImageWithFallback'
import { products } from '../../data/products'
import { trackButtonClick } from '../../lib/analytics'

export default function ShopHighlight() {
  const featuredProducts = products.slice(0, 3)

  return (
    <section id="shop-highlight" className="shop-highlight">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Collected Work</span>
          <h2>Images that live beyond the event.</h2>
          <p>
            Fine-art prints, albums, and selected visual pieces for homes, offices, and people who want the story to remain present.
          </p>
        </div>

        <div className="shop-highlight-grid">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to="/shop"
              className="shop-highlight-card"
              onClick={() => trackButtonClick(`View ${product.name}`, '/shop', 'shop-highlight')}
            >
              <div className="shop-highlight-image">
                <ImageWithFallback
                  src={product.image.src}
                  alt={product.image.alt}
                  className="shop-image"
                />
                <div className="shop-highlight-overlay" />
              </div>
              <div className="shop-highlight-content">
                <span className="shop-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="shop-description">{product.description}</p>
                <div className="shop-meta">
                  <span className="shop-price">{product.price}</span>
                  <span className="shop-availability">{product.availability}</span>
                </div>
                <span className="shop-preview-cta">View collection →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="shop-highlight-footer">
          <Link
            to="/shop"
            className="btn btn-primary"
            onClick={() => trackButtonClick('Browse Shop', '/shop', 'shop-highlight')}
          >
            Browse the Collection
          </Link>
          <p className="shop-highlight-note">
            A quieter way to keep Asol stories close: selected pieces, produced with the same care as the commission work.
          </p>
        </div>
      </div>
    </section>
  )
}
