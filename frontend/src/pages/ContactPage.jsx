import React, { useState } from 'react'
import './ContactPage.css'

// SVGs
import starLime from '../assets/svg/star-lime.svg'
import starYellow from '../assets/svg/star-yellow.svg'
import ctaBadge from '../assets/svg/cta-badge.svg'

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' })

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Message envoyé. Nous vous contacterons dans les plus brefs délais.')
    }

    return (
        <main id="main-content">
            {/* Contact Hero */}
            <section className="contact-hero section" aria-label="Contact page hero" style={{ paddingTop: '8rem' }}>
                <img src={starLime} alt="Star" className="animate-float" style={{ position: 'absolute', top: '20%', right: '15%', width: '50px' }} />
                <img src={starYellow} alt="Star" className="animate-spin" style={{ position: 'absolute', bottom: '15%', left: '10%', width: '30px' }} />
                <div className="container contact-hero__inner">
                    <span className="contact-hero__eyebrow">Entrer en Contact</span>
                    <h1 className="contact-hero__title">Donnons Vie à <br />Vos Projets.</h1>
                    <p className="contact-hero__subtitle">
                        Que ce soit pour une installation électrique complexe, un aménagement d'intérieur ou une formation technique, Nina Elec SARL est à votre service.
                    </p>
                </div>
            </section>

            {/* Contact body */}
            <section className="contact-body section" aria-label="Contact form and info">
                <div className="container contact-body__grid">
                    {/* Form */}
                    <div className="contact-form-wrap" style={{ backgroundColor: 'var(--bg-white)', borderRadius: 'var(--radius-2xl)', padding: '3rem', boxShadow: 'var(--shadow-md)' }}>
                        <h2 className="contact-form-wrap__title" style={{ color: 'var(--color-dark)', marginBottom: '2rem' }}>Envoyer un Message</h2>
                        <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form" noValidate>

                            <div className="contact-form__row">
                                <div className="form-field">
                                    <label className="form-field__label" htmlFor="name">Nom / Entreprise</label>
                                    <input
                                        type="text" id="name" name="name"
                                        className="form-field__input"
                                        placeholder="Votre Nom"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{ borderColor: 'var(--text-muted)' }}
                                    />
                                </div>
                                <div className="form-field">
                                    <label className="form-field__label" htmlFor="email">Email de Contact</label>
                                    <input
                                        type="email" id="email" name="email"
                                        className="form-field__input"
                                        placeholder="votre@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{ borderColor: 'var(--text-muted)' }}
                                    />
                                </div>
                            </div>

                            <div className="form-field">
                                <label className="form-field__label" htmlFor="service">Type de Projet</label>
                                <select
                                    id="service" name="service"
                                    className="form-field__input form-field__select"
                                    value={formData.service}
                                    onChange={handleChange}
                                    style={{ borderColor: 'var(--text-muted)' }}
                                >
                                    <option value="">Sélectionnez un domaine...</option>
                                    <option value="service-1">Génie Électrique</option>
                                    <option value="service-2">Architecture d'Intérieur</option>
                                    <option value="service-3">Formation</option>
                                </select>
                            </div>

                            <div className="form-field" style={{ marginTop: '1.5rem' }}>
                                <label className="form-field__label" htmlFor="message">Détails du Projet</label>
                                <textarea
                                    id="message" name="message"
                                    className="form-field__input form-field__textarea"
                                    placeholder="Décrivez vos besoins ici..."
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    style={{ borderColor: 'var(--text-muted)' }}
                                />
                            </div>

                            <button type="submit" className="btn btn--primary contact-form__submit" style={{ marginTop: '2rem', width: '100%' }}>
                                Envoyer la Demande
                            </button>

                        </form>
                    </div>

                    {/* Info panel */}
                    <aside className="contact-info" aria-label="Contact information" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ position: 'relative', marginBottom: '3rem' }}>
                            <img src={ctaBadge} alt="Spinning Badge" className="animate-spin-slow" style={{ width: '120px', color: 'var(--color-dark)' }} />
                        </div>
                        <h3 className="contact-info__title" style={{ fontSize: '2rem', color: 'var(--color-dark)', marginBottom: '2rem' }}>Informations</h3>

                        <div className="contact-info__item" style={{ marginBottom: '1.5rem' }}>
                            <span className="contact-info__label" style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</span>
                            <a href="mailto:ninaelecsarl@gmail.com" className="contact-info__value" style={{ fontSize: '1.25rem', color: 'var(--accent-purple)', fontWeight: 'bold' }}>ninaelecsarl@gmail.com</a>
                        </div>
                        <div className="contact-info__item" style={{ marginBottom: '1.5rem' }}>
                            <span className="contact-info__label" style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Téléphone</span>
                            <a href="tel:+237698997485" className="contact-info__value" style={{ fontSize: '1.25rem', color: 'var(--color-dark)', fontWeight: 'bold' }}>+237 6 98 99 74 85</a>
                        </div>
                        <div className="contact-info__item" style={{ marginBottom: '1.5rem' }}>
                            <span className="contact-info__label" style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Bureau</span>
                            <address className="contact-info__value" style={{ fontStyle: 'normal', fontSize: '1.125rem', color: 'var(--color-dark)', lineHeight: '1.5' }}>
                                Makepe entrée Marie Lumière<br />
                                Douala, Cameroun
                            </address>
                        </div>
                    </aside>
                </div>
            </section>

        </main>
    )
}
