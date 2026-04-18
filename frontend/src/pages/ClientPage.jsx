import React, { useState } from 'react'
import starYellow from '../assets/svg/star-yellow.svg'
import ctaBadge from '../assets/svg/cta-badge.svg'

import field1 from '../assets/branding/field-1.webp'
import field2 from '../assets/branding/field-2.webp'
import field3 from '../assets/branding/field-3.webp'
import field4 from '../assets/branding/field-4.webp'

import team1 from '../assets/img/team_1.png'
import team2 from '../assets/img/team_2.png'
import team3 from '../assets/img/team_3.png'

// Sample Static Data
const STATIC_CLIENTS = [
    {
        id: 'client-1',
        title: 'Centre Hospitalier (R+1+SS)',
        category: 'Génie Électrique',
        imageUrl: field1,
        testimonialQuote: 'Nina Elec SARL a démontré un professionnalisme exemplaire lors de l\'installation électrique de notre complexe hospitalier à l\'Ouest.',
        testimonialAuthor: 'Directeur Technique',
        testimonialRole: 'Secteur Hospitalier'
    },
    {
        id: 'client-2',
        title: 'Résidence de Standing',
        category: 'Architecture d\'Intérieur',
        imageUrl: field2,
        testimonialQuote: 'Une transformation architecturale impressionnante qui allie modernité et confort thermique.',
        testimonialAuthor: 'Client Privé',
        testimonialRole: 'Immobilier'
    },
    {
        id: 'client-3',
        title: 'Installation Industrielle',
        category: 'Électricité Générale',
        imageUrl: field3,
        testimonialQuote: 'Expertise technique irréprochable sur la mise aux normes de nos armoires électriques.',
        testimonialAuthor: 'Chef de Chantier',
        testimonialRole: 'Secteur Industriel'
    },
    {
        id: 'client-4',
        title: 'Projet d\'Aménagement',
        category: 'Bureau d\'Études',
        imageUrl: field4,
        testimonialQuote: 'Des plans précis qui nous ont permis d\'optimiser chaque mètre carré de nos bureaux.',
        testimonialAuthor: 'Gestionnaire de Patrimoine',
        testimonialRole: 'Tertiaire'
    }
];

export default function ClientPage() {
    const [clients] = useState(STATIC_CLIENTS)
    const [loading] = useState(false)

    // Extract testimonials from clients that have a quote
    const testimonials = clients
        .filter(c => c.testimonialQuote && c.testimonialQuote.trim() !== '')
        .slice(0, 3) // limit to 3 to map to the 3 team images for now

    const teamImages = [team1, team2, team3]

    return (
        <main id="main-content">

            {/* Portfolio Hero */}
            <section className="client-hero section" aria-label="Client portfolio hero" style={{ paddingTop: '8rem', textAlign: 'center' }}>
                <img src={starYellow} alt="Star" className="animate-float" style={{ position: 'absolute', top: '25%', left: '10%', width: '50px' }} />
                <div className="container client-hero__inner">
                    <span className="client-hero__eyebrow" style={{ color: 'var(--accent-lime)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>Nos Projets</span>
                    <h1 className="client-hero__title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--color-dark)', margin: '0.5rem 0' }}>Réalisations</h1>
                    <p className="client-hero__subtitle" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--text-secondary)' }}>Découvrez nos interventions majeures à Douala et à travers le Cameroun.</p>
                </div>
            </section>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-dark)' }}>
                    Chargement des projets...
                </div>
            ) : (
                <>
                    {/* Masonry-like Grid */}
                    <section className="client-grid section" aria-label="Portfolio grid" style={{ padding: '4rem 0' }}>
                        <div className="container">
                            <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                {clients.map((project, index) => {
                                    // Assign alternating aspect ratios to simulate masonry flow
                                    const ratio = index % 3 === 0 ? '1/1' : index % 2 === 0 ? '4/3' : '16/9';
                                    return (
                                        <article key={project.id} className="portfolio-item hover-lift" style={{ backgroundColor: 'var(--color-black)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                            <div className="portfolio-item__image-wrap" style={{ aspectRatio: ratio, overflow: 'hidden' }}>
                                                <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div className="portfolio-item__overlay" style={{ padding: '1.5rem', backgroundColor: 'var(--color-black)' }}>
                                                <span className="portfolio-item__category" style={{ fontSize: '0.8rem', color: 'var(--accent-lime)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{project.category}</span>
                                                <h3 className="portfolio-item__title" style={{ color: 'var(--color-white)', fontSize: '1.5rem', margin: '0.5rem 0 0' }}>{project.title}</h3>
                                            </div>
                                        </article>
                                    )
                                })}
                            </div>

                            <div className="client-load-more" style={{ textAlign: 'center', marginTop: '4rem' }}>
                                <button className="btn btn--outline" style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}>Voir plus de projets</button>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials */}
                    {testimonials.length > 0 && (
                        <section className="client-testimonials section section--dark" aria-label="Client testimonials" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
                            <img src={ctaBadge} alt="badge" className="animate-spin-slow" style={{ position: 'absolute', top: '10%', right: '15%', width: '100px', color: 'var(--color-purple)' }} />
                            <div className="container">
                                <h2 className="testimonials-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-white)', textAlign: 'center', marginBottom: '4rem' }}>Témoignages</h2>
                                <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                    {testimonials.map((t, index) => (
                                        <blockquote key={t.id} className="testimonial-card hover-lift" style={{ backgroundColor: '#222', borderRadius: 'var(--radius-xl)', padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                            <p className="testimonial-card__quote" style={{ fontSize: '1.125rem', color: 'var(--text-on-dark)', flexGrow: 1, fontStyle: 'italic', marginBottom: '2rem' }}>
                                                "{t.testimonialQuote}"
                                            </p>
                                            <footer className="testimonial-card__author" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--accent-purple)' }}>
                                                    <img src={teamImages[index] || teamImages[0]} alt={t.testimonialAuthor} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                                <div className="testimonial-card__author-info" style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <strong style={{ color: 'var(--color-white)' }}>{t.testimonialAuthor}</strong>
                                                    <span style={{ color: 'var(--accent-lime)', fontSize: '0.875rem' }}>{t.testimonialRole}</span>
                                                </div>
                                            </footer>
                                        </blockquote>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}
                </>
            )}

        </main>
    )
}

