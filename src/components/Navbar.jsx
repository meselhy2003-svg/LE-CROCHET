import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const { totalItems, setIsCartOpen, showToast } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = (targetHash) => {
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      if (targetHash === 'menu') {
        onNavigate('menu');
      } else {
        onNavigate('home', targetHash);
      }
    }
  };

  const handleDesktopNavClick = (e, targetHash) => {
    e.preventDefault();
    if (onNavigate) {
      if (targetHash === 'menu') {
        onNavigate('menu');
      } else {
        onNavigate('home', targetHash);
      }
    }
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="nav-inner" aria-label="Main Navigation">
            {/* Brand Signature Logo */}
            <a
              href="#hero"
              className="brand-logo"
              aria-label="LE CROCHET Home"
              onClick={(e) => handleDesktopNavClick(e, '#hero')}
            >
              <img
                src="/logo.png"
                alt="LE CROCHET Logo"
                style={{ height: '48px', width: '48px', objectFit: 'contain', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
              />
            </a>

            {/* Desktop Navigation Links - MENU is the last item */}
            <ul className="nav-links">
              <li>
                <a
                  href="#best-items"
                  className={`nav-link ${currentPage === 'home' ? '' : ''}`}
                  onClick={(e) => handleDesktopNavClick(e, '#best-items')}
                >
                  Best Items
                </a>
              </li>
              <li>
                <a
                  href="#vibes"
                  className="nav-link"
                  onClick={(e) => handleDesktopNavClick(e, '#vibes')}
                >
                  Vibes
                </a>
              </li>
              <li>
                <a
                  href="#workstation"
                  className="nav-link"
                  onClick={(e) => handleDesktopNavClick(e, '#workstation')}
                >
                  Workstation
                </a>
              </li>
              <li>
                <a
                  href="#feedback"
                  className="nav-link"
                  onClick={(e) => handleDesktopNavClick(e, '#feedback')}
                >
                  Feedback
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className={`nav-link ${currentPage === 'menu' ? 'active' : ''}`}
                  onClick={(e) => handleDesktopNavClick(e, 'menu')}
                >
                  Menu
                </a>
              </li>
            </ul>













            {/* Action Buttons */}
            <div className="nav-actions">
              <button
                className="icon-btn"
                aria-label="Favorites"
                onClick={() => showToast('Saved to your Atelier Wishlist')}
                title="Wishlist"
              >
                <Heart size={19} strokeWidth={1.8} />
              </button>

              <button
                className="icon-btn"
                aria-label="Open Shopping Bag"
                onClick={() => setIsCartOpen(true)}
                title="Shopping Bag"
              >
                <ShoppingBag size={19} strokeWidth={1.8} />
                {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
              </button>

              <button
                className="icon-btn mobile-menu-btn"
                aria-label="Toggle Menu"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={20} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'active' : ''}`} aria-hidden={!isMobileMenuOpen}>
        <div className="mobile-nav-header">
          <div className="brand-logo">
            <img
              src="/logo.png"
              alt="LE CROCHET Logo"
              style={{ height: '44px', width: '44px', objectFit: 'contain' }}
            />
          </div>
          <button className="icon-btn" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close Navigation">
            <X size={20} />
          </button>
        </div>

        <ul className="mobile-nav-list">
          <li>
            <a href="#best-items" className="mobile-nav-link" onClick={() => handleMobileNavClick('#best-items')}>
              Best Items <ArrowRight size={16} />
            </a>
          </li>
          <li>
            <a href="#vibes" className="mobile-nav-link" onClick={() => handleMobileNavClick('#vibes')}>
              Vibes <ArrowRight size={16} />
            </a>
          </li>
          <li>
            <a href="#workstation" className="mobile-nav-link" onClick={() => handleMobileNavClick('#workstation')}>
              Workstation <ArrowRight size={16} />
            </a>
          </li>
          <li>
            <a href="#feedback" className="mobile-nav-link" onClick={() => handleMobileNavClick('#feedback')}>
              Feedback <ArrowRight size={16} />
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className="mobile-nav-link"
              onClick={() => handleMobileNavClick('menu')}
            >
              Menu <ArrowRight size={16} />
            </a>
          </li>
        </ul>



        <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--border-subtle)' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Maison Le Crochet • Paris & Florence</p>
        </div>
      </div>
    </>
  );
}
