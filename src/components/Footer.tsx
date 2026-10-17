import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Send, 
  ShieldCheck, 
  FileText,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { COMPANY_NAP, createWhatsAppUrl } from '../data/companyData';
import { SERVICES_DATA } from '../data/servicesData';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  setSelectedServiceId: (id: string | null) => void;
  onOpenStrategyHub: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentTab,
  setSelectedServiceId,
  onOpenStrategyHub
}) => {
  const handleServiceClick = (id: string) => {
    setSelectedServiceId(id);
    setCurrentTab('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#053749] text-slate-300 pt-16 pb-12 border-t border-[#085d7b]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-cyan-900/40">
          
          {/* Column 1: Brand & Mascot */}
          <div className="space-y-4">
            <BrandLogo variant="horizontal" theme="dark" size="md" />

            <p className="text-xs text-cyan-100/80 leading-relaxed">
              Lavanderia especializada no Alto da XV com mais de 15 anos de excelência. Cuidado artesanal para vestidos de noiva, couro, tapetes e a praticidade da lavagem econômica por peso para famílias e empresas de Curitiba.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_NAP.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
                title="Siga @lavanderiadrsabao no Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#25d366] text-slate-950 flex items-center justify-center shadow-md hover:scale-110 transition-transform font-bold"
                title="Conversar no WhatsApp"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_NAP.social.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#085d7b] border border-cyan-400/30 flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
                title="Ver perfil no Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#f97d38]" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenStrategyHub}
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-200 hover:text-white bg-[#032734] border border-cyan-700/50 rounded-lg px-3 py-1.5 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Auditoria SEO & Checklist</span>
              </button>
            </div>
          </div>

          {/* Column 2: NAP & Horários (Rigorosamente corretos) */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm tracking-wide uppercase">
              Contato & Localização (NAP)
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f97d38] shrink-0 mt-1" />
                <div>
                  <strong className="text-white block font-medium">Endereço Físico:</strong>
                  <p className="text-cyan-100/70 text-xs leading-relaxed">
                    {COMPANY_NAP.address.street}, {COMPANY_NAP.address.complement}<br />
                    {COMPANY_NAP.address.neighborhood} — Curitiba - PR<br />
                    CEP: {COMPANY_NAP.address.cep}
                  </p>
                  <a 
                    href={COMPANY_NAP.social.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-cyan-300 hover:underline inline-flex items-center gap-1 mt-1 font-bold"
                  >
                    <span>Como chegar (Traçar rota)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <span className="text-cyan-100/60 text-xs block">Telefone Fixo:</span>
                  <a href={`tel:${COMPANY_NAP.phones.landlineRaw}`} className="text-white hover:text-cyan-300 font-semibold text-xs">
                    {COMPANY_NAP.phones.landline}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Send className="w-4 h-4 text-[#25d366] shrink-0" />
                <div>
                  <span className="text-cyan-100/60 text-xs block">WhatsApp Oficial:</span>
                  <a 
                    href={createWhatsAppUrl()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#25d366] hover:underline font-bold text-xs"
                  >
                    {COMPANY_NAP.phones.mobileWhatsApp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <strong className="text-white block text-xs">Horário de Funcionamento:</strong>
                  <p className="text-cyan-100/90">
                    <span className="font-semibold text-white">Segunda a Sexta:</span> 09h às 18h
                  </p>
                  <p className="text-cyan-100/90">
                    <span className="font-semibold text-white">Sábado:</span> 09h às 13h
                  </p>
                  <p className="text-cyan-300/50 italic mt-0.5 text-[11px]">
                    Domingos e Feriados: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Serviços Especializados */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm tracking-wide uppercase">
              Serviços Especializados
            </h3>

            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleServiceClick(srv.id)}
                    className="text-left text-cyan-100/70 hover:text-white transition-colors flex items-center gap-2 group text-xs cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f97d38] group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:translate-x-0.5 transition-transform">{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <h4 className="text-xs font-bold text-[#f97d38] uppercase tracking-wider mb-1">
                Instagram Oficial
              </h4>
              <p className="text-xs text-cyan-100/70 leading-relaxed">
                Acompanhe o dia a dia e dicas de lavagem no perfil <a href={COMPANY_NAP.social.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline">@lavanderiadrsabao</a>.
              </p>
            </div>
          </div>

          {/* Column 4: Bairros Atendidos & Selos de Confiança */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm tracking-wide uppercase">
              Área de Atendimento
            </h3>

            <p className="text-xs text-cyan-100/70">
              Balcão próprio no <strong className="text-white">Alto da XV</strong> com raio de coleta e entrega em:
            </p>

            <div className="flex flex-wrap gap-1.5">
              {COMPANY_NAP.neighborhoodsServed.map((b) => (
                <span 
                  key={b.name}
                  className="text-[11px] bg-[#032734] text-cyan-100 border border-cyan-800/60 px-2 py-0.5 rounded"
                >
                  {b.name}
                </span>
              ))}
            </div>

            <div className="pt-3 space-y-2 border-t border-cyan-900/50">
              <div className="flex items-center gap-2 text-xs text-cyan-100/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Empresa Fundada em 2011 (15 Anos)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-cyan-100/80">
                <ShieldCheck className="w-4 h-4 text-[#f97d38] shrink-0" />
                <span>Processos Ecológicos & Hipoalergênicos</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-cyan-100/80">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Secagem Controlada em Estufa Antibacteriana</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cyan-100/60">
          <div>
            <p>
              © {new Date().getFullYear()} Lavanderia Dr. Sabão. CNPJ: Dr. Sabão Lavanderia Especializada Ltda. Todos os direitos reservados.
            </p>
            <p className="mt-0.5 text-cyan-200/40">
              Rua Sete de Abril, 269, Loja 01, Alto da XV, Curitiba - PR | Tel: (41) 3363-3333 | Whats: (41) 98777-3600
            </p>
          </div>

          <div className="flex items-center gap-4 text-cyan-100/80">
            <button onClick={() => handleNavClick('home')} className="hover:text-white cursor-pointer">Início</button>
            <span>·</span>
            <button onClick={() => handleNavClick('about')} className="hover:text-white cursor-pointer">Sobre Nós</button>
            <span>·</span>
            <button onClick={() => handleNavClick('blog')} className="hover:text-white cursor-pointer">Dicas & SEO</button>
            <span>·</span>
            <button onClick={() => handleNavClick('contact')} className="hover:text-white cursor-pointer">Contato</button>
            <span>·</span>
            <a href={COMPANY_NAP.social.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
