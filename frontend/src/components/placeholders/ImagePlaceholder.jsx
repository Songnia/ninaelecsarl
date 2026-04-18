import React from 'react'
import './ImagePlaceholder.css'

/**
 * ImagePlaceholder
 * Reusable dashed-border box representing a future image.
 *
 * Props:
 *   id          {string}  – unique identifier (for dev reference)
 *   aspectRatio {string}  – CSS aspect-ratio value e.g. "1/1", "4/3", "16/9", "3/4"
 *   label       {string}  – Human-readable description of what image goes here
 *   className   {string}  – Extra CSS classes for positioning / sizing
 *   dark        {boolean} – Use dark-theme styling (for dark sections)
 */
export default function ImagePlaceholder({
    id = 'image',
    aspectRatio = '4/3',
    label = 'Image Placeholder',
    className = '',
    dark = false,
}) {
    return (
        <div
            className={`img-placeholder ${dark ? 'img-placeholder--dark' : ''} ${className}`}
            style={{ aspectRatio }}
            aria-label={`[IMAGE: ${label}]`}
            aria-hidden="true"
            data-placeholder-id={id}
        >
            {/* Camera / image icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="img-placeholder__icon"
                aria-hidden="true"
            >
                <rect x="3" y="7" width="18" height="14" rx="2" />
                <path d="M16 7l-1.5-3h-5L8 7" />
                <circle cx="12" cy="14" r="3" />
            </svg>

            <span className="img-placeholder__label">{label}</span>
            <span className="img-placeholder__id">#{id}</span>
        </div>
    )
}
