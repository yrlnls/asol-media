import ImageWithFallback from '../components/ImageWithFallback'
import { products } from '../data/products'

const WHATSAPP_NUMBER = '254703968743'
const BASE_MESSAGE = 'Hey I am interested in this product..'

const collectionDetails = [
  'Captured by Asol Media',
  'Archival fine-art paper',
  'Limited quantities only',
  'Signed & authenticated',
  'Museum-quality production',
]

const collectionSizes = [
  { label: 'Small', dimension: '30 × 45', note: 'cm', cols: 2 },
  { label: 'Medium', dimension: '50 × 75', note: 'cm', cols: 3 },
  { label: 'Large', dimension: '70 × 100', note: 'cm', cols: 4 },
  { label: 'Collector', dimension: '100 × 150', note: 'cm · custom available', cols: 5 },
]

const collectionLogistics = [
  {
    title: 'Delivery',
    description: 'Kenya & international shipping. Every piece leaves carefully packed and handled like the object it is.',
  },
  {
    title: 'Production Time',
    description: '7-14 days from order to dispatch. Some things are worth allowing time for.',
  },
  {
    title: 'Where They Live',
    description: 'Homes. Offices. Galleries. Anywhere a wall deserves more than decoration.',
  },
]

const whatsappLink = (productName: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${BASE_MESSAGE} ${productName}`)}`

export default function Shop() {
  return (
    <div className="shop-page">
      <section className="shop-hero">
        <div className="container shop-shell">
          <div className="shop-hero-copy">
            <h1>
              The Print
              <span> Collection</span>
            </h1>
            <p className="shop-hero-tagline">Own a moment. Frame a perspective.</p>
            <p className="shop-hero-summary">
              Choose a piece or package, tap through to WhatsApp, and we will continue with your
              selected item already filled in.
            </p>
          </div>
        </div>
      </section>

      <section className="shop-story">
        <div className="container shop-shell">
          <div className="shop-divider" />
          <div className="shop-story-grid">
            <p className="shop-lead">
              These are not stock images. They are places we have stood, light we have waited
              for, and landscapes that will never look exactly the same again.
            </p>
            <div className="shop-story-details">
              <div className="shop-inline-divider" />
              <ul className="shop-detail-list">
                {collectionDetails.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="shop-sizes">
            <span className="shop-section-label">Available Sizes</span>
            <div className="shop-size-grid">
              {collectionSizes.map((size) => (
                <article
                  className="shop-size-card"
                  key={size.label}
                  style={{
                    gridColumn: `span ${size.cols}`,
                  }}
                >
                  <span className="shop-size-label">{size.label}</span>
                  <strong>{size.dimension}</strong>
                  <p>{size.note}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="shop-divider" />

          <div className="shop-edition-grid">
            <div className="shop-edition-mark">
              <span>Limited</span>
              <strong>Edition</strong>
            </div>
            <div className="shop-edition-copy">
              <h2>Once it&apos;s gone, it&apos;s gone.</h2>
              <p>
                Selected works are released in limited runs. When an edition closes, it will
                never be reprinted. Each limited piece arrives with a certificate of authenticity
                because some things should stay rare.
              </p>
            </div>
          </div>

          <blockquote className="shop-quote">
            <span className="shop-quote-mark">&ldquo;</span>
            <p>
              Photography allows us to freeze a moment the world will never see again the same
              way. These prints are not just images, they are fragments of journeys, landscapes,
              and perspectives experienced through the lens.
            </p>
            <footer>Founder, Asol Media</footer>
          </blockquote>

          <div className="shop-logistics-grid">
            {collectionLogistics.map((item) => (
              <article className="shop-logistics-card" key={item.title}>
                <span className="shop-section-label">{item.title}</span>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shop-catalog">
        <div className="container shop-shell">
          <div className="shop-catalog-header">
            <div>
              <span className="shop-section-label">Shop Selection</span>
              <h2>Prints, keepsakes, and booked experiences</h2>
            </div>
            <p>
              Choose a piece or package, then continue the conversation on WhatsApp with your
              selected item already filled in.
            </p>
          </div>

          <div className="shop-grid">
            {products.map((product) => (
              <article className="shop-card" key={product.id}>
                <div className="shop-media">
                  <ImageWithFallback src={product.image.src} alt={product.image.alt} />
                </div>
                <div className="shop-body">
                  <div className="shop-card-meta">
                    <span>{product.category}</span>
                    <span>{product.availability}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p className="shop-price">{product.price}</p>
                  <p className="shop-description">{product.description}</p>
                </div>
                <div className="shop-actions">
                  <a
                    className="btn btn-primary"
                    href={whatsappLink(product.name)}
                    target="_blank"
                    rel="noopener"
                  >
                    Buy
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
