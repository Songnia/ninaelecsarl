import React from 'react'
import './ExpertiseSection.css'

// Image assets (using the SVG fallbacks for these due to rate limit)
import field2 from '../../assets/branding/field-2.webp'
import field3 from '../../assets/branding/field-3.webp'
import field4 from '../../assets/branding/field-4.webp'
import formation1 from '../../assets/branding/formation-1.webp'

import starLime from '../../assets/svg/star-lime.svg'

const services = [
    { id: 'svc-1', img: field3, title: 'Génie Électrique', desc: 'Conception et réalisation de projets électriques : courant fort et courant faible.' },
    { id: 'svc-2', img: field2, title: 'Architecture d\'Intérieur', desc: 'Aménagement et conception d\'espaces intérieurs fonctionnels et esthétiques.' },
    { id: 'svc-3', img: formation1, title: 'Formation Technique', desc: 'Programmes de formation spécialisés dans les domaines de l\'ingénierie et de l\'électricité.' },
    { id: 'svc-4', img: field4, title: 'Bureau d\'Études', desc: 'Analyse technique, plans d\'exécution et suivi de chantiers complexes.' },
]

export default function ExpertiseSection() {
    return (
        <section className="expertise section section--dark" id="services" aria-label="Services and expertise">
            <img src={starLime} className="expertise__star-bg animate-spin" alt="Decorative Star" aria-hidden="true" style={{ position: 'absolute', top: '5%', right: '5%', width: '40px' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div className="expertise__header">
                    <span className="expertise__eyebrow" style={{ color: 'var(--accent-lime)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>Nos Piliers</span>
                    <h2 className="expertise__title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '1rem 0' }}>Notre Expertise</h2>
                    <p className="expertise__subtitle" style={{ color: 'var(--text-on-dark-muted)', maxWidth: '600px', margin: '0 auto 4rem' }}>
                        Basés à Douala, nous accompagnons nos clients dans la réussite de leurs projets techniques et architecturaux.
                    </p>
                </div>

                {/* Service cards grid */}
                <div className="expertise__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {services.map((svc) => (
                        <article key={svc.id} className="expertise__card hover-lift" style={{ backgroundColor: 'var(--color-black)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', transition: 'all 0.3s ease' }}>
                            <div className="expertise__card-image">
                                <img src={svc.img} alt={svc.title} className="asset-img" style={{ aspectRatio: '16/9', objectFit: 'cover', width: '100%' }} />
                            </div>
                            <div className="expertise__card-body" style={{ padding: '2rem' }}>
                                <h3 className="expertise__card-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{svc.title}</h3>
                                <p className="expertise__card-desc" style={{ color: 'var(--text-on-dark-muted)', marginBottom: '1.5rem' }}>{svc.desc}</p>
                                <a href="/contact" className="expertise__card-link" style={{ color: 'var(--accent-purple-light)', fontWeight: 'bold' }}>
                                    En Savoir Plus →
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
