import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronDown, 
  FileText, 
  Send,
  Instagram
} from 'lucide-react';
import { COMPANY_NAP, createWhatsAppUrl } from '../data/companyData';
import { SERVICES_DATA } from '../data/servicesData';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  selectedServiceId: string | null;
  setSelectedServiceId: (id: string | null) => void;
  onOpenStrategyHub: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  setSelectedServiceId,
  onOpenStrategyHub
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    
    // Seg-Sex: 9h às 18h
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 18) {
      setIsOpenNow(true);
    } 
    // Sab: 9h às 13h
    else if (day === 6 && hour >= 9 && hour < 13) {
      setIsOpenNow(true);
    } else {
      setIsOpenNow(false);
    }
  }, []);

  const handleServiceSelect = (id: string) => {
    setSelectedServiceId(id);
    setCurrentTab('services');
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const navigateTo = (tab: string) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100">
      {/* Topbar NAP Bar in Official Deep Teal #085d7b */}
      <div className="bg-[#085d7b] text-white text-xs py-2 px-4 border-b border-[#054359]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a 
              href={`tel:${COMPANY_NAP.phones.landlineRaw}`} 
              className="flex items-center gap-1.5 hover:text-cyan-200 transition-colors"
              title="Ligar para telefone fixo"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-300" />
              <span className="font-semibold">{COMPANY_NAP.phones.landline}</span>
            </a>

            <a 
              href={createWhatsAppUrl("Olá! Gostaria de falar com o atendimento da Dr. Sabão.")}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors"
              title="Falar no WhatsApp"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold text-emerald-300">Whats: {COMPANY_NAP.phones.mobileWhatsApp}</span>
            </a>

            <a 
              href={COMPANY_NAP.social.instagramUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 hover:text-pink-300 transition-colors text-cyan-100"
              title="Instagram @lavanderiadrsabao"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-300" />
              <span>@lavanderiadrsabao</span>
            </a>

            <a 
              href={COMPANY_NAP.social.googleMapsDirectionsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 hover:text-cyan-200 transition-colors text-cyan-100"
              title="Ver no Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#f97d38]" />
              <span>{COMPANY_NAP.address.street}, {COMPANY_NAP.address.complement} - Alto da XV</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 text-cyan-100">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>Seg-Sex 09h-18h · Sáb 09h-13h</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${isOpenNow ? 'bg-emerald-500 text-white shadow-xs' : 'bg-slate-800 text-slate-300'}`}>
                {isOpenNow ? 'Aberto' : 'Fechado'}
              </span>
            </div>

            <button
              onClick={onOpenStrategyHub}
              className="hidden lg:flex items-center gap-1 bg-[#054359] hover:bg-[#043343] text-cyan-200 border border-cyan-500/30 px-2.5 py-0.5 rounded text-[11px] font-semibold transition-colors"
              title="Abrir o Dossiê Técnico de SEO e Wireframes"
            >
              <FileText className="w-3 h-3 text-cyan-300" />
              <span>Dossiê SEO</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22">
          {/* Official Brand Logo */}
          <div onClick={() => navigateTo('home')} className="cursor-pointer">
            <BrandLogo variant="horizontal" size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            <button
              onClick={() => navigateTo('home')}
              className={`text-sm font-bold transition-colors pb-1 border-b-2 ${
                currentTab === 'home'
                  ? 'border-[#085d7b] text-[#085d7b]'
                  : 'border-transparent text-slate-600 hover:text-[#085d7b]'
              }`}
            >
              Início
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center gap-1 text-sm font-bold transition-colors pb-1 border-b-2 ${
                  currentTab === 'services'
                    ? 'border-[#085d7b] text-[#085d7b]'
                    : 'border-transparent text-slate-600 hover:text-[#085d7b]'
                }`}
              >
                <span>Serviços</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesDropdownOpen && (
                <div 
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 py-3 z-50 animate-fadeIn"
                >
                  <div className="px-3 py-1 text-[11px] font-extrabold text-[#085d7b] uppercase tracking-wider">
                    Especialidades Dr. Sabão
                  </div>
                  {SERVICES_DATA.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => handleServiceSelect(srv.id)}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-cyan-50/80 transition-colors flex flex-col group/item"
                    >
                      <span className="text-sm font-bold text-slate-800 group-hover/item:text-[#085d7b]">
                        {srv.title}
                      </span>
                      <span className="text-xs text-slate-500 line-clamp-1">
                        {srv.shortDescription}
                      </span>
                    </button>
                  ))}
                  <div className="mt-2 pt-2 border-t border-slate-100 px-3">
                    <button
                      onClick={() => navigateTo('services')}
                      className="text-xs font-bold text-[#f97d38] hover:text-[#ea580c] flex items-center justify-between w-full"
                    >
                      <span>Ver todos os serviços e preços</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => navigateTo('about')}
              className={`text-sm font-bold transition-colors pb-1 border-b-2 ${
                currentTab === 'about'
                  ? 'border-[#085d7b] text-[#085d7b]'
                  : 'border-transparent text-slate-600 hover:text-[#085d7b]'
              }`}
            >
              Sobre Nós (Desde 2011)
            </button>

            <button
              onClick={() => navigateTo('blog')}
              className={`text-sm font-bold transition-colors pb-1 border-b-2 ${
                currentTab === 'blog'
                  ? 'border-[#085d7b] text-[#085d7b]'
                  : 'border-transparent text-slate-600 hover:text-[#085d7b]'
              }`}
            >
              Blog & Dicas
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className={`text-sm font-bold transition-colors pb-1 border-b-2 ${
                currentTab === 'contact'
                  ? 'border-[#085d7b] text-[#085d7b]'
                  : 'border-transparent text-slate-600 hover:text-[#085d7b]'
              }`}
            >
              Contato & Alto da XV
            </button>
          </nav>

          {/* Action CTAs in Official Orange & Emerald */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={createWhatsAppUrl("Olá! Gostaria de solicitar um orçamento para lavagem com a Dr. Sabão.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25d366] hover:bg-[#1ebe5b] text-slate-950 text-xs font-extrabold shadow-md shadow-emerald-500/20 transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-slate-950" />
              <span>Orçamento no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={createWhatsAppUrl("Olá! Gostaria de um orçamento pelo WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#25d366] text-slate-950 text-xs font-bold flex items-center gap-1"
              title="WhatsApp"
            >
              <Send className="w-4 h-4 text-slate-950" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => navigateTo('home')}
              className={`text-left px-3 py-2.5 rounded-lg font-bold text-sm ${
                currentTab === 'home' ? 'bg-cyan-50 text-[#085d7b]' : 'text-slate-700'
              }`}
            >
              Início
            </button>

            <div className="px-3 pt-2 pb-1 text-xs font-bold text-slate-400 uppercase">
              Serviços Especializados
            </div>
            <div className="grid grid-cols-1 gap-1 pl-2">
              {SERVICES_DATA.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleServiceSelect(s.id)}
                  className="text-left py-2 px-3 text-xs font-semibold text-slate-600 hover:text-[#085d7b] hover:bg-slate-50 rounded-md"
                >
                  • {s.title}
                </button>
              ))}
            </div>

            <button
              onClick={() => navigateTo('about')}
              className={`text-left px-3 py-2.5 rounded-lg font-bold text-sm ${
                currentTab === 'about' ? 'bg-cyan-50 text-[#085d7b]' : 'text-slate-700'
              }`}
            >
              Sobre Nós (Desde 2011)
            </button>

            <button
              onClick={() => navigateTo('blog')}
              className={`text-left px-3 py-2.5 rounded-lg font-bold text-sm ${
                currentTab === 'blog' ? 'bg-cyan-50 text-[#085d7b]' : 'text-slate-700'
              }`}
            >
              Blog & Dicas de Conservação
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className={`text-left px-3 py-2.5 rounded-lg font-bold text-sm ${
                currentTab === 'contact' ? 'bg-cyan-50 text-[#085d7b]' : 'text-slate-700'
              }`}
            >
              Contato & Alto da XV
            </button>

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={createWhatsAppUrl("Olá! Gostaria de um orçamento via WhatsApp com a Lavanderia Dr. Sabão.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-[#25d366] text-slate-950 rounded-xl font-extrabold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Conversar no WhatsApp (41 98777-3600)</span>
              </a>

              <a
                href={COMPANY_NAP.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Siga @lavanderiadrsabao no Instagram</span>
              </a>

              <a
                href={`tel:${COMPANY_NAP.phones.landlineRaw}`}
                className="w-full text-center py-2.5 bg-slate-100 text-slate-800 rounded-xl font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#085d7b]" />
                <span>Ligar Fixo: {COMPANY_NAP.phones.landline}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStrategyHub();
                }}
                className="w-full text-center py-2 text-[#085d7b] bg-cyan-50 rounded-xl text-xs font-bold"
              >
                Ver Planejamento SEO & Estrutura Técnica
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

