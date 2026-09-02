import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function AnnouncementBar() {
  const { showToast } = useCart();
  const [currency, setCurrency] = useState('USD');

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
    showToast(`Currency updated to ${e.target.value}`);
  };

  return (
    <aside className="announcement-bar" aria-label="Announcement">
      <div className="announcement-badge">Maison Le Crochet</div>
      <div className="announcement-center">
        <span>Complimentary Worldwide Express Courier on Orders over <span className="highlight">$150</span></span>
        <span>•</span>
        <span>Each Creation Authenticated & Hand-Numbered</span>
      </div>
      <div className="announcement-right">
        <select
          value={currency}
          onChange={handleCurrencyChange}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'inherit',
            fontSize: '0.75rem',
            cursor: 'pointer'
          }}
        >
          <option value="USD" style={{ background: '#1c1917' }}>USD ($)</option>
          <option value="EUR" style={{ background: '#1c1917' }}>EUR (€)</option>
          <option value="GBP" style={{ background: '#1c1917' }}>GBP (£)</option>
          <option value="AED" style={{ background: '#1c1917' }}>AED (د.إ)</option>
        </select>
      </div>
    </aside>
  );
}
