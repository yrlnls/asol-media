import type { CSSProperties } from 'react'
import ImageWithFallback from '../ImageWithFallback'

type ClientLogo = {
  name: string
  src: string
  scale?: number
}

const clientLogos: ClientLogo[] = [
  {
    name: 'Ministry of Trade',
    src: '/Ministry%20logo.webp',
    scale: 1.2,
  },
  {
    name: 'PBORA',
    src: '/PBORA%20FINAL%20LOGO.webp',
    scale: 1.2,
  },
  {
    name: 'PS',
    src: '/PS%20NO%20BG.webp',
  },
  {
    name: 'Nam-Lolwe',
    src: '/NAM%20LOLWE%20LOGO.webp',
  },
  {
    name: 'Client Logo',
    src: '/1000329968-removebg.webp',
  },
  {
    name: 'Flamingo',
    src: '/FLAMINGO%20GROUP.webp',
  },
  {
    name: 'Immaculate & Adhoch 1',
    src: '/immaculate&adhoch1.jpeg',
  },
  {
    name: ' Danish Refugee Council',
    src: '/drc.png',
  }

]

export default function ClientLogoGrid() {
  return (
    <div className="client-logos">
      {clientLogos.map((logo) => (
        <div key={logo.name} className="client-logo-item">
          <ImageWithFallback
            src={logo.src}
            alt={logo.name}
            style={{ '--logo-scale': logo.scale ?? 1 } as CSSProperties}
          />
        </div>
      ))}
    </div>
  )
}
