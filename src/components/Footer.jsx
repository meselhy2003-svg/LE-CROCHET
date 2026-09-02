import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="minimal-atelier-footer" aria-label="Site Footer">
      <div className="container">
        <div className="minimal-footer-inner">
          {/* Centered Brand with Logo before LE CROCHET */}
          <div className="minimal-footer-brand-wrap">
            <img
              src="/logo.png"
              alt="LE CROCHET Logo"
              className="minimal-footer-logo"
            />
            <h2 className="minimal-footer-brand">LE CROCHET</h2>
          </div>


          {/* Slogan */}
          <p className="minimal-footer-slogan">Fait avec amour à Ismaïlia.</p>

          {/* Centered Navigation Links */}
          <nav className="minimal-footer-links" aria-label="Legal and Press Links">
            <a href="#mentions-legales" className="minimal-footer-link">Mentions Légales</a>
            <a href="#confidentialite" className="minimal-footer-link">Confidentialité</a>
            <a href="#presse" className="minimal-footer-link">Presse</a>
            <a href="#carrieres" className="minimal-footer-link">Carrières</a>
          </nav>

          {/* Social Icons Row: Instagram, Facebook, WhatsApp */}
          <div className="minimal-footer-socials" aria-label="Social Channels">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-footer-social-btn"
              aria-label="Visit our Instagram"
              title="Instagram"
            >
              <Instagram size={18} strokeWidth={1.9} />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-footer-social-btn"
              aria-label="Visit our Facebook"
              title="Facebook"
            >
              <Facebook size={18} strokeWidth={1.9} />
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-footer-social-btn"
              aria-label="Contact us on WhatsApp"
              title="WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>

          </div>

          {/* Copyright Line */}
          <p className="minimal-footer-copyright">
            © 2026 LE CROCHET. L'art de la boulangerie française.
          </p>
        </div>
      </div>
    </footer>
  );
}
