import React from 'react';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();

  if (!quickViewProduct) return null;

  return (
    <div className="modal-overlay" onClick={() => setQuickViewProduct(null)} aria-label="Product Preview">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={() => setQuickViewProduct(null)}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="modal-image-col">
          <div style={{ textAlign: 'center' }}>
            <svg width="180" height="180" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" stroke={quickViewProduct.colorHex} strokeWidth="2.5" strokeDasharray="6 4" opacity="0.5" />
              <circle cx="100" cy="100" r="50" stroke={quickViewProduct.colorHex} strokeWidth="3" opacity="0.9" />
              <path d="M40 100 Q 100 20 160 100" stroke="var(--accent-gold)" strokeWidth="2" fill="none" />
              <line x1="45" y1="155" x2="155" y2="45" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <p style={{ marginTop: '14px', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Color: {quickViewProduct.color}
            </p>
          </div>
        </div>

        <div className="modal-details-col">
          <span className="product-category">{quickViewProduct.categoryName}</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '8px' }}>
            {quickViewProduct.name}
          </h2>
          <div style={{ fontSize: '1.4rem', color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '16px' }}>
            {quickViewProduct.price} EGP
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px', lineHeight: 1.6 }}>
            {quickViewProduct.description}
          </p>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '14px', marginBottom: '24px', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div><strong>Craft Time:</strong> {quickViewProduct.hours}</div>
            <div><strong>Composition:</strong> {quickViewProduct.yarn}</div>
            <div><strong>Dimensions:</strong> {quickViewProduct.dimensions}</div>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => {
              addToCart(quickViewProduct);
              setQuickViewProduct(null);
            }}
            style={{ width: '100%' }}
          >
            Add to Bag • {quickViewProduct.price} EGP
          </button>

        </div>
      </div>
    </div>
  );
}
