import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import ExpertiseSection from '../components/sections/ExpertiseSection'
import ClientsSection from '../components/sections/ClientsSection'
import CTASection from '../components/sections/CTASection'
import BlogPreviewSection from '../components/sections/BlogPreviewSection'

export default function HomePage() {
    return (
        <main id="main-content">
            <HeroSection />
            <ExpertiseSection />
            <ClientsSection />
            <CTASection />
            <BlogPreviewSection />
        </main>
    )
}
