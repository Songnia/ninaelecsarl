import React from 'react'
import './ClientsSection.css'

// SVGs
import client1 from '../../assets/svg/client-logo-1.svg'
import client2 from '../../assets/svg/client-logo-2.svg'
import client3 from '../../assets/svg/client-logo-3.svg'
import client4 from '../../assets/svg/client-logo-4.svg'
import client5 from '../../assets/svg/client-logo-5.svg'
import client6 from '../../assets/svg/client-logo-6.svg'
import client7 from '../../assets/svg/client-logo-7.svg'
import client8 from '../../assets/svg/client-logo-8.svg'

// SVGs disguised as generated photos due to limit
import team1 from '../../assets/img/team_1.svg'
import team2 from '../../assets/img/team_2.svg'
import team3 from '../../assets/img/team_3.svg'
import team4 from '../../assets/img/team_4.svg'

const clientLogos = [client1, client2, client3, client4, client5, client6, client7, client8]
const avatars = [team1, team2, team3, team4]

export default function ClientsSection() {
    return (
        <section className="clients section" id="clients" aria-label="Our clients">
            <div className="container">
                {/* Header */}
                <div className="clients__header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="clients__eyebrow" style={{ color: 'var(--accent-purple)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Partenaires</span>
                    <h2 className="clients__title" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginTop: '0.5rem' }}>Ils nous font confiance</h2>
                </div>

                {/* Logo grid */}
                <div className="clients__logos" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '3rem', justifyItems: 'center', opacity: 0.5 }}>
                    {clientLogos.map((logoSrc, i) => (
                        <div key={i} className="clients__logo-slot transition-all hover-lift" style={{ opacity: 0.6, cursor: 'pointer', filter: 'grayscale(1)' }} onMouseOver={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.filter = 'grayscale(0)' }} onMouseOut={(e) => { e.currentTarget.style.opacity = 0.6; e.currentTarget.style.filter = 'grayscale(1)' }}>
                            <img src={logoSrc} alt={`Client ${i + 1}`} style={{ height: '40px' }} />
                        </div>
                    ))}
                </div>

                {/* Social proof */}
                <div className="clients__proof" style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', paddingLeft: '1rem' }}>
                        {avatars.map((av, i) => (
                            <div key={i} style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--bg-light)', marginLeft: '-1rem', boxShadow: 'var(--shadow-sm)' }}>
                                <img src={av} alt="Happy client" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        ))}
                    </div>
                    <p className="clients__proof-text" style={{ fontSize: '1.125rem' }}>
                        Rejoignez plus de <strong style={{ color: 'var(--accent-purple)' }}>200</strong> leaders qui nous font confiance.
                    </p>
                </div>
            </div>
        </section>
    )
}
