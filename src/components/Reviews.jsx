import React from 'react'

const metrics = [
  { label: 'Hygiene & Cleanliness', pct: 98, val: '4.9 / 5' },
  { label: 'Food Taste & Quality', pct: 97, val: '4.9 / 5' },
  { label: 'Highway Location & Parking', pct: 96, val: '4.8 / 5' },
  { label: 'Staff Hospitality & Service', pct: 98, val: '4.8 / 5' },
]

const testimonials = [
  {
    initials: 'RS', name: 'Rajesh Sharma', tag: 'Family Holiday', tagIcon: 'fa-users',
    rating: '5.0', stayType: 'Super Deluxe Royale',
    quote: '"Hotel Baghban Palace made our family trip truly comfortable! The pure veg food at the restaurant was incredibly fresh and delicious. Clean rooms and attentive staff."',
  },
  {
    initials: 'PK', name: 'Pooja & Karan', tag: 'Couple Weekend', tagIcon: 'fa-heart',
    rating: '4.9', stayType: 'Garden View Suite',
    quote: '"The green decor in the cafe and the balcony views from our room were wonderful. Very peaceful atmosphere and prompt room service. Highly recommended!"',
  },
  {
    initials: 'AK', name: 'Amit Kumar', tag: 'Business Highway Travel', tagIcon: 'fa-briefcase',
    rating: '4.8', stayType: 'Deluxe Room',
    quote: '"Spacious parking right in front of the highway, super-fast Wi-Fi, and courteous reception. The hotel is very well-maintained and hygienic."',
  },
]

export default function Reviews() {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        <div className="section-title-center">
          <div className="section-tag-pill"><i className="fa-solid fa-comments"></i> GUEST TESTIMONIALS</div>
          <h2 className="section-heading-serif">What Our Guests Say</h2>
          <p className="section-sub-lead">
            Real feedback from travelers, wedding parties, and food lovers who visited Hotel Baghban Palace.
          </p>
        </div>

        <div className="reviews-summary-card">
          <div className="score-stat-side">
            <div className="big-rating-number">4.8</div>
            <div className="star-row">
              {[1,2,3,4,5].map(s => <i className="fa-solid fa-star" key={s}></i>)}
            </div>
            <span className="rating-sub-lbl">Based on 1,420+ Verified Reviews</span>
          </div>
          <div className="score-bars-side">
            {metrics.map((m, i) => (
              <div className="metric-bar-row" key={i}>
                <span className="m-label">{m.label}</span>
                <div className="m-bar"><div className="m-fill" style={{ width: `${m.pct}%` }}></div></div>
                <span className="m-val">{m.val}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-header">
                <div className="avatar-circle">{t.initials}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span className="tag-sub"><i className={`fa-solid ${t.tagIcon}`}></i> {t.tag}</span>
                </div>
                <div className="rating-pill-green">{t.rating} ☆</div>
              </div>
              <p className="testi-quote">{t.quote}</p>
              <span className="testi-footer">Stayed in {t.stayType}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

