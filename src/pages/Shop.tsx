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
    icon: 'delivery',
    description: 'Kenya & international shipping. Every piece leaves carefully packed and handled like the object it is.',
  },
  {
    title: 'Production Time',
    icon: 'production',
    description: '5-10 days from order to dispatch. Some things are worth allowing time for.',
  },
  {
    title: 'Where They Live',
    icon: 'spaces',
    description: 'Homes. Offices. Galleries. Anywhere a wall deserves more than decoration.',
  },
]

const shopCarouselImages = [
  { src: '/shop-carousel-1.webp', alt: 'Framed print collection display' },
  { src: '/shop-carousel-2.webp', alt: 'Fine art print styled in an interior space' },
  { src: '/shop-carousel-3.webp', alt: 'Gallery-style print presentation' },
  { src: '/shop-carousel-4.webp', alt: 'Curated wall art arrangement from the print collection' },
]

type LogisticsIconKey = (typeof collectionLogistics)[number]['icon']

function LogisticsIcon({ type }: { type: LogisticsIconKey }) {
  if (type === 'delivery') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <path
          d="M12 19h26v24H12zM38 27h10l8 9v7H38zM20 45a4 4 0 1 0 0 .1zM46 45a4 4 0 1 0 0 .1z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === 'production') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <circle
          cx="32"
          cy="32"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.9"
        />
        <path
          d="M32 21v12l8 5M32 10v4M32 50v4M54 32h-4M14 32h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path
        d="M14 50V28l18-14 18 14v22M24 50V36h16v14M20 28h24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const whatsappLink = (productName: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${BASE_MESSAGE} ${productName}`)}`

export default function Shop() {
  return (
    <div className="shop-page">
      <section className="shop-hero">
        <div className="container shop-shell">
          <div className="shop-hero-grid">
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

            <div className="shop-hero-gallery" aria-label="Shop collection highlights">
              <div className="shop-hero-gallery-main">
                <ImageWithFallback
                  src={shopCarouselImages[0].src}
                  alt={shopCarouselImages[0].alt}
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, 38vw"
                />
              </div>
              <div className="shop-hero-gallery-stack">
                {shopCarouselImages.slice(1).map((image) => (
                  <div className="shop-hero-gallery-card" key={image.src}>
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      fetchPriority="low"
                      sizes="(max-width: 768px) 33vw, 16vw"
                    />
                  </div>
                ))}
              </div>
            </div>
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
                <div className="shop-logistics-icon" aria-hidden="true">
                  <LogisticsIcon type={item.icon} />
                </div>
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
