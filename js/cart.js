/**
 * LE CROCHET - Cart & Product Interaction Manager
 */

const PRODUCTS_DATA = [
  {
    id: 'lc-01',
    name: 'The Aurelia Woven Tote',
    category: 'bags',
    categoryName: 'Handmade Bags',
    price: 185,
    tag: 'Bestseller',
    badgeClass: 'badge-new',
    yarn: '100% Unbleached Organic Cotton',
    hours: '14 Hours of Hand-Needlecraft',
    description: 'A structural yet supple tote woven with a dense honeycomb crochet pattern and braided leather handles. Ideal for coastal afternoons or city strolls.',
    dimensions: '38cm x 32cm x 12cm',
    color: 'Sand Beige',
    colorHex: '#D9C8B4'
  },
  {
    id: 'lc-02',
    name: 'Seraphina Openwork Cardigan',
    category: 'wearables',
    categoryName: 'Wearables & Tops',
    price: 260,
    tag: 'Limited Edition',
    badgeClass: 'badge-limited',
    yarn: 'Peruvian Baby Alpaca & Silk',
    hours: '22 Hours of Artisanal Weaving',
    description: 'An airy, ethereal open-stitch cardigan designed for effortless layering. Features scalloped ribbed cuffs and horn buttons.',
    dimensions: 'Relaxed Fit (S/M, M/L)',
    color: 'Terracotta Rust',
    colorHex: '#C27B66'
  },
  {
    id: 'lc-03',
    name: 'Flora Raffia Sun Bucket',
    category: 'accessories',
    categoryName: 'Accessories',
    price: 95,
    tag: 'Summer 26',
    badgeClass: 'badge-new',
    yarn: 'Madagascar Raffia & Pima Cotton',
    hours: '8 Hours of Precision Craft',
    description: 'Sculptural brim with breathable crochet crown. Naturally water-resistant, packable, and finished with a delicate ribbon stitch.',
    dimensions: 'One Size (56-58cm brim)',
    color: 'Natural Straw',
    colorHex: '#E2CBA8'
  },
  {
    id: 'lc-04',
    name: 'Celeste Scalloped Halter',
    category: 'wearables',
    categoryName: 'Wearables & Tops',
    price: 140,
    tag: 'Artisan Pick',
    badgeClass: 'badge-bespoke',
    yarn: 'Fine Mercerized Cotton',
    hours: '11 Hours of Intricate Hooking',
    description: 'Delicate floral motif crochet halter with adjustable cross-back ties and contoured vintage scalloped edging.',
    dimensions: 'Custom Tie Sizing',
    color: 'Ivory Cream',
    colorHex: '#F4ECE1'
  },
  {
    id: 'lc-05',
    name: 'Monstera Botanical Tapestry',
    category: 'decor',
    categoryName: 'Home Decor',
    price: 220,
    tag: 'Heirloom',
    badgeClass: 'badge-limited',
    yarn: 'Raw Chunky Wool & Linen Cord',
    hours: '18 Hours of Fiber Weaving',
    description: 'A textured statement wall hanging suspended from hand-turned walnut drift timber. Adds tactile warmth to any sanctuary.',
    dimensions: '60cm x 95cm',
    color: 'Sage & Forest',
    colorHex: '#8A9A86'
  },
  {
    id: 'lc-06',
    name: 'Solstice Ribbed Throw',
    category: 'decor',
    categoryName: 'Home Decor',
    price: 310,
    tag: 'Bespoke',
    badgeClass: 'badge-bespoke',
    yarn: 'Superfine Merino & Cashmere',
    hours: '28 Hours of Single-Artisan Loom',
    description: 'Ultra-plush heavyweight waffle crochet throw with raw fringe accents. Warm, tactile, and designed to last generations.',
    dimensions: '140cm x 180cm',
    color: 'Espresso Noir',
    colorHex: '#26201D'
  }
];

// Cart State
let cart = [];

// Initialize Cart
function initCart() {
  const savedCart = localStorage.getItem('le_crochet_cart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      cart = [];
    }
  }
  updateCartUI();
  setupProductGrid();
  setupCartListeners();
  setupFilterTabs();
  setupQuickView();
  setupBespokeForm();
}

// Save Cart
function saveCart() {
  localStorage.setItem('le_crochet_cart', JSON.stringify(cart));
  updateCartUI();
}

// Add Item to Cart
function addToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      yarn: product.yarn,
      colorHex: product.colorHex,
      qty: 1
    });
  }

  saveCart();
  showToast(`Added "${product.name}" to your bag`);
  openCartDrawer();
}

// Change Quantity
function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart();
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
}

// Update UI
function updateCartUI() {
  const cartCountBadges = document.querySelectorAll('.cart-count');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const freeShippingBar = document.getElementById('freeShippingBar');
  const freeShippingText = document.getElementById('freeShippingText');

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

  cartCountBadges.forEach(badge => {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  });

  if (cartSubtotal) {
    cartSubtotal.textContent = `$${subtotal.toLocaleString()}`;
  }

  // Free shipping threshold ($150)
  if (freeShippingBar && freeShippingText) {
    const threshold = 150;
    if (subtotal >= threshold) {
      freeShippingBar.style.width = '100%';
      freeShippingText.innerHTML = '✨ You unlocked <strong>Complimentary Worldwide Shipping</strong>!';
    } else {
      const remaining = threshold - subtotal;
      const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
      freeShippingBar.style.width = `${pct}%`;
      freeShippingText.innerHTML = `Add <strong>$${remaining}</strong> more for free worldwide shipping`;
    }
  }

  // Render items in drawer
  if (cartItemsList) {
    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <p style="font-size: 1.1rem; color: #fff; margin-bottom: 8px;">Your bag is empty</p>
          <p style="font-size: 0.85rem;">Discover our handcrafted collections to begin your order.</p>
        </div>
      `;
    } else {
      cartItemsList.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-thumb" style="border-left: 3px solid ${item.colorHex};">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="${item.colorHex}" stroke-width="1.5">
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M12 3a9 9 0 0 1 9 9"></path>
              <path d="M7 12a5 5 0 0 1 5-5"></path>
            </svg>
          </div>
          <div class="cart-item-details">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">$${item.price} each</div>
            <div class="cart-item-controls">
              <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
              <span style="font-size: 0.85rem; min-width: 18px; text-align: center;">${item.qty}</span>
              <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
              <button onclick="removeFromCart('${item.id}')" style="margin-left: auto; color: var(--text-muted); font-size: 0.75rem; text-decoration: underline;">Remove</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

// Drawer Controls
function openCartDrawer() {
  document.getElementById('cartDrawerOverlay')?.classList.add('active');
  document.getElementById('cartDrawer')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cartDrawerOverlay')?.classList.remove('active');
  document.getElementById('cartDrawer')?.classList.remove('active');
  document.body.style.overflow = '';
}

function setupCartListeners() {
  document.getElementById('openCartBtn')?.addEventListener('click', openCartDrawer);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cartDrawerOverlay')?.addEventListener('click', closeCartDrawer);

  document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Your bag is currently empty.');
      return;
    }
    showToast('Proceeding to secure checkout...');
    setTimeout(() => {
      alert('Thank you for shopping at LE CROCHET! In this preview, your order of ' + cart.length + ' item(s) has been simulated.');
      cart = [];
      saveCart();
      closeCartDrawer();
    }, 800);
  });
}

// Setup Product Grid Cards with SVG illustrations
function setupProductGrid() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS_DATA.map(p => `
    <article class="product-card" data-category="${p.category}">
      <div class="product-img-wrap">
        <span class="badge-tag ${p.badgeClass}">${p.tag}</span>
        
        <!-- Elegant SVG Motif of Crochet Texture & Hook -->
        <svg class="crochet-art" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="75" stroke="${p.colorHex}" stroke-width="2" stroke-dasharray="6 4" opacity="0.4"/>
          <circle cx="100" cy="100" r="50" stroke="${p.colorHex}" stroke-width="2.5" stroke-dasharray="8 6" opacity="0.7"/>
          <circle cx="100" cy="100" r="25" stroke="${p.colorHex}" stroke-width="3" opacity="0.9"/>
          <path d="M60 140 C 70 80, 130 80, 140 140" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.6"/>
          <path d="M40 100 Q 100 30 160 100" stroke="${p.colorHex}" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.5"/>
          <line x1="45" y1="155" x2="155" y2="45" stroke="var(--text-secondary)" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
          <path d="M150 40 Q 160 35 155 45" stroke="var(--accent-terracotta)" stroke-width="3" fill="none"/>
        </svg>

        <div class="product-actions-hover">
          <button class="quick-view-btn" onclick="openQuickView('${p.id}')">Quick View</button>
        </div>
      </div>

      <div class="product-info">
        <span class="product-category">${p.categoryName}</span>
        <h3 class="product-title">${p.name}</h3>
        <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 12px;">${p.yarn}</p>
        
        <div class="product-details-row">
          <span class="product-price">$${p.price}</span>
          <button class="product-add-btn" onclick="addToCart('${p.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12h14"></path>
            </svg>
            Add to Bag
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Category Tabs Filter
function setupFilterTabs() {
  const tabs = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.product-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Quick View Modal
function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const modalImgWrap = document.getElementById('modalImageCol');
  const modalDetails = document.getElementById('modalDetailsCol');

  if (modalImgWrap) {
    modalImgWrap.innerHTML = `
      <div style="text-align: center;">
        <svg width="180" height="180" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="${product.colorHex}" stroke-width="2.5" stroke-dasharray="6 4" opacity="0.5"/>
          <circle cx="100" cy="100" r="50" stroke="${product.colorHex}" stroke-width="3" opacity="0.9"/>
          <path d="M40 100 Q 100 20 160 100" stroke="var(--accent-gold)" stroke-width="2" fill="none"/>
          <line x1="45" y1="155" x2="155" y2="45" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <p style="margin-top: 14px; font-size: 0.8rem; color: var(--text-muted); letter-spacing: 0.1em; text-transform: uppercase;">Color: ${product.color}</p>
      </div>
    `;
  }

  if (modalDetails) {
    modalDetails.innerHTML = `
      <span class="product-category">${product.categoryName}</span>
      <h2 style="font-family: var(--font-serif); font-size: 2rem; margin-bottom: 8px;">${product.name}</h2>
      <div style="font-size: 1.4rem; color: var(--accent-gold); font-weight: 600; margin-bottom: 16px;">$${product.price}</div>
      <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 20px; line-height: 1.6;">${product.description}</p>
      
      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 14px; margin-bottom: 24px; font-size: 0.85rem; display: flex; flex-direction: column; gap: 6px;">
        <div><strong>Craft Time:</strong> ${product.hours}</div>
        <div><strong>Composition:</strong> ${product.yarn}</div>
        <div><strong>Dimensions:</strong> ${product.dimensions}</div>
      </div>

      <button class="btn btn-primary" onclick="addToCart('${product.id}'); closeQuickView();" style="width: 100%;">
        Add to Bag • $${product.price}
      </button>
    `;
  }

  modal?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  document.getElementById('quickViewModal')?.classList.remove('active');
  document.body.style.overflow = '';
}

function setupQuickView() {
  document.getElementById('closeQuickViewBtn')?.addEventListener('click', closeQuickView);
  document.getElementById('quickViewModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'quickViewModal') closeQuickView();
  });
}

// Bespoke Commission Form Handler
function setupBespokeForm() {
  const form = document.getElementById('bespokeForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('clientName')?.value || 'Client';
    showToast(`Thank you, ${name}! Your bespoke inquiry has been received.`);
    form.reset();
  });
}

// Toast Display
function showToast(message) {
  let toast = document.getElementById('siteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Expose globals for onclick handlers
window.addToCart = addToCart;
window.changeQty = changeQty;
window.removeFromCart = removeFromCart;
window.openQuickView = openQuickView;
window.closeQuickView = closeQuickView;

document.addEventListener('DOMContentLoaded', initCart);
