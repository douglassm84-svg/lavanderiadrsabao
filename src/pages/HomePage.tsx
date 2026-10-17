import React from 'react';
import { 
  Send, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Layers, 
  Scale, 
  Footprints, 
  Star, 
  ArrowRight, 
  CheckCircle2,
  Calendar,
  ExternalLink,
  ChevronDown,
  Instagram
} from 'lucide-react';
import { COMPANY_NAP, createWhatsAppUrl } from '../data/companyData';
import { SERVICES_DATA } from '../data/servicesData';
import { REVIEWS_DATA } from '../data/blogData';
import { BrandLogo } from '../components/BrandLogo';
import { InstagramFeed } from '../components/InstagramFeed';

interface HomePageProps {
  setCurrentTab: (tab: string) => void;
  setSelectedServiceId: (id: string | null) => void;
  onOpenStrategyHub: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentTab,
  setSelectedServiceId,
  onOpenStrategyHub
}) => {

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
    setCurrentTab('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION (With Official Mascot and Brand Identity) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#085d7b]/10 via-slate-50 to-white pt-10 sm:pt-16 pb-12 sm:pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: H1, Copy, CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Trust Badge with Orange Pill Accent */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 text-[#085d7b] border border-cyan-200 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-[#f97d38] animate-pulse"></span>
                <span>Fundada em 2011 · 15 Anos de Tradição no Alto da XV, Curitiba</span>
              </div>

              {/* H1 Main Headline - Geotargeted & High Intent */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-display">
                Lavanderia Especializada em <span className="text-[#085d7b]">Curitiba</span> — Cuidado Artesanal no Alto da XV
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Higienização de alta precisão para <strong>vestidos de noiva</strong>, <strong>tapetes em estufa térmica</strong>, <strong>jaquetas de couro</strong> e a praticidade da <strong>lavagem econômica por peso (kg)</strong> para a sua rotina.
              </p>

              {/* Action Buttons with Brand Palette */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href={createWhatsAppUrl("Olá! Gostaria de solicitar um orçamento com a Lavanderia Dr. Sabão.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 bg-[#25d366] hover:bg-[#1ebe5b] text-slate-950 rounded-xl text-sm font-extrabold shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2.5 transition-all hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Orçamento no WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    const el = document.getElementById('servicos');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      setCurrentTab('services');
                    }
                  }}
                  className="w-full sm:w-auto px-6 py-4 bg-[#085d7b] hover:bg-[#06475e] text-white rounded-xl text-sm font-extrabold shadow-lg shadow-cyan-900/20 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-cyan-200" />
                  <span>Conhecer Nossos Serviços</span>
                </button>
              </div>

              {/* Quick Trust Signals */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>4.9★ no Google</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#085d7b]" />
                  <span>Estufa Antibacteriana</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#f97d38]" />
                  <span>Rua Sete de Abril, 269</span>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Brand Sticker Showcase (From Uploaded Asset) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Full Horizontal Adhesive Banner Representation */}
              <BrandLogo variant="sticker" className="w-full" />

              {/* Balcão Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1000&q=80"
                  alt="Instalações modernas da Lavanderia Dr. Sabão no Alto da XV em Curitiba"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between text-[11px] font-bold mb-1 text-cyan-300">
                    <span>ATENDIMENTO NO BALCÃO</span>
                    <span className="bg-[#f97d38] text-white px-2 py-0.5 rounded text-[10px]">ALTO DA XV</span>
                  </div>
                  <h3 className="font-extrabold text-lg text-white">
                    {COMPANY_NAP.address.street}, {COMPANY_NAP.address.complement}
                  </h3>
                  <p className="text-xs text-slate-300">
                    Fácil estacionamento e atendimento ágil para você.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. NAP FAST INFO BAR (Local SEO Essential) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-12">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          {/* Card 1: Localização */}
          <div className="flex items-start gap-4 pt-4 md:pt-0">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#085d7b] flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Endereço do Balcão</span>
              <p className="font-bold text-slate-900 text-sm mt-0.5">
                {COMPANY_NAP.address.street}, {COMPANY_NAP.address.complement}
              </p>
              <p className="text-xs text-slate-500">
                {COMPANY_NAP.address.neighborhood} · Curitiba - PR
              </p>
            </div>
          </div>

          {/* Card 2: Horário Rigorosamente Correto */}
          <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Horário de Funcionamento</span>
              <p className="font-bold text-slate-900 text-sm mt-0.5">
                Seg a Sex: 09h às 18h
              </p>
              <p className="text-xs text-slate-600 font-medium">
                Sábado: 09h às 13h <span className="text-slate-400 font-normal">(Dom: Fechado)</span>
              </p>
            </div>
          </div>

          {/* Card 3: Contato Direto */}
          <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Send className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Fale Conosco Agora</span>
              <a 
                href={createWhatsAppUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-emerald-600 hover:text-emerald-700 text-sm mt-0.5 block"
              >
                Whats: {COMPANY_NAP.phones.mobileWhatsApp}
              </a>
              <a 
                href={`tel:${COMPANY_NAP.phones.landlineRaw}`}
                className="text-xs text-slate-500 hover:text-[#085d7b] block"
              >
                Fixo: {COMPANY_NAP.phones.landline}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PORTFÓLIO DE SERVIÇOS (As 6 especialidades solicitadas) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold text-[#085d7b] bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full uppercase tracking-wider">
            Nossos Serviços Especializados
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
            Tecnologia Têxtil e Cuidado para Cada Tipo de Peça
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Desde a lavanderia econômica do dia a dia até peças nobres que exigem processos artesanais e estufa antibacteriana em Curitiba.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-cyan-300 transition-all flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={srv.heroImage}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#085d7b]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  {srv.category === 'delicada' ? 'Artesanal' : srv.category === 'casa' ? 'Estufa Térmica' : srv.category === 'economica' ? 'Por Quilo' : 'Especializada'}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#085d7b] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {srv.shortDescription}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="space-y-1">
                    {srv.benefits.slice(0, 2).map((b, bIdx) => (
                      <div key={bIdx} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleSelectService(srv.id)}
                      className="text-xs font-bold text-slate-700 hover:text-[#085d7b] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Ver Processo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={createWhatsAppUrl(`Olá! Gostaria de consultar orçamento para: ${srv.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold rounded-xl border border-emerald-200 transition-colors flex items-center gap-1"
                    >
                      <Send className="w-3 h-3 text-emerald-600" />
                      <span>Cotação Whats</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => {
              setCurrentTab('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#085d7b] hover:text-cyan-800 bg-cyan-50 border border-cyan-200 px-5 py-2.5 rounded-xl transition-all cursor-pointer"
          >
            <span>Ver tabela completa de processos, prazos e perguntas frequentes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. BANNER DE DESTAQUE: LAVANDERIA ECONÔMICA POR PESO (With Brand Colors) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#085d7b] via-[#054359] to-[#043343] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-extrabold text-white bg-[#f97d38] px-3.5 py-1 rounded-full uppercase tracking-wider">
                Solução para a Rotina em Curitiba
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Chega de varal cheio no inverno curitibano: Conheça a Lavagem por Peso!
              </h2>
              <p className="text-sm sm:text-base text-cyan-100 leading-relaxed max-w-2xl">
                Traga seu cesto de roupas do dia a dia (camisetas, toalhas, lençóis e roupas comuns). Nós lavamos com insumos premium, secamos com ar aquecido anti-vincos e devolvemos tudo dobradinho, pronto para colocar na gaveta.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
                  <span className="font-extrabold text-[#f97d38] text-lg block">Economia</span>
                  <span className="text-xs text-slate-200">Até 40% mais barato que peça individual</span>
                </div>
                <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
                  <span className="font-extrabold text-cyan-300 text-lg block">Agilidade</span>
                  <span className="text-xs text-slate-200">Pronto em 24h a 48h úteis</span>
                </div>
                <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
                  <span className="font-extrabold text-cyan-300 text-lg block">Dobrado</span>
                  <span className="text-xs text-slate-200">Embalado e pronto para uso imediato</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center gap-3">
              <a
                href={createWhatsAppUrl("Olá! Gostaria de saber mais sobre a lavanderia econômica por peso (cesto de roupas) no Alto da XV.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25d366] hover:bg-[#1ebe5b] text-slate-950 rounded-xl font-extrabold text-sm shadow-xl flex items-center justify-center gap-2.5 transition-transform hover:scale-105 active:scale-95 cursor-pointer text-center"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Consultar Roupas por Peso no WhatsApp</span>
              </a>

              <p className="text-center text-xs text-slate-200">
                Atendimento rápido direto com nossa equipe: <strong>(41) 98777-3600</strong>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. INSTAGRAM FEED & STORIES INTEGRATION (@lavanderiadrsabao) */}
      <InstagramFeed />

      {/* 6. PROVA SOCIAL LOCAL (Google Reviews & Bairros de Curitiba) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-wider">
            Prova Social de Curitiba
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Aprovado por Mais de 10.000 Clientes Desde 2011
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Veja a opinião de quem confia suas roupas mais preciosas e o cesto do dia a dia na Lavanderia Dr. Sabão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs">
                <strong className="block text-slate-900 font-semibold">{rev.author}</strong>
                <span className="text-[11px] text-[#085d7b] font-bold">{rev.neighborhood}</span>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Serviço: {rev.serviceUsed} · {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={COMPANY_NAP.social.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors"
          >
            <span>Ver perfil e mais avaliações no Google Meu Negócio</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#085d7b]" />
          </a>
        </div>
      </section>

      {/* 7. GOOGLE MAPS EMBED & COBERTURA DE BAIRROS (SEO Local Directive) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Location & Hours details */}
            <div className="lg:col-span-5 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold text-white bg-[#f97d38] px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                  Localização Privilegiada
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Venha Tomar um Café Conosco no Alto da XV
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Localizada na Rua Sete de Abril, 269 (Loja 01), nossa lavanderia possui fácil acesso para moradores do Alto da XV, Juvevê, Cabral, Cristo Rei e Batel.
                </p>

                <div className="space-y-3 pt-2 text-xs">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#f97d38] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Endereço Completo:</strong>
                      <span className="text-slate-600">{COMPANY_NAP.address.fullAddress}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Horário Semanal:</strong>
                      <span className="text-slate-700 font-medium">Segunda a Sexta: 09h às 18h</span><br />
                      <span className="text-slate-700 font-medium">Sábado: 09h às 13h</span> (Fechado aos Domingos)
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#085d7b] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Telefones:</strong>
                      <span className="text-slate-700">Fixo: {COMPANY_NAP.phones.landline}</span><br />
                      <span className="text-emerald-700 font-bold">WhatsApp: {COMPANY_NAP.phones.mobileWhatsApp}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-2">
                <a
                  href={COMPANY_NAP.social.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-[#085d7b] hover:bg-[#064a63] text-white rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Traçar Rota no GPS</span>
                </a>

                <a
                  href={createWhatsAppUrl("Olá! Gostaria de consultar se vocês fazem coleta no meu endereço.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-[#25d366] hover:bg-[#1ebe5b] text-slate-950 rounded-xl text-xs font-extrabold text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Consultar Coleta</span>
                </a>
              </div>
            </div>

            {/* Right: Embedded Google Map */}
            <div className="lg:col-span-7 h-80 lg:h-auto min-h-[350px] bg-slate-100 relative">
              <iframe
                title="Mapa de Localização da Lavanderia Dr. Sabão em Curitiba"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1118671607594!2d-49.25838032470716!3d-25.426744077564757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce449a8837be7%3A0x6b8bcbfdfa312012!2sR.%20Sete%20de%20Abril%2C%20269%20-%20Alto%20da%20Rua%20XV%2C%20Curitiba%20-%20PR%2C%2080045-125!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQ LOCAL SEO RICH SNIPPETS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#085d7b] bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full uppercase tracking-wider">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Perguntas Frequentes sobre Nossos Serviços em Curitiba
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Respostas transparentes para você trazer suas peças com total tranquilidade.
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "Onde fica a Lavanderia Dr. Sabão e quais os horários de atendimento?",
              a: "Nossa loja está na Rua Sete de Abril, 269, Loja 01, no bairro Alto da XV em Curitiba - PR. Nosso horário de funcionamento é de Segunda a Sexta das 09h às 18h e aos Sábados das 09h às 13h. Aos domingos e feriados estamos fechados."
            },
            {
              q: "Como funciona o serviço de lavagem de vestidos de noiva e trajes finos?",
              a: "Cada vestido de noiva passa por uma inspeção têxtil minuciosa sob luz especial para identificar o tipo de mancha e a fixação das pedrarias e rendas. A limpeza é feita de forma artesanal com químicos biodegradáveis de pH calibrado e passadoria a vapor a seco, sem amassar ou queimar fibras sensíveis."
            },
            {
              q: "Por que a lavagem de tapetes da Dr. Sabão não deixa cheiro de mofo?",
              a: "Devido ao clima úmido e frio de Curitiba, nós contamos com uma estufa térmica desumidificadora exclusiva. O tapete é lavado profundamente, centrifugado e seco em ambiente com controle de temperatura e umidade, garantindo 100% de secagem e eliminação de fungos e ácaros."
            },
            {
              q: "Qual a diferença entre a lavagem por peso e a lavagem por peça?",
              a: "A lavanderia por peso é ideal para roupas de uso diário (camisetas, bermudas, toalhas, lençóis e pijamas). Cobramos por quilo (a partir de 4kg), lavamos, secamos e devolvemos dobrado. Já peças nobres como ternos, vestidos de festa e casacos de lã exigem lavagem a seco ou wet cleaning individualizado."
            },
            {
              q: "Como faço para solicitar orçamento ou consultar valores?",
              a: "Basta nos chamar diretamente no WhatsApp (41) 98777-3600 clicando no botão do site, ou pelo telefone fixo (41) 3363-3333. Você também pode enviar fotos das suas peças para uma pré-avaliação imediata."
            }
          ].map((faq, fIdx) => (
            <details
              key={fIdx}
              className="group bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 transition-all [&_summary::-webkit-details-marker]:none"
            >
              <summary className="flex items-center justify-between cursor-pointer font-bold text-sm text-slate-900 group-open:text-[#085d7b]">
                <span>{faq.q}</span>
                <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* 9. FINAL CONVERSION CTA BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#085d7b] rounded-3xl p-8 sm:p-10 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Pronto para ter suas roupas tratadas por verdadeiros especialistas?
          </h2>
          <p className="text-xs sm:text-sm text-cyan-100 max-w-xl mx-auto leading-relaxed">
            Envie sua mensagem agora mesmo e receba um atendimento atencioso da equipe Dr. Sabão no Alto da XV.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={createWhatsAppUrl("Olá! Gostaria de falar com o atendimento para trazer minhas roupas hoje.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#25d366] hover:bg-[#1ebe5b] text-slate-950 rounded-xl font-extrabold text-sm shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Chamar no WhatsApp (41 98777-3600)</span>
            </a>

            <a
              href={`tel:${COMPANY_NAP.phones.landlineRaw}`}
              className="px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white rounded-xl font-bold text-sm transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Ligar Fixo: {COMPANY_NAP.phones.landline}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
