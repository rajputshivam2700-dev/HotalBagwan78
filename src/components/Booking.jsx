import React, { useState, useEffect } from 'react'

const WA = '917947419263'
const roomOptions = [
  { value: 'Deluxe Room', label: 'Deluxe Green View (₹ 2,999/night)', rate: 2999 },
  { value: 'Super Deluxe', label: 'Super Deluxe Royale (₹ 4,499/night)', rate: 4499 },
  { value: 'Garden View Suite', label: 'Executive Garden Suite (₹ 6,999/night)', rate: 6999 },
  { value: 'Presidential Suite', label: 'Presidential Baghban Suite (₹ 10,999/night)', rate: 10999 },
]

export default function Booking() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    nights: '1', roomType: 'Super Deluxe', rooms: '1', guests: '2', meal: 'With Breakfast',
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [waLink, setWaLink] = useState('#')

  const getRate = () => roomOptions.find(r => r.value === form.roomType)?.rate || 4499
  const nightsNum = parseInt(form.nights) || 1
  const baseTotal = getRate() * nightsNum
  const tax = Math.round(baseTotal * 0.12)
  const total = baseTotal + tax

  useEffect(() => {
    // Allow Rooms component to pre-select room
    const handler = (e) => {
      if (e.detail?.roomType) setForm(f => ({ ...f, roomType: e.detail.roomType }))
    }
    window.addEventListener('selectRoom', handler)
    return () => window.removeEventListener('selectRoom', handler)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, phone, roomType, nights, rooms, guests, meal } = form
    const msg = encodeURIComponent(
      `🏨 *Hotel Baghban Palace — Room Booking Request*\n\n` +
      `👤 Name: ${name}\n📱 Phone: ${phone}\n🛏️ Room: ${roomType}\n` +
      `🌙 Nights: ${nights}\n🚪 Rooms: ${rooms}\n👥 Guests: ${guests}\n` +
      `🍽️ Meal: ${meal}\n💰 Total: ₹${total.toLocaleString('en-IN')} (incl. 12% GST)\n\n` +
      `Please confirm my booking. Thank you!`
    )
    const link = `https://wa.me/${WA}?text=${msg}`
    setWaLink(link)
    setShowSuccess(true)
  }

  return (
    <section className="section booking-section" id="booking">
      <div className="container">
        <div className="booking-split-container">
          <div className="booking-perks-pane">
            <div className="section-tag-pill text-white"><i className="fa-solid fa-calendar-check"></i> FAST & EASY RESERVATION</div>
            <h2 className="booking-pane-title">Book Directly With Us for Best Rates & Instant Confirmation</h2>
            <p className="booking-pane-desc">
              Reserve your room directly with Hotel Baghban Palace. Enjoy 100% transparent pricing,
              zero cancellation fees, and instant WhatsApp booking confirmation.
            </p>

            <div className="perks-stack">
              {[
                { icon: 'fa-shield-check', title: 'Guaranteed Best Price', sub: 'Direct booking benefits with zero hidden charges.' },
                { icon: 'fa-mug-saucer', title: 'Complimentary Welcome Drinks', sub: 'Traditional refreshing welcome beverage on arrival.' },
                { icon: 'fa-ban', title: '100% Free Cancellation', sub: 'Flexible cancellation policy for peace of mind.' },
              ].map((p, i) => (
                <div className="perk-row" key={i}>
                  <i className={`fa-solid ${p.icon} text-gold`}></i>
                  <div><strong>{p.title}</strong><span>{p.sub}</span></div>
                </div>
              ))}
            </div>

            <div className="direct-callout-card">
              <i className="fa-solid fa-phone-volume"></i>
              <div>
                <span>Direct Phone & WhatsApp Booking</span>
                <h4>07947419263</h4>
              </div>
            </div>

            <a href={`https://wa.me/${WA}?text=Hello%20Hotel%20Baghban%20Palace,%20I%20would%20like%20to%20book%20a%20room%20directly.`}
              target="_blank" rel="noreferrer" className="btn-wa-direct-banner">
              <i className="fa-brands fa-whatsapp"></i> Chat & Book Instantly on WhatsApp
            </a>
          </div>

          <div className="booking-card-pane">
            <h3 className="form-heading">Room Reservation Form</h3>
            <p className="form-sub-hint">Fill in your basic details to calculate price and reserve your room.</p>

            <form onSubmit={handleSubmit} id="hotelBookingForm">
              <div className="form-two-col">
                <div className="input-block">
                  <label><i className="fa-solid fa-user"></i> Full Name *</label>
                  <input type="text" placeholder="e.g. Shivam Rajput" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="input-block">
                  <label><i className="fa-solid fa-phone"></i> Mobile / WhatsApp *</label>
                  <input type="tel" placeholder="e.g. 07947419263" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>

              <div className="input-block">
                <label><i className="fa-solid fa-envelope"></i> Email Address (Optional)</label>
                <input type="email" placeholder="e.g. shivamrajput@gmail.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>

              <div className="form-two-col">
                <div className="input-block">
                  <label><i className="fa-solid fa-moon"></i> Stay Duration</label>
                  <select value={form.nights} onChange={e => setForm({ ...form, nights: e.target.value })}>
                    <option value="1">1 Night Stay</option>
                    <option value="2">2 Nights Stay</option>
                    <option value="3">3 Nights Stay</option>
                    <option value="4">4+ Nights Stay</option>
                  </select>
                </div>
                <div className="input-block">
                  <label><i className="fa-solid fa-bed"></i> Room Category *</label>
                  <select id="bookRoomType" value={form.roomType} onChange={e => setForm({ ...form, roomType: e.target.value })}>
                    {roomOptions.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                  </select>
                </div>
              </div>

              <div className="form-two-col">
                <div className="input-block">
                  <label><i className="fa-solid fa-door-closed"></i> Number of Rooms</label>
                  <select value={form.rooms} onChange={e => setForm({ ...form, rooms: e.target.value })}>
                    <option value="1">1 Room</option>
                    <option value="2">2 Rooms</option>
                    <option value="3">3 Rooms</option>
                    <option value="4+">4+ Rooms (Group Stay)</option>
                  </select>
                </div>
                <div className="input-block">
                  <label><i className="fa-solid fa-users"></i> Total Guests</label>
                  <select value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })}>
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults / Family</option>
                  </select>
                </div>
              </div>

              <div className="input-block">
                <label><i className="fa-solid fa-utensils"></i> Meal Preference</label>
                <select value={form.meal} onChange={e => setForm({ ...form, meal: e.target.value })}>
                  <option value="Room Only">Room Only</option>
                  <option value="With Breakfast">With Royal Breakfast Included</option>
                  <option value="Breakfast + Dinner">Breakfast + Dinner Included</option>
                </select>
              </div>

              <div className="price-calculation-card">
                <div className="calc-row">
                  <span>Stay Duration: <strong>{nightsNum} Night{nightsNum > 1 ? 's' : ''}</strong></span>
                  <span>Base Rate: <strong>₹ {getRate().toLocaleString('en-IN')}</strong></span>
                </div>
                <div className="calc-row">
                  <span>Estimated Taxes (12% GST): <strong>₹ {tax.toLocaleString('en-IN')}</strong></span>
                  <span>Total Payable: <strong className="price-total-tag">₹ {total.toLocaleString('en-IN')}</strong></span>
                </div>
              </div>

              <button type="submit" className="btn btn-gold btn-full btn-lg">
                <i className="fa-solid fa-paper-plane"></i> Confirm & Book Reservation
              </button>
              <p className="form-lock-note"><i className="fa-solid fa-lock"></i> No immediate advance needed. Our front desk will confirm with you instantly.</p>
            </form>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="success-modal" style={{ display: 'flex' }}>
          <div className="success-card">
            <div className="success-icon"><i className="fa-solid fa-circle-check"></i></div>
            <h3>Booking Request Registered!</h3>
            <p>Thank you, {form.name}! Your stay request at Hotel Baghban Palace has been received.</p>
            <div className="success-action-btns">
              <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                <i className="fa-brands fa-whatsapp"></i> Send on WhatsApp to Reception
              </a>
              <button className="btn btn-outline-dark" onClick={() => setShowSuccess(false)}>Close Window</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

