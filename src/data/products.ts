export type Product = {
  id: string
  name: string
  description: string
  price: string
  image: { src: string; alt: string }
}

export const products: Product[] = [
  {
    id: 'featured-print',
    name: 'Signature Wall Print (24x36")',
    description: 'High-quality matte print mounted and ready to hang.',
    price: 'KES 7,500',
    image: { src: '/shop1.jpeg', alt: 'Framed wall print sample' },
  },
  {
    id: 'wedding-photo-album',
    name: 'Wedding Photo Album (40 pages)',
    description: 'Layflat premium album with retouched images and protective case.',
    price: 'KES 18,500',
    image: { src: '/wedding.webp', alt: 'Wedding couple album preview' },
  },
  {
    id: 'event-highlight-film',
    name: 'Event Highlight Film (3-5 mins)',
    description: 'Cinematic recap with licensed music and color grading.',
    price: 'KES 24,000',
    image: { src: '/videography.webp', alt: 'Videography setup at event' },
  },
  {
    id: 'drone-session',
    name: 'Drone Session (Up to 1 hour)',
    description: 'Aerial photography + 10 edited stills and raw clips delivered.',
    price: 'KES 12,500',
    image: { src: '/aerial-photo-video.webp', alt: 'Aerial drone over venue' },
  },
  {
    id: 'portrait-mini',
    name: 'Portrait Mini Session',
    description: '45-minute on-location shoot with 12 edited portraits.',
    price: 'KES 9,000',
    image: { src: '/photography.webp', alt: 'Portrait photography lighting' },
  },
  {
    id: 'corporate-package',
    name: 'Corporate Launch Coverage',
    description: 'Photo + video team for up to 4 hours, next-day highlights.',
    price: 'KES 38,000',
    image: { src: '/corporate-institution.webp', alt: 'Corporate launch coverage' },
  },
  {
    id: 'livestream-kit',
    name: 'Livestream Kit (Single Cam)',
    description: 'Single-camera live feed with overlays, streaming to your platform.',
    price: 'KES 16,000',
    image: { src: '/live-event.webp', alt: 'Livestream camera setup' },
  },
]
