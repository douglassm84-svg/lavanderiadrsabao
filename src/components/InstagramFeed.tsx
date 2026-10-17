import React from 'react';
import { 
  Instagram, 
  Heart, 
  MessageCircle, 
  Sparkles, 
  ExternalLink, 
  CheckCircle,
  Share2
} from 'lucide-react';
import { COMPANY_NAP } from '../data/companyData';
import { BrandLogo } from './BrandLogo';

export const InstagramFeed: React.FC = () => {
  const stories = [
    { id: '1', title: '👰 Noivas', img: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=300&q=80', active: true },
    { id: '2', title: '🧼 Tapetes', img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=300&q=80', active: true },
    { id: '3', title: '👟 Couro & Tênis', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=300&q=80', active: true },
    { id: '4', title: '🧺 Por Peso', img: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=300&q=80', active: true },
    { id: '5', title: '📍 Alto da XV', img: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=300&q=80', active: true },
    { id: '6', title: '⭐ Depoimentos', img: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=300&q=80', active: true }
  ];

  const posts = [
    {
      id: 'p1',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      caption: 'Mais um vestido de noiva finalizado com todo o carinho e passadoria a vapor a seco. Proteção e pureza nas fibras! ✨👰 #NoivasCuritiba #DrSabao',
      likes: '142',
      comments: '18',
      tag: 'Noivas & Gala'
    },
    {
      id: 'p2',
      image: 'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=600&q=80',
      caption: 'Tapete persa pós-estufa térmica desumidificadora! 100% seco, sem ácaros e sem cheiro de mofo típico do clima curitibano. 🧼 #TapetesCuritiba',
      likes: '98',
      comments: '12',
      tag: 'Estufa Térmica'
    },
    {
      id: 'p3',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80',
      caption: 'Revitalização e hidratação lipídica de jaqueta de couro legítimo. O couro recupera a maciez, cor e brilho natural sem craquelar! 🧥✨',
      likes: '115',
      comments: '14',
      tag: 'Hidratação de Couro'
    },
    {
      id: 'p4',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80',
      caption: 'Praticidade para a sua semana: traga seu cesto de roupas e receba tudo cheiroso, limpo e dobradinho para a gaveta! 🧺👕 #LavanderiaPorPeso',
      likes: '204',
      comments: '31',
      tag: 'Cesto por Peso'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white via-cyan-50/30 to-white py-12 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Instagram Profile Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            {/* Mascot Avatar with Instagram Gradient Ring */}
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-md">
              <div className="bg-white p-0.5 rounded-full">
                <BrandLogo variant="badge" size="sm" />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h3 className="font-extrabold text-xl text-slate-900">
                  @lavanderiadrsabao
                </h3>
                <span className="inline-flex items-center gap-1 bg-cyan-100 text-[#085d7b] px-2 py-0.5 rounded-full text-xs font-bold">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Perfil Oficial</span>
                </span>
              </div>
              <p className="text-xs text-slate-600 max-w-lg leading-relaxed">
                🧼 <strong>Lavanderia Dr. Sabão</strong> · Desde 2011 no Alto da XV, Curitiba.<br />
                Cuidado artesanal com Noivas, Tapetes em Estufa, Couro e Lavanderia por Peso.
              </p>
              <div className="text-xs font-semibold text-slate-500 flex items-center justify-center sm:justify-start gap-4 pt-1">
                <span><strong>15 anos</strong> de tradição</span>
                <span>•</span>
                <span><strong>Rua Sete de Abril, 269</strong></span>
              </div>
            </div>
          </div>

          <a
            href={COMPANY_NAP.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shrink-0"
          >
            <Instagram className="w-4 h-4" />
            <span>Seguir no Instagram</span>
          </a>
        </div>

        {/* Stories Highlights Carousel */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
          {stories.map((st) => (
            <a
              key={st.id}
              href={COMPANY_NAP.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 shrink-0 group cursor-pointer"
            >
              <div className="p-0.5 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-[#085d7b] group-hover:scale-105 transition-transform">
                <div className="p-0.5 bg-white rounded-full">
                  <img
                    src={st.img}
                    alt={st.title}
                    className="w-16 h-16 sm:w-18 sm:h-18 rounded-full object-cover"
                  />
                </div>
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-slate-700 group-hover:text-[#085d7b] transition-colors">
                {st.title}
              </span>
            </a>
          ))}
        </div>

        {/* Feed Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post) => (
            <a
              key={post.id}
              href={COMPANY_NAP.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-cyan-300 transition-all flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#085d7b]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                  {post.tag}
                </div>
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white font-bold text-xs">
                  <span className="flex items-center gap-1"><Heart className="w-4 h-4 fill-white" /> {post.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> {post.comments}</span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-[11px] text-[#085d7b] font-bold pt-2 border-t border-slate-100">
                  <span>Ver no @lavanderiadrsabao</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
