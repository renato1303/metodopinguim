import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Sparkles, BookOpen, GraduationCap } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-b from-[#050D1E] via-[#0B1A30] to-[#0E2545] pt-32 pb-36 sm:pb-44 lg:pb-48 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative ambient background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4EA8DE]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#FFD166]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left mt-4">

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black text-white leading-tight tracking-tight mb-6"
            >
              Seu filho tem apenas uma infância. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-amber-200 to-[#FFD166] relative inline-block mt-1">
                Não a entregue para as telas.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-gray-200/90 font-sans font-light max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              O Método Pinguim ajuda famílias a reconstruírem a conexão entre pais e filhos, fortalecendo rotinas, limites saudáveis e momentos de convivência que transformam o lar.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <button
                id="hero-cta-protect"
                onClick={() => onNavigate('quiz-teste')}
                className="w-full sm:w-auto bg-[#FFD166] hover:bg-[#FFD166]/90 text-[#0D3B66] font-bold text-base px-8 py-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg cursor-pointer"
              >
                <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                <span>Quero Proteger Meu Filho</span>
              </button>

              <button
                id="hero-cta-learn"
                onClick={() => onNavigate('metodo')}
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-semibold text-base px-8 py-4 rounded-xl border border-white/20 flex items-center justify-center space-x-2 transition-all duration-200 cursor-pointer"
              >
                <span>Conhecer o Método</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 max-w-lg mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#4EA8DE]">+300</span>
                <span className="text-xs sm:text-sm text-gray-300 font-sans font-light">Famílias impactadas</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#FFD166]">+120</span>
                <span className="text-xs sm:text-sm text-gray-300 font-sans font-light">Mídias educativas</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#4EA8DE]">+30</span>
                <span className="text-xs sm:text-sm text-gray-300 font-sans font-light">Escolas atendidas</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column with family illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Decorative polaroid look with a refined dual-glow ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#4EA8DE]/40 via-[#FFD166]/20 to-[#4EA8DE]/40 rounded-3xl blur opacity-45 shadow-2xl" />
              <div className="relative bg-[#0d213b] p-3 rounded-3xl shadow-2xl overflow-hidden aspect-video lg:aspect-square flex items-center justify-center border border-white/10">
                <img
                  src="/src/assets/images/hero_family_real_1781136397642.png"
                  alt="Família brasileira alegre unida conversando e rindo sem celulares"
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Sleek diagonal slope divider that transitions from Hero to White background of AboutFounder */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
        <svg className="relative block w-full h-[50px] sm:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L1200,20 L1200,120 Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
