import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imgDir = path.join(__dirname, 'src', 'assets', 'img');
if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
}

const createAbstractImage = (name, width, height, colors) => {
    const content = '<svg width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '" xmlns="http://www.w3.org/2000/svg">' +
        '<defs>' +
        '<linearGradient id="grad-' + name + '" x1="0%" y1="0%" x2="100%" y2="100%">' +
        '<stop offset="0%" stop-color="' + colors[0] + '" />' +
        '<stop offset="100%" stop-color="' + colors[1] + '" />' +
        '</linearGradient>' +
        '<filter id="blur-' + name + '">' +
        '<feGaussianBlur stdDeviation="' + (width / 6) + '" />' +
        '</filter>' +
        '</defs>' +
        '<rect width="' + width + '" height="' + height + '" fill="url(#grad-' + name + ')" />' +
        '<circle cx="' + (width * 0.8) + '" cy="' + (height * 0.2) + '" r="' + (width / 2) + '" fill="' + (colors[2] || '#BFFF00') + '" filter="url(#blur-' + name + ')" opacity="0.6"/>' +
        '<circle cx="' + (width * 0.2) + '" cy="' + (height * 0.8) + '" r="' + (width / 2.5) + '" fill="' + (colors[3] || '#7C3AED') + '" filter="url(#blur-' + name + ')" opacity="0.6"/>' +
        '<text x="50%" y="50%" font-family="sans-serif" font-weight="bold" font-size="' + (width / 10) + '" fill="#ffffff" opacity="0.3" text-anchor="middle" dominant-baseline="middle">' + name + '</text>' +
        '</svg>';
    fs.writeFileSync(path.join(imgDir, name + '.svg'), content);
    console.log('Created fallback SVG: ' + name + '.svg');
};

createAbstractImage('hero_collage_2', 200, 200, ['#1A1A1A', '#2D2D2D', '#7C3AED', '#BFFF00']);
createAbstractImage('hero_collage_4', 200, 200, ['#7C3AED', '#4C1D95', '#FFE600', '#BFFF00']);
createAbstractImage('hero_collage_5', 200, 200, ['#BFFF00', '#84CC16', '#7C3AED', '#1A1A1A']);

createAbstractImage('service_market_research', 400, 300, ['#1A1A1A', '#000000', '#7C3AED', '#BFFF00']);
createAbstractImage('service_ads_production', 400, 300, ['#2D2D2D', '#1A1A1A', '#FFE600', '#7C3AED']);
createAbstractImage('service_branding', 400, 300, ['#4C1D95', '#2E1065', '#BFFF00', '#FFE600']);
createAbstractImage('service_digital_design', 400, 300, ['#84CC16', '#4D7C0F', '#1A1A1A', '#7C3AED']);

createAbstractImage('blog_featured_1', 800, 450, ['#1A1A1A', '#2D2D2D', '#7C3AED', '#BFFF00']);
createAbstractImage('blog_featured_2', 800, 450, ['#7C3AED', '#4C1D95', '#FFE600', '#BFFF00']);
createAbstractImage('blog_featured_3', 800, 450, ['#BFFF00', '#84CC16', '#7C3AED', '#1A1A1A']);
createAbstractImage('blog_featured_4', 800, 450, ['#2D2D2D', '#1A1A1A', '#FFE600', '#7C3AED']);

for (let i = 1; i <= 5; i++) {
    createAbstractImage('team_' + i, 400, 400, ['#F5F5F0', '#E5E5E5', '#BFFF00', '#7C3AED']);
}
console.log('Done.');
