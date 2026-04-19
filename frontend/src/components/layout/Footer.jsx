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
                    <div className="footer__logo-group">
                        <img src={logoNina} alt="Nina Elec SARL Logo" className="footer__logo" />
                        <span className="footer__name">NINA ELEC SARL</span>
                    </div>
                    <p className="footer__tagline">
                        Nina Elec SARL — Bureau d'études pluridisciplinaire : Génie Électrique, Architecture d'Intérieur & Formation.
                    </p>
                </div>

                {/* Nav column */}
                <div className="footer__col">
                    <h4 className="footer__heading" style={{ color: 'var(--color-white)' }}>Navigation</h4>
                    <ul>
                        <li><Link to="/" className="footer__link">Accueil</Link></li>
                        <li><Link to="/services" className="footer__link">Services</Link></li>
                        <li><Link to="/blog" className="footer__link">Actualités</Link></li>
                        <li><Link to="/contact" className="footer__link">Nous Contacter</Link></li>
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
                <div className="container footer__bottom-inner">
                    <div className="footer__copyright">
                        <p>© {year} Nina Elec SARL. Tous droits réservés.</p>
                        <p className="footer__address">
                            Makepe entrée Marie Lumière, Douala, Cameroun<br />
                            Lun-Ven: 08:00 - 18:00 | Sam: 09:00 - 14:30
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
