import React, { useState } from 'react'
import exteriorImg from '../assets/images/exterior_main.jpg'
import restaurantImg from '../assets/images/restaurant_interior.jpg'
import exteriorSideImg from '../assets/images/exterior_side.png'

const galleryItems = [
  { src: exteriorImg, title: 'Hotel Baghban Palace', sub: 'Main Highway Building & Grand Entrance' },
  { src: restaurantImg, title: 'Baghban Restaurant & Cafe', sub: 'Ambient Pure Veg Dining Lounge' },
  { src: exteriorSideImg, title: 'Hotel Baghban Palace', sub: 'Full Exterior View & Spacious Parking' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="section-title-center">
          <div className="section-tag-pill"><i className="fa-solid fa-camera"></i> PHOTO SHOWCASE</div>
          <h2 className="section-heading-serif">Glimpses of Hotel Baghban Palace</h2>
          <p className="section-sub-lead">
            Take a visual tour through our grand facade, pure vegetarian restaurant & cafe, and spacious premises.
          </p>
        </div>

        <div className="gallery-mosaic-grid">
          {galleryItems.map((item, i) => (
            <div className="g-card" key={i} onClick={() => setLightbox(item)}>
              <img src={item.src} alt={item.title} />
              <div className="g-overlay">
                <i className="fa-solid fa-magnifying-glass-plus"></i>
                <h4>{item.title}</h4>
                <span>{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox-modal" style={{ display: 'flex' }} onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>×</button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} />
            <div className="lightbox-caption">{lightbox.title} — {lightbox.sub}</div>
          </div>
        </div>
      )}
    </section>
  )
}

