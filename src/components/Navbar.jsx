import React, { useState, useEffect } from 'react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#rooms', label: 'Our Rooms' },
  { href: '#restaurant', label: 'Restaurant & Cafe' },
  { href: '#facilities', label: 'Facilities' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = document.querySelectorAll('section[id]')
      let current = 'home'
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 100) current = sec.id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`luxury-navbar${scrolled ? ' nav-scrolled' : ''}`} id="mainNavbar">
      <div className="container nav-inner">
        <a href="#home" className="nav-brand" onClick={() => handleNavClick('#home')}>
          <div className="brand-monogram">
            <i className="fa-solid fa-hotel"></i>
          </div>
          <div className="brand-text">
            <span className="brand-main">HOTEL BAGHBAN PALACE</span>
            <span className="brand-sub">LUXURY HOTEL • RESTAURANT • CAFE</span>
          </div>
        </a>

        <nav className={`nav-menu-wrapper${menuOpen ? ' nav-open' : ''}`} id="navMenuWrapper">
          <ul className="nav-links-list">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-item${activeSection === link.href.slice(1) ? ' active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-cta-box">
            <a href="#booking" className="btn btn-gold btn-book-nav" onClick={(e) => { e.preventDefault(); handleNavClick('#booking') }}>
              <i className="fa-solid fa-calendar-check"></i> Book Now
            </a>
          </div>
        </nav>

        <div className="nav-cta-actions">
          <a href="#booking" className="btn btn-gold btn-book-nav desktop-cta" onClick={(e) => { e.preventDefault(); handleNavClick('#booking') }}>
            <i className="fa-solid fa-calendar-check"></i> Book Now
          </a>
          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            id="navHamburger"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

