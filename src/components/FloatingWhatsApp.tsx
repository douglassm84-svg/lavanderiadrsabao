import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { COMPANY_NAP, createWhatsAppUrl } from '../data/companyData';
import { BrandLogo } from './BrandLogo';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    "Olá! Gostaria de orçamento para vestido de noiva.",
    "Olá! Quanto custa a lavagem de tapetes?",
    "Olá! Como funciona a lavanderia por peso (cesto)?",
    "Gostaria de saber se vocês atendem no Alto da XV hoje."
  ];

  const handleSend = (text: string) => {
    const url = createWhatsAppUrl(text || "Olá! Gostaria de um orçamento com a Lavanderia Dr. Sabão.");
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Mini popup dialog on click */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-fadeIn text-slate-800">
          {/* Header */}
          <div className="bg-[#085d7b] text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="shrink-0">
                  <BrandLogo variant="badge" size="sm" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Lavanderia Dr. Sabão</h4>
                  <p className="text-[11px] text-cyan-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Atendimento Alto da XV (41) 98777-3600
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-md"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed shadow-xs">
              <p className="font-semibold text-slate-900 mb-1">
                Olá! Como podemos ajudar suas roupas hoje?
              </p>
              Estamos no Alto da XV (Rua Sete de Abril, 269). Escolha uma opção rápida ou digite sua dúvida:
            </div>

            <div className="space-y-1.5">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Assuntos Frequentes:
              </p>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left text-xs bg-white hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 border border-slate-200 p-2.5 rounded-lg transition-colors font-medium flex items-center justify-between group"
                >
                  <span className="truncate pr-2">{prompt}</span>
                  <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0" />
                </button>
              ))}
            </div>

            {/* Custom input */}
            <div className="pt-2">
              <div className="flex gap-1.5">
                <input
                  type="text"
                  placeholder="Escreva sua mensagem..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSend(customMsg);
                  }}
                  className="flex-1 text-xs border border-slate-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  onClick={() => handleSend(customMsg)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="px-4 py-2 bg-slate-100 border-t border-slate-200 text-[11px] text-slate-500 text-center">
            Resposta rápida no horário comercial · Seg-Sex 09h-18h | Sáb 09h-13h
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <div 
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-white text-slate-800 px-3.5 py-2 rounded-full shadow-lg border border-slate-100 text-xs font-bold cursor-pointer hover:shadow-xl transition-all hover:scale-105"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Orçamento no WhatsApp</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 relative group cursor-pointer"
          aria-label="Abrir WhatsApp da Dr. Sabão"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 text-[9px] font-bold text-emerald-950 items-center justify-center">1</span>
          </span>
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};
