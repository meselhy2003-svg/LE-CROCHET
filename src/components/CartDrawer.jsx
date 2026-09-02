import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    changeQty,
    removeFromCart,
    subtotal,
    clearCart,
    showToast
  } = useCart();

  const threshold = 500;
  const progressPct = Math.min(100, Math.round((subtotal / threshold) * 100));
  const remaining = Math.max(0, threshold - subtotal);


  const handleCheckout = () => {
    if (cart.length === 0) {
      showToast('Your bag is currently empty.');
      return;
    }
    showToast('Proceeding to secure checkout...');
    setTimeout(() => {
      alert(`Thank you for choosing LE CROCHET! In this preview, your order of ${cart.length} handcrafted creation(s) has been simulated.`);
      clearCart();
      setIsCartOpen(false);
    }, 600);
  };

  return (
    <>
      {isCartOpen && (
        <div
          className="cart-drawer-overlay"
          onClick={() => setIsCartOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside className={`cart-drawer ${isCartOpen ? 'active' : ''}`} aria-label="Shopping Bag">
        <div className="cart-header">
          <div className="cart-title">
            <span>Your Bag</span>
            <span className="announcement-badge" style={{ fontSize: '0.75rem' }}>Atelier Packaging</span>
          </div>
          <button
            className="icon-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close Bag"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div style={{ padding: '14px 24px', background: 'rgba(255, 255, 255, 0.02)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
            {subtotal >= threshold ? (
              <span>✨ You unlocked <strong>Complimentary Worldwide Shipping</strong>!</span>
            ) : (
              <span>Add <strong>{remaining} EGP</strong> more for complimentary worldwide shipping</span>
            )}

          </div>
          <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '2px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${progressPct}%`,
                height: '100%',
                background: 'linear-gradient(90deg, var(--accent-terracotta), var(--accent-gold))',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="cart-items-container">
          {cart.length === 0 ? (
            <div className="cart-empty-state">
              <ShoppingBag size={48} strokeWidth={1.5} style={{ margin: '0 auto 16px', opacity: 0.3 }} />
              <p style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '8px' }}>Your bag is empty</p>
              <p style={{ fontSize: '0.85rem' }}>Discover our handcrafted collections to begin your order.</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-thumb" style={{ borderLeft: `3px solid ${item.colorHex}` }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={item.colorHex} strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3a9 9 0 0 1 9 9" />
                    <path d="M7 12a5 5 0 0 1 5-5" />
                  </svg>
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-title">{item.name}</div>
                  <div className="cart-item-price">{item.price} EGP each</div>
                  <div className="cart-item-controls">
                    <button className="qty-btn" onClick={() => changeQty(item.id, -1)}>-</button>
                    <span style={{ fontSize: '0.85rem', minWidth: '18px', textAlign: 'center' }}>{item.qty}</span>
                    <button className="qty-btn" onClick={() => changeQty(item.id, 1)}>+</button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '0.75rem', textDecoration: 'underline' }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        <div className="cart-footer">
          <div className="cart-subtotal-row">
            <span>Subtotal</span>
            <span>{subtotal.toLocaleString()} EGP</span>
          </div>

          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
            Taxes & duties calculated during checkout. Ships in artisan gift box.
          </p>
          <button className="btn btn-primary" onClick={handleCheckout} style={{ width: '100%', padding: '16px' }}>
            Proceed to Checkout
          </button>
        </div>
      </aside>
    </>
  );
}
