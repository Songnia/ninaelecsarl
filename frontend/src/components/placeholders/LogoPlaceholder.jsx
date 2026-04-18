import React from 'react'
import './LogoPlaceholder.css'

/**
 * LogoPlaceholder
 * Placeholder for the agency logo or a brand icon.
 *
 * Props:
 *   id      {string}  – unique identifier
 *   variant {string}  – "logo" (wide) | "icon" (square)
 *   dark    {boolean} – dark-theme styling
 *   className {string} – extra classes
 */
export default function LogoPlaceholder({
    id = 'logo',
    variant = 'logo',
    dark = false,
    className = '',
}) {
    const isIcon = variant === 'icon'

    return (
        <div
            className={`logo-placeholder logo-placeholder--${variant} ${dark ? 'logo-placeholder--dark' : ''} ${className}`}
            aria-label={`[LOGO: ${id}]`}
            aria-hidden="true"
            data-placeholder-id={id}
            title={`[${variant.toUpperCase()}: ${id}]`}
        >
            {isIcon ? (
                <>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span>[ICON]</span>
                </>
            ) : (
                <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <path d="M8 12h8M12 8v8" />
                    </svg>
                    <span className="logo-placeholder__name">[AGENCY_NAME]</span>
                </>
            )}
        </div>
    )
}
