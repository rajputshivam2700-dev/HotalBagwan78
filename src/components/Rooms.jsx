import React from 'react'

const WA = '917947419263'

const rooms = [
  {
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=700&q=80',
    ribbon: 'Popular Choice',
    ribbonClass: '',
    price: '2,999',
    name: 'Deluxe Green View Room',
    desc: 'Cozy, modern room with serene exterior garden views, climate AC, and high-speed fiber Wi-Fi.',
    specs: [
      { icon: 'fa-bed', text: '1 Queen Bed' },
      { icon: 'fa-users', text: 'Max 2 Guests' },
      { icon: 'fa-snowflake', text: 'Climate AC' },
      { icon: 'fa-wifi', text: 'Free 5G Wi-Fi' },
    ],
    roomKey: 'Deluxe Room',
    rate: 2999,
    waText: 'Deluxe%20Green%20View%20Room%20(%E2%82%B92%2C999%2Fnight)',
  },
  {
    img: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=700&q=80',
    ribbon: 'Most Booked',
    ribbonClass: 'gold-ribbon',
    price: '4,499',
    name: 'Super Deluxe Royale',
    desc: 'Spacious royal room featuring a private balcony, luxury bathtub, and complimentary morning breakfast.',
    specs: [
      { icon: 'fa-bed', text: '1 King Bed' },
      { icon: 'fa-mountain-sun', text: 'Private Balcony' },
      { icon: 'fa-bath', text: 'Luxury Bath' },
      { icon: 'fa-utensils', text: 'Free Breakfast' },
    ],
    roomKey: 'Super Deluxe',
    rate: 4499,
    waText: 'Super%20Deluxe%20Royale%20(%E2%82%B94%2C499%2Fnight)',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=700&q=80',
    ribbon: 'Executive Suite',
    ribbonClass: '',
    price: '6,999',
    name: 'Executive Garden Suite',
    desc: 'Expansive suite with master bedroom, separate salon living room, and scenic 180° panorama views.',
    specs: [
      { icon: 'fa-couch', text: 'Separate Living Room' },
      { icon: 'fa-users', text: 'Up to 4 Guests' },
      { icon: 'fa-tv', text: '55" Smart TV' },
      { icon: 'fa-utensils', text: 'Breakfast & Tea' },
    ],
    roomKey: 'Garden View Suite',
    rate: 6999,
    waText: 'Executive%20Garden%20Suite%20(%E2%82%B96%2C999%2Fnight)',
  },
  {
    img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=700&q=80',
    ribbon: 'Royal Signature',
    ribbonClass: 'gold-ribbon',
    price: '10,999',
    name: 'Presidential Baghban Suite',
    desc: 'The pinnacle of luxury with private sun terrace, personal jacuzzi, and round-the-clock butler service.',
    specs: [
      { icon: 'fa-hot-tub-person', text: 'Private Jacuzzi' },
      { icon: 'fa-panorama', text: 'Sun Terrace' },
      { icon: 'fa-bell-concierge', text: 'Butler Service' },
      { icon: 'fa-crown', text: 'VIP Check-in' },
    ],
    roomKey: 'Presidential Suite',
    rate: 10999,
    waText: 'Presidential%20Baghban%20Suite%20(%E2%82%B910%2C999%2Fnight)',
  },
]

export default function Rooms() {
  const handleBookNow = (roomKey, rate) => {
    window.dispatchEvent(new CustomEvent('selectRoom', { detail: { roomType: roomKey } }))
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section rooms-section" id="rooms">
      <div className="container">
        <div className="section-title-center">
          <div className="section-tag-pill"><i className="fa-solid fa-bed"></i> LUXURY ROOMS & SUITES</div>
          <h2 className="section-heading-serif">Choose Your Ideal Stay</h2>
          <p className="section-sub-lead">
            Elegantly designed rooms featuring plush beds, high-speed Wi-Fi, climate control, and scenic views.
          </p>
        </div>

        <div className="rooms-cards-grid">
          {rooms.map((room, i) => (
            <div className={`luxury-room-card${room.featured ? ' featured-card' : ''}`} key={i}>
              <div className="room-media">
                <img src={room.img} alt={room.name} />
                <span className={`room-ribbon${room.ribbonClass ? ' ' + room.ribbonClass : ''}`}>{room.ribbon}</span>
              </div>
              <div className="room-details">
                <h3 className="room-name">{room.name}</h3>
                <div className="room-actions-bar">
                  <button className="btn btn-gold" onClick={() => handleBookNow(room.roomKey, room.rate)}>
                    <i className="fa-solid fa-bookmark"></i> Book Now
                  </button>
                  <a
                    href={`https://wa.me/${WA}?text=Hello%20Hotel%20Baghban%20Palace,%20I%20want%20to%20book%20${room.waText}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-wa-room"
                    title="Inquire on WhatsApp"
                  >
                    <i className="fa-brands fa-whatsapp"></i> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

