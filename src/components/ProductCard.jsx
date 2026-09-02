import React from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart, setQuickViewProduct } = useCart();

  return (
    <article className="product-card" data-category={product.category}>
      <div className="product-img-wrap">
        <span className={`badge-tag ${product.badgeClass}`}>{product.tag}</span>

        {/* Scalable Vector Crochet Artwork with Needle Motif */}
        <svg className="crochet-art" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="75" stroke={product.colorHex} strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
          <circle cx="100" cy="100" r="50" stroke={product.colorHex} strokeWidth="2.5" strokeDasharray="8 6" opacity="0.7" />
          <circle cx="100" cy="100" r="25" stroke={product.colorHex} strokeWidth="3" opacity="0.9" />
          <path d="M60 140 C 70 80, 130 80, 140 140" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
          <path d="M40 100 Q 100 30 160 100" stroke={product.colorHex} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
          <line x1="45" y1="155" x2="155" y2="45" stroke="var(--text-secondary)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          <path d="M150 40 Q 160 35 155 45" stroke="var(--accent-terracotta)" strokeWidth="3" fill="none" />
        </svg>

        <div className="product-actions-hover">
          <button
            className="quick-view-btn"
            onClick={() => setQuickViewProduct(product)}
          >
            Quick View
          </button>
        </div>
      </div>

      <div className="product-info">
        <span className="product-category">{product.categoryName}</span>
        <h3 className="product-title">{product.name}</h3>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
          {product.yarn}
        </p>

        <div className="product-details-row">
          <span className="product-price">${product.price}</span>
          <button
            className="product-add-btn"
            onClick={() => addToCart(product)}
          >
            <Plus size={15} strokeWidth={2.5} />
            Add to Bag
          </button>
        </div>
      </div>
    </article>
  );
}
