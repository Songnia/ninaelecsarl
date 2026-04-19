import React from 'react'
import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import './styles/variables.css'
import './styles/globals.css'

import HowItWorksPage from './pages/HowItWorksPage'
import ClientPage from './pages/ClientPage'
import FAQPage from './pages/FAQPage'
import ScrollToHash from './hooks/ScrollToHash'

// Simple 404 fallback
function NotFoundPage() {
    return (
        <main style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 900, color: 'var(--accent-purple)' }}>404</h1>
            <p style={{ color: 'var(--text-secondary)' }}>Oups ! Cette page n'existe pas ou a été déplacée.</p>
            <a href="/" className="btn btn--primary" style={{ marginTop: '1rem' }}>Retour à l'Accueil</a>
        </main>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToHash />
            <a className="skip-link" href="#main-content" style={{
                position: 'absolute', top: '-100px', left: 0,
                background: 'var(--accent-lime)', color: 'var(--text-primary)',
                padding: '8px 16px', zIndex: 9999, fontWeight: 700,
                transition: 'top 0.2s',
            }}
                onFocus={(e) => { e.target.style.top = '0px' }}
                onBlur={(e) => { e.target.style.top = '-100px' }}
            >
                Aller au contenu principal
            </a>

            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/clients" element={<ClientPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}
