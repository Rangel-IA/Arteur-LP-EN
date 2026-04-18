import React from 'react';
import { motion } from 'motion/react';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="aplicacao" className="arteur-contact" aria-label="Qualificação de Marca">
      
      {/* Decorative vertical lines / background elements */}
      <div className="arteur-contact__bg-line" style={{ left: '10%' }} />
      <div className="arteur-contact__bg-line" style={{ right: '10%' }} />

      <div className="arteur-contact__container">
        
        <header className="arteur-contact__header">
          <motion.div
            className="arteur-contact__header-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="arteur-contact__eyebrow">Selectivity</span>
            <h2 className="arteur-contact__title">
              Only Projects <br />
              That <span className="arteur-contact__title-italic">Challenge the Obvious.</span>
            </h2>
          </motion.div>

          <motion.div
            className="arteur-contact__header-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="arteur-contact__description">
              Our time and talent are reserved exclusively for brands seeking to transcend the ordinary. We hand-select our clients to ensure an unmatched level of delivery. Submit your project for our consideration.
            </p>
          </motion.div>
        </header>

        <motion.div 
          className="arteur-contact__form-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtle noise/texture container for the form */}
          <div className="arteur-contact__form-inner">
            <ContactForm />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
