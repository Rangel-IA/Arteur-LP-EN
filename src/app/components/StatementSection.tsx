import React from 'react';
import { motion } from 'motion/react';
import cameraBg from '../../assets/fujifilm.webp';

export default function StatementSection() {
  return (
    <section className="arteur-statement">
      <motion.div 
        className="arteur-statement__bg" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${cameraBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        aria-hidden="true"
      />
      <div className="arteur-statement__overlay" aria-hidden="true" />
      
      <div className="arteur-statement__container">
        <motion.div 
          className="arteur-statement__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="arteur-statement__title">
            <span className="highlight">High-end</span> productions, now delivered at a fraction of the traditional investment.
          </h2>
          
          <div className="arteur-statement__grid">
            <div className="arteur-statement__item">
              <span className="arteur-statement__label">ZERO LOGISTICS</span>
              <p className="arteur-statement__text">No studio. No large crew. No risk.</p>
            </div>
            
            <div className="arteur-statement__divider" />
            
            <div className="arteur-statement__item">
              <span className="arteur-statement__label">MAXIMUM EXPERTISE</span>
              <p className="arteur-statement__text">Human curation and elite prompt engineering.</p>
            </div>
          </div>
          
          <p className="arteur-statement__final">
            HIGH-LEVEL EXECUTION FOR BRANDS THAT REFUSE THE OBVIOUS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
