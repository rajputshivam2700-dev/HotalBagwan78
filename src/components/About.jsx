import React from 'react'
import exteriorImg from '../assets/images/exterior_main.jpg'
import restaurantImg from '../assets/images/restaurant_interior.jpg'

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-flex-grid">
          <div className="about-visuals-col">
            <div className="about-frame-main">
              <img src={exteriorImg} alt="Hotel Baghban Palace Grand Facade" />
              <div className="photo-caption-badge">
                <i className="fa-solid fa-location-dot"></i> Main Building & Highway Entrance
              </div>
            </div>
            <div className="about-frame-secondary">
              <img src={restaurantImg} alt="Hotel Baghban Palace Restaurant & Cafe" />
              <div className="photo-caption-badge">
                <i className="fa-solid fa-utensils"></i> Restaurant & Cafe
              </div>
            </div>
            <div className="about-experience-stamp">
              <span className="stamp-num">15+</span>
              <span className="stamp-lbl">Years of Royal Hospitality</span>
            </div>
          </div>

          <div className="about-content-col">
            <div className="section-tag-pill">
              <i className="fa-solid fa-leaf"></i> ABOUT OUR PALACE
            </div>
            <h2 className="section-heading-serif">
              A Regal Sanctuary for Comfort, <span className="text-gold">Taste & Celebration</span>
            </h2>
            <p className="about-lead-txt">
              <strong>Hotel Baghban Palace</strong> is built on the foundation of timeless Indian hospitality,
              modern comfort, and absolute culinary purity.
            </p>
            <p className="about-body-txt">
              Whether you are on a highway transit, family vacation, business meeting, or planning a dream
              wedding, our multi-story palace offers beautifully furnished AC rooms, an ambient pure
              vegetarian restaurant and cafe, and grand banquet lawns to make every moment unforgettable.
            </p>

            <div className="about-highlights-grid">
              {[
                { icon: 'fa-hotel', title: 'Luxury AC Accommodations', desc: 'Deluxe, Super Deluxe, and Royal Suites with modern smart amenities.' },
                { icon: 'fa-bowl-rice', title: 'Pure Veg Restaurant & Cafe', desc: 'Authentic North Indian, South Indian, Chinese, and Tandoori delicacies.' },
                { icon: 'fa-champagne-glasses', title: 'Grand Banquet & Lawns', desc: 'Spacious venue for weddings, ring ceremonies, and corporate events.' },
                { icon: 'fa-shield-heart', title: '24/7 Dedicated Care', desc: 'Friendly concierge, prompt room service, and secure vehicle parking.' },
              ].map((item, i) => (
                <div className="highlight-item" key={i}>
                  <div className="h-icon"><i className={`fa-solid ${item.icon}`}></i></div>
                  <div className="h-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-cta-row">
              <a href="#rooms" className="btn btn-primary">
                Explore Accommodations <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="#contact" className="btn btn-outline-dark">
                Get Directions & Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

