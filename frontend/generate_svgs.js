const fs = require('fs');
const path = require('path');

const svgDir = path.join(__dirname, 'src', 'assets', 'svg');
if (!fs.existsSync(svgDir)) {
    fs.mkdirSync(svgDir, { recursive: true });
}

const writeSVG = (name, content) => {
    fs.writeFileSync(path.join(svgDir, name), content);
    console.log(`Created ${name}`);
};

// 1. Primary Logo
writeSVG('logo-primary.svg', `<svg width="240" height="60" viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 30L30 10L50 30L30 50L10 30Z" fill="currentColor"/>
  <path d="M30 10L50 30" stroke="currentColor" stroke-width="4"/>
  <circle cx="30" cy="30" r="8" fill="#BFFF00"/>
  <text x="65" y="38" font-family="'Clash Display', 'Space Grotesk', sans-serif" font-weight="800" font-size="28" fill="currentColor">[AGENCY_NAME]</text>
</svg>`);

// 2. Logo Icon Only
writeSVG('logo-icon.svg', `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 30L30 10L50 30L30 50L10 30Z" fill="currentColor"/>
  <circle cx="30" cy="30" r="10" fill="#BFFF00"/>
</svg>`);

// 3. Favicon (same as icon)
writeSVG('favicon.svg', `<svg width="32" height="32" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 30L30 10L50 30L30 50L10 30Z" fill="#1A1A1A"/>
  <circle cx="30" cy="30" r="10" fill="#BFFF00"/>
</svg>`);

// 4. Stars
const starPath = "M24 0L27.65 14.35L42 18L27.65 21.65L24 36L20.35 21.65L6 18L20.35 14.35L24 0Z";
writeSVG('star-lime.svg', `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${starPath}" fill="#BFFF00"/></svg>`);
writeSVG('star-yellow.svg', `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${starPath}" fill="#FFE600"/></svg>`);
writeSVG('star-purple.svg', `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${starPath}" fill="#7C3AED"/></svg>`);

// 5. Client Logos (Fictional)
for (let i = 1; i <= 8; i++) {
    writeSVG(`client-logo-${i}.svg`, `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="40" fill="none"/>
    <text x="60" y="25" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="16" fill="currentColor" text-anchor="middle" style="text-transform: uppercase;">BRAND ${i}</text>
  </svg>`);
}

// 6. UI Assets
writeSVG('grid-pattern.svg', `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,0.05)" stroke-width="1"/></pattern></defs>
  <rect width="100%" height="100%" fill="url(#grid)"/>
</svg>`);

writeSVG('gradient-blob.svg', `<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <filter id="blur"><feGaussianBlur stdDeviation="60"/></filter>
  <circle cx="200" cy="200" r="120" fill="#BFFF00" filter="url(#blur)" opacity="0.4"/>
  <circle cx="280" cy="150" r="100" fill="#7C3AED" filter="url(#blur)" opacity="0.3"/>
</svg>`);

writeSVG('cta-badge.svg', `<svg width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path id="textPath" d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
  </defs>
  <circle cx="80" cy="80" r="78" fill="none" stroke="#2D2D2D" stroke-width="1"/>
  <!-- Central Icon -->
  <g transform="translate(68, 68) scale(0.4)">
    <path d="M10 30L30 10L50 30L30 50L10 30Z" fill="#1A1A1A"/>
    <circle cx="30" cy="30" r="10" fill="#BFFF00"/>
  </g>
  <text font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="16" fill="currentColor" letter-spacing="4">
    <textPath href="#textPath" startOffset="0%">LET'S GET STARTED • LET'S GET STARTED •&nbsp;</textPath>
  </text>
  <style>
    @keyframes spin { 100% { transform: rotate(360deg); } }
    text { animation: spin 20s linear infinite; transform-origin: 80px 80px; }
  </style>
</svg>`);

console.log('SVG Generation complete.');
