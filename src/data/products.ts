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
    id: 'event-highlight-film',
    category: 'Film',
    name: 'Event Highlight Film (3-5 mins)',
    description: 'Cinematic recap with licensed music and color grading.',
    price: 'KES 24,000',
    availability: 'Booking required',
    image: { src: '/videography.webp', alt: 'Videography setup at event' },
  },
  {
    id: 'drone-session',
    category: 'Aerial',
    name: 'Drone Session (Up to 1 hour)',
    description: 'Aerial photography + 10 edited stills and raw clips delivered.',
    price: 'KES 12,500',
    availability: 'Weather dependent',
    image: { src: '/aerial-photo-video.webp', alt: 'Aerial drone over venue' },
  },
  {
    id: 'portrait-mini',
    category: 'Portrait',
    name: 'Portrait Mini Session',
    description: '45-minute on-location shoot with 12 edited portraits.',
    price: 'KES 9,000',
    availability: 'Limited weekly slots',
    image: { src: '/photography.webp', alt: 'Portrait photography lighting' },
  },
  {
    id: 'corporate-package',
    category: 'Corporate',
    name: 'Corporate Launch Coverage',
    description: 'Photo + video team for up to 4 hours, next-day highlights.',
    price: 'KES 38,000',
    availability: 'Pre-production call included',
    image: { src: '/corporate-institution.webp', alt: 'Corporate launch coverage' },
  },
  {
    id: 'livestream-kit',
    category: 'Livestream',
    name: 'Livestream Kit (Single Cam)',
    description: 'Single-camera live feed with overlays, streaming to your platform.',
    price: 'KES 16,000',
    availability: 'Crew scheduled on request',
    image: { src: '/live-event.webp', alt: 'Livestream camera setup' },
  },
]
