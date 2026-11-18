import React from 'react'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917947419263?text=Hello%20Hotel%20Baghban%20Palace,%20I%20would%20like%20to%20inquire%20about%20room%20booking."
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp-btn"
      id="floatingWhatsapp"
      title="Chat on WhatsApp"
    >
      <div className="wa-icon-circle">
        <i className="fa-brands fa-whatsapp"></i>
      </div>
      <span className="wa-text-pill">WhatsApp Us</span>
    </a>
  )
}

