import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import andreImg from '../../assets/andre_rangel.webp';
import stefanoImg from '../../assets/stefano_raphael.webp';

export default function FoundersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax for images
  const yAndre = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yStefano = useTransform(scrollYProgress, [0, 1], ["5%", "-10%"]);

  return (
    <section 
      id="fundadores" 
      ref={sectionRef}
      className="arteur-founders"
      aria-label="Fundadores da ARTEUR"
    >
      <div className="arteur-founders__container">
        
        {/* ── Section Header ────────────────────────────────────────── */}
        <div className="arteur-founders__header">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="arteur-founders__eyebrow" aria-hidden="true">
              The Minds Behind It
            </span>
            <h2 className="arteur-founders__title">
              The Vertex Between <br />
              <span className="arteur-founders__title-accent">Strategy and Art</span>
            </h2>
          </motion.div>
        </div>

        {/* ── Founders Grid ─────────────────────────────────────────── */}
        <div className="arteur-founders__grid">
          
          {/* André Rangel */}
          <motion.article 
            className="arteur-founders__card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="arteur-founders__image-wrap">
              <motion.div 
                className="arteur-founders__image-inner"
                style={{ y: yAndre }}
              >
                <img 
                  src={andreImg} 
                  alt="André Rangel" 
                  className="arteur-founders__image"
                />
              </motion.div>
              {/* Corner decorative marks */}
              <div className="arteur-founders__frame-mark top-left" />
              <div className="arteur-founders__frame-mark bottom-right" />
            </div>

            <div className="arteur-founders__content">
              <h3 className="arteur-founders__name">André Rangel</h3>
              <p className="arteur-founders__role">
                Business Architect &amp; AI Strategist
              </p>
              <div className="arteur-founders__divider" aria-hidden="true" />
              <p className="arteur-founders__bio">
                A business strategist and architect of intelligent systems, André brings together expertise in prompt engineering and UX/UI with the technical rigor of growth consulting and a high-end aesthetic. His work extends far beyond the visual: he develops proprietary solutions and automation flows that transform design into a scalable, measurable sales asset.
              </p>
            </div>
          </motion.article>

          {/* Stefano Raphael - offset downwards for asymmetry */}
          <motion.article 
            className="arteur-founders__card arteur-founders__card--offset"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="arteur-founders__image-wrap">
              <motion.div 
                className="arteur-founders__image-inner"
                style={{ y: yStefano }}
              >
                <img 
                  src={stefanoImg} 
                  alt="Stefano Raphael" 
                  className="arteur-founders__image"
                />
              </motion.div>
              <div className="arteur-founders__frame-mark top-right" />
              <div className="arteur-founders__frame-mark bottom-left" />
            </div>

            <div className="arteur-founders__content">
              <h3 className="arteur-founders__name">Stefano Raphael</h3>
              <p className="arteur-founders__role">
                Visual Director &amp; AI Image Synthesis Specialist
              </p>
              <div className="arteur-founders__divider" aria-hidden="true" />
              <p className="arteur-founders__bio">
                With two decades at the forefront of international fashion photography, Stefano brings together optical sensitivity, cinematic lighting, and precision engineering. He does not merely command AI; he directs it as an unlimited arsenal, creating setups and compositions that only a master of light could conceive. His signature is the perfect synthesis of the soul of classical photography and the power of the generative avant-garde.
              </p>
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
