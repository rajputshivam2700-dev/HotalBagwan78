import React, { useState } from 'react'
import restaurantImg from '../assets/images/restaurant_interior.jpg'

const menuItems = [
  { cat: 'starters', name: 'Paneer Tikka Angara', price: '₹ 349', desc: 'Fresh cottage cheese marinated in royal spices, slow-grilled in clay tandoor with bell peppers.' },
  { cat: 'starters', name: 'Crispy Corn & Veg Salt-Pepper', price: '₹ 289', desc: 'Golden fried sweet corn tossed with spring onions, garlic, and fresh ground black pepper.' },
  { cat: 'mains', name: 'Dal Baghban Special', price: '₹ 329', desc: 'Slow-simmered black lentils cooked overnight with white butter, tomatoes, and clotted cream.' },
  { cat: 'mains', name: 'Shahi Paneer Lazeez', price: '₹ 389', desc: 'Velvety cashew nut and tomato gravy simmered with soft paneer cubes and delicate spices.' },
  { cat: 'mains', name: 'Dum Handi Veg Biryani', price: '₹ 369', desc: 'Fragrant long-grain basmati rice cooked on slow flame with saffron, garden veggies, and mint raita.' },
  { cat: 'desserts', name: 'Gulab Jamun with Rabdi', price: '₹ 199', desc: 'Hot melt-in-mouth milk dumplings served over thick chilled saffron rabdi and pistachios.' },
]

const filters = [
  { key: 'all', label: 'All Specialties' },
  { key: 'starters', label: 'Starters & Tandoor' },
  { key: 'mains', label: 'Royal Main Course' },
  { key: 'desserts', label: 'Desserts & Drinks' },
]

export default function Restaurant() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all' ? menuItems : menuItems.filter(m => m.cat === activeFilter)

  return (
    <section className="section restaurant-section" id="restaurant">
      <div className="container">
        <div className="section-title-center">
          <div className="section-tag-pill"><i className="fa-solid fa-utensils"></i> BAGHBAN RASOI & CAFE</div>
          <h2 className="section-heading-serif">Pure Vegetarian Dining & Cafe Lounge</h2>
          <p className="section-sub-lead">
            Enjoy mouth-watering North Indian gravies, tandoori breads, crispy snacks, and beverages in our stylish air-conditioned restaurant.
          </p>
        </div>

        <div className="restaurant-feature-card">
          <div className="rf-media-box">
            <img src={restaurantImg} alt="Hotel Baghban Palace Restaurant & Cafe Real Interior" />
            <div className="rf-badge">
              <i className="fa-solid fa-award"></i> 100% Pure Veg • Hygienic & Ambient
            </div>
          </div>
          <div className="rf-content-box">
            <h3>The Baghban Dining Lounge & Cafe</h3>
            <p className="rf-desc">
              Designed with natural green flora decor, wooden finishes, and comfortable seating, our restaurant
              is the preferred dining destination for families, travelers, and celebrations.
            </p>
            <div className="rf-perks-list">
              <div className="rf-perk"><i className="fa-solid fa-circle-check text-gold"></i> 100% Pure Vegetarian Kitchen</div>
              <div className="rf-perk"><i className="fa-solid fa-clock text-gold"></i> Open Daily: 7:00 AM – 11:30 PM</div>
              <div className="rf-perk"><i className="fa-solid fa-bell-concierge text-gold"></i> Prompt Room Service & Takeaway Available</div>
              <div className="rf-perk"><i className="fa-solid fa-mug-hot text-gold"></i> Freshly Brewed Coffee & Mocktails</div>
            </div>
            <div className="rf-action-row">
              <a href="tel:07947419263" className="btn btn-gold">
                <i className="fa-solid fa-phone"></i> Table Reservation: 07947419263
              </a>
              <a href="https://wa.me/917947419263?text=Hello%20Baghban%20Restaurant,%20I%20want%20to%20reserve%20a%20table." target="_blank" rel="noreferrer" className="btn btn-outline-dark">
                <i className="fa-brands fa-whatsapp text-whatsapp"></i> Menu Inquiry
              </a>
            </div>
          </div>
        </div>

        <div className="menu-tabs-wrapper">
          <div className="menu-filter-btns">
            {filters.map(f => (
              <button
                key={f.key}
                className={`m-filter${activeFilter === f.key ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="menu-cards-showcase">
            {filtered.map((item, i) => (
              <div className="menu-food-item" key={i}>
                <div className="food-top">
                  <span className="diet-symbol veg"><i className="fa-solid fa-circle"></i></span>
                  <h4 className="food-title">{item.name}</h4>
                  <span className="food-price">{item.price}</span>
                </div>
                <p className="food-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

