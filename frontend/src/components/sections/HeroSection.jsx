import React from 'react'
import './HeroSection.css'

// Assets
import heroProductLeft from '../../assets/branding/hero-bg.webp'
import heroAvatar from '../../assets/branding/logo.webp'
import startLime from '../../assets/svg/star-lime.svg'
import startYellow from '../../assets/svg/star-yellow.svg'
import startPurple from '../../assets/svg/star-purple.svg'
import logoIcon from '../../assets/svg/logo-icon.svg'

import heroBg from '../../assets/branding/hero-bg.webp'
import field1 from '../../assets/branding/field-1.webp'
import field2 from '../../assets/branding/field-2.webp'
import field3 from '../../assets/branding/field-3.webp'
import field4 from '../../assets/branding/field-4.webp'
import projectMain from '../../assets/branding/project-main.webp'
import noiseTexture from '../../assets/img/noise_texture_1772420556108.png'

export default function HeroSection() {
    return (
        <section className="hero" aria-label="Hero section">
            {/* Background Noise overlay */}
            <div className="hero__bg-noise" aria-hidden="true" />
            <div className="hero__bg-image" style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center',
                opacity: 0.15, zIndex: -1
            }} aria-hidden="true" />

            {/* ── Decorative Stars ── */}
            <img src={startLime} className="hero__star hero__star-1 animate-float" aria-hidden="true" alt="star" />
            <img src={startPurple} className="hero__star hero__star-2 animate-spin" aria-hidden="true" alt="star" />
            <img src={startYellow} className="hero__star hero__star-3 animate-float" aria-hidden="true" style={{ animationDelay: '1s' }} alt="star" />

            {/* ── Floating Product Image — LEFT, tilted ── */}
            <div className="hero__float-left animate-fade-in">
                <img src={projectMain} alt="Réalisation Nina Elec" className="hero__product-left" style={{ borderRadius: 'var(--radius-xl)' }} />
            </div>

            {/* ── Centre Content ── */}
            <div className="hero__center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {/* Location badge — top right of center */}
                <div className="hero__location-badge">
                    <span className="hero__location-city">Douala</span>
                    <span className="hero__location-street">Makepe</span>
                </div>

                {/* Tagline small */}
                <p className="hero__tagline-small">
                    "Conception & Réalisation Technique de Pointe"
                </p>

                {/* Main headline */}
                <div className="hero__headline-block">
                    {/* Avatar badge — left of headline */}
                    <div className="hero__avatar-badge animate-float">
                        <img src={heroAvatar} alt="Team member" className="avatar-img" />
                    </div>

                    <h1 className="hero__headline">
                        L'Excellence en<br />
                        Génie{' '}
                        <span className="hero__logo-inline">
                            <img src={logoIcon} alt="Nina Elec Icon" className="hero__logo-icon-img" />
                        </span>{' '}
                        Électrique &<br />
                        <em className="hero__accent text-outline">Architecture</em>
                    </h1>
                </div>

                {/* Description */}
                <p className="hero__description">
                    Bureau d'études spécialisé dans le génie électrique, l'architecture d'intérieur et la formation technique à Douala.
                </p>

                {/* CTAs */}
                <div className="hero__ctas">
                    <a href="/contact" className="btn btn--primary hover-lift">Nous Contacter</a>
                    <a href="/clients" className="btn btn--outline hover-lift">Nos Projets</a>
                </div>

                {/* Scroll indicator */}
                <div className="hero__scroll scroll-indicator">
                    <div className="scroll-indicator__line" />
                    <span>Découvrir ↓</span>
                </div>
            </div>

            {/* ── Product Collage — RIGHT ── */}
            <div className="hero__collage animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="hero-collage-grid">
                    <img src={field1} alt="Project 1" className="collage-img item-1" />
                    <img src={field2} alt="Project 2" className="collage-img item-2" />
                    <img src={field3} alt="Project 3" className="collage-img item-3" />
                    <img src={field4} alt="Project 4" className="collage-img item-4" />
                </div>
            </div>
        </section>
    )
}
