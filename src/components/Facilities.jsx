import React from 'react'

const facilities = [
  { icon: 'fa-wifi', title: 'High-Speed 5G Wi-Fi', desc: 'Seamless fiber-optic connectivity available across all rooms, dining halls, and banquet spaces.' },
  { icon: 'fa-square-parking', title: 'Free Valet Parking', desc: 'Spacious on-premises vehicle parking with 24/7 security guards and round-the-clock CCTV cameras.' },
  { icon: 'fa-tree', title: 'Lush Gardens & Lawns', desc: 'Over 2 acres of manicured green lawns, blooming flowers, and evening strolling tracks.' },
  { icon: 'fa-champagne-glasses', title: 'Grand Banquet Hall', desc: 'Fully air-conditioned royal ballroom equipped for weddings, receptions, and corporate meetings (500+ guests).' },
  { icon: 'fa-bell-concierge', title: '24/7 Room Service', desc: 'Round-the-clock room service and friendly concierge ready to cater to your needs anytime.' },
  { icon: 'fa-shield-halved', title: '100% Power Backup', desc: 'Automatic silent generator backup ensuring uninterrupted electricity and AC operation at all times.' },
  { icon: 'fa-car', title: 'Travel & Taxi Desk', desc: 'Convenient airport/railway station pickups and local tour transportation organized by front desk.' },
  { icon: 'fa-utensils', title: 'Catering & DJ Setup', desc: 'Custom culinary catering and event decor solutions tailored for weddings and birthday parties.' },
]

export default function Facilities() {
  return (
    <section className="section facilities-section" id="facilities">
      <div className="container">
        <div className="section-title-center">
          <div className="section-tag-pill"><i className="fa-solid fa-star"></i> PALACE AMENITIES</div>
          <h2 className="section-heading-serif">Comprehensive 5-Star Facilities</h2>
          <p className="section-sub-lead">
            Thoughtfully curated services designed to make your journey restful, safe, and completely hassle-free.
          </p>
        </div>

        <div className="facilities-boxes-grid">
          {facilities.map((fac, i) => (
            <div className="fac-item-card" key={i}>
              <div className="fac-icon-round"><i className={`fa-solid ${fac.icon}`}></i></div>
              <h4>{fac.title}</h4>
              <p>{fac.desc}</p>
            </div>
          ))}
        </div>

        <div className="banquet-luxury-banner">
          <div className="bl-text">
            <h3>Planning a Grand Wedding or Special Celebration?</h3>
            <p>Hotel Baghban Palace offers spacious party lawns and a grand air-conditioned banquet hall with custom catering, DJ sound, and themed stage decorations for over 500+ guests.</p>
          </div>
          <a href="#contact" className="btn btn-gold btn-lg">
            <i className="fa-solid fa-calendar-star"></i> Inquire for Events: 07947419263
          </a>
        </div>
      </div>
    </section>
  )
}

