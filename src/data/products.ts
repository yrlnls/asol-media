export type Product = {
  id: string
  category: string
  name: string
  description: string
  price: string
  availability: string
  image: { src: string; alt: string }
}

export const products: Product[] = [
  {
    id: 'featured-print',
    category: 'Fine Art Print',
    name: 'Signature Wall Print (24x36")',
    description: 'High-quality matte print mounted and ready to hang.',
    price: 'KES 7,500',
    availability: 'Made to order',
    image: { src: '/shop1.jpeg', alt: 'Framed wall print sample' },
  },
  {
    id: 'wedding-photo-album',
    category: 'Album',
    name: 'Wedding Photo Album (40 pages)',
    description: 'Layflat premium album with retouched images and protective case.',
    price: 'KES 18,500',
    availability: 'Custom finish',
    image: { src: '/wedding.webp', alt: 'Wedding couple album preview' },
  },
  {
    id: 'drone-shots',
    category: 'Aerial',
    name: 'Drone Shots + Edits',
    description: 'Aerial photography + 10 edited stills and raw clips delivered.',
    price: 'KES 12,500',
    availability: 'Weather dependent',
    image: { src: '/aerial-photo-video.webp', alt: 'Aerial drone over venue' },
  },
]
