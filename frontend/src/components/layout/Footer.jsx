import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

import logoNina from '../../assets/branding/logo-nina.webp'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer" role="contentinfo">
            <div className="container footer__inner">

                {/* Brand column */}
                <div className="footer__brand">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <img src={logoNina} alt="Nina Elec SARL Logo" style={{ height: '50px' }} />
                        <span style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--color-white)', letterSpacing: '0.05em' }}>NINA ELEC SARL</span>
                    </div>
                    <p className="footer__tagline" style={{ color: 'var(--text-on-dark-muted)' }}>
                        Nina Elec SARL — Bureau d'études pluridisciplinaire : Génie Électrique, Architecture d'Intérieur & Formation.
                    </p>
                </div>

                {/* Nav column */}
                <div className="footer__col">
                    <h4 className="footer__heading" style={{ color: 'var(--color-white)' }}>Navigation</h4>
                    <ul>
                        <li><Link to="/" className="footer__link">Home</Link></li>
                        <li><Link to="/services" className="footer__link">Services</Link></li>
                        <li><Link to="/blog" className="footer__link">Intelligence (Blog)</Link></li>
                        <li><Link to="/contact" className="footer__link">Init Contact</Link></li>
                    </ul>
                </div>

                {/* Services column */}
                <div className="footer__col">
                    <h4 className="footer__heading" style={{ color: 'var(--color-white)' }}>Services</h4>
                    <ul>
                        <li><span className="footer__link">Génie Électrique</span></li>
                        <li><span className="footer__link">Architecture d'Intérieur</span></li>
                        <li><span className="footer__link">Formation Technique</span></li>
                        <li><span className="footer__link">Bureau d'Études</span></li>
                    </ul>
                </div>

                {/* Social/Contact column */}
                <div className="footer__col">
                    <h4 className="footer__heading" style={{ color: 'var(--color-white)' }}>Contact</h4>
                    <ul>
                        <li><a href="tel:+237698997485" className="footer__link">+237 6 98 99 74 85</a></li>
                        <li><a href="mailto:ninaelecsarl@gmail.com" className="footer__link">ninaelecsarl@gmail.com</a></li>
                        <li><a href="https://facebook.com" className="footer__link">Facebook Page</a></li>
                    </ul>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="footer__bottom">
                <div className="container footer__bottom-inner" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ color: 'var(--text-muted)', maxWidth: '400px' }}>
                        <p>© {year} Nina Elec SARL. Tous droits réservés.</p>
                        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
                            Makepe entrée Marie Lumière, Douala, Cameroun<br />
                            Lun-Ven: 08:00 - 18:00 | Sam: 09:00 - 14:30
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
