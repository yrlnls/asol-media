import { Suspense, useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import ImageWithFallback from './ImageWithFallback'
import { getCloudinaryImageUrl } from '../lib/cloudinary'

export default function Layout() {
  const [menuOpenedOnPath, setMenuOpenedOnPath] = useState<string | null>(null)
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement | null>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const menuOpen = menuOpenedOnPath === location.pathname

  const closeMenu = () => setMenuOpenedOnPath(null)

  const toggleMenu = () => {
    setMenuOpenedOnPath((currentPath) =>
      currentPath === location.pathname ? null : location.pathname,
    )
  }

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    if (menuOpenedOnPath && menuOpenedOnPath !== location.pathname) {
      setMenuOpenedOnPath(null)
    }
  }, [location.pathname, menuOpenedOnPath])

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return
    }

    const root = document.documentElement
    let currentX = window.innerWidth / 2
    let currentY = window.innerHeight / 2
    let targetX = currentX
    let targetY = currentY
    let frame: number | null = null

    const update = () => {
      currentX += (targetX - currentX) * 0.18
      currentY += (targetY - currentY) * 0.18
      root.style.setProperty('--cursor-x', `${currentX}px`)
      root.style.setProperty('--cursor-y', `${currentY}px`)
      frame = window.requestAnimationFrame(update)
    }

    const handleMove = (event: MouseEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      root.style.setProperty('--cursor-visible', '1')

      const target = event.target as HTMLElement | null
      const isInteractive = Boolean(
        target?.closest?.('a, button, .btn, [role="button"], input, select, textarea'),
      )
      document.body.classList.toggle('cursor-active', isInteractive)

      if (frame === null) {
        frame = window.requestAnimationFrame(update)
      }
    }

    const handleOut = (event: MouseEvent) => {
      if (!event.relatedTarget) {
        root.style.setProperty('--cursor-visible', '0')
        document.body.classList.remove('cursor-active')
      }
    }

    root.style.setProperty('--cursor-x', `${currentX}px`)
    root.style.setProperty('--cursor-y', `${currentY}px`)
    root.style.setProperty('--cursor-visible', '0')

    document.addEventListener('mousemove', handleMove, { passive: true })
    document.addEventListener('mouseout', handleOut)

    return () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame)
      }
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseout', handleOut)
      document.body.classList.remove('cursor-active')
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    const menuEl = menuRef.current
    if (!menuEl) {
      return
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null

    const getFocusable = () =>
      Array.from(
        menuEl.querySelectorAll<HTMLElement>(
          'a, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null)

    const focusables = getFocusable()
    const first = focusables[0]

    first?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMenuOpenedOnPath(null)
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const currentFocusables = getFocusable()
      if (currentFocusables.length === 0) {
        return
      }

      const currentFirst = currentFocusables[0]
      const currentLast = currentFocusables[currentFocusables.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (event.shiftKey) {
        if (active === currentFirst || active === menuEl) {
          event.preventDefault()
          currentLast?.focus()
        }
      } else if (active === currentLast) {
        event.preventDefault()
        currentFirst?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      const previousFocus = previousFocusRef.current
      if (previousFocus && document.contains(previousFocus)) {
        previousFocus.focus()
      }
    }
  }, [menuOpen])

  const navItems = [
    { to: '/about', label: 'About', className: 'nav-link' },
    { to: '/services', label: 'Services', className: 'nav-link' },
    { to: '/work', label: 'Work', className: 'nav-link' },
    { to: '/clients', label: 'Clients', className: 'nav-link' },
    { to: '/shop', label: 'Shop', className: 'nav-link' },
    { to: '/insights', label: 'Insights', className: 'nav-link' },
    { to: '/contact', label: 'Get in Touch', className: 'nav-cta' },
  ]

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="logo">
            ASOL <span className="text-accent">MEDIA</span>
          </Link>
          <nav className="nav nav-desktop" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `${item.className}${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button
            className={`mobile-toggle ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <button
        type="button"
        className={`mobile-menu-backdrop ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
        tabIndex={-1}
        ref={menuRef}
      >
        <nav className="nav mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `${item.className}${isActive ? ' active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <main id="main-content" tabIndex={-1}>
        <Suspense
          fallback={(
            <div className="page-loader" role="status" aria-live="polite">
              Loading content...
            </div>
          )}
        >
          <Outlet />
        </Suspense>
      </main>

      <footer className="footer">
        <div className="container footer-minimal">
          <div className="footer-brand">
            <Link to="/" className="logo">
              ASOL <span className="text-accent">MEDIA</span>
            </Link>
            <div className="footer-copy">© 2026 Asol Media. All rights reserved.</div>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/asol-media🎥-b3641a30a?utm_source=share_via&utm_content=profile&utm_medium=member_android" aria-label="LinkedIn" className="social-link social-linkedin" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.6-1.9 3.9 0 4.6 2.5 4.6 5.8V21h-4v-5.2c0-1.3 0-3-1.9-3-1.9 0-2.2 1.4-2.2 2.9V21h-4V9z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/_asolmedia/?hl=en" aria-label="Instagram" className="social-link social-instagram" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zm6.1-1.7a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@ASOLMEDIA" aria-label="YouTube" className="social-link social-youtube" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23 12.2c0-2-.2-3.4-.5-4.1-.3-.8-1.1-1.4-2-1.6C18.8 6 12 6 12 6s-6.8 0-8.5.5c-.9.2-1.7.8-2 1.6C1.2 8.8 1 10.2 1 12.2s.2 3.4.5 4.1c.3.8 1.1 1.4 2 1.6 1.7.5 8.5.5 8.5.5s6.8 0 8.5-.5c.9-.2 1.7-.8 2-1.6.3-.7.5-2.1.5-4.1zM10 15.3v-6.6l6 3.3-6 3.3z" />
              </svg>
            </a>
            <a href="https://asolmediaproduction.passgallery.com/professional?_gl=1*d8rkkl*_gcl_au*MTY2NjA5MjY4Ny4xNzc1OTYyNjU5LjE5Njg1OTk1OTkuMTc3NjQxNTg4NS4xNzc2NDE1ODg0#%7Cclient%7Cclientgalleries" aria-label="Pass Gallery" className="social-link social-passgallery" target="_blank" rel="noopener">
              <ImageWithFallback
                src={getCloudinaryImageUrl('/passgallery_logo.webp')}
                alt="Pass Gallery"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </a>
          </div>
        </div>
      </footer>

      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
    </div>
  )
}
