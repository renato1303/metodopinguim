import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Heart, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data.ts';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="depoimentos" className="py-24 bg-[#F7F9FC] relative overflow-hidden">
      {/* Decorative quotes graphic pattern background */}
      <div className="absolute right-10 bottom-10 text-gray-200/50 text-[180px] font-serif leading-none select-none pointer-events-none hidden md:block">
        ”
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block with Rating */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold text-[#4EA8DE] uppercase tracking-widest mb-3 flex items-center justify-center gap-1.5 animate-pulse">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> RESGATE DE HARMONIA FAMILIAR
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#0D3B66] tracking-tight mb-4">
            O que dizem os pais e educadores
          </h2>

          {/* Average rating star score */}
          <div className="flex justify-center items-center gap-1.5 mt-4 bg-white border border-gray-150 rounded-full px-5 py-2 w-fit mx-auto shadow-sm">
            <div className="flex gap-0.5 text-[#FFD166]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current shrink-0" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#0D3B66] font-mono">Nota de Satisfação Geral: 5.0 / 5.0</span>
          </div>
        </div>

        {/* Carousel Slide Card Frame */}
        <div className="relative min-h-[320px] bg-white border border-gray-150 p-6 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between">
          <Quote className="w-10 h-10 text-[#4EA8DE]/15 absolute top-6 left-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 pt-4"
            >
              {/* Quote bubble text */}
              <p className="text-sm sm:text-base text-gray-650 font-sans italic leading-relaxed text-center">
                "{current.text}"
              </p>

              {/* Author signature detail row */}
              <div className="flex flex-col items-center text-center">
                {current.avatar.startsWith('/') ? (
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#4EA8DE]/15 shadow-md mb-3 shrink-0 bg-[#F7F9FC]">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <span className="w-11 h-11 bg-[#0D3B66]/5 rounded-full flex items-center justify-center text-2xl shadow-inner mb-3">
                    {current.avatar}
                  </span>
                )}

                <h4 className="font-sans font-extrabold text-[#0D3B66] text-base leading-none">
                  {current.name}
                </h4>
                <p className="text-xs text-[#4EA8DE] font-semibold mt-1 leading-none font-sans">
                  {current.role}
                </p>
                <p className="text-[10px] text-gray-400 font-mono tracking-wider uppercase mt-1">
                  {current.location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows and controllers navigation */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-8">
            {/* Dots Tracker */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  id={`testimony-dot-${idx}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                    activeIndex === idx ? 'w-6 bg-[#0D3B66]' : 'w-2 bg-gray-250'
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
                className="p-2.5 rounded-full border border-gray-205 hover:bg-gray-150 hover:text-[#0D3B66] text-gray-500 transition-colors cursor-pointer"
                aria-label="Depoimento Anterior"
              >
                <ChevronLeft className="w-5 h-5 shrink-0" />
              </button>
              <button
                id="next-testimony-btn"
                onClick={handleNext}
                className="p-2.5 rounded-full border border-gray-205 hover:bg-gray-150 hover:text-[#0D3B66] text-gray-500 transition-colors cursor-pointer"
                aria-label="Seguinte Depoimento"
              >
                <ChevronRight className="w-5 h-5 shrink-0" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
