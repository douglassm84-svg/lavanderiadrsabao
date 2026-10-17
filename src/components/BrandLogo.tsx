import React, { useState, useEffect } from 'react';

interface BrandLogoProps {
  variant?: 'horizontal' | 'badge' | 'sticker' | 'compact';
  theme?: 'dark' | 'light' | 'colored';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  theme = 'colored',
  className = '',
  size = 'md'
}) => {
  const [customBadge, setCustomBadge] = useState<string | null>(null);
  const [customSticker, setCustomSticker] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedBadge = localStorage.getItem('dr_sabao_custom_badge');
      const savedSticker = localStorage.getItem('dr_sabao_custom_sticker');
      if (savedBadge) setCustomBadge(savedBadge);
      if (savedSticker) setCustomSticker(savedSticker);
    } catch {
      // Storage access gracefully handled
    }
  }, []);

  // 1. Official Adhesive Banner (Adesivo Oficial 2:1 - Exato da Marca)
  if (variant === 'sticker') {
    const bannerSrc = customSticker || `${import.meta.env.BASE_URL}logo-oficial.svg`;

    return (
      <div 
        className={`relative overflow-hidden rounded-2xl shadow-2xl border border-cyan-800/30 bg-[#085d7b] aspect-[2/1] w-full flex items-center justify-center select-none ${className}`}
      >
        <img
          src={bannerSrc}
          alt="Lavanderia Dr. Sabão - Adesivo Oficial 100x50"
          className="w-full h-full object-contain block transition-transform duration-300 hover:scale-[1.01]"
          loading="eager"
          decoding="async"
        />
      </div>
    );
  }

  // 2. Circular Mascot Badge (Logo Emblema Redondo - Proporção 1:1 Sem Deformação)
  if (variant === 'badge') {
    const pxSize = 
      size === 'sm' ? 'w-12 h-12' : 
      size === 'md' ? 'w-20 h-20' : 
      size === 'lg' ? 'w-28 h-28' : 'w-36 h-36';
    const badgeSrc = customBadge || `${import.meta.env.BASE_URL}logo-mascote.svg`;

    return (
      <div className={`relative inline-flex items-center justify-center shrink-0 aspect-square ${pxSize} ${className}`}>
        <img
          src={badgeSrc}
          alt="Dr. Sabão - Emblema Oficial"
          className="w-full h-full object-contain drop-shadow-md select-none transition-transform hover:scale-105"
          loading="eager"
          decoding="async"
        />
      </div>
    );
  }

  // 3. Horizontal Header / Navbar Official Branding
  if (variant === 'horizontal') {
    const isDarkTheme = theme === 'dark';
    const textColor = isDarkTheme ? 'text-white' : 'text-[#085d7b]';
    const badgePx = size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-14 h-14' : 'w-11 h-11';
    const badgeSrc = customBadge || `${import.meta.env.BASE_URL}logo-mascote.svg`;

    return (
      <div className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}>
        {/* Mascot Circular Emblem (Strict 1:1 aspect-ratio, object-contain) */}
        <div className={`shrink-0 aspect-square ${badgePx} transition-transform duration-300 group-hover:scale-105 drop-shadow-sm`}>
          <img
            src={badgeSrc}
            alt="Dr. Sabão Mascote"
            className="w-full h-full object-contain"
            loading="eager"
          />
        </div>

        {/* Brand Typography */}
        <div className="flex flex-col justify-center">
          <div className="flex items-start leading-none">
            <span className={`font-black text-xl sm:text-2xl tracking-tight ${textColor} font-display drop-shadow-xs`}>
              Dr. Sabão
            </span>
            <span className="text-[9px] font-mono font-bold text-slate-400 ml-0.5 -mt-0.5">
              TM
            </span>
          </div>

          {/* Orange Lavanderia Pill */}
          <div className="mt-1 bg-[#f97d38] text-white px-2.5 py-0.5 rounded-md shadow-xs self-start inline-flex items-center">
            <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.25em] uppercase text-white leading-none">
              Lavanderia
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 4. Compact Icon (Strict 1:1)
  const compactPx = size === 'sm' ? 'w-8 h-8' : 'w-10 h-10';
  const badgeSrc = customBadge || `${import.meta.env.BASE_URL}logo-mascote.svg`;

  return (
    <div className={`inline-flex items-center justify-center shrink-0 aspect-square ${compactPx} ${className}`}>
      <img
        src={badgeSrc}
        alt="Dr. Sabão"
        className="w-full h-full object-contain drop-shadow-xs"
        loading="eager"
      />
    </div>
  );
};
