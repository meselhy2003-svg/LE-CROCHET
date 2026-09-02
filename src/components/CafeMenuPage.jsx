import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CoffeeBean from './CoffeeBean';
import { Flame, Snowflake, Cake, Croissant, Search, Plus, ArrowLeft, Check, Sparkles } from 'lucide-react';

const MENU_CATEGORIES = [
  { id: 'all', label: 'All Creations', icon: CoffeeBean },
  { id: 'hot-drinks', label: 'Hot Drinks', icon: Flame },
  { id: 'cold-drinks', label: 'Cold Drinks', icon: Snowflake },
  { id: 'dessert', label: 'Dessert', icon: Cake },
  { id: 'bakery', label: 'Bakery', icon: Croissant },
];


const MENU_ITEMS = [
  // HOT DRINKS
  {
    id: 'cafe-hot-1',
    category: 'hot-drinks',
    name: 'Le Croissant Latte',
    tag: 'Signature Maison',
    price: 85,
    currency: 'EGP',
    desc: 'Double shot espresso infused with Tahitian vanilla bean, topped with warm flaky croissant foam and raw cane crunch.',
    highlight: 'House Specialty'
  },
  {
    id: 'cafe-hot-2',
    category: 'hot-drinks',
    name: 'Chocolat Chaud Parisien',
    tag: 'Valrhona Grand Cru',
    price: 95,
    currency: 'EGP',
    desc: 'Rich, velvet Parisian hot chocolate prepared with melted 72% Valrhona dark chocolate, chantilly, and sea salt flake.',
    highlight: 'Velvet Texture'
  },
  {
    id: 'cafe-hot-3',
    category: 'hot-drinks',
    name: 'Café Noisette Atelier',
    tag: 'Artisan Roast',
    price: 65,
    currency: 'EGP',
    desc: 'Bold double espresso gently cut with warm steamed milk foam and organic roasted hazelnut syrup.',
    highlight: 'Single Origin'
  },
  {
    id: 'cafe-hot-4',
    category: 'hot-drinks',
    name: 'Pour-Over Yirgacheffe V60',
    tag: 'Slow Drip',
    price: 75,
    currency: 'EGP',
    desc: 'Artisanal single-origin Ethiopian bean extracted by hand with subtle floral notes of bergamot and jasmine blossoms.',
    highlight: 'Pure Brew'
  },
  {
    id: 'cafe-hot-5',
    category: 'hot-drinks',
    name: 'Matcha Cérémonial Chaud',
    tag: 'Kyoto Uji Grade',
    price: 90,
    currency: 'EGP',
    desc: 'Authentic stone-ground ceremonial matcha whisked to order with creamy steamed organic oat milk.',
    highlight: 'Organic'
  },
  {
    id: 'cafe-hot-6',
    category: 'hot-drinks',
    name: 'Cortado Classique',
    tag: 'Espresso Bar',
    price: 60,
    currency: 'EGP',
    desc: 'Equal balance of concentrated ristretto espresso and textured warm milk served in a fluted glass.',
    highlight: 'Balanced'
  },

  // COLD DRINKS
  {
    id: 'cafe-cold-1',
    category: 'cold-drinks',
    name: 'Iced Spanish Atelier Latte',
    tag: 'Chilled Reserve',
    price: 85,
    currency: 'EGP',
    desc: 'Chilled espresso poured over silky condensed milk and iced froth, dusted with freshly ground Ceylon cinnamon.',
    highlight: 'Bestseller'
  },
  {
    id: 'cafe-cold-2',
    category: 'cold-drinks',
    name: 'Cold Brew Reserve 24H',
    tag: 'Steeped Cold',
    price: 75,
    currency: 'EGP',
    desc: 'Slow-dripped for 24 continuous hours through ice-cold spring water, developing rich dark cacao and fig notes.',
    highlight: 'Zero Acidity'
  },
  {
    id: 'cafe-cold-3',
    category: 'cold-drinks',
    name: 'Iced Pistachio Cream Matcha',
    tag: 'Bronte Pistachio',
    price: 95,
    currency: 'EGP',
    desc: 'Layered iced ceremonial matcha green tea crowned with thick cold cream whipped with Sicilian pistachio paste.',
    highlight: 'Signature'
  },
  {
    id: 'cafe-cold-4',
    category: 'cold-drinks',
    name: 'Sparkling Hibiscus & Wild Rose',
    tag: 'Botanical Infusion',
    price: 70,
    currency: 'EGP',
    desc: 'Egyptian Karkadeh cold infusion stirred with Damask rose water, freshly pressed lime, and chilled sparkling soda.',
    highlight: 'Refreshing'
  },
  {
    id: 'cafe-cold-5',
    category: 'cold-drinks',
    name: 'Iced Valrhona Mocha',
    tag: 'Dark Chocolate',
    price: 90,
    currency: 'EGP',
    desc: 'Hand-carved ice cubes, double espresso, cold fresh whole milk, and decadent French dark cocoa ganache.',
    highlight: 'Decadent'
  },
  {
    id: 'cafe-cold-6',
    category: 'cold-drinks',
    name: 'Atelier Citrus Espresso Tonic',
    tag: 'Sparkling Brew',
    price: 80,
    currency: 'EGP',
    desc: 'Artisanal tonic water, cold-pressed yuzu zest, and a floating crown of concentrated espresso over ice.',
    highlight: 'Crisp & Bright'
  },

  // DESSERT
  {
    id: 'cafe-dessert-1',
    category: 'dessert',
    name: 'Mille-Feuille Vanille de Tahiti',
    tag: 'Classic Patisserie',
    price: 120,
    currency: 'EGP',
    desc: 'Caramelized inverted puff pastry sheets layered with light Tahitian vanilla bean diplomate cream.',
    highlight: 'Crispy & Light'
  },
  {
    id: 'cafe-dessert-2',
    category: 'dessert',
    name: 'Tartelette Pistache & Fleur d’Oranger',
    tag: 'Artisan Tart',
    price: 110,
    currency: 'EGP',
    desc: 'Crisp sweet butter sablé shell filled with roasted pistachio praline and orange blossom infused ganache.',
    highlight: 'Sicilian Nut'
  },
  {
    id: 'cafe-dessert-3',
    category: 'dessert',
    name: 'Fondant Coulant au Chocolat Noir',
    tag: 'Molten Heart',
    price: 130,
    currency: 'EGP',
    desc: 'Baked Guanaja 70% dark chocolate cake with a molten liquid center, served with Madagascar vanilla bean cream.',
    highlight: 'Warm Lava'
  },
  {
    id: 'cafe-dessert-4',
    category: 'dessert',
    name: 'Crème Brûlée à la Lavande',
    tag: 'Provence Recipe',
    price: 105,
    currency: 'EGP',
    desc: 'Silky rich egg yolk custard subtly steeped with lavender flowers under a hand-torched crackling caramel glass.',
    highlight: 'Torched Live'
  },
  {
    id: 'cafe-dessert-5',
    category: 'dessert',
    name: 'Coffret de Macarons Parisiens (6 pcs)',
    tag: 'Hand-Piped',
    price: 140,
    currency: 'EGP',
    desc: 'Assortment of delicate almond macarons: Salted Butter Caramel, Rose Petal, Pure Pistachio, and Dark Truffle.',
    highlight: 'Gift Box'
  },
  {
    id: 'cafe-dessert-6',
    category: 'dessert',
    name: 'Basque Burnt Caramel Cheesecake',
    tag: 'San Sebastián Style',
    price: 115,
    currency: 'EGP',
    desc: 'Caramelized mahogany crust with an ultra-creamy, melt-in-the-mouth center infused with cream cheese and sea salt.',
    highlight: 'Creamy Heart'
  },

  // BAKERY
  {
    id: 'cafe-bakery-1',
    category: 'bakery',
    name: 'Croissant au Beurre d’Isigny AOP',
    tag: 'Pure French Butter',
    price: 55,
    currency: 'EGP',
    desc: 'Honeycomb interior laminated through 27 paper-thin layers of Normandy butter, baked fresh every single dawn.',
    highlight: 'Daily Fresh'
  },
  {
    id: 'cafe-bakery-2',
    category: 'bakery',
    name: 'Pain au Chocolat Bâtonnets',
    tag: 'Double Chocolate',
    price: 65,
    currency: 'EGP',
    desc: 'Crisp, featherlight golden pastry rolled around two parallel bars of semi-sweet French baking chocolate.',
    highlight: 'AOP Butter'
  },
  {
    id: 'cafe-bakery-3',
    category: 'bakery',
    name: 'Croissant aux Amandes Croustillant',
    tag: 'Double Baked',
    price: 80,
    currency: 'EGP',
    desc: 'Re-baked butter croissant saturated with orange syrup, rich almond frangipane, and toasted sliced almonds.',
    highlight: 'Rich & Nutty'
  },
  {
    id: 'cafe-bakery-4',
    category: 'bakery',
    name: 'Brioche Feuilletée au Sucre Perlé',
    tag: 'Laminated Brioche',
    price: 75,
    currency: 'EGP',
    desc: 'Spiral layered brioche dough combining flaky croissant texture with soft buttery crumb, topped with pearl sugar.',
    highlight: 'Golden Crust'
  },
  {
    id: 'cafe-bakery-5',
    category: 'bakery',
    name: 'Kardemummabulle (Cardamom Knot)',
    tag: 'Spiced Viennoiserie',
    price: 70,
    currency: 'EGP',
    desc: 'Twisted Scandinavian-French pastry infused with fresh crushed green cardamom seeds and brown sugar glaze.',
    highlight: 'Aromatic'
  },
  {
    id: 'cafe-bakery-6',
    category: 'bakery',
    name: 'Baguette Tradition au Levain Sauvage',
    tag: 'Long Fermentation',
    price: 45,
    currency: 'EGP',
    desc: '36-hour slow cold fermentation using wild natural sourdough starter, with deeply blistered crust and airy crumb.',
    highlight: 'Artisan Sourdough'
  }
];

export default function CafeMenuPage({ onBackToHome }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart, showToast } = useCart();
  const [addedItems, setAddedItems] = useState({});

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrder = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      edition: item.tag,
      image: '/logo.png'
    });
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 1800);
    showToast(`Added ${item.name} to your café tray`);
  };

  return (
    <div className="cafe-menu-page">
      {/* Top Banner Navigation */}
      <div className="cafe-menu-topbar">
        <div className="container">
          <div className="cafe-topbar-inner">
            <button
              onClick={onBackToHome}
              className="cafe-back-btn"
              aria-label="Back to LE CROCHET"
            >
              <ArrowLeft size={17} />
              <span>BACK TO LE CROCHET</span>
            </button>


            <div className="cafe-brand-badge">
              <img src="/logo.png" alt="LE CROCHET" className="cafe-brand-logo" />
              <span className="cafe-brand-name">LE CROCHET CAFÉ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="cafe-hero-header">
        <div className="container">
          <div className="cafe-header-text">
            <span className="section-tag section-tag-gold">
              <CoffeeBean size={14} />
              Boulangerie & Salon de Café
            </span>
            <h1 className="cafe-page-title">OUR CAFÉ MENU</h1>
            <p className="cafe-page-desc">
              Slow-dripped single origin coffees, organic leaf elixirs, and fresh French viennoiserie, crafted daily with authentic AOP ingredients.
            </p>
          </div>

          {/* Search & Category Filter */}
          <div className="cafe-filter-bar">
            {/* Search Input */}
            <div className="cafe-search-box">
              <Search size={17} className="cafe-search-icon" />
              <input
                type="text"
                placeholder="Search drinks, desserts, pastries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="cafe-search-input"
              />
              {searchQuery && (
                <button
                  className="cafe-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="cafe-category-pills">
              {MENU_CATEGORIES.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`cafe-cat-btn ${isActive ? 'active' : ''}`}
                  >
                    <IconComponent size={15} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="cafe-items-section">
        <div className="container">
          {filteredItems.length === 0 ? (
            <div className="cafe-no-results">
              <CoffeeBean size={32} style={{ color: 'var(--accent-gold)', marginBottom: '16px' }} />
              <h3>No creations found</h3>
              <p>Try searching for another flavor or select a different category above.</p>
            </div>
          ) : (
            <div className="cafe-items-grid">
              {filteredItems.map((item) => {
                const isJustAdded = addedItems[item.id];
                return (
                  <article key={item.id} className="cafe-item-card">
                    <div className="cafe-card-top">
                      <div className="cafe-item-badge">
                        <span className="cafe-tag">{item.tag}</span>
                        <span className="cafe-highlight">{item.highlight}</span>
                      </div>
                      <span className="cafe-price">
                        {item.price} <small>{item.currency}</small>
                      </span>
                    </div>

                    <h3 className="cafe-item-name">{item.name}</h3>
                    <p className="cafe-item-desc">{item.desc}</p>

                    <div className="cafe-card-footer">
                      <button
                        onClick={() => handleOrder(item)}
                        className={`cafe-order-btn ${isJustAdded ? 'added' : ''}`}
                        aria-label={`Add ${item.name} to order`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check size={16} />
                            <span>Added to Tray</span>
                          </>
                        ) : (
                          <>
                            <Plus size={16} />
                            <span>Add to Tray</span>
                          </>
                        )}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
