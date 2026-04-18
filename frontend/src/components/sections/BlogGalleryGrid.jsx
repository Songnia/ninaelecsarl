import React from 'react'
import './BlogGalleryGrid.css'

export default function BlogGalleryGrid({ images = [], title = "" }) {
    if (!images || images.length === 0) return null;

    const featured = images[0];
    const thumbs = images.slice(1, 4);

    return (
        <section className="blog-gallery" aria-label="Image gallery">
            <div className="container">
                {title && <h3 className="blog-gallery__title">{title}</h3>}
                
                <div className="blog-gallery__featured hover-lift">
                    <img src={featured} alt="Featured training moment" className="blog-gallery__img" />
                </div>

                <div className="blog-gallery__thumbs">
                    {thumbs.map((img, index) => (
                        <div key={index} className="blog-gallery__thumb-item hover-lift">
                            <img src={img} alt={`Training detail ${index + 1}`} className="blog-gallery__img" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
