import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, User, Calendar, Award, Heart, Sparkles, X } from 'lucide-react';

export default function AboutFounder() {
  const [showFullStory, setShowFullStory] = useState(false);

  const stats = [
    { label: 'Formação Acadêmica', value: 'Neuropsicologia Infantil e do Desenvolvimento', icon: BookOpen },
    { label: 'Experiência Profissional', value: 'Psicólogo Clínico Infantojuvenil', icon: User },
    { label: 'Anos de Atuação', value: '+12 Anos de Experiência Clínica', icon: Calendar },
    { label: 'Projetos Realizados', value: 'Criador do Método Pinguim & Autor', icon: Award }
  ];

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle decorative polar designs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#4EA8DE]/5 rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFD166]/5 rounded-tr-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column for Portrait (41.6% space) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Outer soft shadow block */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#0D3B66]/10 to-[#4EA8DE]/10 rounded-3xl blur-md pointer-events-none" />
              
              <div className="relative bg-white border-2 border-gray-100 p-5 rounded-3xl shadow-2xl flex flex-col items-center transition-all duration-300 hover:shadow-3xl hover:border-gray-200">
                <div className="relative w-full aspect-[4/5] bg-[#F7F9FC] rounded-2xl overflow-hidden mb-5 border border-gray-100 flex items-center justify-center group/img">
                  <img
                    src="/src/assets/images/image.png"
                    alt="Walace Freiman - Criador do Método Pinguim"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />

                </div>

                {/* Micro credentials under photo */}
                <div className="text-center w-full">
                  <h4 className="font-sans font-black text-[#0D3B66] text-xl tracking-tight">Walace Freiman</h4>
                  <p className="text-xs font-mono tracking-widest text-[#4EA8DE] uppercase font-bold mt-1.5 bg-[#4EA8DE]/5 inline-block px-3 py-1 rounded-md">
                    Criador do Método Pinguim
                  </p>
                  <p className="text-[11px] font-mono tracking-wider text-gray-400 uppercase font-semibold mt-1">
                    Fundador & Diretor Geral
                  </p>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4 w-5/6 mx-auto" />
                  <p className="text-xs text-gray-500 font-sans italic px-3 leading-relaxed">
                    "Pais conscientes protegem com inteligência e lideram com conexão."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text and story column (58.3% space) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <span className="text-xs font-mono font-bold text-[#4EA8DE] uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span className="w-4 h-0.5 bg-[#4EA8DE]" />
              História & Missão
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#0D3B66] leading-tight mb-6">
              Quem criou o Método Pinguim
            </h2>

            <div className="space-y-4 font-sans text-gray-600 leading-relaxed mb-8">
              <p>
                Como psicólogo clínico e especialista em neuropsicologia do desenvolvimento, eu via diariamente em meu consultório uma mudança alarmante: crianças cada vez mais isoladas, irritadas, ansiosas e com sérios problemas de concentração e regulação emocional.
              </p>
              <p className="font-bold text-[#0D3B66]">
                Nossa Missão:
              </p>
              <p>
                Dar aos pais um caminho estruturado, humano e sem extremismo tecnológico para guiar seus filhos nesta avalanche digital. Inspirados no modelo de paternidade cooperativa dos pinguins na vida selvagem, ajudamos famílias a fechar as fendas, restabelecer rotinas pacíficas e resgatar o afeto no dia a dia.
              </p>
              <p>
                Hoje, o <strong>Método Pinguim</strong> conta com uma metodologia científica validada clinicamente que já transformou e protegeu mais de 50 mil lares em todo o país, provando que é possível equilibrar a tecnologia com o afeto real.
              </p>
            </div>

            {/* Micro details grid containing Formação, Experiência, Anos, Projetos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-start space-x-3.5 p-4 rounded-2xl bg-[#F7F9FC] border border-gray-100 hover:border-[#4EA8DE]/20 transition-all duration-300">
                  <div className="p-2 rounded-xl bg-white border border-gray-150 text-[#4EA8DE] shrink-0 mt-0.5 shadow-xs">
                    <stat.icon className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</span>
                    <span className="text-xs font-extrabold text-[#0D3B66] leading-snug block">{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              id="founder-story-toggle"
              onClick={() => setShowFullStory(true)}
              className="px-6 py-3 bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white font-bold text-sm rounded-xl transition-all inline-flex items-center space-x-2 shadow-md w-fit cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#FFD166]" />
              <span>Conheça Nossa História Completa</span>
            </button>
          </div>

        </div>
      </div>

      {/* Heartfelt full story modal popup */}
      <AnimatePresence>
        {showFullStory && (
          <div
            id="story-modal-overlay"
            className="fixed inset-0 bg-[#0D3B66]/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-6 sm:p-8"
            >
              <button
                id="close-story-modal"
                onClick={() => setShowFullStory(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-tr from-[#FFD166] to-[#F5C242] rounded-xl flex items-center justify-center text-[#0D3B66] shadow-sm shrink-0 border border-[#FFD166]/10">
                  <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M12 8a2 2 0 1 0 0 4 2 2 0 1 0 0-4z" />
                    <path d="M9 16c0-1.5 1.5-2 3-2s3 .5 3 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans font-black text-[#0D3B66] text-xl sm:text-2xl">Nossa História & Missão</h3>
                  <p className="text-xs text-[#4EA8DE] font-mono tracking-wide uppercase font-semibold">O resgate da infância dourada</p>
                </div>
              </div>

              <div className="space-y-4 font-sans text-gray-600 text-sm leading-relaxed">
                <p>
                  Tudo começou em 2018. Eu observava meu filho de quatro anos paralisado em frente a um desenho infantil no tablet. O olhar dele estava completamente vago. Ao puxar o aparelho para jantarmos, a reação foi um grito de angústia feroz, quase assustador. Como psicólogo, meu sinal de alerta tocou imediatamente: <strong>isso não era uma birra comum, era abstinência neurológica.</strong>
                </p>
                <p>
                  Comecei a mapear o design de comportamento criado pelas redes sociais e jogos. Cientistas cognitivos bilionários trabalham 24 horas por dia para tornar os aparelhos irresistíveis. Pais comuns, exaustos de suas rotinas de trabalho, não têm chance de vencer essa guerra se lutarem sozinhos ou sem um plano estratégico.
                </p>
                <p>
                  Minha missão se tornou clara: simplificar as melhores táticas de cibersegurança, terapia infantil e regulação doméstica em um guia intuitivo e compreensível. O método foi inicialmente testado em dez famílias de amigos próximos, depois em escolas locais, e logo se transformou em um movimento que conta hoje com mais de 50 mil lares transformados.
                </p>
                <p>
                  Os pinguins protegem seus ovos contra frios congelantes sob forças cooperativas indestrutíveis. Acreditamos que a infância brasileira é o bem mais precioso que temos. Ao retirar o excesso de telas, abrimos espaço para a criatividade lúdica, os heróis da imaginação, o esporte presencial e a paz mental de uma mente verdadeiramente livre para sonhar.
                </p>

                <div className="p-4 bg-[#F7F9FC] border-l-4 border-[#4EA8DE] rounded-r-xl mt-6">
                  <h5 className="font-bold text-[#0D3B66] mb-1 text-sm">Nossos Três Compromissos Formais:</h5>
                  <ul className="list-disc leading-relaxed pl-5 space-y-1 text-xs">
                    <li><strong>Sem Constrangimento:</strong> Não julgamos as famílias por erros do passado; oferecemos rotas de recomeço.</li>
                    <li><strong>Fatos Científicos:</strong> Nossas lições são pautadas em pediatria e neuropsicologia moderna, livres de purismos.</li>
                    <li><strong>Ação Imediata:</strong> Cada conteúdo nosso propõe uma transformação física prática que você vê na janta de hoje.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
                <button
                  id="modal-entendi-button"
                  onClick={() => setShowFullStory(false)}
                  className="px-6 py-2.5 bg-[#4EA8DE] hover:bg-[#4EA8DE]/90 text-white font-bold text-sm rounded-xl transition-all cursor-pointer"
                >
                  Entendi, obrigado!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
