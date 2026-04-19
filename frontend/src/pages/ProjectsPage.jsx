import React from 'react'
import './ProjectsPage.css'

export default function ProjectsPage() {
    return (
        <main id="main-content">
            <section className="projects-hero section" style={{ paddingTop: '10rem', backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <h1 className="projects-hero__title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900' }}>
                        Nos <em className="text-outline" style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-purple)' }}>Réalisations</em>
                    </h1>
                    <p className="projects-hero__subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '1rem' }}>
                        Découvrez une sélection de nos projets réalisés avec passion et expertise à Douala et dans tout le Cameroun.
                    </p>
                </div>
            </section>

            <section className="projects-grid section">
                <div className="container">
                    <div style={{ padding: '4rem', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '2rem', border: '2px dashed #ddd' }}>
                        <h2 style={{ color: '#bbb' }}>Portfolio en cours de mise à jour...</h2>
                        <p style={{ color: '#999' }}>Revenez bientôt pour voir nos derniers chantiers électriques et aménagements d'intérieur.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
