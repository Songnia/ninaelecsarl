import React from 'react'
import { Link } from 'react-router-dom'
import './CTASection.css'

// SVGs
import ctaBadge from '../../assets/svg/cta-badge.svg'
import starLime from '../../assets/svg/star-lime.svg'
import starYellow from '../../assets/svg/star-yellow.svg'

export default function CTASection() {
    return (
        <section className="cta-section section section--dark" aria-label="Call to action" style={{ position: 'relative', overflow: 'hidden', padding: '10rem 0' }}>
            {/* Background texture */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.04, mixBlendMode: 'multiply', margin: 0 }} aria-hidden="true" />

            {/* Decorative elements */}
            <img src={ctaBadge} alt="Badge" className="animate-spin" style={{ position: 'absolute', top: '10%', left: '5%', width: '140px', color: 'var(--color-lime)' }} />

            <img src={starLime} alt="Star" className="animate-float" style={{ position: 'absolute', top: '15%', right: '10%', width: '50px' }} />

            <img src={starYellow} alt="Star" className="animate-float" style={{ position: 'absolute', bottom: '20%', left: '20%', width: '30px', animationDelay: '1s' }} />

            <div className="container cta-section__inner" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                <div className="cta-section__content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <span className="cta-section__eyebrow" style={{ color: 'var(--accent-yellow)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Prêt à démarrer ?</span>

                    <h2 className="cta-section__title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Parlons de votre<br />
                        <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--accent-lime)' }}>Prochain Grand Projet</span>
                    </h2>

                    <p className="cta-section__subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-on-dark-muted)', marginBottom: '3rem' }}>
                        Qu'il s'agisse d'une installation électrique complexe, d'un aménagement architectural ou d'une étude technique, notre équipe est prête à intervenir.
                    </p>

                    <div className="cta-section__actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn--primary hover-lift">
                            Lancer un Projet
                        </Link>
                        <Link to="/services" className="btn btn--outline hover-lift" style={{ color: 'var(--text-on-dark)', borderColor: 'var(--text-on-dark)' }}>
                            Explorer nos Services
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
