import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  website?: string;
  instagram?: string;
  budget: string;
  description: string;
}

export default function ContactForm() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await fetch("https://formsubmit.co/ajax/72df3f651e43fb47c1da1b4a1a5a162a", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...data,
          _subject: `Novo Projeto Arteur: ${data.company}`,
          _template: "table"
        })
      });
      setShowSuccessModal(true);
      reset();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    }
  };

  return (
    <>
      {/* ── Success Modal ─────────────────────────────────────────── */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="arteur-modal-overlay"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="arteur-modal-content"
            >
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="arteur-modal-close"
                aria-label="Fecar modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="arteur-modal-icon-wrap">
                <CheckCircle2 className="w-12 h-12 text-zinc-100" />
              </div>

              <h3 className="arteur-modal-title">Projeto Submetido.</h3>
              <p className="arteur-modal-text">
                Nossa equipe analisará as diretrizes da sua marca. Caso identifiquemos sinergia para a criação de um projeto de excelência, entraremos em contato dentro de 48 horas.
              </p>
              
              <motion.button 
                onClick={() => setShowSuccessModal(false)}
                className="arteur-subheader__cta"
                style={{ width: '100%', maxWidth: '280px' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="arteur-subheader__cta-text">Retornar ao site</span>
                <span className="arteur-subheader__cta-arrow-box">
                  <ArrowRight className="arteur-subheader__cta-icon" />
                </span>
                <span className="arteur-subheader__cta-hover-bg" aria-hidden="true" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Form Implementation ────────────────────────────────────── */}
      <form onSubmit={handleSubmit(onSubmit)} className="arteur-form">
        
        <div className="arteur-form__grid">
          <div className="arteur-form__group">
            <label className="arteur-form__label">NAME OF THE RESPONSIBLE PARTY</label>
            <input 
              {...register("name", { required: true })}
              className={`arteur-form__input ${errors.name ? 'has-error' : ''}`}
              placeholder="e.g. Alexander McQueen"
            />
            {errors.name && <span className="arteur-form__error">Obrigatório</span>}
          </div>
          
          <div className="arteur-form__group">
            <label className="arteur-form__label">BRAND / COMPANY</label>
            <input 
              {...register("company", { required: true })}
              className={`arteur-form__input ${errors.company ? 'has-error' : ''}`}
              placeholder="Your brand name"
            />
            {errors.company && <span className="arteur-form__error">Obrigatório</span>}
          </div>
        </div>

        <div className="arteur-form__group">
          <label className="arteur-form__label">CORPORATE EMAIL</label>
          <input 
            type="email"
            {...register("email", { required: true })}
            className={`arteur-form__input ${errors.email ? 'has-error' : ''}`}
            placeholder="name@company.com"
          />
          {errors.email && <span className="arteur-form__error">Obrigatório</span>}
        </div>

        <div className="arteur-form__grid">
          <div className="arteur-form__group">
            <label className="arteur-form__label">OFFICIAL WEBSITE</label>
            <input 
              type="url"
              {...register("website")}
              className="arteur-form__input"
              placeholder="https://yourbrand.com"
            />
          </div>
          
          <div className="arteur-form__group">
            <label className="arteur-form__label">INSTAGRAM PROFILE</label>
            <input 
              {...register("instagram")}
              className="arteur-form__input"
              placeholder="@yourbrand"
            />
          </div>
        </div>

        {/* ── Budget Radio Cards ───────────────────────────────────── */}
        <div className="arteur-form__group">
          <label className="arteur-form__label">EXPECTED INVESTMENT LEVEL (BUDGET): STARTER / PREMIUM / BOUTIQUE / CURATED</label>
          <div className="arteur-budget-grid">
            
            {[
              { id: 'limitado', title: 'STARTER', desc: 'The essential foundation for immediate visual impact.' },
              { id: 'premium', title: 'PREMIUM', desc: 'Consistent, high-conversion campaigns.' },
              { id: 'boutique', title: 'BOUTIQUE', desc: 'Exclusive direction with global-scale execution.' },
              { id: 'indefinido', title: 'CURATED', desc: 'A bespoke proposal developed for your brand.' },
            ].map((option) => (
              <label key={option.id} className="arteur-budget-card">
                <input 
                  type="radio" 
                  value={option.id} 
                  {...register("budget", { required: true })} 
                  className="sr-only" 
                />
                <div className="arteur-budget-card__inner">
                  <div className="arteur-budget-card__content">
                    <span className="arteur-budget-card__title">{option.title}</span>
                    <p className="arteur-budget-card__desc">{option.desc}</p>
                  </div>
                  <div className="arteur-budget-card__dot" />
                </div>
              </label>
            ))}
          </div>
          {errors.budget && <span className="arteur-form__error mt-2 block">Selecione uma opção de budget</span>}
        </div>

        <div className="arteur-form__group">
          <label className="arteur-form__label">Describe the Project Vision</label>
          <textarea 
            {...register("description", { required: true })}
            className={`arteur-form__textarea ${errors.description ? 'has-error' : ''}`}
            placeholder="What is the campaign’s primary objective, and what sets your brand apart?"
          />
          {errors.description && <span className="arteur-form__error">Obrigatório</span>}
        </div>

        <motion.button 
          type="submit"
          disabled={isSubmitting}
          className="arteur-subheader__cta"
          style={{ width: '100%', border: '1px solid rgba(233, 228, 208, 0.4)' }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          {isSubmitting ? (
            <span className="arteur-subheader__cta-text flex items-center gap-2">
              <span className="arteur-spinner" /> Processando...
            </span>
          ) : (
            <>
              <span className="arteur-subheader__cta-text">SUBMIT FOR CONSIDERATION</span>
              <span className="arteur-subheader__cta-arrow-box">
                <ArrowRight className="arteur-subheader__cta-icon" />
              </span>
            </>
          )}
          <span className="arteur-subheader__cta-hover-bg" aria-hidden="true" />
        </motion.button>
        
        <p className="arteur-form__footer-text">
          APPLICATIONS ARE REVIEWED WEEKLY.
        </p>
      </form>
    </>
  );
}
