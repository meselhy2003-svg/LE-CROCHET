import React from 'react';

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section" aria-label="Hero Showcase">
      {/* Background Video Layer */}
      <div className="hero-video-wrapper">
        {/* Desktop Video (> 768px) */}
        <video
          className="hero-video-bg hero-video-desktop"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-crochet.mp4" type="video/mp4" />
          Your browser does not support HTML5 video playback.
        </video>

        {/* Mobile Video (<= 768px) */}
        <video
          className="hero-video-bg hero-video-mobile"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-mobile.mp4" type="video/mp4" />
          Your browser does not support HTML5 video playback.
        </video>
      </div>

      {/* Gradient #043323 from Left to Right with Transparent at 40% (hidden on mobile via CSS) */}
      <div className="hero-gradient-overlay" aria-hidden="true" />
    </section>
  );
}
