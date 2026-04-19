import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

import logoNina from '../../assets/branding/logo-nina.webp'

const navLinks = [
    { label: 'Accueil', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Actualités', to: '/blog' },
    { label: 'Nous Contacter', to: '/contact' },
]

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="navbar" role="banner">
            <div className="container navbar__inner">
                {/* Logo */}
                <Link to="/" className="navbar__logo" aria-label="Go to homepage" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                    <img src={logoNina} alt="Nina Elec SARL Logo" style={{ height: '40px' }} />
                    <span style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--color-dark)', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>NINA ELEC SARL</span>
                </Link>

                {/* Desktop nav */}
                <nav className="navbar__links" aria-label="Main navigation">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                {/* CTA */}
                <div className="navbar__actions">
                    <Link to="/contact" className="btn btn--primary navbar__cta">
                        Obtenir un Devis
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="navbar__hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Mobile drawer */}
            {menuOpen && (
                <div className="navbar__mobile">
                    <nav aria-label="Mobile navigation">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="navbar__mobile-link"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link to="/contact" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
                            Obtenir un Devis
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
