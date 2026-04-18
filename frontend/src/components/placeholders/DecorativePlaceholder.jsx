import React from 'react'
import './DecorativePlaceholder.css'

/**
 * DecorativePlaceholder
 * Absolutely-positioned decorative shape placeholder for stars, badges, icons.
 *
 * Props:
 *   id       {string}  – unique identifier
 *   type     {string}  – "star" | "badge" | "icon"
 *   position {object}  – { top, left, right, bottom } — CSS position values
 *   size     {string}  – "sm" | "md" | "lg"
 *   color    {string}  – "lime" | "yellow" | "purple" | "white" | "dark"
 *   dark     {boolean} – dark background context
 */
export default function DecorativePlaceholder({
    id = 'deco',
    type = 'star',
    position = {},
    size = 'md',
    color = 'lime',
    dark = false,
}) {
    const sizeMap = { sm: 28, md: 44, lg: 64 }
    const px = sizeMap[size] ?? 44

    const colorMap = {
        lime: 'var(--accent-lime)',
        yellow: 'var(--accent-yellow)',
        purple: 'var(--accent-purple)',
        white: '#ffffff',
        dark: 'var(--text-primary)',
    }
    const fill = colorMap[color] ?? colorMap.lime

    const posStyle = {
        position: 'absolute',
        top: position.top ?? 'auto',
        left: position.left ?? 'auto',
        right: position.right ?? 'auto',
        bottom: position.bottom ?? 'auto',
        zIndex: 3,
        pointerEvents: 'none',
    }

    const renderShape = () => {
        if (type === 'star') {
            return (
                <svg width={px} height={px} viewBox="0 0 24 24" fill={fill} aria-hidden="true">
                    <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
                </svg>
            )
        }

        if (type === 'badge') {
            return (
                <div
                    className={`deco-badge deco-badge--${size}`}
                    style={{
                        borderColor: fill,
                        color: fill,
                    }}
                >
                    <span>[BADGE]</span>
                </div>
            )
        }

        if (type === 'icon') {
            return (
                <svg width={px} height={px} viewBox="0 0 24 24" fill="none" stroke={fill} strokeWidth="1.5" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8M12 8v8" />
                </svg>
            )
        }

        return null
    }

    return (
        <div
            style={posStyle}
            className={`deco-placeholder deco-placeholder--${type}`}
            aria-label={`[DECO: ${type} — ${id}]`}
            aria-hidden="true"
            data-placeholder-id={id}
            title={`[DECORATIVE_${type.toUpperCase()}: ${id}]`}
        >
            {renderShape()}
        </div>
    )
}
