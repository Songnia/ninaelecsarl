import React from 'react'
import './HowItWorksPage.css'

import starLime from '../assets/svg/star-lime.svg'
import starPurple from '../assets/svg/star-purple.svg'
import step1 from '../assets/img/blog_featured_1.svg'
import step2 from '../assets/img/blog_featured_2.svg'
import step3 from '../assets/img/blog_featured_3.svg'
import step4 from '../assets/img/blog_featured_4.svg'
import step5 from '../assets/img/service_digital_design.svg'

const steps = [
    { id: 1, title: 'Étude Préliminaire', desc: 'Analyse des besoins du client et étude de faisabilité technique du projet.', img: step1 },
    { id: 2, title: 'Conception & Plans', desc: 'Élaboration des plans détaillés (architecture ou électricité) et des dossiers techniques.', img: step2 },
    { id: 3, title: 'Execution & Chantier', desc: 'Lancement de la phase de réalisation avec des techniciens qualifiés et engagés.', img: step3 },
    { id: 4, title: 'Contrôle & Validation', desc: 'Tests rigoureux et vérification de la conformité aux normes en vigueur.', img: step4 },
    { id: 5, title: 'Suivi & Maintenance', desc: 'Accompagnement après livraison pour garantir la pérennité des installations.', img: step5 },
]

export default function HowItWorksPage() {
    return (
        <main id="main-content">
            {/* Hero */}
            <section className="hiw-hero section" aria-label="How it works hero" style={{ paddingTop: '8rem', textAlign: 'center' }}>
                <img src={starLime} alt="Star" className="animate-spin" style={{ position: 'absolute', top: '15%', left: '20%', width: '60px' }} />
                <img src={starPurple} alt="Star" className="animate-float" style={{ position: 'absolute', bottom: '10%', right: '15%', width: '40px' }} />
                <div className="container hiw-hero__inner">
                    <span className="hiw-hero__eyebrow" style={{ color: 'var(--accent-lime)' }}>Notre Méthodologie</span>
                    <h1 className="hiw-hero__title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--color-dark)' }}>Comment Nous <br />Garantissons <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--accent-purple)' }}>Votre Succès</span></h1>
                    <p className="hiw-hero__subtitle" style={{ maxWidth: '600px', margin: '1rem auto' }}>Chaque projet est traité avec une rigueur technique absolue pour garantir sécurité, esthétique et durabilité.</p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="hiw-timeline section section--dark" aria-label="Process timeline" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="timeline" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {steps.map((step, index) => (
                            <article key={step.id} className={`timeline-step ${index % 2 !== 0 ? 'timeline-step--reverse' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', direction: index % 2 !== 0 ? 'rtl' : 'ltr' }}>
                                <div className="timeline-step__content" style={{ direction: 'ltr' }}>
                                    <span className="timeline-step__number" style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--accent-lime)', opacity: 0.8 }}>0{step.id}</span>
                                    <h2 className="timeline-step__title" style={{ fontSize: '2rem', margin: '0.5rem 0', color: 'var(--color-white)' }}>{step.title}</h2>
                                    <p className="timeline-step__desc" style={{ color: 'var(--text-on-dark-muted)' }}>{step.desc}</p>
                                </div>

                                <div className="timeline-step__image" style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)', aspectRatio: '16/9', direction: 'ltr' }}>
                                    <img src={step.img} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
             <section className="hiw-cta section" style={{ textAlign: 'center', backgroundColor: 'var(--bg-light)', padding: '8rem 0' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'var(--fw-black)', marginBottom: 'var(--space-4)', color: 'var(--color-dark)' }}>Prêt à Démarrer ?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>Confiez votre projet à Nina Elec SARL et bénéficiez d'une expertise reconnue au Cameroun.</p>
                    <a href="/contact" className="btn btn--primary hover-lift">Demander un Devis</a>
                </div>
            </section>

        </main>
    )
}
