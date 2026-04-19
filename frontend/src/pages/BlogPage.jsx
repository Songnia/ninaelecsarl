import React, { useState } from 'react'
import starPurple from '../assets/svg/star-purple.svg'
import starYellow from '../assets/svg/star-yellow.svg'
import BlogGalleryGrid from '../components/sections/BlogGalleryGrid'

import blogCover from '../assets/blog/Image collée.webp'
import blogImg2 from '../assets/blog/Image collée (2).webp'
import blogImg3 from '../assets/blog/Image collée (3).webp'
import blogImg4 from '../assets/blog/Image collée (4).webp'

const categories = ['All', 'Génie Électrique', 'Architecture', 'Formation']

// Sample Static Data
const STATIC_POSTS = [
    {
        id: 'post-iut-douala',
        title: 'Formation Solaire : Les Étudiants de l\'IUT de Douala chez WENTECH',
        category: 'Formation',
        excerpt: 'Ces étudiants de IUT de Douala ont reçu en ce jour du mois d\'août leur certificat de formation en énergie solaire chez WENTECH. Merci WENTECH pour cette initiative organisée tous les vacances pour donner l\'opportunité à ces jeunes d\'acquérir de nouvelles expériences professionnelles leur permettant d\'intégrer facilement le domaine de l\'emploi.',
        readTime: 4,
        imageUrl: blogCover,
        publishedDate: '2024-08-15'
    }
];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState(categories[0])
    const [allPosts] = useState(STATIC_POSTS)
    const [loading] = useState(false)

    const filtered = activeCategory === categories[0]
        ? allPosts
        : allPosts.filter(p => p.category === activeCategory)

    // Separate featured post (the latest one overall) if "All" is selected
    // Note: If filtering, you might still want a featured post, but for simplicity, 
    // we'll make the first item of the array the featured post.
    const featuredPost = filtered.length > 0 ? filtered[0] : null
    const gridPosts = filtered.length > 1 ? filtered.slice(1) : []

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' }
        return new Date(dateString).toLocaleDateString('fr-FR', options)
    }

    return (
        <main id="main-content">

            {/* Blog Hero */}
            <section className="blog-hero section" aria-label="Blog hero" style={{ paddingTop: '8rem' }}>
                <img src={starPurple} alt="Star" className="animate-spin" style={{ position: 'absolute', top: '20%', right: '10%', width: '50px' }} />
                <img src={starYellow} alt="Star" className="animate-float" style={{ position: 'absolute', top: '40%', left: '5%', width: '30px' }} />

                <div className="container blog-hero__inner">
                    <span className="blog-hero__eyebrow">Actualités & Projets</span>
                    <h1 className="blog-hero__title" style={{ color: 'var(--color-dark)' }}>
                        Nos Dernières <br />
                        <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--color-purple)' }}>Actions de Formation</span>
                    </h1>
                    <p className="blog-hero__subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Retrouvez les moments forts de nos interventions techniques, nos formations et notre engagement pour l'excellence.
                    </p>
                </div>
            </section>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-dark)' }}>
                    Loading Pulses...
                </div>
            ) : (
                <>
                    {/* Featured post */}
                    {featuredPost && (
                        <section className="blog-featured section" aria-label="Featured post" style={{ paddingBottom: '2rem' }}>
                            <div className="container">
                                <article id={featuredPost.id} className="featured-post hover-lift" style={{ cursor: 'pointer' }}>
                                    {/* Gallery Grid */}
                                    <BlogGalleryGrid 
                                        title="Illustrations de la Formation" 
                                        images={[blogCover, blogImg2, blogImg3, blogImg4]} 
                                    />
                                    <div className="featured-post__body">
                                        <span className="featured-post__tag">{featuredPost.category}</span>
                                        <h2 className="featured-post__title" style={{ color: 'var(--color-dark)' }}>{featuredPost.title}</h2>
                                        <p className="featured-post__excerpt">{featuredPost.excerpt}</p>
                                        <div className="featured-post__meta">
                                            <span>Équipe Nina Elec</span>
                                            <span>·</span>
                                            <span>{formatDate(featuredPost.publishedDate)}</span>
                                            <span>·</span>
                                            <span>{featuredPost.readTime} min de lecture</span>
                                        </div>
                                        <a href="#" className="btn btn--outline" style={{ display: 'inline-block', marginTop: '1rem', width: 'fit-content' }}>Read Deep Dive</a>
                                    </div>
                                </article>
                            </div>
                        </section>
                    )}

                    
                </>
            )}

        </main>
    )
}
