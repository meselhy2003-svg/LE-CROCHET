import React, { useEffect, useRef, useState } from 'react';
import CoffeeBean from './CoffeeBean';

const FEEDBACK_IMAGES = [
  { id: 'feedback-1', src: '/images/feedback/feedback-1.png', alt: 'Collector Feedback 01' },
  { id: 'feedback-2', src: '/images/feedback/feedback-2.png', alt: 'Collector Feedback 02' },
  { id: 'feedback-3', src: '/images/feedback/feedback-3.png', alt: 'Collector Feedback 03' },
];

export default function FeedbackSection() {
  const rowRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let cleanup = () => {};

    const triggerVisible = () => {
      setIsVisible(true);
      cleanup();
    };

    const handleScroll = () => {
      if (!rowRef.current) return;
      const rect = rowRef.current.getBoundingClientRect();
      const triggerThreshold = window.innerHeight * 0.88;

      if (rect.top < triggerThreshold && rect.bottom > 50) {
        triggerVisible();
      }
    };

    let observer;
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window && rowRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              triggerVisible();
            }
          });
        },
        { rootMargin: '0px 0px -50px 0px', threshold: 0.1 }
      );
      observer.observe(rowRef.current);
    }

    cleanup = () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (observer) {
        observer.disconnect();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return cleanup;
  }, []);


  return (
    <section id="feedback" className="feedback-section" aria-label="Customer Feedback">
      <div className="container">
        {/* Section Header */}
        <div className="feedback-header">
          <span className="section-tag section-tag-gold">
            <CoffeeBean size={14} />
            Collector Voices
          </span>
          <h2 className="section-title">FEEDBACK</h2>
        </div>

        {/* Feedback Images Only - Pure Images Rising from Down to Up on Scroll */}
        <div ref={rowRef} className="feedback-images-row">
          {FEEDBACK_IMAGES.map((item, index) => (
            <div
              key={item.id}
              className={`feedback-popup-item ${isVisible ? 'is-animated' : ''}`}
              style={{
                animationDelay: `${index * 0.28}s`,
                WebkitAnimationDelay: `${index * 0.28}s`
              }}

            >
              <img
                src={item.src}
                alt={item.alt}
                className="feedback-pure-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
