import React, { useRef } from 'react';
import { ShoppingBag, Heart, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import CoffeeBean from './CoffeeBean';
import { useCart } from '../context/CartContext';

const BEST_ITEMS = [
  {
    id: 'best-1',
    name: 'The Aurelia Openwork Tote',
    tag: 'Signature Atelier Release',
    price: 380,
    material: 'Organic Peruvian Alpaca & Mulberry Silk',
    edition: '№ 01 • Limited Run',
    image: '/images/best-items/best-1.jpeg'
  },
  {
    id: 'best-2',
    name: 'The Paloma Scalloped Clutch',
    tag: 'Hand-Sculpted Heirloom',
    price: 290,
    material: 'Egyptian Giza Long-Staple Cotton',
    edition: '№ 02 • Atelier Edit',
    image: '/images/best-items/best-2.jpeg'
  },
  {
    id: 'best-3',
    name: 'The Celeste Fiber Satchel',
    tag: 'Double-Loop Knot Craft',
    price: 420,
    material: 'Unbleached Organic Mediterranean Linen',
    edition: '№ 03 • Master Knit',
    image: '/images/best-items/best-3.jpeg'
  },
  {
    id: 'best-4',
    name: 'The Vivienne Woven Hobo',
    tag: 'Artisanal Hand-Weave',
    price: 340,
    material: 'Organic Andean Alpaca & Silk Slub',
    edition: '№ 04 • Collector Item',
    image: '/images/best-items/best-4.jpeg'
  },
  {
    id: 'best-5',
    name: 'The Seraphina Heritage Carryall',
    tag: 'Heirloom Fiber Edition',
    price: 490,
    material: 'Raw Mulberry Silk & Botanical Dye',
    edition: '№ 05 • Atelier Pinnacle',
    image: '/images/best-items/best-5.jpeg'
  }
];

export default function BestItemsSection() {
  const scrollContainerRef = useRef(null);
  const { addToCart, showToast } = useCart();

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 360;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleAdd = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      color: 'Atelier Emerald',
      material: item.material
    });
    showToast(`Added ${item.name} to your shopping bag`);
  };

  return (
    <section id="best-items" className="best-items-section" aria-label="Best Items Showcase">
      <div className="container">


        {/* Section Header */}
        <div className="best-items-header">
          <div className="best-items-header-text">
            <span className="section-tag section-tag-gold">
              <CoffeeBean size={14} />
              Curated Atelier Icons
            </span>


            <h2 className="section-title">BEST ITEM</h2>
            <p className="section-desc">
              Our most celebrated hand-knitted creations, sculpted one stitch at a time with organic fiber yarns.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="best-items-nav-btns">
            <button
              className="best-items-arrow-btn"
              onClick={() => handleScroll('left')}
              aria-label="Previous item"
              title="Previous item"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="best-items-arrow-btn"
              onClick={() => handleScroll('right')}
              aria-label="Next item"
              title="Next item"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Row of Cards Next to Each Other */}
        <div className="best-items-row" ref={scrollContainerRef}>
          {BEST_ITEMS.map((item) => (
            <article key={item.id} className="best-item-card">
              {/* Photo Container */}
              <div className="best-item-img-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  className="best-item-img"
                  loading="lazy"
                />
                <span className="best-item-edition-badge">{item.edition}</span>
                <button
                  className="best-item-wishlist-btn"
                  onClick={() => showToast(`Saved ${item.name} to wishlist`)}
                  aria-label={`Save ${item.name} to wishlist`}
                  title="Save to wishlist"
                >
                  <Heart size={16} strokeWidth={2} />
                </button>
              </div>

              {/* Card Meta Content */}
              <div className="best-item-info">
                <span className="best-item-tag">{item.tag}</span>
                <h3 className="best-item-title">{item.name}</h3>
                <p className="best-item-material">{item.material}</p>

                <div className="best-item-footer">
                  <span className="best-item-price">{item.price.toLocaleString()} EGP</span>
                  <button

                    className="best-item-buy-btn"
                    onClick={() => handleAdd(item)}
                    aria-label={`Add ${item.name} to bag`}
                  >
                    <ShoppingBag size={15} />
                    <span>Acquire</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
