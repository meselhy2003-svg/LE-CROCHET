import React from 'react';
import CoffeeBean from './CoffeeBean';

export default function WorkstationSection() {
  return (
    <section id="workstation" className="workstation-section" aria-label="Atelier Workstation">
      <div className="container">
        <div className="workstation-layout">
          {/* Left: Image with the exact same VIBES frame */}
          <div className="workstation-media">
            <div className="vibe-image-box workstation-frame">
              <img
                src="/images/workstation/workstation.jpeg"
                alt="Atelier Workstation"
                className="vibe-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Sentence and atelier description */}
          <div className="workstation-content">
            <span className="section-tag section-tag-gold">
              <CoffeeBean size={14} />
              Artisan Sanctuary
            </span>
            <h2 className="section-title">WORKSTATION</h2>
            <p className="workstation-sentence">
              Where raw organic threads, hand-carved olive wood hooks, and patient artisan mastery converge to sculpt timeless crochet heirlooms one mindful loop at a time.
            </p>
            <p className="workstation-subsentence">
              A quiet haven dedicated to the reverence of touch, tactile purity, and slow living craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
