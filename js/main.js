/**
 * LE CROCHET - Main Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar Effect on Scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const closeMobileNavBtn = document.getElementById('closeMobileNavBtn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    closeMobileNavBtn?.addEventListener('click', () => {
      mobileNavDrawer.classList.remove('active');
      document.body.style.overflow = '';
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Newsletter Subscription Simulation
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail')?.value;
      if (email) {
        if (typeof showToast === 'function') {
          showToast(`Welcome to the Atelier, ${email}!`);
        } else {
          alert('Thank you for subscribing to LE CROCHET editorial letters.');
        }
        newsletterForm.reset();
      }
    });
  }

  // Currency Switcher Simulation
  const currencySelector = document.getElementById('currencySelector');
  if (currencySelector) {
    currencySelector.addEventListener('change', (e) => {
      if (typeof showToast === 'function') {
        showToast(`Currency updated to ${e.target.value}`);
      }
    });
  }
});
