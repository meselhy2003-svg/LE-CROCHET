import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';

const FILTERS = [
  { id: 'all', label: 'All Creations' },
  { id: 'bags', label: 'Handmade Bags' },
  { id: 'wearables', label: 'Wearables & Tops' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'decor', label: 'Home Fiber Decor' }
];

export default function Collections() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <section id="collections">
      <div className="container">
        <div className="collection-header">
          <span className="section-tag">Curated Portfolio</span>
          <h2 className="section-title">The Spring / Summer Atelier Selection</h2>
          <p className="section-desc">
            Explore our limited handcrafted editions. Each item is produced upon order or in tiny atelier runs to prevent any fashion waste.
          </p>

          <div className="filter-tabs" role="tablist">
            {FILTERS.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
