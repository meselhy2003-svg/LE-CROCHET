import React from 'react';

const REVIEWS = [
  {
    quote: "The Aurelia Tote is simply breathtaking in person. You can immediately feel the weight and density of the cotton stitches. It holds its shape flawlessly.",
    name: "Éléonore Laurent",
    city: "Paris",
    initials: "EL"
  },
  {
    quote: "I ordered a bespoke colorway for the Seraphina cardigan for my wedding weekend. The craftsmanship exceeded every expectation. It is a genuine heirloom.",
    name: "Sofia Castellani",
    city: "Florence",
    initials: "SC"
  },
  {
    quote: "Knowing that a real person in the atelier hand-looped every single stitch makes wearing these pieces deeply special. Sustainable luxury at its highest.",
    name: "Maya Vance",
    city: "New York",
    initials: "MV"
  }
];

export default function Testimonials() {
  return (
    <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 40px' }}>
          <span className="section-tag">Praises</span>
          <h2 className="section-title">Words from the Collectors</h2>
        </div>

        <div className="testimonial-grid">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="stars-row">★★★★★</div>
              <p className="testimonial-text">"{review.quote}"</p>
              <div className="client-meta">
                <div className="client-avatar">{review.initials}</div>
                <div>
                  <div className="client-name">{review.name}</div>
                  <div className="client-verified">✓ Verified Collector • {review.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
