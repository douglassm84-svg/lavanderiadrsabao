import React, { useState } from 'react';
import { 
  SERVICES_DATA 
} from '../data/servicesData';
import { ServiceItem } from '../types';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight,
  Layers,
  Scale,
  Footprints,
  Briefcase
} from 'lucide-react';
import { createWhatsAppUrl } from '../data/companyData';

interface ServicesPageProps {
  selectedServiceId: string | null;
  setSelectedServiceId: (id: string | null) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  selectedServiceId,
  setSelectedServiceId
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(
    selectedServiceId || SERVICES_DATA[0].id
  );

  const currentService: ServiceItem = 
    SERVICES_DATA.find((s) => s.id === activeTabId) || SERVICES_DATA[0];

  const handleTabChange = (id: string) => {
    setActiveTabId(id);
    setSelectedServiceId(id);
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'vestidos-noiva-festas': return Sparkles;
      case 'tapetes-cortinas': return Layers;
      case 'couro-calcados': return Footprints;
      case 'lavagem-peso-economica': return Scale;
      case 'lavagem-a-seco-umido': return ShieldCheck;
      case 'comercial-b2b': return Briefcase;
      default: return Sparkles;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-extrabold text-[#085d7b] bg-cyan-50 border border-cyan-200 px-3.5 py-1 rounded-full uppercase tracking-wider">
          Portfólio Completo de Serviços
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
          Serviços de Lavagem Especializada e Econômica em <span className="text-[#085d7b]">Curitiba</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Tradição desde 2011 no Alto da XV com equipamentos industriais ecológicos e atendimento dedicado para cada tipo de fibra.
        </p>
      </div>

      {/* Horizontal Filter Navigation */}
      <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none border-b border-slate-200">
        {SERVICES_DATA.map((srv) => {
          const Icon = getCategoryIcon(srv.id);
          const isActive = srv.id === activeTabId;
          return (
            <button
              key={srv.id}
              onClick={() => handleTabChange(srv.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#085d7b] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-[#085d7b] hover:bg-slate-50 border border-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#f97d38]' : 'text-slate-400'}`} />
              <span>{srv.title}</span>
            </button>
          );
        })}
      </div>

      {/* Detailed Service View (Landing Page Content) */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden animate-fadeIn">
        
        {/* Top Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200">
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[#085d7b] bg-cyan-50 border border-cyan-200 px-2.5 py-0.5 rounded uppercase">
                  {currentService.category.toUpperCase()}
                </span>
                <span className="text-xs text-slate-500">
                  Alto da XV · Curitiba - PR
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {currentService.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentService.fullDescription}
              </p>

              {currentService.startingPrice && (
                <div className="inline-block bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2 text-xs">
                  <span className="text-slate-500 block">Referência de valor:</span>
                  <span className="font-extrabold text-[#f97d38] text-sm">
                    {currentService.startingPrice}
                  </span>
                </div>
              )}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={createWhatsAppUrl(`Olá! Gostaria de um orçamento detalhado para o serviço: ${currentService.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#25d366] hover:bg-[#1ebe5b] text-slate-950 rounded-xl text-xs sm:text-sm font-extrabold shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 h-72 sm:h-96 lg:h-auto min-h-[300px] relative bg-slate-100">
            <img
              src={currentService.heroImage}
              alt={currentService.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Benefits & Process Steps */}
        <div className="p-6 sm:p-10 space-y-10">
          
          {/* Benefits Grid */}
          <div className="space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider text-xs text-slate-400">
              Vantagens e Diferenciais Técnicos da Dr. Sabão
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentService.benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200/70 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Process */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider text-xs text-slate-400">
              Como Funciona o Nosso Processo Passo a Passo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentService.processSteps.map((step, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-4 rounded-2xl shadow-xs space-y-2">
                  <span className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-800 text-xs font-extrabold flex items-center justify-center font-mono">
                    0{idx + 1}
                  </span>
                  <h4 className="font-bold text-sm text-slate-900">{step.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs of the service */}
          {currentService.faq.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider text-xs text-slate-400 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-cyan-600" />
                <span>Perguntas Frequentes sobre {currentService.title}</span>
              </h3>
              <div className="space-y-3">
                {currentService.faq.map((f, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                    <h5 className="font-bold text-xs sm:text-sm text-slate-900">{f.q}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SEO Focus Keywords Tag Cloud */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-bold text-slate-400 uppercase text-[11px]">Buscas Frequentes em Curitiba:</span>
            {currentService.seoKeywords.map((kw, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-[11px] font-medium">
                {kw}
              </span>
            ))}
          </div>

        </div>

      </div>

      {/* CTA Box at bottom of services */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">Tem dúvidas sobre tecidos específicos?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Tire uma foto da etiqueta ou da mancha e envie no WhatsApp da nossa equipe técnica para uma orientação personalizada.
          </p>
        </div>

        <a
          href={createWhatsAppUrl(`Olá! Gostaria de enviar uma foto da minha peça para avaliação na Lavanderia Dr. Sabão.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shrink-0 transition-transform hover:scale-105 active:scale-95"
        >
          <Send className="w-4 h-4" />
          <span>Enviar Foto no WhatsApp</span>
        </a>
      </div>

    </div>
  );
};
