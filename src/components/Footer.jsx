import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="luxury-footer">
      <div className="container">
        <div className="footer-columns-row">
          <div className="footer-col brand-summary">
            <div className="f-brand">
              <i className="fa-solid fa-hotel text-gold"></i>
              <span>HOTEL BAGHBAN PALACE</span>
            </div>
            <p className="f-tagline">
              A premier destination offering luxury accommodations, pure vegetarian fine dining,
              ambient cafe, and celebration spaces with heartfelt hospitality.
            </p>
            <div className="f-social-icons">
              <a href="#" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://wa.me/917947419263" target="_blank" rel="noreferrer" title="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {[
                ['#home', 'Home'],
                ['#about', 'About Our Palace'],
                ['#rooms', 'Rooms & Suites'],
                ['#restaurant', 'Baghban Restaurant & Cafe'],
                ['#facilities', 'Hotel Amenities'],
                ['#gallery', 'Photo Gallery'],
              ].map(([href, label]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Room Categories</h4>
            <ul>
              {[
                'Deluxe Green View (₹ 2,999)',
                'Super Deluxe Royale (₹ 4,499)',
                'Executive Garden Suite (₹ 6,999)',
                'Presidential Baghban Suite (₹ 10,999)',
                'Online Room Booking',
              ].map((item) => (
                <li key={item}><a href="#rooms">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Desk</h4>
            <p><i className="fa-solid fa-location-dot text-gold"></i> Main Highway Road, Restaurant & Cafe, India</p>
            <p><i className="fa-solid fa-phone text-gold"></i> 07947419263</p>
            <p><i className="fa-solid fa-envelope text-gold"></i> shivamrajput@gmail.com</p>
            <p><i className="fa-solid fa-clock text-gold"></i> 24/7 Front Desk Availability</p>
          </div>
        </div>

        <div className="footer-copyright-bar">
          <p>© {year} Hotel Baghban Palace. All Rights Reserved. Luxury • Comfort • Hospitality.</p>
          <a href="#home" className="scroll-top-link">Back to Top <i className="fa-solid fa-arrow-up"></i></a>
        </div>
      </div>
    </footer>
  )
}

