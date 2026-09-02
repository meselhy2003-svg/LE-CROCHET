import React from 'react';

export default function LookbookSection() {
  return (
    <section id="lookbook">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="section-tag">Editorial Lookbook</span>
            <h2 className="section-title">Textures in Natural Light</h2>
          </div>
          <a href="#bespoke" className="btn btn-outline">Request Custom Sizing</a>
        </div>

        <div className="lookbook-mosaic">
          <div className="lookbook-item large">
            <div className="lookbook-art-bg" style={{ background: 'radial-gradient(circle, #3d2822 10%, #161211 90%)' }}>
              <svg width="220" height="220" viewBox="0 0 200 200" fill="none" opacity="0.3">
                <circle cx="100" cy="100" r="90" stroke="var(--accent-terracotta)" strokeWidth="2" strokeDasharray="8 6" />
                <circle cx="100" cy="100" r="60" stroke="var(--accent-gold)" strokeWidth="2" />
                <path d="M40 100 Q 100 10 160 100" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
            <div className="lookbook-content">
              <span>Summer Solstice '26</span>
              <h3>The Golden Hour Macramé-Crochet Ensemble</h3>
            </div>
          </div>

          <div className="lookbook-item medium">
            <div className="lookbook-art-bg" style={{ background: 'radial-gradient(circle, #243026 10%, #121814 90%)' }}>
              <svg width="160" height="160" viewBox="0 0 200 200" fill="none" opacity="0.3">
                <circle cx="100" cy="100" r="70" stroke="var(--accent-sage)" strokeWidth="2" />
              </svg>
            </div>
            <div className="lookbook-content">
              <span>Botanical Hues</span>
              <h3>Sage & Olive Hand-Hooked Totes</h3>
            </div>
          </div>

          <div className="lookbook-item small">
            <div className="lookbook-art-bg" style={{ background: 'radial-gradient(circle, #322520 10%, #171312 90%)' }}>
              <svg width="140" height="140" viewBox="0 0 200 200" fill="none" opacity="0.25">
                <path d="M50 50 L150 150 M150 50 L50 150" stroke="var(--accent-gold)" strokeWidth="2" />
              </svg>
            </div>
            <div className="lookbook-content">
              <span>Intricate Details</span>
              <h3>Scalloped Edge Halters</h3>
            </div>
          </div>

          <div className="lookbook-item small">
            <div className="lookbook-art-bg" style={{ background: 'radial-gradient(circle, #281f2c 10%, #131016 90%)' }}>
              <svg width="140" height="140" viewBox="0 0 200 200" fill="none" opacity="0.25">
                <circle cx="100" cy="100" r="50" stroke="var(--accent-rose)" strokeWidth="2" />
              </svg>
            </div>
            <div className="lookbook-content">
              <span>Resort Living</span>
              <h3>Alpaca Knit Cardigans</h3>
            </div>
          </div>

          <div className="lookbook-item small">
            <div className="lookbook-art-bg" style={{ background: 'radial-gradient(circle, #22252a 10%, #111317 90%)' }}>
              <svg width="140" height="140" viewBox="0 0 200 200" fill="none" opacity="0.25">
                <rect x="50" y="50" width="100" height="100" stroke="#fff" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="lookbook-content">
              <span>Living Spaces</span>
              <h3>Waffle Woven Heirlooms</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
