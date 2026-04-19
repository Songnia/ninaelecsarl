import React from 'react'
import './ServicesPage.css'

// Assets
import starLime from '../assets/svg/star-lime.svg'
import starYellow from '../assets/svg/star-yellow.svg'
import formation1 from '../assets/branding/formation-1.webp'
import formation2 from '../assets/branding/formation-2.webp'
import formation3 from '../assets/branding/formation-3.webp'
import formationLatest from '../assets/branding/formation-latest.webp'
import heroImage from '../assets/branding/hero-bg.webp'

const services = [
    { id: 'svc-detail-1', title: 'Génie Électrique', tag: 'Expertise', img: formation2, description: 'Conception et réalisation de projets électriques complets. Nous intervenons en courant fort (électricité générale) et courant faible (télécoms, sécurité, domotique).', features: ['Installations Industrielles & Tertiaires', 'Bâtiments Hospitaliers (ex: R+1+SS)', 'Maintenance & Mise aux Normes'] },
    { id: 'svc-detail-2', title: 'Architecture d\'Intérieur', tag: 'Conception', img: formation1, description: 'Aménagement et optimisation d\'espaces intérieurs. Nous créons des environnements fonctionnels et esthétiques adaptés à vos besoins résidentiels ou professionnels.', features: ['Design d\'Espace', 'Plans d\'Aménagement', 'Conseil en Matériaux'] },
    { id: 'svc-detail-3', title: 'Formation Technique', tag: 'Savoir-Faire', img: formationLatest, description: 'Transmission de compétences techniques pointues. Nous proposons des modules de formation pour techniciens et professionnels du secteur.', features: ['Formation en Électricité', 'Modules Pratiques', 'Certification de Compétences'] },
    { id: 'svc-detail-4', title: 'Bureau d\'Études', tag: 'Ingénierie', img: formation3, description: 'Analyse technique approfondie et études de prix. Nous réalisons les dossiers d\'exécution et le suivi technique de chantiers complexes.', features: ['Études de Faisabilité', 'Plans d\'Exécution', 'Audit & Conseil Technique'] },
]

export default function ServicesPage() {
    return (
        <main id="main-content">
            {/* Page Hero */}
            <section className="services-hero section" aria-label="Services page hero" style={{ paddingTop: '10rem' }}>
                <img src={starLime} alt="Star" className="animate-spin" style={{ position: 'absolute', top: '10%', right: '5%', width: '60px' }} />
                <img src={starYellow} alt="Star" className="animate-float" style={{ position: 'absolute', bottom: '15%', left: '8%', width: '40px' }} />

                <div className="container services-hero__inner">
                    <div className="services-hero__text animate-fade-in">
                        <span className="services-hero__eyebrow">Nos Compétences</span>
                        <h1 className="services-hero__title">
                            L'Ingénierie au <br />
                            <em className="text-outline" style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-lime)' }}>Sommet</em>
                        </h1>
                        <p className="services-hero__subtitle" style={{ maxWidth: '500px' }}>
                            Bureau d'études pluridisciplinaire basé à Douala, nous apportons des solutions techniques innovantes en électricité, architecture et formation.
                        </p>
                    </div>
                    <div className="services-hero__image animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <img src={heroImage} alt="Team collaborating" className="asset-img" style={{ borderRadius: 'var(--radius-2xl)', aspectRatio: '4/3' }} />
                    </div>
                </div>
            </section>

            {/* Service List */}
            <section className="services-list section section--dark" aria-label="Liste des services">
                <div className="container">
                    <h2 className="services-list__title text-center" style={{ textAlign: 'center' }}>Explorez nos Offres</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {services.map((svc, i) => (
                            <article key={svc.id} id={svc.id} className={`service-row hover-lift ${i % 2 !== 0 ? 'service-row--reverse' : ''}`} style={{ backgroundColor: 'var(--color-black)', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', padding: 0, border: '1px solid #222' }}>
                                <div className="service-row__image" style={{ height: '100%', minHeight: '300px' }}>
                                    <img src={svc.img} alt={svc.title} className="asset-img" style={{ height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="service-row__content" style={{ padding: '4rem 3rem' }}>
                                    <span className="service-row__tag" style={{ color: 'var(--color-lime)', fontWeight: 'bold' }}>{svc.tag}</span>
                                    <h3 className="service-row__title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{svc.title}</h3>
                                    <p className="service-row__desc" style={{ color: 'var(--text-on-dark-muted)', marginBottom: '2rem' }}>{svc.description}</p>

                                    <ul className="service-row__features" style={{ listStyle: 'none', padding: 0, marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {svc.features.map((f) => (
                                            <li key={f} className="service-row__feature" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-white)' }}>
                                                <span style={{ color: 'var(--color-purple)' }}>●</span> {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="/contact" className="btn btn--outline" style={{ borderColor: 'var(--color-lime)', color: 'var(--color-lime)' }}>Demander un Devis</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process section */}
            <section className="services-process section" aria-label="Notre processus" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="services-process__title" id="how-it-works" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-dark)' }}>Notre Démarche</h2>
                    <p className="services-process__subtitle" style={{ margin: '1rem auto 4rem', fontSize: '1.25rem', maxWidth: '600px', color: 'var(--color-gray)' }}>Une méthodologie rigoureuse pour garantir la conformité et la sécurité de chaque installation.</p>

                    <div className="services-process__steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', textAlign: 'left' }}>
                        {[
                            { title: 'Analyse Initiale', desc: 'Étude des besoins et définition des paramètres techniques du projet.' },
                            { title: 'Conception Technique', desc: 'Élaboration des plans détaillés et des dossiers d\'exécution.' },
                            { title: 'Mise en Œuvre', desc: 'Lancement des travaux avec une équipe de techniciens engagés.' },
                            { title: 'Maintenance', desc: 'Suivi post-réalisation et interventions de maintenance spécialisée.' }
                        ].map((step, i) => (
                            <div key={i} className="process-step" style={{ padding: '2rem', backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)' }}>
                                <span className="process-step__number" style={{ color: 'var(--color-purple-light)', fontSize: '3rem', fontWeight: '900', display: 'block', marginBottom: '1rem' }}>0{i + 1}</span>
                                <h4 className="process-step__title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-dark)' }}>{step.title}</h4>
                                <p className="process-step__desc" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
