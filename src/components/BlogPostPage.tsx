import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, User, Calendar, Clock, ChevronRight, Mail, Sparkles, BookOpen } from 'lucide-react';
import { BlogPost } from '../types.ts';
import { BLOG_POSTS } from '../data.ts';

interface BlogPostPageProps {
  post: BlogPost;
  onBackToBlog: () => void;
  onReadPost: (post: BlogPost) => void;
  onOpenBook?: () => void;
}

export default function BlogPostPage({ post, onBackToBlog, onReadPost, onOpenBook }: BlogPostPageProps) {
  const [newsName, setNewsName] = useState('');
  const [newsEmail, setNewsEmail] = useState('');
  const [newsSuccess, setNewsSuccess] = useState(false);

  // Scroll to top when a post loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [post]);

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail || !newsName) return;
    setNewsSuccess(true);
  };

  // Get other recommended articles (different category or just other posts, limit 3)
  const recommendedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  // Helper to format the content of the article beautifully
  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return null;

      // Format bullet points or numbered lists
      if (trimmed.match(/^\d+\.\s/) || trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
        const lines = trimmed.split('\n');
        return (
          <ul key={index} className="list-none pl-0 space-y-3.5 my-6">
            {lines.map((line, lIdx) => {
              const text = line.replace(/^\d+\.\s*|^\-\s*|^•\s*/, '');
              const strongMatch = text.match(/^\*\*(.*?)\*\*(.*)/);
              return (
                <li key={lIdx} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#4EA8DE]/10 text-[#4EA8DE] text-xs font-bold shrink-0 mt-0.5">
                    {lIdx + 1}
                  </span>
                  <div>
                    {strongMatch ? (
                      <span>
                        <strong className="text-[#0D3B66]">{strongMatch[1]}</strong>
                        {strongMatch[2]}
                      </span>
                    ) : (
                      <span>{text}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        );
      }

      // Check if it's a quote / key text
      if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
        return (
          <blockquote key={index} className="border-l-4 border-[#FFD166] pl-6 italic my-8 text-lg text-gray-700 bg-amber-50/30 py-4 pr-4 rounded-r-xl font-medium">
            {trimmed}
          </blockquote>
        );
      }

      // Default paragraph
      return (
        <p key={index} className="text-gray-600 text-sm sm:text-base leading-relaxed my-5 font-sans">
          {trimmed.split('**').map((chunk, cIdx) => {
            return cIdx % 2 === 1 ? <strong key={cIdx} className="text-[#0D3B66] font-bold">{chunk}</strong> : chunk;
          })}
        </p>
      );
    });
  };

  return (
    <div id={`blog-post-page-${post.id}`} className="bg-slate-50 min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs & Back Nav */}
        <nav className="flex flex-wrap items-center space-x-2 text-xs sm:text-sm font-mono text-gray-500 mb-8">
          <button 
            onClick={onBackToBlog}
            className="hover:text-[#4EA8DE] transition-colors flex items-center gap-1 cursor-pointer font-bold"
          >
            Início
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button 
            onClick={onBackToBlog}
            className="hover:text-[#4EA8DE] transition-colors cursor-pointer"
          >
            Blog
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#0D3B66] font-semibold truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
        </nav>

        {/* Back Button */}
        <button
          onClick={onBackToBlog}
          className="mb-8 inline-flex items-center space-x-2 text-sm font-bold text-[#0D3B66] hover:text-[#4EA8DE] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para todos os artigos</span>
        </button>

        {/* Article Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Article Left Column (Col-8) */}
          <article className="lg:col-span-8 bg-white rounded-3xl p-5 sm:p-10 border border-gray-100 shadow-sm">
            
            {/* Category and Read time */}
            <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-mono font-bold text-[#4EA8DE] uppercase tracking-wider mb-4">
              <span className="px-2.5 py-1 bg-[#4EA8DE]/10 rounded-md">
                {post.category === 'Neurodiversidade' ? 'Neurodiversidade, Rotina e Tecnologia' : post.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>

            {/* Main Display Title */}
            <h1 className="text-2xl sm:text-4xl font-sans font-black text-[#0D3B66] tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta details row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 border-y border-gray-100 py-4 mb-8 text-xs sm:text-sm text-gray-500 font-mono">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-gray-200">
                  <User className="w-4 h-4 text-gray-500" />
                </div>
                <span>Por <strong className="text-gray-700">{post.author}</strong></span>
              </div>
              <span className="hidden sm:inline text-gray-300">|</span>
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>Publicado em: {post.date}</span>
              </div>
            </div>

            {/* Main Cover Image Banner */}
            {(post.image.startsWith('/') || post.image.startsWith('http')) && (
              <div className="w-full h-64 sm:h-[400px] rounded-2xl overflow-hidden mb-10 border border-gray-200 shadow-sm relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            {/* Render formatted content */}
            <div className="prose max-w-none text-left">
              {formatContent(post.content)}
            </div>

            {/* Bottom Signature / Banner info book */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="bg-gradient-to-tr from-[#050D1E] to-[#0D3B66] p-6 sm:p-8 rounded-3xl text-white relative overflow-hidden text-left shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4EA8DE]/10 rounded-bl-full pointer-events-none" />
                <div className="relative z-10">
                  <span className="text-[10px] font-mono font-black text-[#FFD166] uppercase tracking-widest block mb-2">
                    LIVRO OFICIAL DO MÉTODO
                  </span>
                  <h3 className="font-sans font-black text-white text-lg sm:text-2xl mb-3 tracking-tight leading-snug">
                    Salvando Meu Filho das Telas!
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-6 font-sans">
                    Quer ir além e descobrir o plano passo a passo completo para reorganizar seu lar, estabelecer limites com afeto e blindar sua família contra os perigos da internet?
                  </p>
                  <button
                    onClick={() => {
                      if (onOpenBook) onOpenBook();
                    }}
                    className="px-6 py-3.5 bg-[#FFD166] hover:bg-[#FFD166]/90 text-[#0D3B66] font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>📖</span> Quero Conhecer o Livro do Método
                  </button>
                </div>
              </div>
            </div>

          </article>

          {/* Sidebar Right Column (Col-4) */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Author Profile Card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-150 text-left shadow-sm">
              <h4 className="font-sans font-bold text-xs text-gray-400 uppercase tracking-wider mb-4">
                Sobre o Autor
              </h4>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#0D3B66]/10 border-2 border-[#4EA8DE]/20 overflow-hidden shrink-0">
                  <img
                    src="/src/assets/images/walace_founder_real_1781139607208.png"
                    alt="Walace Freiman"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <h5 className="font-sans font-extrabold text-[#0D3B66] text-sm">
                    {post.author}
                  </h5>
                  <p className="text-[10px] text-[#4EA8DE] font-bold font-mono uppercase">
                    Fundador do Método Pinguim
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Empresário, escritor, teólogo e pós-graduado em Psicopedagogia. Lidera um movimento que já ajudou centenas de famílias a restaurarem o afeto e organizarem o tempo de tela.
              </p>
            </div>

            {/* Custom Sidebar Newsletter (matching Header colors bg-[#050D1E]) */}
            <div className="bg-[#050D1E] p-6 rounded-3xl text-white shadow-lg border-t-4 border-[#FFD166] relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#4EA8DE]/10 rounded-bl-full pointer-events-none" />

              <span className="text-[10px] font-mono font-bold text-[#FFD166] uppercase tracking-widest block mb-2">
                ASSINATURA VIP SEMANAL
              </span>
              <h3 className="font-sans font-black text-white text-base sm:text-lg mb-3 leading-snug">
                Receba conselhos e alertas semanais
              </h3>
              <p className="text-xs text-gray-350 font-sans leading-relaxed mb-6">
                Junte-se a centenas de pais conscientes. Receba avisos sobre novos riscos e ferramentas para blindar sua casa.
              </p>

              {!newsSuccess ? (
                <form onSubmit={handleNewsSubmit} className="space-y-3.5">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Seu primeiro nome"
                      value={newsName}
                      onChange={(e) => setNewsName(e.target.value)}
                      className="w-full bg-white/10 focus:bg-white text-white focus:text-[#0D3B66] text-xs font-semibold placeholder:text-gray-400 focus:placeholder:text-gray-500 rounded-xl px-4 py-3 border border-white/10 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Seu e-mail principal"
                      value={newsEmail}
                      onChange={(e) => setNewsEmail(e.target.value)}
                      className="w-full bg-white/10 focus:bg-white text-white focus:text-[#0D3B66] text-xs font-semibold placeholder:text-gray-400 focus:placeholder:text-gray-500 rounded-xl px-4 py-3 border border-white/10 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#FFD166] hover:bg-[#FFD166]/90 text-[#0D3B66] font-bold text-xs rounded-xl transition-all shadow-md cursor-pointer block text-center"
                  >
                    Quero Receber Dicas Grátis
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 bg-white/10 border border-white/20 rounded-2xl animate-fade-in text-xs">
                  <span className="text-2xl">🎉</span>
                  <p className="font-bold text-[#FFD166] mt-2 mb-1">Acesso Confirmado!</p>
                  <p className="text-gray-200">Tudo pronto, <strong>{newsName}</strong>! Você começará a receber nossas dicas.</p>
                </div>
              )}
            </div>

            {/* Recommended/Other Posts Widget */}
            <div className="bg-white rounded-3xl p-6 border border-gray-150 text-left shadow-sm">
              <h4 className="font-sans font-bold text-xs text-gray-400 uppercase tracking-wider mb-5 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#4EA8DE]" />
                <span>Próximas Leituras</span>
              </h4>
              <div className="space-y-5">
                {recommendedPosts.map((recPost) => (
                  <button
                    key={recPost.id}
                    onClick={() => onReadPost(recPost)}
                    className="flex items-start gap-3 text-left w-full group cursor-pointer"
                  >
                    <div className="w-16 h-12 bg-gray-50 border border-gray-100 rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
                      {recPost.image.startsWith('/') || recPost.image.startsWith('http') ? (
                        <img
                          src={recPost.image}
                          alt={recPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <span className="text-xl">{recPost.image}</span>
                      )}
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold text-[#4EA8DE] uppercase block mb-1">
                        {recPost.category}
                      </span>
                      <h5 className="font-sans font-extrabold text-[#0D3B66] text-xs group-hover:text-[#4EA8DE] transition-colors leading-tight line-clamp-2">
                        {recPost.title}
                      </h5>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </aside>

        </div>

      </div>
    </div>
  );
}
