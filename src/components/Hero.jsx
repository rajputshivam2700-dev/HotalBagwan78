import React from 'react'
import exteriorImg from '../assets/images/exterior_main.jpg'

export default function Hero() {
  return (
    <section
      className="hero-showcase"
      id="home"
      style={{ backgroundImage: `url(${exteriorImg})` }}
    >
      <div className="hero-backdrop-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content-box">
          <div className="hero-royal-badge">
            <i className="fa-solid fa-crown text-gold"></i>
            <span>Hotel Baghban Palace • 5-Star Hospitality Experience</span>
          </div>

          <h1 className="hero-main-title">
            Welcome to <br />
            <span className="gold-shimmer-text">Hotel Baghban Palace</span>
          </h1>

          <p className="hero-sub-description">
            A magnificent destination blending luxury accommodations, pure vegetarian fine dining,
            a modern cafe, and celebratory banquet lawns on the Main Highway.
          </p>

          <div className="hero-buttons-row">
            <a href="#booking" className="btn btn-gold btn-lg">
              <i className="fa-solid fa-calendar-days"></i> Reserve Your Stay
            </a>
            <a href="#restaurant" className="btn btn-outline-white btn-lg">
              <i className="fa-solid fa-utensils"></i> Explore Restaurant
            </a>
            <a href="#rooms" className="btn btn-outline-gold btn-lg">
              <i className="fa-solid fa-bed"></i> View Luxury Rooms
            </a>
          </div>

          <div className="hero-stats-ribbon">
            {[
              { icon: 'fa-star', title: '4.3 / 5 Rating', sub: '280+ Happy Guests' },
              { icon: 'fa-leaf', title: '100% Pure Veg', sub: 'Restaurant & Lawn Cafe' },
              { icon: 'fa-square-parking', title: 'Spacious Parking', sub: '24/7 CCTV & Security' },
              { icon: 'fa-champagne-glasses', title: 'Grand Banquet', sub: '500+ Guests Capacity' },
            ].map((stat, i) => (
              <div className="stat-cell" key={i}>
                <div className="stat-icon"><i className={`fa-solid ${stat.icon} text-gold`}></i></div>
                <div className="stat-info">
                  <strong>{stat.title}</strong>
                  <span>{stat.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

