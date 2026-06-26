import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, BookOpen, Clock, ChevronRight, X, Sparkles, CheckCircle2, Sprout, Palette, Backpack, Rocket, Shield } from 'lucide-react';
import { AGE_CATEGORIES } from '../data.ts';
import { AgeCategory } from '../types.ts';

export default function AgeJourneys() {
  const [selectedAgeId, setSelectedAgeId] = useState<string | null>(null);

  const activeAgeGroup = AGE_CATEGORIES.find((a) => a.id === selectedAgeId);

  const getAgeIcon = (id: string, sizeClass = "w-5 h-5") => {
    switch (id) {
      case '3-5':
        return <Sprout className={sizeClass} />;
      case '6-9':
        return <Palette className={sizeClass} />;
      case '10-13':
        return <Backpack className={sizeClass} />;
      case '14-17':
        return <Rocket className={sizeClass} />;
      default:
        return <Shield className={sizeClass} />;
    }
  };

  return (
    <section id="guias" className="py-24 bg-gradient-to-b from-[#E5EFF8] via-white to-white relative overflow-hidden">
      {/* Decorative ambient background glowing orbs */}
      <div className="absolute top-10 right-[-5%] w-96 h-96 bg-[#4EA8DE]/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Decorative timeline mesh background layer */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#4EA8DE]/30 to-transparent hidden lg:block -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#4EA8DE] uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
            EVOLUÇÃO SAUDÁVEL
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#0D3B66] tracking-tight mb-4">
            A tecnologia certa na idade certa
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-sans font-light leading-relaxed">
            As necessidades fisiológicas e neurológicas mudam drasticamente à medida que as crianças crescem. Descubra as diretrizes de tempo recomendadas e os riscos por faixa etária.
          </p>
        </div>

        {/* Staggered Roadmap / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {AGE_CATEGORIES.map((ageGroup, index) => (
            <motion.div
              key={ageGroup.id}
              id={`age-card-${ageGroup.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-305 flex flex-col h-full group"
            >
              {/* 50%-70% Photographic Top Section */}
              <div className="relative h-64 overflow-hidden shrink-0">
                <img
                  src={ageGroup.imageUrl}
                  alt={`Faixa etária ${ageGroup.range} - ${ageGroup.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Soft natural reading overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Title Overlay in absolute bot */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono font-bold text-[#4EA8DE] uppercase tracking-widest block leading-none mb-1">
                    {ageGroup.title}
                  </span>
                  <h3 className="font-sans font-extrabold text-base sm:text-lg tracking-tight leading-tight">
                    {ageGroup.range}
                  </h3>
                </div>
              </div>

              {/* Card Descriptive Content (Remaining space) */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-[#F7F9FC]/40">
                {/* screenTime suggestion */}
                <div className="bg-white rounded-xl p-3 border border-gray-150 flex items-start gap-2.5 mb-4 shadow-xs">
                  <Clock className="w-4 h-4 text-[#FFD166] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">tempo sugerido</span>
                    <span className="text-xs font-extrabold text-[#0D3B66] leading-tight">{ageGroup.screenTime}</span>
                  </div>
                </div>

                {/* Micro preview of principal risk */}
                <div className="space-y-1.5 mb-5 flex-1">
                  <span className="text-[9px] font-mono font-bold text-red-500 uppercase tracking-widest block leading-none">risco principal</span>
                  <div className="flex gap-2 items-start text-xs text-gray-650 font-sans leading-relaxed">
                    <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <p className="line-clamp-2">{ageGroup.risks[0]}</p>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  id={`age-cta-${ageGroup.id}`}
                  onClick={() => setSelectedAgeId(ageGroup.id)}
                  className="w-full text-center py-3 bg-[#0D3B66] hover:bg-[#4EA8DE] text-white text-xs font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-1 shadow-sm cursor-pointer group-hover:shadow-md"
                >
                  <span>Acessar Guia Completo</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Educational Note */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-xs text-gray-500 font-sans leading-relaxed">
            *Nossos guias por faixa etária seguem rigorosamente os parâmetros de saúde mental e pediátrica recomendados pela <strong>Sociedade Brasileira de Pediatria (SBP)</strong> e pela <strong>Organização Mundial da Saúde (OMS)</strong>.
          </p>
        </div>
      </div>

      {/* Complete Age Guide Modal popup */}
      <AnimatePresence>
        {selectedAgeId !== null && activeAgeGroup && (
          <div
            id="age-modal-overlay"
            className="fixed inset-0 bg-[#0D3B66]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full relative p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                id="close-age-modal"
                onClick={() => setSelectedAgeId(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-150 text-gray-450 hover:text-gray-805 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#4EA8DE]/10 text-[#4EA8DE] flex items-center justify-center border border-[#4EA8DE]/15-sm">
                  {getAgeIcon(activeAgeGroup.id, "w-6 h-6")}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#4EA8DE] font-bold uppercase tracking-widest">{activeAgeGroup.range}</span>
                  <h3 className="font-sans font-black text-[#0D3B66] text-xl sm:text-2xl">{activeAgeGroup.guideTitle}</h3>
                </div>
              </div>

              {/* Content sections */}
              <div className="space-y-6 text-sm font-sans text-gray-650">
                {/* Executive Summary */}
                <div className="p-4 bg-[#F7F9FC] border-l-4 border-[#FFD166] rounded-r-xl">
                  <h5 className="font-sans font-bold text-[#0D3B66] mb-1 flex items-center gap-1.5 text-sm">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    Visão Geral de Desenvolvimento
                  </h5>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {activeAgeGroup.fullGuideText}
                  </p>
                </div>

                {/* Risks Section */}
                <div>
                  <h4 className="font-sans font-extrabold text-red-650 text-sm tracking-wide uppercase mb-3 flex items-center gap-1.5">
                    <ShieldAlert className="w-4.5 h-4.5 text-red-500" />
                    Principais Riscos Científicos:
                  </h4>
                  <ul className="space-y-2">
                    {activeAgeGroup.risks.map((risk, index) => (
                      <li key={index} className="flex gap-2 items-start text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                        <span>{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommendations Section */}
                <div>
                  <h4 className="font-sans font-extrabold text-emerald-650 text-sm tracking-wide uppercase mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 animate-pulse" />
                    Plano de Ação e Recomendações:
                  </h4>
                  <ul className="space-y-2">
                    {activeAgeGroup.recommendations.map((rec, index) => (
                      <li key={index} className="flex gap-2 items-start text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suggested screen time summary status */}
                <div className="bg-[#0D3B66]/5 p-4 rounded-xl border border-[#0D3B66]/10 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#0D3B66]">Tempo de Tela Máximo Permitido:</span>
                  <span className="font-extrabold text-emerald-650 uppercase bg-emerald-50 px-3 py-1 rounded-full">{activeAgeGroup.screenTime.split('(')[0]}</span>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
                <button
                  id="modal-age-ok"
                  onClick={() => setSelectedAgeId(null)}
                  className="px-6 py-2.5 bg-[#4EA8DE] hover:bg-[#4EA8DE]/90 text-white font-bold text-sm rounded-xl transition-all cursor-pointer"
                >
                  Fechar Guia
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
