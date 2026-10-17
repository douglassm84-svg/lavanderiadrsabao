import React, { useState } from 'react';
import { X, Upload, RotateCcw, Check, Image as ImageIcon } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface LogoCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoCustomizerModal: React.FC<LogoCustomizerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [badgeSuccess, setBadgeSuccess] = useState(false);
  const [stickerSuccess, setStickerSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'badge' | 'sticker'
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      if (type === 'badge') {
        localStorage.setItem('dr_sabao_custom_badge', result);
        setBadgeSuccess(true);
        setTimeout(() => setBadgeSuccess(false), 3000);
      } else {
        localStorage.setItem('dr_sabao_custom_sticker', result);
        setStickerSuccess(true);
        setTimeout(() => setStickerSuccess(false), 3000);
      }
      // Trigger a soft update event
      window.dispatchEvent(new Event('storage'));
      setTimeout(() => {
        window.location.reload();
      }, 500);
    };
    reader.readAsDataURL(file);
  };

  const handleReset = (type: 'badge' | 'sticker' | 'all') => {
    if (type === 'badge' || type === 'all') {
      localStorage.removeItem('dr_sabao_custom_badge');
    }
    if (type === 'sticker' || type === 'all') {
      localStorage.removeItem('dr_sabao_custom_sticker');
    }
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-[#085d7b] to-[#04394e] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-white/10 text-cyan-300">
              <ImageIcon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black">Identidade Visual & Logos Dr. Sabão</h2>
              <p className="text-xs text-cyan-100">
                Fidelidade total às proporções oficiais e personalização em alta definição
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
          
          {/* Section 1: Circular Mascot Logo */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-sm text-[#085d7b]">
                  1. Logo Emblema Redondo / Mascote (1:1)
                </h3>
                <p className="text-xs text-slate-500">
                  Utilizada no cabeçalho, rodapé e crachás de confiança
                </p>
              </div>
              <label className="cursor-pointer px-4 py-2 bg-[#085d7b] hover:bg-[#06475e] text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center gap-2">
                <Upload className="w-3.5 h-3.5" />
                <span>{badgeSuccess ? 'Logo Carregada!' : 'Substituir por PNG/SVG'}</span>
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/svg+xml,image/webp"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e, 'badge')}
                />
              </label>
            </div>

            <div className="flex items-center justify-center p-4 bg-white rounded-xl border border-slate-200/80">
              <BrandLogo variant="badge" size="lg" />
            </div>
          </div>

          {/* Section 2: Adhesive Banner 100x50 */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-sm text-[#085d7b]">
                  2. Adesivo Oficial 100x50 cm (2:1)
                </h3>
                <p className="text-xs text-slate-500">
                  Banner retangular proporcional sem esticamento ou deformação
                </p>
              </div>
              <label className="cursor-pointer px-4 py-2 bg-[#f97d38] hover:bg-[#e06520] text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center gap-2">
                <Upload className="w-3.5 h-3.5" />
                <span>{stickerSuccess ? 'Adesivo Carregado!' : 'Substituir por PNG/SVG'}</span>
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/svg+xml,image/webp"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e, 'sticker')}
                />
              </label>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
              <BrandLogo variant="sticker" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <button
              onClick={() => handleReset('all')}
              className="text-xs font-bold text-slate-500 hover:text-rose-600 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Logos Padrão Vetoriais Oficiais</span>
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>Concluir</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
