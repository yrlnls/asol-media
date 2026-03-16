import ImageWithFallback from '../components/ImageWithFallback'
import { products } from '../data/products'

const WHATSAPP_NUMBER = '254703968743'
const BASE_MESSAGE = 'Hey I am interested in this product..'

const whatsappLink = (productName: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${BASE_MESSAGE} ${productName}`)}`

export default function Shop() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner single">
          <div className="page-hero-content">
            <span className="eyebrow">Shop</span>
            <h1>Ready-to-book products and packages</h1>
            <p>
              Choose a product, tap buy, and we will continue the conversation on WhatsApp with your
              chosen package pre-filled. Simple, quick, and personal.
            </p>
          </div>
        </div>
      </section>

      <section className="section shop">
        <div className="container">
          <div className="shop-grid">
            {products.map((product) => (
              <article className="shop-card" key={product.id}>
                <div className="shop-media">
                  <ImageWithFallback src={product.image.src} alt={product.image.alt} />
                </div>
                <div className="shop-body">
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
    </>
  )
}
