import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Instagram, 
  ExternalLink,
  MessageCircle,
  Building2
} from 'lucide-react';
import { COMPANY_NAP, createWhatsAppUrl } from '../data/companyData';
import { BrandLogo } from '../components/BrandLogo';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Lavanderia por Peso');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build direct WhatsApp message
    let text = `Olá! Gostaria de falar com o atendimento da Lavanderia Dr. Sabão.\n\n`;
    text += `*Nome:* ${name}\n`;
    text += `*Telefone/Contato:* ${phone}\n`;
    text += `*Serviço de Interesse:* ${service}\n`;
    if (message) text += `*Mensagem:* ${message}\n`;

    const url = createWhatsAppUrl(text);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-extrabold text-[#085d7b] bg-cyan-50 border border-cyan-200 px-3.5 py-1 rounded-full uppercase tracking-wider">
          Canais de Atendimento Direto
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
          Fale com a Lavanderia <span className="text-[#085d7b]">Dr. Sabão</span> em Curitiba
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Estamos prontos para atender você no nosso balcão da Rua Sete de Abril (Alto da XV), por telefone fixo ou direto pelo WhatsApp.
        </p>
      </div>

      {/* Grid: Contact Info Cards & Quick Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct NAP & Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <BrandLogo variant="badge" size="sm" />
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Lavanderia Dr. Sabão
                </h2>
                <p className="text-xs text-[#f97d38] font-bold">
                  Alto da XV · Desde 2011
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#085d7b] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-sm font-semibold text-slate-900">Endereço Presencial:</strong>
                <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                  {COMPANY_NAP.address.street}, {COMPANY_NAP.address.complement}<br />
                  Bairro {COMPANY_NAP.address.neighborhood} — Curitiba - PR<br />
                  CEP: {COMPANY_NAP.address.cep}
                </p>
                <a
                  href={COMPANY_NAP.social.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#085d7b] hover:underline font-bold mt-1.5"
                >
                  <span>Abrir localização no Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Hours - Strict attention to accuracy */}
            <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <strong className="block text-sm font-semibold text-slate-900">Horário de Funcionamento:</strong>
                <p className="text-slate-700 font-medium mt-0.5">
                  <strong>Segunda a Sexta:</strong> 09h às 18h
                </p>
                <p className="text-slate-700 font-medium">
                  <strong>Sábado:</strong> 09h às 13h
                </p>
                <p className="text-slate-400 italic mt-0.5">
                  Domingos e Feriados: Fechado
                </p>
              </div>
            </div>

            {/* Telephones */}
            <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-xs space-y-1">
                <strong className="block text-sm font-semibold text-slate-900">Telefones & Instagram:</strong>
                <p>
                  <span className="text-slate-500">Telefone Fixo:</span>{' '}
                  <a href={`tel:${COMPANY_NAP.phones.landlineRaw}`} className="font-bold text-slate-800 hover:text-[#085d7b]">
                    {COMPANY_NAP.phones.landline}
                  </a>
                </p>
                <p>
                  <span className="text-slate-500">WhatsApp Oficial:</span>{' '}
                  <a 
                    href={createWhatsAppUrl()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-[#25d366] hover:underline"
                  >
                    {COMPANY_NAP.phones.mobileWhatsApp}
                  </a>
                </p>
                <p>
                  <span className="text-slate-500">Instagram:</span>{' '}
                  <a 
                    href={COMPANY_NAP.social.instagramUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-purple-600 hover:text-purple-700"
                  >
                    {COMPANY_NAP.social.instagram}
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={createWhatsAppUrl("Olá! Gostaria de falar com o balcão da Dra. Sabão.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25d366] hover:bg-[#1ebe5b] text-slate-950 font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Conversar no WhatsApp Agora</span>
              </a>
            </div>

          </div>
        </div>

        {/* Right Column: Contact & Quick Message Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-md space-y-6">
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
                Envio Imediato
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                Solicite uma Cotação ou Dúvida Técnica
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Preencha os campos abaixo para abrir a conversa estruturada diretamente com nosso atendente no WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Seu Nome Completo:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Mariana Silveira"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs sm:text-sm border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Telefone ou WhatsApp:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(41) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs sm:text-sm border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Serviço de Interesse:
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full text-xs sm:text-sm border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                  >
                    <option value="Vestidos de Noiva e Festa">Vestidos de Noiva e Festa</option>
                    <option value="Lavagem de Tapetes e Cortinas">Lavagem de Tapetes e Cortinas</option>
                    <option value="Limpeza de Couro e Tênis">Limpeza de Couro e Tênis</option>
                    <option value="Lavanderia por Peso (Econômica)">Lavanderia por Peso (Econômica)</option>
                    <option value="Lavagem a Seco / Wet Cleaning">Lavagem a Seco / Wet Cleaning</option>
                    <option value="Atendimento Comercial para Empresas">Atendimento Comercial para Empresas</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mensagem ou Detalhe das Peças (Opcional):
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva a peça, manchas ou quantidade que deseja lavar..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-xs sm:text-sm border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-101 active:scale-99 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Dados no WhatsApp (41 98777-3600)</span>
              </button>
            </form>

            <div className="pt-2 text-center text-xs text-slate-400">
              * Nenhum dado é compartilhado. O botão abre sua conversa privada no aplicativo do WhatsApp.
            </div>
          </div>
        </div>

      </div>

      {/* Embedded Google Maps Section */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl space-y-4">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-extrabold text-lg text-slate-900">
              Mapa Interativo de Acesso ao Balcão da Dr. Sabão
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Rua Sete de Abril, 269, Loja 01, Alto da XV, Curitiba - PR
            </p>
          </div>

          <a
            href={COMPANY_NAP.social.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors"
          >
            <span>Traçar Rota no Waze / Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="h-96 w-full bg-slate-100">
          <iframe
            title="Localização Lavanderia Dr. Sabão Alto da XV Curitiba"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1118671607594!2d-49.25838032470716!3d-25.426744077564757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce449a8837be7%3A0x6b8bcbfdfa312012!2sR.%20Sete%20de%20Abril%2C%20269%20-%20Alto%20da%20Rua%20XV%2C%20Curitiba%20-%20PR%2C%2080045-125!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>
  );
};
