import type { CSSProperties } from 'react'

type ClientLogo = {
  name: string
  src: string
  scale?: number
}

const clientLogos: ClientLogo[] = [
  {
    name: 'Ministry of Trade',
    src: '/Ministry%20logo.png',
    scale: 1.2,
  },
  {
    name: 'PBORA',
    src: '/PBORA%20FINAL%20LOGO.png',
    scale: 1.2,
  },
  {
    name: 'PS',
    src: '/PS%20NO%20BG.png',
  },
  {
    name: 'Nam-Lolwe',
    src: '/NAM%20LOLWE%20LOGO.PNG',
  },
  {
    name: 'Client Logo',
    src: '/1000329968-removebg.png',
  },
  {
    name: 'Flamingo',
    src: '/FLAMINGO%20GROUP.png',
  }
]

export default function ClientLogoGrid() {
  return (
    <div className="client-logos">
      {clientLogos.map((logo) => (
        <div key={logo.name} className="client-logo-item">
          <img
            src={logo.src}
            alt={logo.name}
            loading="lazy"
            decoding="async"
            style={{ '--logo-scale': logo.scale ?? 1 } as CSSProperties}
          />
        </div>
      ))}
    </div>
  )
}
