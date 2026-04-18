import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function SubheaderSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Subtle parallax effect on the background typography
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '20%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0.4]);

  return (
    <section 
      ref={containerRef}
      className="arteur-subheader"
      aria-label="Proposta de Valor — ARTEUR"
    >
      {/* ── Background Decorative Typography ──────────────────────────── */}
      <motion.div 
        className="arteur-subheader__bg-text" 
        style={{ y: bgY }}
        aria-hidden="true"
      >
        MÉTIER
      </motion.div>

      <div className="arteur-subheader__container">
        <motion.div 
          className="arteur-subheader__content"
          style={{ opacity: opacityFade }}
        >
          {/* ── Left Column: Editorial Statement ──────────────────────── */}
          <div className="arteur-subheader__statement-wrap">
            <span className="arteur-subheader__dropcap" aria-hidden="true">W</span>
            <p className="arteur-subheader__statement">
              e bring together <strong className="highlight">two decades of international experience</strong> in <em className="italic">fashion photography</em>, advanced <strong className="highlight">prompt engineering</strong>, and <strong className="highlight">business strategy</strong> to create far more than high-performing creatives: <em className="italic highlight">distinctive, editorial-grade content</em>. A sublime aesthetic aligned with the principles of <strong className="highlight">high-performance positioning</strong> — across organic and paid traffic alike — tailored for brands that demand, and deserve, the <strong className="highlight">extraordinary</strong>.
            </p>
          </div>

          {/* ── Right Column: CTA & Divider ───────────────────────────── */}
          <div className="arteur-subheader__action-wrap">
            <div className="arteur-subheader__divider" aria-hidden="true" />
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="arteur-subheader__cta-container"
            >
              <a 
                href="#aplicacao"
                className="arteur-subheader__cta"
              >
                <span className="arteur-subheader__cta-text">ELEVATE YOUR BRAND</span>
                <span className="arteur-subheader__cta-arrow-box">
                  <ChevronRight className="arteur-subheader__cta-icon" />
                </span>
                <span className="arteur-subheader__cta-hover-bg" aria-hidden="true" />
              </a>
            </motion.div>
            
            <p className="arteur-subheader__caption">
              Curadoria restrita. Vagas limitadas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
