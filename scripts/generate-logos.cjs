const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');

// 1. Official Banner Logo SVG (Exact match to user's uploaded image)
const officialLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="600" height="300">
  <defs>
    <!-- Background Gradient (Deep Teal) -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#096585" />
      <stop offset="50%" stop-color="#085d7b" />
      <stop offset="100%" stop-color="#064860" />
    </linearGradient>

    <!-- Badge Rim 3D Gradients -->
    <radialGradient id="badgeRim" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="45%" stop-color="#0ea5e9" />
      <stop offset="75%" stop-color="#0369a1" />
      <stop offset="100%" stop-color="#082f49" />
    </radialGradient>

    <radialGradient id="badgeInterior" cx="45%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9" />
      <stop offset="35%" stop-color="#0284c7" />
      <stop offset="70%" stop-color="#0369a1" />
      <stop offset="100%" stop-color="#083344" />
    </radialGradient>

    <!-- Soap Mascot Body -->
    <linearGradient id="soapBody" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="25%" stop-color="#e0f2fe" />
      <stop offset="60%" stop-color="#bae6fd" />
      <stop offset="100%" stop-color="#7dd3fc" />
    </linearGradient>

    <!-- Soap Gloss Reflection -->
    <linearGradient id="soapGloss" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.1" />
    </linearGradient>

    <!-- 4-Point Star Sparkle Filter & Glow -->
    <filter id="sparkleGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <filter id="softShadow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#021c26" flood-opacity="0.4" />
    </filter>
  </defs>

  <!-- Deep Teal Canvas Base -->
  <rect width="600" height="300" fill="url(#bgGrad)" />

  <!-- LEFT: 3D Mascot Circular Emblem -->
  <g transform="translate(150, 150)" filter="url(#softShadow)">
    <!-- Outer Rim (Thick 3D Bevel) -->
    <circle cx="0" cy="0" r="118" fill="url(#badgeRim)" />
    <!-- Outer Highlight Ring -->
    <circle cx="0" cy="0" r="114" fill="none" stroke="#7dd3fc" stroke-width="2.5" opacity="0.8" />
    <circle cx="0" cy="0" r="111" fill="none" stroke="#082f49" stroke-width="2" opacity="0.6" />
    <!-- Inner Base Circle -->
    <circle cx="0" cy="0" r="108" fill="url(#badgeInterior)" />

    <!-- Ambient Cyan Shimmer Glow -->
    <ellipse cx="0" cy="-25" rx="75" ry="55" fill="#38bdf8" opacity="0.35" />

    <!-- DR. SABÃO MASCOT CHARACTER -->
    <g transform="translate(0, -6)">
      <!-- Right Arm / White Glove (Thumbs Up / Resting) -->
      <g>
        <path d="M -48 10 C -68 8 -78 -6 -84 -18" fill="none" stroke="#ffffff" stroke-width="6.5" stroke-linecap="round" />
        <!-- White Glove -->
        <ellipse cx="-86" cy="-22" rx="11" ry="8" fill="#ffffff" stroke="#0369a1" stroke-width="2.5" transform="rotate(-20 -86 -22)" />
        <circle cx="-88" cy="-26" r="4.5" fill="#ffffff" stroke="#0369a1" stroke-width="2" />
        <ellipse cx="-79" cy="-14" rx="7" ry="4" fill="#e0f2fe" stroke="#0369a1" stroke-width="2" />
      </g>

      <!-- Left Arm / White Glove (Waving / Presenting) -->
      <g>
        <path d="M 44 -5 C 60 -15 72 -25 80 -38" fill="none" stroke="#ffffff" stroke-width="6.5" stroke-linecap="round" />
        <!-- 4-Finger Cartoon Glove -->
        <g transform="translate(84, -42) rotate(15)">
          <path d="M -4 10 C -12 10 -18 4 -18 -4 C -18 -10 -12 -16 -4 -16 C -2 -16 0 -15 2 -14 C 4 -22 12 -26 19 -24 C 26 -22 30 -16 30 -9 C 35 -9 39 -5 39 2 C 39 10 30 18 20 18 Z" fill="#ffffff" stroke="#0369a1" stroke-width="2.5" stroke-linejoin="round" />
          <ellipse cx="8" cy="14" rx="10" ry="4.5" fill="#e0f2fe" stroke="#0369a1" stroke-width="2" />
        </g>
      </g>

      <!-- Soap Bar Body -->
      <g>
        <!-- Blue Contour Outline Shadow -->
        <rect x="-48" y="-76" width="96" height="108" rx="28" ry="28" fill="#0284c7" />
        <!-- Main Soap Surface -->
        <rect x="-46" y="-78" width="92" height="106" rx="26" ry="26" fill="url(#soapBody)" stroke="#0369a1" stroke-width="3" />
        <!-- Top Bevel Gloss Highlight -->
        <path d="M -32 -74 C -10 -71 10 -71 32 -74 C 38 -74 41 -70 41 -65 C 16 -61 -16 -61 -41 -65 C -41 -70 -38 -74 -32 -74 Z" fill="url(#soapGloss)" />
      </g>

      <!-- Expressive Cartoon Eyes -->
      <g>
        <!-- Left Eye -->
        <g>
          <ellipse cx="-20" cy="-36" rx="11" ry="16" fill="#ffffff" stroke="#0369a1" stroke-width="2" />
          <ellipse cx="-17" cy="-35" rx="7.5" ry="11.5" fill="#082f49" />
          <circle cx="-19" cy="-39" r="4" fill="#ffffff" />
          <circle cx="-14" cy="-31" r="1.8" fill="#ffffff" />
          <!-- Eyebrow -->
          <path d="M -29 -56 C -20 -62 -10 -60 -6 -56" fill="none" stroke="#082f49" stroke-width="3" stroke-linecap="round" />
        </g>

        <!-- Right Eye -->
        <g>
          <ellipse cx="20" cy="-36" rx="11" ry="16" fill="#ffffff" stroke="#0369a1" stroke-width="2" />
          <ellipse cx="17" cy="-35" rx="7.5" ry="11.5" fill="#082f49" />
          <circle cx="15" cy="-39" r="4" fill="#ffffff" />
          <circle cx="20" cy="-31" r="1.8" fill="#ffffff" />
          <!-- Eyebrow -->
          <path d="M 29 -56 C 20 -62 10 -60 6 -56" fill="none" stroke="#082f49" stroke-width="3" stroke-linecap="round" />
        </g>
      </g>

      <!-- Rosy Cheeks -->
      <ellipse cx="-32" cy="-18" rx="7" ry="4.5" fill="#fb7185" opacity="0.45" />
      <ellipse cx="32" cy="-18" rx="7" ry="4.5" fill="#fb7185" opacity="0.45" />

      <!-- Cheerful Smile -->
      <g>
        <!-- Mouth Cavity -->
        <path d="M -22 -22 C -6 -16 6 -16 22 -22 C 24 4 -24 4 -22 -22 Z" fill="#b91c1c" stroke="#0369a1" stroke-width="2.5" stroke-linejoin="round" />
        <!-- Upper Teeth -->
        <path d="M -18 -20 C -6 -17 6 -17 18 -20 C 17 -14 -17 -14 -18 -20 Z" fill="#ffffff" />
        <!-- Tongue -->
        <path d="M -8 -8 C 0 -13 8 -8 6 1 C -1 3 -7 3 -8 -8 Z" fill="#f43f5e" />
      </g>
    </g>

    <!-- SPARKLES / LENS FLARES (Matching user image) -->
    <!-- Sparkle 1: Top-left of mascot head -->
    <g transform="translate(-52, -75)" filter="url(#sparkleGlow)">
      <circle cx="0" cy="0" r="14" fill="#bae6fd" opacity="0.5" />
      <path d="M 0 -18 Q 1 -2 18 0 Q 1 2 0 18 Q -1 2 -18 0 Q -1 -2 0 -18 Z" fill="#ffffff" />
      <circle cx="0" cy="0" r="3.5" fill="#ffffff" />
    </g>

    <!-- Sparkle 2: Left Outer Rim -->
    <g transform="translate(-96, -6)" filter="url(#sparkleGlow)">
      <circle cx="0" cy="0" r="16" fill="#38bdf8" opacity="0.6" />
      <path d="M 0 -22 Q 1 -2 22 0 Q 1 2 0 22 Q -1 2 -22 0 Q -1 -2 0 -22 Z" fill="#ffffff" />
      <circle cx="0" cy="0" r="4" fill="#ffffff" />
    </g>

    <!-- Sparkle 3: Ambient Soft Sparkle -->
    <g transform="translate(68, 52)">
      <circle cx="0" cy="0" r="8" fill="#bae6fd" opacity="0.4" />
      <path d="M 0 -10 Q 1 -1 10 0 Q 1 1 0 10 Q -1 1 -10 0 Q -1 -1 0 -10 Z" fill="#ffffff" opacity="0.9" />
    </g>

    <!-- BOTTOM CAPSULE BADGE: "DR SABÃO" -->
    <g transform="translate(0, 70)" filter="url(#softShadow)">
      <!-- Outer Cyan Pill Base -->
      <rect x="-65" y="-22" width="130" height="44" rx="22" ry="22" fill="#0284c7" stroke="#ffffff" stroke-width="3" />
      <rect x="-62" y="-19" width="124" height="38" rx="19" ry="19" fill="#0ea5e9" />
      <!-- Bevel highlight -->
      <path d="M -46 -17 C -15 -14 15 -14 46 -17 C 54 -17 58 -14 58 -10 C 25 -7 -25 -7 -58 -10 C -58 -14 -54 -17 -46 -17 Z" fill="#ffffff" opacity="0.6" />
      
      <!-- Text: DR -->
      <text x="0" y="-3" text-anchor="middle" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="14" fill="#ffffff" letter-spacing="1.5">
        DR
      </text>
      <!-- Text: SABÃO with tilde -->
      <text x="0" y="13" text-anchor="middle" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="16" fill="#ffffff" letter-spacing="1">
        SABÃO
      </text>
    </g>
  </g>

  <!-- RIGHT: OFFICIAL TYPOGRAPHY & ORANGE PILL -->
  <!-- Line 1: "Dr." -->
  <text x="284" y="106" font-family="'Plus Jakarta Sans', 'Outfit', 'Montserrat', -apple-system, sans-serif" font-weight="900" font-size="78" fill="#ffffff" letter-spacing="-1.5">
    Dr.
  </text>

  <!-- Line 2: "Sabão" -->
  <text x="282" y="186" font-family="'Plus Jakarta Sans', 'Outfit', 'Montserrat', -apple-system, sans-serif" font-weight="900" font-size="78" fill="#ffffff" letter-spacing="-1.5">
    Sabão
  </text>

  <!-- "TM." Symbol at top right of Sabão -->
  <text x="512" y="128" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="800" font-size="15" fill="#ffffff" opacity="0.95">
    TM.
  </text>

  <!-- Line 3: Orange Pill: "Lavanderia" (Exact rounded pill with tracked title-case text) -->
  <g transform="translate(275, 204)" filter="url(#softShadow)">
    <!-- Orange Rounded Pill Body -->
    <rect width="282" height="66" rx="16" ry="16" fill="#f97d38" />
    
    <!-- "Lavanderia" Text -->
    <text x="141" y="44" text-anchor="middle" font-family="'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="400" font-size="30" fill="#ffffff" letter-spacing="8">
      Lavanderia
    </text>
  </g>
</svg>`;

// Write the SVG file
const publicDir = path.join(__dirname, '..', 'public');
const svgPath = path.join(publicDir, 'logo-oficial.svg');
const bannerPath = path.join(publicDir, 'adesivo-banner.svg');
const horizontalPath = path.join(publicDir, 'logo-horizontal.svg');

fs.writeFileSync(svgPath, officialLogoSvg, 'utf8');
fs.writeFileSync(bannerPath, officialLogoSvg, 'utf8');
fs.writeFileSync(horizontalPath, officialLogoSvg, 'utf8');

console.log('Saved SVG files to public/');

// Render high-res PNGs using Resvg
const resvg1x = new Resvg(officialLogoSvg, {
  fitTo: { mode: 'width', value: 600 }
});
const png1x = resvg1x.render().asPng();
fs.writeFileSync(path.join(publicDir, 'logo.png'), png1x);
fs.writeFileSync(path.join(publicDir, 'logo-oficial.png'), png1x);

const resvg2x = new Resvg(officialLogoSvg, {
  fitTo: { mode: 'width', value: 1200 }
});
const png2x = resvg2x.render().asPng();
fs.writeFileSync(path.join(publicDir, 'logo-hd.png'), png2x);

console.log('Generated PNGs successfully!');
