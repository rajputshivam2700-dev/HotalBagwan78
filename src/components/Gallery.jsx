import React, { useState } from 'react'
import exteriorImg from '../assets/images/exterior_main.jpg'
import restaurantImg from '../assets/images/restaurant_interior.jpg'
import exteriorSideImg from '../assets/images/exterior_side.png'

const galleryItems = [
  { src: exteriorImg, cat: 'hotel', title: 'Hotel Baghban Palace', sub: 'Main Highway Building & Entrance' },
  { src: restaurantImg, cat: 'restaurant', title: 'Baghban Restaurant & Cafe', sub: 'Ambient Green-Themed Dining Lounge' },
  { src: exteriorSideImg, cat: 'hotel', title: 'Hotel Baghban Palace', sub: 'Full Exterior View & Spacious Parking' },
  { src: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=700&q=80', cat: 'rooms', title: 'Super Deluxe Royale', sub: 'Modern AC Interior & Balcony' },
  { src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=700&q=80', cat: 'events', title: 'Royal Banquet Hall', sub: 'Weddings & Grand Functions' },
  { src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=700&q=80', cat: 'rooms', title: 'Presidential Suite', sub: 'Sun Terrace & Luxury Jacuzzi' },
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=700&q=80', cat: 'events', title: 'Celebration Night Lawn', sub: 'Illuminated Fairy Light Decor' },
  { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80', cat: 'hotel', title: 'Lush Green Lawns', sub: 'Botanical Gardens & Walkways' },
]

const tabs = [
  { key: 'all', label: 'All Photos' },
  { key: 'hotel', label: 'Palace Building' },
  { key: 'restaurant', label: 'Restaurant & Cafe' },
  { key: 'rooms', label: 'Rooms & Suites' },
  { key: 'events', label: 'Banquets & Lawns' },
]

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeTab === 'all' ? galleryItems : galleryItems.filter(g => g.cat === activeTab)

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="section-title-center">
          <div className="section-tag-pill"><i className="fa-solid fa-camera"></i> PHOTO SHOWCASE</div>
          <h2 className="section-heading-serif">Glimpses of Hotel Baghban Palace</h2>
          <p className="section-sub-lead">
            Take a visual tour through our grand facade, restaurant & cafe, luxury suites, and event spaces.
          </p>
        </div>

        <div className="gallery-category-tabs">
          {tabs.map(t => (
            <button
              key={t.key}
              className={`g-tab${activeTab === t.key ? ' active' : ''}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="gallery-mosaic-grid">
          {filtered.map((item, i) => (
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

