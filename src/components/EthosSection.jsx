import React from 'react';
import { Shield, Clock, HeartHandshake } from 'lucide-react';

export default function EthosSection() {
  return (
    <section id="about" className="ethos-section">
      <div className="container">
        <div className="ethos-grid">
          <div>
            <span className="section-tag">The Philosophy</span>
            <h2 className="section-title">Where Time Slows Down & Hands Breathe Life Into Thread</h2>
            <div className="ethos-quote">
              "We reject the hurried pace of modern machines. Every curve, looping knot, and scalloped hem is sculpted by hand with singular focus."
            </div>
            <p className="section-desc">
              Founded on the quiet grace of traditional Mediterranean needlecraft, <strong>LE CROCHET</strong> honors an ancient conversation between artisan, fiber, and form. We produce only limited, numbered releases using unbleached organic cotton, hand-spun Peruvian alpaca, and reclaimed mulberry silk.
            </p>

            <div className="ethos-metrics">
              <div className="metric-item">
                <div className="metric-number">18+</div>
                <div className="metric-label">Hours Per Bag</div>
              </div>
              <div className="metric-item">
                <div className="metric-number">100%</div>
                <div className="metric-label">Plastic Free</div>
              </div>
              <div className="metric-item">
                <div className="metric-number">0</div>
                <div className="metric-label">Mass Surplus</div>
              </div>
            </div>
          </div>

          <div className="craft-card-stack">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '24px', color: 'var(--text-primary)' }}>
              Artisanal Commitments
            </h3>
            <div className="craft-features">
              <div className="craft-feature-item">
                <div className="feature-icon-box">
                  <Shield size={22} />
                </div>
                <div className="feature-text">
                  <h4>Ethically Certified Sourcing</h4>
                  <p>Fibers sourced directly from smallholder Andean pastoralists and organic regenerative cotton cooperatives.</p>
                </div>
              </div>

              <div className="craft-feature-item">
                <div className="feature-icon-box">
                  <Clock size={22} />
                </div>
                <div className="feature-text">
                  <h4>Heirloom Longevity</h4>
                  <p>Reinforced double-loop locking stitches designed to resist stretching and gracefully age across decades.</p>
                </div>
              </div>

              <div className="craft-feature-item">
                <div className="feature-icon-box">
                  <HeartHandshake size={22} />
                </div>
                <div className="feature-text">
                  <h4>Artisan Provenance</h4>
                  <p>Each finished piece features a stitched interior tag signed by the individual craftswoman who hooked it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
