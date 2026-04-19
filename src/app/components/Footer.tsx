import React from 'react';
import footerLogo from '../../assets/logo_footer.png';

export default function Footer() {
  return (
    <footer className="arteur-footer">
      {/* Decorative large logo watermark */}
      <div className="arteur-footer__watermark" aria-hidden="true">
        ARTEUR
      </div>

      <div className="arteur-footer__container">
        <div className="arteur-footer__main">
          
          {/* ── Brand Column ─────────────────────────────────────────── */}
          <div className="arteur-footer__col-brand">
            <img src={footerLogo} alt="ARTEUR" className="arteur-footer__logo" />
            <p className="arteur-footer__tagline">
              An elite visual production boutique for extraordinary brands.
            </p>
          </div>

          {/* ── About Column ─────────────────────────────────────────── */}
          <div className="arteur-footer__col-about">
            <h4 className="arteur-footer__col-label">WHO WE ARE</h4>
            <p className="arteur-footer__about-text">
              We bring together 20+ years of photographic mastery and advanced AI engineering. We do not just create images; we develop luxury-grade visual assets that solve complex branding and scale challenges.
            </p>
          </div>

          {/* ── Nav Column ──────────────────────────────────────────── */}
          <nav className="arteur-footer__col-nav">
            <h4 className="arteur-footer__col-label">NAVIGATION:</h4>
            <ul className="arteur-footer__nav-list">
              <li><a href="#manifesto">The Method</a></li>
              <li><a href="#fundadores">The Duo</a></li>
              <li><a href="#portifolio">Portfolio</a></li>
            </ul>
          </nav>

        </div>

        {/* ── Footer Bottom ──────────────────────────────────────────── */}
        <div className="arteur-footer__bottom">
          <div className="arteur-footer__divider" />
          <div className="arteur-footer__bottom-content">
            <p className="arteur-footer__copyright">
              © 2026 ARTEUR — ALL RIGHTS RESERVED.
            </p>
            <div className="arteur-footer__labels">
              <span className="arteur-footer__label-pill">Tags: BOUTIQUE SERVICES ;</span>
              <span className="arteur-footer__label-pill">AI PRECISION</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
