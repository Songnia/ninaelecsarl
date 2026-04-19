import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import blogCover from '../../assets/blog/Image collée.webp'

// Sample Static Data
const STATIC_POSTS = [
    {
        id: 'post-iut-douala',
        title: 'Formation Solaire : Les Étudiants de l\'IUT de Douala chez WENTECH',
        category: 'Formation',
        excerpt: 'Félicitations aux étudiants de l\'IUT de Douala pour l\'obtention de leur certificat de formation en énergie solaire chez WENTECH en ce mois d\'août.',
        date: '2024-08-15',
        imageUrl: blogCover,
        readTime: '4'
    }
];

export default function BlogPreviewSection() {
    const [posts] = useState(STATIC_POSTS)
    const [loading] = useState(false)

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' }
        return new Date(dateString).toLocaleDateString('fr-FR', options)
    }

    return (
        <section className="blog-preview section" aria-label="Latest blog posts">
            <div className="container">

                {/* Header */}
                <div className="blog-preview__header">
                    <div>
                        <span className="blog-preview__eyebrow">Les dernières formations</span>
                        <h2 className="blog-preview__title">Nos Actualités</h2>
                    </div>
                    <Link to="/blog" className="btn btn--outline blog-preview__all-link">
                        Voir Tout →
                    </Link>
                </div>

                {/* Posts grid */}
                <div className="blog-preview__grid">
                    {loading ? (
                        <div style={{ padding: '2rem', textAlign: 'center', gridColumn: '1 / -1' }}>
                            Chargement des actualités...
                        </div>
                    ) : (
                        posts.map((post) => (
                            <article key={post.id} className="blog-card">
                                <div className="blog-card__image" style={{ overflow: 'hidden', aspectRatio: '16/9' }}>
                                    <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="blog-card__body">
                                    <span className="blog-card__category">{post.category}</span>
                                    <h3 className="blog-card__title">{post.title}</h3>
                                    <p className="blog-card__excerpt">{post.excerpt}</p>
                                    <div className="blog-card__meta">
                                        <span>{formatDate(post.date)}</span>
                                        <span>·</span>
                                        <span>{post.readTime || '5'} min de lecture</span>
                                    </div>
                                    <Link to={`/blog#${post.id}`} className="blog-card__link">
                                        Voir plus →
                                    </Link>
                                </div>
                            </article>
                        ))
                    )}
                </div>

            </div>
        </section>
    )
}

