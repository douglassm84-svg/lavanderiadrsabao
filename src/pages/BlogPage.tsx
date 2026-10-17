import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost } from '../types';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  Send, 
  Sparkles,
  ChevronLeft
} from 'lucide-react';
import { createWhatsAppUrl } from '../data/companyData';

interface BlogPageProps {
  setCurrentTab: (tab: string) => void;
  setSelectedServiceId: (id: string | null) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  setCurrentTab,
  setSelectedServiceId
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full uppercase tracking-wider">
          Blog & Dicas de Especialistas Têxteis
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
          Guia de Conservação de Roupas, Tapetes e Peças Especiais
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Artigos desenvolvidos pela equipe da Lavanderia Dr. Sabão para proteger seus tecidos do clima de Curitiba e manter suas roupas sempre novas.
        </p>
      </div>

      {/* If a post is opened in detail view */}
      {selectedPost ? (
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden animate-fadeIn p-6 sm:p-10 space-y-8">
          
          <button
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-cyan-700 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar para todos os artigos</span>
          </button>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="bg-cyan-50 text-cyan-800 border border-cyan-200 px-2.5 py-0.5 rounded font-bold uppercase">
                {selectedPost.category}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {selectedPost.publishDate}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedPost.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {selectedPost.title}
            </h2>

            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-cyan-600" />
              <span>Por {selectedPost.author}</span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-72 sm:h-96 w-full">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
            {selectedPost.content}
          </div>

          {/* SEO Focus Note */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500">
            <strong>Palavras-chave de busca local:</strong> {selectedPost.seoFocus}
          </div>

          {/* WhatsApp Contact Box for this topic */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-base sm:text-lg">Prefere deixar essa limpeza nas mãos de especialistas?</h4>
              <p className="text-xs text-emerald-100">
                Fale agora com o time da Lavanderia Dr. Sabão na Rua Sete de Abril, 269 (Alto da XV).
              </p>
            </div>

            <a
              href={createWhatsAppUrl(`Olá! Li o artigo "${selectedPost.title}" e gostaria de orçar esse serviço.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white hover:bg-slate-100 text-emerald-900 rounded-xl font-bold text-xs flex items-center gap-2 shrink-0 transition-transform hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>Orçar no WhatsApp</span>
            </a>
          </div>

        </div>
      ) : (
        /* Blog Posts Grid */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-cyan-300 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <span>{post.publishDate}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <button
                  onClick={() => {
                    setSelectedPost(post);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 bg-slate-50 hover:bg-cyan-50 text-slate-700 hover:text-cyan-700 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Ler Artigo Completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

    </div>
  );
};
