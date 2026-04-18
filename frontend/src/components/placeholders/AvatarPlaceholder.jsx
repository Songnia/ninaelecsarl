import React from 'react'
import './AvatarPlaceholder.css'

/**
 * AvatarPlaceholder
 * Circular placeholder for team member / client avatars.
 *
 * Props:
 *   id        {string}  – unique identifier
 *   className {string}  – extra CSS classes for positioning/sizing
 *   count     {number}  – render a stacked group if > 1
 *   dark      {boolean} – dark-theme styling
 */
export default function AvatarPlaceholder({
    id = 'avatar',
    className = '',
    count = 1,
    dark = false,
}) {
    const avatarClass = `avatar-placeholder ${dark ? 'avatar-placeholder--dark' : ''}`

    if (count > 1) {
        return (
            <div className={`avatar-group ${className}`} data-placeholder-id={id}>
                {Array.from({ length: count }).map((_, i) => (
                    <div
                        key={i}
                        className={avatarClass}
                        style={{ marginLeft: i === 0 ? 0 : '-10px', zIndex: count - i }}
                        aria-hidden="true"
                        title={`[AVATAR_${id}_${i + 1}]`}
                    >
                        <AvatarIcon />
                    </div>
                ))}
                <span className={`avatar-group__label ${dark ? 'avatar-group__label--dark' : ''}`}>
                    [AVATAR_GROUP]
                </span>
            </div>
        )
    }

    return (
        <div
            className={`${avatarClass} ${className}`}
            aria-label={`[AVATAR: ${id}]`}
            aria-hidden="true"
            data-placeholder-id={id}
            title={`[AVATAR: ${id}]`}
        >
            <AvatarIcon />
            <span className={`avatar-placeholder__label ${dark ? 'avatar-placeholder__label--dark' : ''}`}>
                [AVATAR]
            </span>
        </div>
    )
}

function AvatarIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
    )
}
