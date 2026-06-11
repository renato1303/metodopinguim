import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, User, Search, ArrowRight, Sparkles, X, Mail } from 'lucide-react';
import { BLOG_POSTS } from '../data.ts';
import { BlogPost } from '../types.ts';

interface BlogSectionProps {
  onOpenBook?: () => void;
}

export default function BlogSection({ onOpenBook }: BlogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);
  const [newsEmail, setNewsEmail] = useState('');
  const [newsName, setNewsName] = useState('');
  const [newsSuccess, setNewsSuccess] = useState(false);

  const categories = [
    { value: 'all', label: 'Todos os Artigos' },
    { value: 'Saúde Mental', label: 'Saúde Mental' },
    { value: 'Segurança Digital', label: 'Segurança Digital' },
    { value: 'Jogos Online', label: 'Jogos Online' },
    { value: 'Neurodiversidade', label: 'Neurodiversidade' }
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    return selectedCategory === 'all' || post.category === selectedCategory;
  });

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail || !newsName) return;
    setNewsSuccess(true);
  };

  return (
    <section id="blog" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 transition-all duration-300">
          {selectedCategory === 'Neurodiversidade' ? (
            <>
              <span className="text-xs font-mono font-bold text-[#4EA8DE] uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5 animate-fade-in">
                CURADORIA ESPECIAL DE APOIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#0D3B66] tracking-tight mb-4 animate-fade-in">
                Neurodiversidade, Rotina e Tecnologia
              </h2>
              <p className="text-sm sm:text-base text-gray-650 font-sans font-medium leading-relaxed max-w-xl mx-auto">
                Conteúdos para ajudar famílias a criarem mais conexão, previsibilidade e equilíbrio no mundo digital.
              </p>
            </>
          ) : (
            <>
              <span className="text-xs font-mono font-bold text-[#4EA8DE] uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
                EDUCAÇÃO E CIÊNCIA CONTINUADAS
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#0D3B66] tracking-tight mb-4 animate-fade-in">
                Nosso Blog de Educação Familiar
              </h2>
              <p className="text-sm sm:text-base text-gray-500 font-sans leading-relaxed">
                Consulte artigos pautados na ciência e na pediatria elaborados pela equipe do Método Pinguim para debater o impacto das telas nas mentes em desenvolvimento.
              </p>
            </>
          )}
        </div>

        {/* Layout Row - Grid representing feed and sidebar right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Feed Content Left Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Filter tags header category */}
            <div className="flex flex-wrap gap-2 border-b border-gray-150 pb-5">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  id={`blog-category-pill-${cat.value.replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    selectedCategory === cat.value
                      ? 'bg-[#0D3B66] text-white'
                      : 'bg-[#F7F9FC] text-gray-500 hover:bg-gray-150'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Top Institutional & Objective block if Neurodiversidade channel is selected */}
            {selectedCategory === 'Neurodiversidade' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6 pb-2"
              >
                {/* Objetivo da Categoria Badge Block */}
                <div className="p-5 bg-amber-50/50 border border-amber-200/60 rounded-2xl text-left">
                  <div className="flex gap-3">
                    <span className="text-xl shrink-0">💡</span>
                    <div>
                      <h4 className="font-sans font-extrabold text-xs text-amber-800 uppercase tracking-wider mb-1">
                        Orientação e Propósito do Canal
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed font-sans">
                        Ajudar pais e responsáveis a compreenderem como o uso da tecnologia pode impactar crianças neurodivergentes e como construir hábitos digitais mais saudáveis dentro de casa.
                      </p>
                      <p className="text-[11px] text-gray-500 leading-relaxed font-sans mt-2 italic font-medium">
                        * O foco NÃO é oferecer diagnóstico ou tratamento, nem substituir a orientação de profissionais de saúde. Nosso foco é em educação parental, fortalecimento familiar, rotina e equilíbrio social.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bloco Institucional: As telas são o problema? */}
                <div className="p-6 bg-[#0D3B66] rounded-3xl text-white shadow-md border border-white/10 relative overflow-hidden text-left">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#4EA8DE]/10 rounded-bl-full pointer-events-none" />
                  
                  <div className="relative z-10">
                    <span className="text-[10px] font-mono font-black text-[#FFD166] uppercase tracking-widest block mb-2">
                      VISÃO HUMANA E ACOLHEDORA
                    </span>
                    <h3 className="font-sans font-black text-white text-xl sm:text-2xl mb-3 tracking-tight">
                      As telas são o problema?
                    </h3>
                    
                    <p className="text-sm font-extrabold text-[#FFD166] mb-3">
                      Nem sempre.
                    </p>
                    
                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-4 font-sans">
                      Na maioria das vezes, o excesso de telas é apenas um sintoma de algo maior:
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5 text-xs text-gray-200 font-sans">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FFD166] rounded-full shrink-0" />
                        <span>Falta de rotina</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FFD166] rounded-full shrink-0" />
                        <span>Ausência de previsibilidade</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FFD166] rounded-full shrink-0" />
                        <span>Pouca conexão familiar</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FFD166] rounded-full shrink-0" />
                        <span>Dificuldades na comunicação</span>
                      </li>
                    </ul>

                    <div className="border-t border-white/10 pt-4 mt-2">
                      <p className="text-xs leading-relaxed text-gray-300 italic">
                        O Método Pinguim acredita que famílias fortes criam hábitos digitais mais saudáveis. Por isso nossos conteúdos vão além da tecnologia e ajudam pais a fortalecerem os pilares que sustentam o desenvolvimento infantil.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* List entries */}
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  id={`blog-entry-${post.id}`}
                  whileHover={{ y: -3 }}
                  onClick={() => setReadingPost(post)}
                  className="p-5 bg-[#F7F9FC] border border-gray-100 rounded-2xl hover:bg-white hover:border-[#4EA8DE]/20 hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 cursor-pointer group"
                >
                  {/* Photographic Cover / Emoji Block */}
                  <div className="md:col-span-4 aspect-video md:aspect-[4/3] bg-white border border-gray-100 rounded-xl overflow-hidden flex items-center justify-center shadow-sm shrink-0">
                    {post.image.startsWith('/') || post.image.startsWith('http') ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <span className="text-4xl">{post.image}</span>
                    )}
                  </div>

                  {/* Text Description in card */}
                  <div className="md:col-span-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2 text-[10px] font-mono text-[#4EA8DE] font-bold uppercase tracking-wider mb-2">
                        <span>{post.category === 'Neurodiversidade' ? 'Neurodiversidade, Rotina e Tecnologia' : post.category}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="font-sans font-extrabold text-[#0D3B66] text-base group-hover:text-[#4EA8DE] transition-colors line-clamp-2 md:text-lg mb-2 leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs text-gray-500 font-sans leading-relaxed line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mt-2">
                      <div className="flex items-center space-x-1.5">
                        <User className="w-3.5 h-3.5 shrink-0" />
                        <span>Por {post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Bottom CTA block for Neurodiversidade category */}
            {selectedCategory === 'Neurodiversidade' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 p-6 sm:p-8 bg-gradient-to-tr from-[#F7F9FC] to-white border border-[#4EA8DE]/15 rounded-3xl text-center relative overflow-hidden text-left"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-[#4EA8DE]" />
                
                <h3 className="font-sans font-black text-lg sm:text-xl text-[#0D3B66] tracking-tight mb-2">
                  A tecnologia não precisa afastar sua família.
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 max-w-2xl leading-relaxed mb-6 font-sans">
                  Com orientação, rotina e presença, é possível construir uma relação mais saudável entre crianças, tecnologia e convivência familiar.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    id="cta-book-redirect"
                    onClick={() => {
                      if (onOpenBook) {
                        onOpenBook();
                      } else {
                        // fallback scroll to top or book elements if callbacks missing
                        const el = document.getElementById("announcement-content");
                        if (el) el.click();
                      }
                    }}
                    className="w-full sm:w-auto px-5 py-3.5 bg-[#0D3B66] hover:bg-[#4EA8DE] text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>📖</span> Conheça o Livro Salvando Meu Filho das Telas!
                  </button>
                  <button
                    id="cta-home-redirect"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-full sm:w-auto px-5 py-3.5 bg-white hover:bg-gray-50 text-[#0D3B66] font-bold text-xs rounded-xl border border-gray-200 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>🎓</span> Conheça o Método Pinguim
                  </button>
                </div>
              </motion.div>
            )}
            
          </div>

          {/* RIGHT COLUMN - SIDEBAR NEWSLETTER */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-[#0D3B66] p-6 rounded-3xl text-white shadow-lg border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#4EA8DE]/10 rounded-bl-full pointer-events-none" />

              <span className="text-[10px] font-mono font-bold text-[#FFD166] uppercase tracking-widest block mb-2">
                ASSINATURA VIP SEMANAL
              </span>
              <h3 className="font-sans font-black text-white text-lg sm:text-xl mb-3 leading-snug">
                Receba conselhos e alertas semanais
              </h3>
              <p className="text-xs text-gray-250 font-sans font-light leading-relaxed mb-6">
                Assine nossa newsletter semanal. Junte-se a mais de 50.000 pais conscientes e fique sabendo antes sobre os novos riscos de jogos e aplicativos!
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
                      className="w-full bg-white/10 focus:bg-white text-white focus:text-[#0D3B66] text-xs font-semibold placeholder:text-gray-300 focus:placeholder:text-gray-400 rounded-xl px-4 py-3 border border-white/10 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Seu e-mail principal"
                      value={newsEmail}
                      onChange={(e) => setNewsEmail(e.target.value)}
                      className="w-full bg-white/10 focus:bg-white text-white focus:text-[#0D3B66] text-xs font-semibold placeholder:text-gray-300 focus:placeholder:text-gray-400 rounded-xl px-4 py-3 border border-white/10 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    id="submit-sidebar-news"
                    type="submit"
                    className="w-full py-3 bg-[#FFD166] hover:bg-[#FFD166]/90 text-[#0D3B66] font-bold text-xs rounded-xl transition-all shadow-md transform hover:-translate-y-0.5 cursor-pointer block text-center"
                  >
                    Quero Receber Dicas Grátis
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 bg-white/10 border border-white/20 rounded-2xl animate-fade-in text-xs">
                  <span className="text-2xl">🎉</span>
                  <p className="font-bold text-[#FFD166] mt-2 mb-1">Acesso Confirmado!</p>
                  <p className="text-gray-200">Um abraço, <strong>{newsName}</strong>! Tudo pronto de verdade.</p>
                </div>
              )}
            </div>
          </aside>

        </div>
      </div>

      {/* Complete reading popover Modal frame */}
      <AnimatePresence>
        {readingPost !== null && (
          <div
            id="blog-modal-overlay"
            className="fixed inset-0 bg-[#0D3B66]/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in text-[#0E497C]"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full relative p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
            >
              <button
                id="close-blog-modal"
                onClick={() => setReadingPost(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-450 hover:text-gray-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Cover Image Banner inside details modal */}
              {(readingPost.image.startsWith('/') || readingPost.image.startsWith('http')) && (
                <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-5 border border-gray-150 shadow-xs relative shrink-0">
                  <img
                    src={readingPost.image}
                    alt={readingPost.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}

              {/* Category banner badges */}
              <div className="flex items-center space-x-2 text-[10px] font-mono text-[#4EA8DE] font-bold uppercase tracking-wider mb-2">
                <span>{readingPost.category}</span>
                <span>•</span>
                <span>{readingPost.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="font-sans font-black text-[#0D3B66] text-xl sm:text-2xl mt-1 mb-4 leading-tight">
                {readingPost.title}
              </h3>

              {/* Metadata details info row */}
              <div className="flex items-center space-x-4 border-y border-gray-100 py-3.5 mb-6 text-xs text-gray-500 font-mono">
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-gray-400" /> Especialista: {readingPost.author}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-gray-400" /> Publicado em: {readingPost.date}</span>
              </div>

              {/* Article Content details */}
              <div className="space-y-4 font-sans text-xs sm:text-sm text-gray-650 leading-relaxed text-left whitespace-pre-line">
                <p>{readingPost.content}</p>
              </div>

              {/* Modal footer closing actions */}
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                <p className="text-[10px] text-gray-400 font-mono italic">Método Pinguim © todos os direitos reservados</p>
                <button
                  id="finish-reading-post"
                  onClick={() => setReadingPost(null)}
                  className="px-6 py-2 bg-[#0D3B66] hover:bg-[#4EA8DE] text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  Concluir Leitura
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
