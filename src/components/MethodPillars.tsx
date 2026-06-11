import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Sliders, Shield, BookOpen, Heart, ArrowRight, Sparkles, X, ChevronRight } from 'lucide-react';
import { PILLARS } from '../data.ts';

export default function MethodPillars() {
  const [activePillarId, setActivePillarId] = useState<number | null>(null);

  // Map icon component to pillar ID
  const getIcon = (id: number) => {
    switch (id) {
      case 1:
        return Eye;
      case 2:
        return Sliders;
      case 3:
        return Shield;
      case 4:
        return BookOpen;
      case 5:
        return Heart;
      default:
        return Sparkles;
    }
  };

  const getPillarColor = (id: number) => {
    switch (id) {
      case 1:
        return 'from-[#0D3B66]/10 to-[#0D3B66]/5 border-[#0D3B66]/20 text-[#0D3B66]';
      case 2:
        return 'from-amber-500/10 to-amber-500/5 border-amber-500/20 text-amber-600';
      case 3:
        return 'from-emerald-600/10 to-emerald-600/5 border-emerald-600/20 text-emerald-600';
      case 4:
        return 'from-[#4EA8DE]/10 to-[#4EA8DE]/5 border-[#4EA8DE]/20 text-[#4EA8DE]';
      case 5:
        return 'from-rose-500/10 to-rose-500/5 border-rose-500/20 text-rose-600';
      default:
        return 'from-blue-500/10 to-blue-500/5 border-blue-500/20 text-blue-500';
    }
  };

  const activePillar = PILLARS.find((p) => p.id === activePillarId);

  return (
    <section id="metodo" className="py-24 bg-[#F7F9FC] relative">
      <div className="absolute inset-0 bg-[radial-gradient(#4EA8DE_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.15]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#4EA8DE] uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5ClassName">
            OS PILARES DE CONEXÃO
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#0D3B66] tracking-tight mb-4">
            O Método Pinguim
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Um caminho estruturado e seguro para criar crianças mais presentes, cooperativas e infinitamente menos dependentes da dopamina artificial das telas.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {PILLARS.map((pillar) => {
            const IconComponent = getIcon(pillar.id);
            const colorClasses = getPillarColor(pillar.id);

            return (
              <motion.div
                key={pillar.id}
                id={`pillar-card-${pillar.id}`}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setActivePillarId(pillar.id)}
                className="bg-white rounded-3xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-[420px] group"
              >
                {/* Image Top Section */}
                <div className="relative h-52 overflow-hidden shrink-0">
                  <img
                    src={pillar.imageUrl}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Floating Pilar Badge */}
                  <div className="absolute top-4 right-4 text-[9px] font-mono font-bold text-white bg-[#0D3B66]/85 border border-white/10 px-2 py-0.5 rounded-md uppercase tracking-wider">
                    Pilar 0{pillar.id}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-[#F7F9FC]/20">
                  <div>
                    <h3 className="font-sans font-extrabold text-[#0D3B66] text-base mb-1.5 tracking-tight group-hover:text-[#4EA8DE] transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-550 font-sans leading-relaxed line-clamp-3">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom CTA within card */}
                  <span className="inline-flex items-center text-xs font-bold text-[#4EA8DE] mt-3 select-none hover:underline">
                    <span>Saber mais</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Informative Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0D3B66] to-[#0E497C] p-6 lg:p-8 rounded-2xl text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center sm:text-left">
            <h4 className="font-sans font-extrabold text-[#FFD166] text-lg mb-2">Preocupado com o diagnóstico virtual?</h4>
            <p className="text-sm text-gray-200 font-sans font-light leading-relaxed">
              Muitos pais tentam cortar o uso das mídias sem criar as regras corretas de reconexão doméstica. Faça nosso Quiz de Capacitação Gratuito e receba as soluções de acordo com o nível da sua família!
            </p>
          </div>
          <button
            id="pillars-cta-quiz"
            onClick={() => {
              const el = document.getElementById('quiz-teste');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="whitespace-nowrap px-6 py-3 bg-[#FFD166] hover:bg-[#FFD166]/90 text-[#0D3B66] font-bold text-sm rounded-xl transition-all shadow-md transform hover:-translate-y-0.5 shrink-0 cursor-pointer"
          >
            Começar Diagnóstico
          </button>
        </div>
      </div>

      {/* Pillar Full Detail Modal Popup */}
      <AnimatePresence>
        {activePillarId !== null && activePillar && (
          <div
            id="pillar-modal-overlay"
            className="fixed inset-0 bg-[#0D3B66]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative p-6 sm:p-8 border border-gray-100"
            >
              <button
                id="close-pillar-modal"
                onClick={() => setActivePillarId(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Cover Image Banner inside details modal */}
              {activePillar.imageUrl && (
                <div className="w-full h-44 rounded-xl overflow-hidden mb-5 border border-gray-150 shadow-xs relative shrink-0">
                  <img
                    src={activePillar.imageUrl}
                    alt={activePillar.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                </div>
              )}

              <div className="flex items-center space-x-3.5 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${getPillarColor(activePillar.id)} flex items-center justify-center`}>
                  {(() => {
                    const TargetIcon = getIcon(activePillar.id);
                    return <TargetIcon className="w-6 h-6 shrink-0" />;
                  })()}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 font-bold tracking-widest block uppercase">Pilar Vital 0{activePillar.id}</span>
                  <h3 className="font-sans font-black text-[#0D3B66] text-xl sm:text-2xl">{activePillar.title}</h3>
                </div>
              </div>

              <div className="space-y-4 font-sans text-gray-600 text-sm leading-relaxed">
                <p className="font-medium text-gray-800 italic">
                  "{activePillar.description}"
                </p>
                <p>
                  {activePillar.longDescription}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-xs text-amber-500 font-sans font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span>Essencial para rituais offline</span>
                </div>
                <button
                  id="modal-pillar-ok"
                  onClick={() => setActivePillarId(null)}
                  className="px-5 py-2 bg-[#0D3B66] hover:bg-[#0D3B66]/95 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
