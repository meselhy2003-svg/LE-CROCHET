import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BestItemsSection from './components/BestItemsSection';
import VibesSection from './components/VibesSection';
import WorkstationSection from './components/WorkstationSection';
import FeedbackSection from './components/FeedbackSection';
import CafeMenuPage from './components/CafeMenuPage';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import Footer from './components/Footer';
import CoffeeBean from './components/CoffeeBean';
import './App.css';

function AppContent() {
  const { toastMessage } = useCart();
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.pathname === '/menu' || window.location.hash === '#menu' ? 'menu' : 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/menu' || window.location.hash === '#menu') {
        setCurrentPage('menu');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page, hash = '') => {
    setCurrentPage(page);
    if (page === 'menu') {
      window.history.pushState(null, '', '/menu');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState(null, '', '/' + (hash ? hash : ''));
      if (hash) {
        setTimeout(() => {
          const targetEl = document.querySelector(hash);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="site-wrapper">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {currentPage === 'menu' ? (
        <main>
          <CafeMenuPage onBackToHome={() => navigateTo('home')} />
        </main>
      ) : (
        <main>
          <HeroSection />
          <BestItemsSection />
          <VibesSection />
          <WorkstationSection />
          <FeedbackSection />
        </main>
      )}

      <CartDrawer />
      <QuickViewModal />
      <Footer onNavigate={navigateTo} />


      {/* Reactive Toast Notification */}
      {toastMessage && (
        <div className="toast-notice">
          <CoffeeBean size={16} style={{ color: 'var(--accent-gold)' }} />
          <span>{toastMessage}</span>
        </div>

      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
