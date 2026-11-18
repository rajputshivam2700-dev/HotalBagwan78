import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', subject: 'Room Booking', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`✅ Thank you, ${form.name}! Your inquiry has been received. Our team will contact you on ${form.phone} shortly.`)
    setForm({ name: '', phone: '', subject: 'Room Booking', message: '' })
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-title-center">
          <div className="section-tag-pill"><i className="fa-solid fa-location-dot"></i> VISIT & CONTACT US</div>
          <h2 className="section-heading-serif">Location & Contact Details</h2>
          <p className="section-sub-lead">
            Conveniently located on the Main Highway with spacious parking, restaurant & cafe access.
          </p>
        </div>

        <div className="contact-cards-grid">
          <div className="c-info-box">
            <div className="c-icon-circle"><i className="fa-solid fa-map-location-dot"></i></div>
            <h4>Hotel Address</h4>
            <p>Hotel Baghban Palace, Main Highway Road, Restaurant & Cafe, India</p>
          </div>
          <div className="c-info-box">
            <div className="c-icon-circle"><i className="fa-solid fa-phone-volume"></i></div>
            <h4>Call & WhatsApp</h4>
            <p>Front Desk: <strong><a href="tel:07947419263" style={{ color: 'inherit', textDecoration: 'none' }}>07947419263</a></strong></p>
            <p>Mobile: <strong><a href="tel:07947419263" style={{ color: 'inherit', textDecoration: 'none' }}>07947419263</a></strong></p>
            <a href="https://wa.me/917947419263" target="_blank" rel="noreferrer" className="wa-text-link">
              <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
          <div className="c-info-box">
            <div className="c-icon-circle"><i className="fa-solid fa-envelope-open-text"></i></div>
            <h4>Email Inquiries</h4>
            <p>Bookings: <strong>shivamrajput@gmail.com</strong></p>
            <p>Events: <strong>hotelbaghbanpalace@gmail.com</strong></p>
          </div>
          <div className="c-info-box">
            <div className="c-icon-circle"><i className="fa-solid fa-clock"></i></div>
            <h4>Front Desk Hours</h4>
            <p>Reception: <strong>Open 24 Hours / 7 Days</strong></p>
            <p>Restaurant: <strong>7:00 AM – 11:30 PM</strong></p>
          </div>
        </div>

        <div className="contact-map-layout">
          <div className="contact-form-pane">
            <h3>Send Us a Direct Message</h3>
            <p>Whether you have queries regarding room bookings, banquet lawn availability, or restaurant dining, drop us a message.</p>
            <form onSubmit={handleSubmit} id="contactInquiryForm">
              <div className="form-two-col">
                <div className="input-block">
                  <label>Your Name *</label>
                  <input type="text" placeholder="e.g. Shivam Rajput" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="input-block">
                  <label>Mobile Number *</label>
                  <input type="tel" placeholder="Mobile number" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>
              <div className="input-block">
                <label>Inquiry Category</label>
                <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
                  <option value="Room Booking">Room Booking Inquiry</option>
                  <option value="Banquet & Wedding">Banquet Hall & Wedding Event</option>
                  <option value="Restaurant Dining">Restaurant Dining & Table Reservation</option>
                  <option value="Corporate Event">Corporate Meeting & Group Stay</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>
              <div className="input-block">
                <label>Message *</label>
                <textarea rows="3" placeholder="How can we assist you?" required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}></textarea>
              </div>
              <button type="submit" className="btn btn-gold btn-full">
                <i className="fa-solid fa-paper-plane"></i> Send Inquiry Message
              </button>
            </form>
          </div>

          <div className="map-embed-pane">
            <div className="map-top-bar">
              <span><i className="fa-solid fa-diamond-turn-right text-gold"></i> Hotel Baghban Palace on Google Maps</span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107248169!2d85.07300261314418!3d25.608175570396035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82f21!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="340" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Baghban Palace Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

