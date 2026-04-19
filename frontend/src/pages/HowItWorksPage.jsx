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
    { id: 1, title: 'Analyse & Étude', desc: 'Expertise technique approfondie pour identifier les besoins réels et les contraintes réglementaires de votre projet.', img: step1 },
    { id: 2, title: 'Conception & Ingénierie', desc: 'Élaboration de plans d\'exécution précis et de solutions architecturales ou électriques optimisées.', img: step2 },
    { id: 3, title: 'Coordination & Travaux', desc: 'Pilotage rigoureux du chantier avec des techniciens spécialisés respectant les délais et les budgets.', img: step3 },
    { id: 4, title: 'Audit & Mise aux Normes', desc: 'Contrôles de conformité stricts pour garantir la sécurité totale et la longévité de vos installations.', img: step4 },
    { id: 5, title: 'Suivi & Expertise', desc: 'Accompagnement post-livraison et maintenance préventive pour assurer une performance durable.', img: step5 },
]

export default function HowItWorksPage() {
    return (
        <main id="main-content">
            {/* Hero */}
            <section className="hiw-hero section" aria-label="How it works hero" style={{ paddingTop: '8rem', textAlign: 'center' }}>
                <img src={starLime} alt="Star" className="animate-spin" style={{ position: 'absolute', top: '15%', left: '20%', width: '60px' }} />
                <img src={starPurple} alt="Star" className="animate-float" style={{ position: 'absolute', bottom: '10%', right: '15%', width: '40px' }} />
                <div className="container hiw-hero__inner">
                    <span className="hiw-hero__eyebrow" style={{ color: 'var(--accent-lime)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold' }}>Notre Méthodologie</span>
                    <h1 className="hiw-hero__title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--color-dark)', fontWeight: '900' }}>
                        Une Approche <br />Pluridisciplinaire <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--accent-purple)' }}>Maîtrisée</span>
                    </h1>
                    <p className="hiw-hero__subtitle" style={{ maxWidth: '600px', margin: '1.5rem auto', fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                        De la conception à la maintenance, nous appliquons une rigueur d'ingénierie absolue pour chaque projet d'électricité et d'architecture.
                    </p>
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
