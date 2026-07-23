import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Heart, Quote, Play, Volume2, VolumeX } from 'lucide-react';

const MIXED_TESTIMONIALS = [
  {
    type: 'text',
    name: 'Ana Paula Vasconcellos',
    role: 'Mãe de Lucas (11 anos) e Beatriz (8 anos)',
    location: 'Belo Horizonte - MG',
    text: 'Minha casa era um campo de guerra na janta. Lucas reagia com raiva toda vez que pedíamos para desligar o jogo. Aplicar o Método Pinguim e usar o Contrato Familiar mudou completamente o clima de casa. Hoje o jantar é momento de risada e rituais sem telas. Sou infinitamente grata!',
    avatar: '/src/assets/images/avatar_mom_1_1781136525343.png'
  },
  {
    type: 'video',
    vimeoId: '1212417370',
    vimeoUrl: 'https://vimeo.com/1212417370?share=copy&fl=sv&fe=ci',
    name: 'Larissa Albuquerque',
    role: 'Mãe do Enzo (7 anos)',
    location: 'Rio de Janeiro - RJ',
    description: 'Transformação real de rotinas e reconexão offline.',
    avatar: '/src/assets/images/avatar_mom_1_1781136525343.png'
  },
  {
    type: 'text',
    name: 'Cláudio Mendes',
    role: 'Pai de Mariana (15 anos)',
    location: 'São Paulo - SP',
    text: 'Mariana passava mais de 7 horas no Instagram e TikTok. Estava sempre triste, ansiosa e o rendimento escolar caiu bastante. O manual de controle parental e o acompanhamento empático que o Método Pinguim ensina nos ajudaram a reverter isso. Ela agora dorme no horário certo e voltou a ler livros.',
    avatar: '/src/assets/images/avatar_dad_1_1781136536537.png'
  },
  {
    type: 'video',
    vimeoId: '1212417369',
    vimeoUrl: 'https://vimeo.com/1212417369?share=copy&fl=sv&fe=ci',
    name: 'Henrique Ostrovski',
    role: 'Pai do Davi (6 anos)',
    location: 'Florianópolis - SC',
    description: 'Como implementou limites amorosos e saudáveis nas telas.',
    avatar: '/src/assets/images/avatar_dad_1_1781136536537.png'
  },
  {
    type: 'text',
    name: 'Dra. Patrícia Helena Solano',
    role: 'Diretora do Colégio Horizonte Sul',
    location: 'Curitiba - PR',
    text: 'Contratamos a palestra do Método Pinguim para nossa escola e o engajamento foi espetacular! Eles trazem um assunto sério e alarmante de forma muito acolhedora e prática, sem radicalismo. Os pais saíram extremamente motivados e os professores notaram melhoria na atenção dos alunos.',
    avatar: '/src/assets/images/avatar_teacher_1_1781136546537.png'
  },
  {
    type: 'video',
    vimeoId: '1212417371',
    vimeoUrl: 'https://vimeo.com/1212417371?share=copy&fl=sv&fe=ci',
    name: 'Camila Peixoto',
    role: 'Mãe da Giovanna (13 anos) e Manuela (9 anos)',
    location: 'Porto Alegre - RS',
    description: 'O fim das crises diárias por desligamento de telas.',
    avatar: '/src/assets/images/avatar_mom_1_1781136525343.png'
  },
  {
    type: 'text',
    name: 'Rodrigo Albuquerque',
    role: 'Pai de Theo (6 anos)',
    location: 'Salvador - BA',
    text: 'Ter um guia por idade claro foi vital. Consegui explicar para minha esposa e também para os avós o perigo da hiperestimulação visual em desenhos hiper-rápidos. Theo agora brinca muito mais ao ar livre e dorme a noite toda de forma tranquila.',
    avatar: '/src/assets/images/avatar_dad_2_1781136561327.png'
  },
  {
    type: 'video',
    vimeoId: '1212417368',
    vimeoUrl: 'https://vimeo.com/1212417368?share=copy&fl=sv&fe=ci',
    name: 'Tiago Silveira',
    role: 'Pai do Pedro (11 anos)',
    location: 'Campinas - SP',
    description: 'O impacto positivo e visível do Contrato Familiar na prática.',
    avatar: '/src/assets/images/avatar_dad_2_1781136561327.png'
  }
];

interface TestimonialVideoProps {
  vimeoId: string;
  name: string;
}

function TestimonialVideo({ vimeoId, name }: TestimonialVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Reset play state when the active video changes
  useEffect(() => {
    setIsPlaying(false);
  }, [vimeoId]);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(true);
  };

  return (
    <div 
      className="absolute inset-0 w-full h-full cursor-pointer select-none overflow-hidden group"
      onClick={handlePlayClick}
    >
      {!isPlaying ? (
        // Beautiful, high-fidelity placeholder cover poster with a glowing Play button
        <div className="absolute inset-0 w-full h-full bg-slate-950 flex flex-col items-center justify-center relative">
          {/* Vimeo High Quality Thumbnail as background poster */}
          <img 
            src={`https://vumbnail.com/${vimeoId}.jpg`} 
            alt={name}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          {/* Rich cinematic overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

          {/* Action Call Text */}
          <div className="absolute inset-x-0 bottom-6 px-3 text-center z-10 transition-all group-hover:translate-y-[-2px]">
            <span className="text-white text-xs font-semibold tracking-wide drop-shadow-md">
              Assistir Depoimento
            </span>
          </div>

          {/* Glassmorphic Glowing Play Button Pill */}
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#4EA8DE] group-hover:border-[#4EA8DE] z-10">
            <Play className="w-6 h-6 fill-current ml-0.5" />
          </div>
        </div>
      ) : (
        // Vimeo Iframe Embed
        <div className="absolute inset-0 w-full h-full bg-black">
          <iframe
            key={vimeoId}
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=0&autopause=0&title=0&byline=0&portrait=0`}
            title={name}
            className="absolute inset-0 w-full h-full border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % MIXED_TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + MIXED_TESTIMONIALS.length) % MIXED_TESTIMONIALS.length);
  };

  const current = MIXED_TESTIMONIALS[activeIndex];

  return (
    <section id="depoimentos" className="py-32 bg-gradient-to-b from-[#0B1A30] via-[#050C1A] to-[#040C1A] text-white relative overflow-hidden">
      {/* Top slope to transition from White Section (SchoolSection) to Dark Blue Section (Testimonials) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
        <svg className="relative block w-full h-[50px] sm:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 L1200,100 L1200,0 Z" className="fill-white"></path>
        </svg>
      </div>

      {/* Decorative ambient background glowing orbs */}
      <div className="absolute top-10 left-[-5%] w-80 h-80 bg-[#4EA8DE]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-80 h-80 bg-[#FFD166]/5 rounded-full blur-3xl pointer-events-none" />
      {/* Decorative quotes graphic pattern background */}
      <div className="absolute right-10 bottom-10 text-gray-500/10 text-[180px] font-serif leading-none select-none pointer-events-none hidden md:block">
        ”
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-8">
        
        {/* Header Block with Rating */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest mb-3 flex items-center justify-center gap-1.5 animate-pulse">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> RESGATE DE HARMONIA FAMILIAR
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight mb-4">
            O que dizem os pais e educadores
          </h2>

          {/* Average rating star score */}
          <div className="flex justify-center items-center gap-1.5 mt-4 bg-[#132845]/70 border border-white/5 rounded-full px-5 py-2 w-fit mx-auto shadow-md">
            <div className="flex gap-0.5 text-amber-300">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current shrink-0" />
              ))}
            </div>
            <span className="text-xs font-bold text-white font-mono">Nota de Satisfação Geral: 5.0 / 5.0</span>
          </div>
        </div>

        {/* Carousel Slide Card Frame */}
        <div className="relative min-h-[480px] bg-[#0f213b]/70 border border-white/5 p-6 sm:p-10 rounded-3xl shadow-2xl flex flex-col justify-between backdrop-blur-md">
          <Quote className="w-10 h-10 text-[#4EA8DE]/10 absolute top-6 left-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full py-4 animate-fade-in"
            >
              {current.type === 'video' ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
                  
                  {/* Left Column: Vertical Video / YouTube Shorts Frame */}
                  <div className="col-span-1 md:col-span-5 flex justify-center">
                    <div className="w-full max-w-[200px] sm:max-w-[220px] aspect-[9/16] bg-black rounded-2xl overflow-hidden border-2 border-[#4EA8DE]/30 shadow-2xl relative">
                      <TestimonialVideo 
                        vimeoId={current.vimeoId || ''} 
                        name={current.name} 
                      />
                    </div>
                  </div>

                  {/* Right Column: Descriptions & Identity */}
                  <div className="col-span-1 md:col-span-7 flex flex-col justify-center text-center md:text-left space-y-5">
                    <div className="inline-flex items-center gap-1.5 w-fit mx-auto md:mx-0 px-3 py-1 bg-[#4EA8DE]/10 text-amber-300 text-xs font-mono font-bold rounded-full uppercase tracking-wider">
                      <Play className="w-3.5 h-3.5 fill-current" /> Depoimento em Vídeo
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-sans font-black text-white leading-tight">
                      "Veja como o método trouxe leveza para o nosso lar"
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-300 font-sans italic leading-relaxed">
                      {current.description} Assista ao vídeo ao lado para acompanhar o relato completo e as estratégias aplicadas que transformaram nossa dinâmica diária de telas.
                    </p>
                    
                    <div className="pt-3 border-t border-white/10 flex flex-col items-center md:items-start">
                      <h4 className="font-sans font-extrabold text-white text-base leading-none">
                        {current.name}
                      </h4>
                      <p className="text-xs text-[#4EA8DE] font-semibold mt-1.5 leading-none font-sans">
                        {current.role}
                      </p>
                      <p className="text-[10px] text-gray-400 font-mono tracking-wider uppercase mt-1">
                        {current.location}
                      </p>
                    </div>
                  </div>
                  
                </div>
              ) : (
                <div className="flex flex-col justify-between items-center space-y-8 min-h-[340px]">
                  {/* Quote bubble text */}
                  <p className="text-base sm:text-lg text-gray-300 font-sans italic leading-relaxed text-center max-w-2xl mx-auto pt-6">
                    "{current.text}"
                  </p>

                  {/* Author signature detail row */}
                  <div className="flex flex-col items-center text-center pt-4">
                    {current.avatar && current.avatar.startsWith('/') ? (
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#4EA8DE]/30 shadow-md mb-3 shrink-0 bg-[#0d213b]">
                        <img
                          src={current.avatar}
                          alt={current.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <span className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-2xl shadow-inner mb-3">
                        💬
                      </span>
                    )}

                    <h4 className="font-sans font-extrabold text-white text-base leading-none">
                      {current.name}
                    </h4>
                    <p className="text-xs text-[#4EA8DE] font-semibold mt-1.5 leading-none font-sans">
                      {current.role}
                    </p>
                    <p className="text-[10px] text-gray-400 font-mono tracking-wider uppercase mt-1">
                      {current.location}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows and controllers navigation */}
          <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-8">
            {/* Dots Tracker */}
            <div className="flex gap-2 flex-wrap max-w-[60%] sm:max-w-none">
              {MIXED_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  id={`testimony-dot-${idx}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                    activeIndex === idx ? 'w-6 bg-amber-300' : 'w-2 bg-gray-600'
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>

            {/* Left/Right controls buttons */}
            <div className="flex gap-2">
              <button
                id="prev-testimony-btn"
                onClick={handlePrev}
                className="p-2.5 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:bg-white/15 hover:text-white transition-colors cursor-pointer"
                aria-label="Depoimento Anterior"
              >
                <ChevronLeft className="w-5 h-5 shrink-0" />
              </button>
              <button
                id="next-testimony-btn"
                onClick={handleNext}
                className="p-2.5 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:bg-white/15 hover:text-white transition-colors cursor-pointer"
                aria-label="Seguinte Depoimento"
              >
                <ChevronRight className="w-5 h-5 shrink-0" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom slope to transition from Dark Blue (Testimonials) to Dark Blue Section (CommunitySection) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
        <svg className="relative block w-full h-[50px] sm:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,20 L1200,120 L0,120 Z" className="fill-[#0D3B66]"></path>
        </svg>
      </div>
    </section>
  );
}
