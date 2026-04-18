import React from 'react'
import './FAQPage.css'

import starLime from '../assets/svg/star-lime.svg'
import starPurple from '../assets/svg/star-purple.svg'
import starYellow from '../assets/svg/star-yellow.svg'

const faqs = [
    { q: "Quels sont les délais habituels pour un projet ?", a: "Pour les études électriques, prévoyez environ 2 à 4 semaines. Les projets d'architecture d'intérieur dépendent de la surface, mais nous livrons généralement une première esquisse sous 15 jours." },
    { q: "Proposez-vous un suivi après la réalisation ?", a: "Oui, Nina Elec SARL assure un suivi technique rigoureux et peut intervenir pour la maintenance de vos installations électriques." },
    { q: "Comment fonctionne votre tarification ?", a: "Nous travaillons sur la base de devis détaillés après une étude préliminaire de vos besoins. Chaque projet est unique et facturé au juste prix." },
    { q: "Qui encadre les travaux sur le terrain ?", a: "Tous nos chantiers sont supervisés par des ingénieurs et techniciens seniors expérimentés, garantissant le respect des normes de sécurité." },
    { q: "Intervenez-vous hors de Douala ?", a: "Bien que basés à Douala, nous intervenons dans tout le Cameroun, notamment pour des projets d'envergure comme les bâtiments hospitaliers ou industriels." },
]

export default function FAQPage() {
    return (
        <main id="main-content">
            <section className="faq-hero section" aria-label="FAQ hero" style={{ paddingTop: '8rem' }}>
                <img src={starPurple} alt="Star" className="animate-float" style={{ position: 'absolute', top: '15%', right: '15%', width: '40px' }} />
                <img src={starLime} alt="Star" className="animate-spin" style={{ position: 'absolute', bottom: '20%', left: '10%', width: '60px' }} />
                <div className="container faq-hero__inner" style={{ textAlign: 'center' }}>
                    <span className="faq-hero__eyebrow" style={{ color: 'var(--accent-purple)' }}>Informations Diverses</span>
                    <h1 className="faq-hero__title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-dark)' }}>Questions <br /><span style={{ color: 'transparent', WebkitTextStroke: '1px var(--color-dark)' }}>Fréquentes</span></h1>
                    <p className="faq-hero__subtitle" style={{ maxWidth: '600px', margin: '1rem auto' }}>Découvrez tout ce qu'il faut savoir sur notre façon de travailler et nos services techniques.</p>
                </div>
            </section>

            <section className="faq-list section" aria-label="Frequently asked questions">
                <div className="container faq-list__container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="faq-accordion" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {faqs.map((faq, index) => (
                            <details key={index} className="faq-item" name="faq-accordion" style={{ backgroundColor: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                                <summary className="faq-item__question" style={{ fontWeight: 'bold', fontSize: '1.25rem', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', color: 'var(--color-dark)' }}>
                                    <h3>{faq.q}</h3>
                                    <span className="faq-item__icon" aria-hidden="true" style={{ color: 'var(--accent-lime)' }}>+</span>
                                </summary>
                                <div className="faq-item__answer" style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                                    <p>{faq.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>

                    <div className="faq-contact-card" style={{ marginTop: '4rem', padding: '3rem', backgroundColor: 'var(--color-black)', borderRadius: 'var(--radius-xl)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                        <img src={starYellow} alt="Star" className="animate-float" style={{ position: 'absolute', top: '10%', right: '5%', width: '30px' }} />
                        <h3 className="faq-contact-card__title" style={{ fontSize: '2rem', color: 'var(--color-white)', marginBottom: '1rem' }}>Besoin de plus de précision ?</h3>
                        <p className="faq-contact-card__desc" style={{ color: 'var(--text-on-dark-muted)', marginBottom: '2rem' }}>Notre équipe est à votre écoute pour toute demande spécifique.</p>
                        <a href="/contact" className="btn btn--primary">Nous Contacter</a>
                    </div>
                </div>
            </section>
        </main>
    )
}
