import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Send, 
  Clock, 
  Award, 
  Leaf, 
  HeartHandshake, 
  Flame,
  Instagram
} from 'lucide-react';
import { COMPANY_NAP, createWhatsAppUrl } from '../data/companyData';
import { BrandLogo } from '../components/BrandLogo';

interface AboutPageProps {
  setCurrentTab: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentTab }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-[#085d7b] border border-cyan-200 text-xs font-bold">
            <Award className="w-3.5 h-3.5 text-[#085d7b]" />
            <span>Fundada em 2011 · 15 Anos de Tradição e Excelência Têxtil</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display leading-tight">
            Nossa História no Alto da XV em <span className="text-[#085d7b]">Curitiba</span>
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            A <strong>Lavanderia Dr. Sabão</strong> nasceu em 2011 na Rua Sete de Abril com uma missão bem clara: proporcionar aos curitibanos um atendimento acolhedor aliado ao que há de mais moderno em tecnologia têxtil de lavagem a seco, wet cleaning e higienização pesada de tapetes.
          </p>

          <p className="text-sm text-slate-600 leading-relaxed">
            Ao longo de mais de 15 anos de história, já cuidamos de milhares de vestidos de noiva que marcaram gerações, renovamos tapetes persas de valor inestimável e aliviamos a rotina semanal de centenas de famílias através do nosso prático serviço de lavagem por peso.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
              <span className="font-extrabold text-2xl text-[#085d7b] block font-display">+15 Anos</span>
              <span className="text-xs text-slate-600">No mesmo endereço</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
              <span className="font-extrabold text-2xl text-[#f97d38] block font-display">+10.000</span>
              <span className="text-xs text-slate-600">Peças cuidadas ao ano</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs text-center col-span-2 sm:col-span-1">
              <span className="font-extrabold text-2xl text-amber-500 block font-display">4.9 ★</span>
              <span className="text-xs text-slate-600">No Google Avaliações</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          {/* Official Sticker Banner Representation */}
          <BrandLogo variant="sticker" />

          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1000&q=80"
              alt="Maquinário profissional e higiene rigorosa na Lavanderia Dr. Sabão"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5 text-white text-xs">
              <div>
                <strong className="block text-sm font-bold text-white">Ambiente Higiênico e Tecnológico</strong>
                <span>Rua Sete de Abril, 269, Loja 01 - Alto da XV</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pilares & Métodos de Limpeza */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full uppercase tracking-wider">
            Nossos Diferenciais
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Por que Curitiba Confia na Lavanderia Dr. Sabão?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Processos certificados e rigoroso controle bacteriológico em cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              Wet Cleaning Ecológico
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Substituímos produtos agressivos por químicos biodegradáveis certificados que protegem as fibras mais delicadas (seda, renda, lã pura) e cuidam dos recursos hídricos do nosso planeta.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              Estufa Térmica Desumidificadora
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Curitiba é conhecida pelo clima úmido e frio que dificulta a secagem. Nossa estufa com circulação de ar estéril aquecido garante secagem total sem deixar odores de mofo em tapetes e cortinas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              Inspeção Manual Peça a Peça
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Não tratamos roupas como números. Cada vestido de noiva, terno ou jaqueta de couro é analisado individualmente por profissionais com mais de uma década de experiência no mercado de Curitiba.
            </p>
          </div>
        </div>
      </div>

      {/* Foto Galeria da Estrutura */}
      <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Nossa Estrutura e Equipamentos
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Venha nos visitar no Alto da XV. Um espaço limpo, organizado e preparado para atender demandas residenciais e comerciais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative rounded-xl overflow-hidden h-52 group">
            <img
              src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=600&q=80"
              alt="Máquinas de alta capacidade na Lavanderia Dr. Sabão"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-900/40 flex items-end p-3 text-white text-xs font-bold">
              Maquinário Industrial
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden h-52 group">
            <img
              src="https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&w=600&q=80"
              alt="Passadoria fina a vapor para vestidos e ternos"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-900/40 flex items-end p-3 text-white text-xs font-bold">
              Passadoria Fina a Vapor
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden h-52 group">
            <img
              src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80"
              alt="Setor de tapetes e cortinas higienizados"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-900/40 flex items-end p-3 text-white text-xs font-bold">
              Setor de Tapetes em Estufa
            </div>
          </div>
        </div>
      </div>

      {/* Contato & Visita */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold">
          Quer nos conhecer pessoalmente?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Estamos de portas abertas na <strong>Rua Sete de Abril, 269 (Loja 01)</strong>, Alto da XV. De Segunda a Sexta das 09h às 18h e Sábados das 09h às 13h.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={COMPANY_NAP.social.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 transition-colors"
          >
            <MapPin className="w-4 h-4" />
            <span>Traçar Rota no GPS</span>
          </a>

          <a
            href={createWhatsAppUrl("Olá! Gostaria de falar com o balcão da Lavanderia Dr. Sabão.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>Falar no WhatsApp (41 98777-3600)</span>
          </a>
        </div>
      </div>

    </div>
  );
};
