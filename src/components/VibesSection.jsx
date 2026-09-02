import React from 'react';
import CoffeeBean from './CoffeeBean';

const VIBE_IMAGES = [
  { id: 'vibe-1', src: '/images/vibes/vibe-1.jpeg', alt: 'Atelier Vibe 01' },
  { id: 'vibe-2', src: '/images/vibes/vibe-2.jpeg', alt: 'Atelier Vibe 02' },
  { id: 'vibe-3', src: '/images/vibes/vibe-3.jpeg', alt: 'Atelier Vibe 03' },
  { id: 'vibe-4', src: '/images/vibes/vibe-4.jpeg', alt: 'Atelier Vibe 04' },
  { id: 'vibe-5', src: '/images/vibes/vibe-5.jpeg', alt: 'Atelier Vibe 05' },
];

export default function VibesSection() {
  return (
    <section id="vibes" className="vibes-section" aria-label="Atelier Vibes">
      <div className="container">
        {/* Section Header */}
        <div className="vibes-header">
          <span className="section-tag section-tag-gold">
            <CoffeeBean size={14} />
            Atmosphere & Mood
          </span>

          <h2 className="section-title">VIBES</h2>
        </div>

        {/* Desktop Grid View (5 columns) */}
        <div className="vibes-desktop-grid">
          {VIBE_IMAGES.map((img) => (
            <div key={img.id} className="vibe-image-box">
              <img
                src={img.src}
                alt={img.alt}
                className="vibe-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Mobile Automatic Horizontal Scrolling Marquee (Mobile View Only) */}
        <div className="vibes-mobile-marquee-wrap">
          <div className="vibes-mobile-marquee-track">
            {[...VIBE_IMAGES, ...VIBE_IMAGES].map((img, index) => (
              <div key={`${img.id}-mob-${index}`} className="vibe-image-box">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="vibe-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
