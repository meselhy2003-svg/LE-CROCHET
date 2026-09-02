import React from 'react';

export default function ProcessSection() {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <span className="section-tag">Meticulous Journey</span>
          <h2 className="section-title">How Masterpieces Are Born</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Unlike automated fast-fashion knitting machines, genuine crochet cannot be replicated by any industrial machine. Every single loop requires human hands.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <div className="process-step-num">01</div>
            <h3>Natural Fiber Curation</h3>
            <p>We hand-select GOTS-certified unbleached cotton, raw linen ribbons, and natural botanically dyed botanical skeins free from caustic chemicals.</p>
          </div>

          <div className="process-card">
            <div className="process-step-num">02</div>
            <h3>Intricate Hook Weaving</h3>
            <p>Using hand-carved olive wood hooks, our master artisans execute complex filet, lace, and bobble stitches that create sculptural tactile depth.</p>
          </div>

          <div className="process-card">
            <div className="process-step-num">03</div>
            <h3>Wet Blocking & Signing</h3>
            <p>Pieces are gently immersed in botanical lavender water, precision-pinned to set tension, and hand-stitched with their individual artisan serial seal.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
