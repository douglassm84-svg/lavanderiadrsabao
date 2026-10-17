import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Layers, 
  Globe, 
  CheckCircle2, 
  Copy, 
  Check, 
  Code2, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Smartphone,
  Search,
  ExternalLink
} from 'lucide-react';
import { SEO_DELIVERABLES } from '../data/seoDocumentation';
import { COMPANY_NAP } from '../data/companyData';

interface StrategyHubProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StrategyHub: React.FC<StrategyHubProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'wireframe' | 'urls' | 'metatags' | 'checklist' | 'copywriting'>('wireframe');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Dossiê Estratégico & Técnico</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mt-1">
              Planejamento Estrutural & SEO Local · Dr. Sabão
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Curitiba - PR (Alto da XV) · Entregáveis Oficiais do Projeto de Alta Performance
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Fechar painel"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 sm:px-6 flex overflow-x-auto gap-2 shrink-0 py-2 scrollbar-none">
          {[
            { id: 'wireframe', label: '1. Wireframe & Conversão', icon: Layers },
            { id: 'urls', label: '2. Arquitetura de URLs', icon: Globe },
            { id: 'metatags', label: '3. Meta Titles & Descriptions', icon: Search },
            { id: 'checklist', label: '4. Checklist Técnico (SSL/Schema)', icon: ShieldCheck },
            { id: 'copywriting', label: '5. Copywriting Otimizado (SEO)', icon: FileText }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-cyan-800 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-600' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800">

          {/* TAB 1: WIREFRAME & CONVERSÃO */}
          {activeTab === 'wireframe' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-cyan-50 border border-cyan-200 p-4 rounded-xl text-xs text-cyan-900 leading-relaxed">
                <strong className="block font-bold text-sm mb-1">
                  Diretriz de Wireframe Mobile-First & Foco em Conversão Local:
                </strong>
                Em buscas locais por <em>"lavanderia perto de mim"</em> ou <em>"lavagem de tapetes Curitiba"</em>, mais de 80% do tráfego provém de smartphones. A estrutura abaixo foi projetada para eliminar etapas desnecessárias, apresentando o telefone e WhatsApp clicável nos primeiros 2 segundos de carregamento.
              </div>

              {/* Wireframe Structural Map */}
              <div className="space-y-4">
                {SEO_DELIVERABLES.conversionLayoutBlueprint.map((sec, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl p-4 sm:p-5 hover:border-cyan-400 transition-colors bg-white shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
                      <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-slate-900 text-white text-xs flex items-center justify-center font-mono">
                          {idx + 1}
                        </span>
                        <span>{sec.section}</span>
                      </h4>
                      <span className="text-[11px] font-semibold text-cyan-700 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded">
                        Foco: {sec.purpose.split(',')[0]}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mb-3">
                      <strong>Objetivo Estratégico:</strong> {sec.purpose}
                    </p>

                    <div className="space-y-1.5 pl-2 mb-3">
                      <strong className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                        Elementos Mandatórios do Layout:
                      </strong>
                      {sec.elements.map((elem, eIdx) => (
                        <div key={eIdx} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{elem}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-600 flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-cyan-600 shrink-0" />
                      <span><strong>Mobile-First:</strong> {sec.mobileOptimization}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: ARQUITETURA DE URLS */}
          {activeTab === 'urls' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs text-slate-700">
                <strong className="block font-bold text-sm text-slate-900 mb-1">
                  Arquitetura de Silos e URLs Amigáveis (SEO Silo Architecture):
                </strong>
                Cada vertical de serviço possui sua própria URL canônica sem acentos, com hífen e palavras-chave geolocalizadas em Curitiba para ranqueamento individual nos buscadores.
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900 text-white text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">URL Estruturada</th>
                      <th className="py-3 px-4">Hierarquia</th>
                      <th className="py-3 px-4">Palavra-chave Foco</th>
                      <th className="py-3 px-4">Intenção de Busca</th>
                      <th className="py-3 px-4">Schema.org</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white font-mono">
                    {SEO_DELIVERABLES.urlStructure.map((u, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-cyan-800 break-all">
                          {u.url}
                        </td>
                        <td className="py-3 px-4 font-sans text-slate-500 text-[11px]">
                          {u.level}
                        </td>
                        <td className="py-3 px-4 font-sans font-medium text-slate-700">
                          {u.focusKeyword}
                        </td>
                        <td className="py-3 px-4 font-sans text-slate-600 text-[11px]">
                          {u.searchIntent}
                        </td>
                        <td className="py-3 px-4 font-mono text-[11px] text-emerald-700">
                          {u.schemaType}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Sitemap.xml Preview */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-900 text-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-cyan-400 font-mono">sitemap.xml (Código Oficial de Indexação)</span>
                  <button
                    onClick={() => copyToClipboard(SEO_DELIVERABLES.codeFiles.sitemapXml, 'sitemap')}
                    className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded border border-slate-700 transition-colors"
                  >
                    {copiedId === 'sitemap' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'sitemap' ? 'Copiado!' : 'Copiar XML'}</span>
                  </button>
                </div>
                <pre className="text-[11px] overflow-x-auto text-slate-300 font-mono p-3 bg-slate-950 rounded-lg max-h-56">
                  {SEO_DELIVERABLES.codeFiles.sitemapXml}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: METATAGS AUDIT */}
          {activeTab === 'metatags' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-cyan-50 border border-cyan-200 p-4 rounded-xl text-xs text-cyan-900">
                <strong className="block font-bold text-sm mb-1">
                  Sugestão de Meta Titles e Meta Descriptions para as 5 Páginas Principais:
                </strong>
                Títulos calibrados entre 50 e 60 caracteres (sem corte no Google) e descrições entre 145 e 158 caracteres com proposta de valor clara e CTA acionável.
              </div>

              <div className="space-y-4">
                {SEO_DELIVERABLES.metaTagsAudit.map((m, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl p-5 bg-white shadow-xs space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2">
                      <h4 className="font-bold text-sm text-slate-900">{m.pageName}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">{m.url}</span>
                        <button
                          onClick={() => copyToClipboard(`Title: ${m.metaTitle}\nDescription: ${m.metaDescription}`, `meta-${idx}`)}
                          className="text-xs flex items-center gap-1 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded transition-colors"
                          title="Copiar tags desta página"
                        >
                          {copiedId === `meta-${idx}` ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          <span>Copiar</span>
                        </button>
                      </div>
                    </div>

                    {/* Google SERP Snippet Preview */}
                    <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg space-y-1">
                      <span className="text-[11px] text-slate-500 block font-sans">
                        https://lavanderiadrsabao.com.br{m.url === '/' ? '' : m.url}
                      </span>
                      <h5 className="text-sm font-semibold text-blue-800 hover:underline cursor-pointer line-clamp-1">
                        {m.metaTitle}
                      </h5>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {m.metaDescription}
                      </p>
                    </div>

                    {/* Tag Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                      <div>
                        <div className="flex justify-between items-center text-slate-500 mb-0.5">
                          <span className="font-semibold text-slate-700">Meta Title:</span>
                          <span className={m.charCountTitle <= 60 ? 'text-emerald-600 font-bold' : 'text-amber-600 font-bold'}>
                            {m.charCountTitle} carac. (Ideal ≤ 60)
                          </span>
                        </div>
                        <p className="p-2 bg-slate-100 rounded border border-slate-200 font-mono text-[11px] text-slate-800">
                          {m.metaTitle}
                        </p>
                      </div>

                      <div>
                        <div className="flex justify-between items-center text-slate-500 mb-0.5">
                          <span className="font-semibold text-slate-700">Meta Description:</span>
                          <span className={m.charCountDesc <= 160 ? 'text-emerald-600 font-bold' : 'text-amber-600 font-bold'}>
                            {m.charCountDesc} carac. (Ideal 140-160)
                          </span>
                        </div>
                        <p className="p-2 bg-slate-100 rounded border border-slate-200 text-[11px] text-slate-700">
                          {m.metaDescription}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px]">
                      <span className="font-bold text-slate-500">H1 Recomendado:</span>
                      <span className="text-slate-800 font-semibold bg-slate-100 px-2 py-0.5 rounded">"{m.h1}"</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-1 pt-1 text-[11px] text-slate-500">
                      <span>Palavras-chave:</span>
                      {m.keywords.map((kw, kIdx) => (
                        <span key={kIdx} className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CHECKLIST TÉCNICO */}
          {activeTab === 'checklist' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-xs text-emerald-950">
                <strong className="block font-bold text-sm mb-1">
                  Checklist Técnico de Implementação (Google PageSpeed & Core Web Vitals):
                </strong>
                Itens mandatórios para assegurar nota acima de 90 no PageSpeed Insights, segurança HTTPS, robots.txt e dados estruturados no formato oficial Schema.org.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SEO_DELIVERABLES.technicalChecklist.map((item, idx) => (
                  <div key={idx} className="border border-slate-200 p-4 rounded-xl bg-white shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{item.status}</span>
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900">{item.item}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              {/* Robots.txt code preview */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-900 text-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-cyan-400 font-mono">robots.txt (Diretrizes de Rastreamento)</span>
                  <button
                    onClick={() => copyToClipboard(SEO_DELIVERABLES.codeFiles.robotsTxt, 'robots')}
                    className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded border border-slate-700 transition-colors"
                  >
                    {copiedId === 'robots' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'robots' ? 'Copiado!' : 'Copiar TXT'}</span>
                  </button>
                </div>
                <pre className="text-[11px] text-slate-300 font-mono p-3 bg-slate-950 rounded-lg">
                  {SEO_DELIVERABLES.codeFiles.robotsTxt}
                </pre>
              </div>

              {/* Schema JSON-LD Verification */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <Code2 className="w-4 h-4 text-cyan-600" />
                  <span>Schema.org DryCleaningOrLaundry JSON-LD Validado</span>
                </div>
                <p className="text-slate-600">
                  O código schema já está injetado no <code>&lt;head&gt;</code> do documento, contendo o endereço (Rua Sete de Abril, 269), telefone (+55 41 3363-3333), coordenadas de latitude/longitude e horários corretos (Seg-Sex 09h às 18h, Sáb 09h às 13h).
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: COPYWRITING BASE */}
          {activeTab === 'copywriting' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-cyan-50 border border-cyan-200 p-4 rounded-xl text-xs text-cyan-900">
                <strong className="block font-bold text-sm mb-1">
                  Textos Base Otimizados para SEO Local & Conversão (Home e Serviços):
                </strong>
                Copywriting persuasivo com tom higiênico, confiável e geolocalizado no Alto da XV e bairros de Curitiba.
              </div>

              <div className="space-y-6">
                {/* Home Page Copy */}
                <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <span className="text-[11px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded uppercase">
                        Página Principal (Home)
                      </span>
                      <h4 className="font-bold text-base text-slate-900 mt-1">
                        Lavanderia Especializada em Curitiba - Alto da XV
                      </h4>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`H1: Lavanderia Especializada em Curitiba - Alto da XV | Dr. Sabão\nProposta: Há mais de 15 anos no Alto da XV...`, 'copy-home')}
                      className="text-xs flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg text-slate-700 font-semibold transition-colors"
                    >
                      {copiedId === 'copy-home' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copiar Texto Base</span>
                    </button>
                  </div>

                  <div className="space-y-3 text-xs leading-relaxed text-slate-700">
                    <p>
                      <strong>H1 Principal:</strong> <span className="text-cyan-900 font-bold">"Lavanderia Especializada em Curitiba - Alto da XV | Tradição desde 2011"</span>
                    </p>
                    <p>
                      <strong>Parágrafo de Abertura (Lead de Conversão):</strong><br />
                      Você procura uma lavanderia de confiança em Curitiba que realmente cuide de cada detalhe das suas roupas? Fundada em 2011 na Rua Sete de Abril, a <strong>Lavanderia Dr. Sabão</strong> une a tradição de mais de 15 anos de mercado com equipamentos de ponta para atender tanto famílias exigentes quanto empresas locais.
                    </p>
                    <p>
                      <strong>Argumentos de Autoridade & Diferenciais:</strong><br />
                      • <strong>Cuidado Artesanal:</strong> Higienização individualizada para vestidos de noiva, trajes de gala, ternos finos e restauração de peças de couro.<br />
                      • <strong>Estufa Antibacteriana:</strong> Lavagem pesada de tapetes e cortinas com secagem controlada em estufa térmica, combatendo o mofo característico do inverno de Curitiba.<br />
                      • <strong>Economia & Praticidade:</strong> Serviço de lavagem por peso (kg) para o seu dia a dia, com roupas limpas, cheirosas, secas e dobradas prontas para o armário.<br />
                      • <strong>Localização Estratégica:</strong> No coração do Alto da XV (Rua Sete de Abril, 269, Loja 01), com fácil estacionamento e atendimento ágil.
                    </p>
                    <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-950 font-medium">
                      <strong>CTA WhatsApp:</strong> "Clique abaixo e envie uma foto da sua peça ou peça seu orçamento imediato via WhatsApp: (41) 98777-3600."
                    </div>
                  </div>
                </div>

                {/* Wedding Dress Copy */}
                <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <span className="text-[11px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded uppercase">
                        Landing Page de Alto Valor
                      </span>
                      <h4 className="font-bold text-base text-slate-900 mt-1">
                        Vestidos de Noiva e Trajes de Gala em Curitiba
                      </h4>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`H1: Lavagem de Vestido de Noiva em Curitiba...\n`, 'copy-noiva')}
                      className="text-xs flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg text-slate-700 font-semibold transition-colors"
                    >
                      {copiedId === 'copy-noiva' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copiar Texto Base</span>
                    </button>
                  </div>

                  <div className="space-y-3 text-xs leading-relaxed text-slate-700">
                    <p>
                      <strong>H1:</strong> <span className="text-cyan-900 font-bold">"Lavagem e Preservação de Vestido de Noiva em Curitiba"</span>
                    </p>
                    <p>
                      <strong>Texto:</strong> Seu vestido de casamento é uma lembrança eterna. No entanto, manchas de maquiagem, champanhe, grama e poeira acumulada na barra da cauda oxidam em poucas semanas se não forem higienizadas profissionalmente. Na Lavanderia Dr. Sabão, não utilizamos máquinas agressivas: cada centímetro de renda, tule francês e bordado em pedraria é tratado à mão com produtos de pH neutro e passadoria a vapor a seco. Entregamos em capa protetora especial para durar gerações.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <div>
            NAP verificado: {COMPANY_NAP.tradeName} · {COMPANY_NAP.address.fullAddress} · Whats: {COMPANY_NAP.phones.mobileWhatsApp}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Fechar Dossiê
          </button>
        </div>

      </div>
    </div>
  );
};
