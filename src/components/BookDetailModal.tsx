import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Star, Sparkles, X, ChevronRight, CheckCircle2, ShoppingBag, Download, Mail, Heart } from 'lucide-react';

interface BookDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookDetailModal({ isOpen, onClose }: BookDetailModalProps) {
  const [orderStep, setOrderStep] = useState<'info' | 'form' | 'success'>('info');
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [progress, setProgress] = useState(0);

  const chapters = [
    { num: '01', title: 'A Indústria da Atenção', desc: 'Os bastidores do Vale do Silício e as técnicas psicológicas desenvolvidas pelas Big Techs para capturar a mente de crianças.' },
    { num: '02', title: 'Neurobiologia da Dopamina', desc: 'Como o scroll infinito e as recompensas variáveis impactam o lobo frontal juvenil e geram tolerância zero ao tédio.' },
    { num: '03', title: 'Blindagem Tecnológica Ativa', desc: 'Tutoriais de alta precisão para instalar filtros DNS, bloquear pornografia e configurar consoles, Smart TVs e roteadores passo a passo.' },
    { num: '04', title: 'O Contrato familiar de Telas', desc: 'Como introduzir regras inabaláveis, tempos-limite e limites noturnos sem brigas domésticas ou choradeiras.' },
    { num: '05', title: 'Desintoxicação Lúdica', desc: '50 sugestões práticas de atividades, passeios na natureza e brincadeiras offline de baixíssimo custo para substituir o celular.' }
  ];

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !nameInput) return;

    setOrderStep('success');

    // Simulate real file receipt download
    const element = document.createElement('a');
    const fileContent = `--- MÉTODO PINGUIM --- \nGuia do Livro: Salvando Meu Filho das Telas!\nAutor: Walace Freiman\n\nCapítulo de Amostra Grátis Liberado!\n\nSeja muito bem-vindo ao início de uma revolução em sua residência!`;
    const file = new Blob([fileContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'salvando_meu_filho_das_telas_amostra_capitulo_1.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        id="book-detail-modal-overlay"
        className="fixed inset-0 bg-[#0D3B66]/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full relative overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[90vh]"
        >
          {/* Close button */}
          <button
            id="close-book-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/80 hover:bg-white text-gray-400 hover:text-[#0D3B66] shadow-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Side: Real-time 3D style Virtual Book Jacket Banner */}
          <div className="md:col-span-5 bg-gradient-to-br from-[#0D3B66] via-[#164C80] to-[#4EA8DE] p-8 text-white flex flex-col justify-between relative overflow-hidden select-none min-h-[380px] md:min-h-0">
            {/* Ambient pattern decorations */}
            <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-[#FFD166]/10 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-white/[0.03] rounded-full" />

            <div className="relative z-10">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFD166] font-bold bg-white/10 px-2.5 py-1.5 rounded-full w-fit flex items-center gap-1.5 mb-6 animate-pulse">
                <BookOpen className="w-3.5 h-3.5 text-[#FFD166]" />
                <span>O Livro Best-Seller Oficial</span>
              </span>

              {/* Realistic CSS 3D style cover structure */}
              <div id="3d-book-perspective" className="perspective-1000 flex justify-center py-4">
                <div 
                  className="w-48 h-64 bg-[#0D3B66] rounded-r-xl relative shadow-2xl transition-transform duration-500 hover:rotate-y-12 transform-preserve-3d flex flex-col justify-between p-6 border-l-8 border-[#0B3054] overflow-hidden"
                  style={{
                    boxShadow: '15px 15px 30px rgba(0, 0, 0, 0.4), inset -10px 0 20px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Internal gold shine lines */}
                  <div className="absolute inset-0 border border-[#FFD166]/20 m-2 rounded" />
                  
                  <div className="relative z-10">
                    <span className="text-[9px] font-mono tracking-widest text-[#FFD166]/80 font-black block leading-none">
                      WALACE FREIMAN
                    </span>
                    <h3 className="font-sans font-black text-[13px] sm:text-[15px] text-white mt-1.5 leading-tight tracking-tight uppercase">
                      SALVANDO <br/>
                      <span className="text-[#FFD166]">MEU FILHO</span> <br/>
                      DAS TELAS!
                    </h3>
                    <p className="text-[8px] text-[#4EA8DE] font-bold mt-1 font-sans tracking-tight leading-normal uppercase">
                      O GUIA COMPLETO DO MÉTODO PINGUIM
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-[#FFD166] flex items-center justify-center shadow-lg text-[#0D3B66]">
                      <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <span className="text-[8px] font-mono text-gray-300">SABEDORIA INFANTIL</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 text-center">
              <div className="flex justify-center gap-0.5 text-[#FFD166] mb-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4.5 h-4.5 fill-current shrink-0" />)}
              </div>
              <p className="text-xs text-gray-100 font-sans leading-relaxed">
                "O guia prático definitivo contra a dependência digital infantil."
              </p>
              <span className="block text-[10px] text-[#FFD166] font-mono mt-1 font-bold">— Associação de Pediatria de Família</span>
            </div>
          </div>

          {/* Right Side: Tabbed info & Forms content */}
          <div className="md:col-span-7 p-6 sm:p-10 overflow-y-auto max-h-[80vh] md:max-h-[90vh] flex flex-col justify-between">
            {orderStep === 'info' && (
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#4EA8DE] font-bold block uppercase mb-1">
                    MATERIAL PEDAGÓGICO DE SUPORTE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-sans font-black text-[#0D3B66] leading-tight">
                    Livro Salvando Meu Filho das Telas!
                  </h2>
                  <p className="text-xs font-semibold text-[#4EA8DE] mt-1.5 font-sans leading-none flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> O mapa prático de sobrevivência digital no século XXI
                  </p>
                </div>

                <p className="text-xs text-gray-500 font-sans leading-relaxed">
                  Este livro é o resultado de anos de estudos práticos e mentoria familiar de Walace Freiman e foi elaborado para que qualquer pai, mesmo leigo em tecnologia e neurociência, possa blindar e reestabelecer o afeto e rituais familiares pacíficos em sua residência.
                </p>

                {/* Chapter outline widget list */}
                <div className="space-y-3.5">
                  <h4 className="font-sans font-extrabold text-sm text-[#0D3B66] border-b border-gray-100 pb-2">O que você vai aprender nas páginas:</h4>
                  <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                    {chapters.map((ch) => (
                      <div key={ch.num} className="flex gap-3 text-left">
                        <span className="font-mono font-black text-[#4EA8DE] text-sm shrink-0 bg-[#4EA8DE]/5 w-8 h-8 rounded-lg flex items-center justify-center">{ch.num}</span>
                        <div>
                          <h5 className="font-sans font-extrabold text-xs text-[#0D3B66]">{ch.title}</h5>
                          <p className="text-[11px] text-gray-400 font-sans leading-relaxed mt-0.5">{ch.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions banner */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                  <button
                    id="modal-request-sample-button"
                    onClick={() => setOrderStep('form')}
                    className="flex-1 py-3 bg-[#4EA8DE] hover:bg-[#0D3B66] text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#FFD166]" />
                    <span>Baixar Amostra Grátis</span>
                  </button>

                  <a
                    href="https://amazon.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-[#FFD166] hover:bg-[#FFD166]/80 text-[#0D3B66] font-extrabold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer text-center"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Comprar Livro na Amazon</span>
                  </a>
                </div>
              </div>
            )}

            {/* Step 2: Request free chapter input form */}
            {orderStep === 'form' && (
              <form onSubmit={handleOrderSubmit} className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#4EA8DE] uppercase tracking-wider block mb-1">
                    Amostra Grátis (PDF instantâneo)
                  </span>
                  <h3 className="font-sans font-black text-[#0D3B66] text-xl leading-snug">
                    Quer ler o Capítulo 1 agora mesmo?
                  </h3>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed mt-1.5">
                    Preencha o formulário institucional para receber o link de leitura do primeiro capítulo em seu e-mail e salvar o manual de apoio imediatamente.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] text-gray-400 font-mono uppercase font-bold mb-1">Qual o seu nome completo?</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Ana Paula Vasconcellos"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4EA8DE] text-sm text-[#0D3B66] font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-gray-400 font-mono uppercase font-bold mb-1">Qual o seu melhor e-mail?</label>
                    <input
                      type="email"
                      required
                      placeholder="Ex: seunome@mail.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4EA8DE] text-sm text-[#0D3B66] font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-gray-400 font-mono uppercase font-bold mb-1">Número de Whatsapp (Opcional)</label>
                    <input
                      type="tel"
                      placeholder="Ex: (11) 99999-9999"
                      value={phoneInput}
                      onChange={(e) => setPhoneInput(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4EA8DE] text-sm text-[#0D3B66] font-medium"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setOrderStep('info')}
                    className="px-4 py-3 border border-gray-200 hover:bg-gray-50 text-gray-505 font-bold text-xs rounded-xl transition-all cursor-pointer"
                  >
                    Voltar
                  </button>
                  <button
                    id="submit-chapter-request-btn"
                    type="submit"
                    className="flex-1 py-3 bg-[#0D3B66] hover:bg-[#4EA8DE] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#FFD166]" />
                    <span>Confirmar Envio e Baixar PDF</span>
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Success Screen */}
            {orderStep === 'success' && (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="font-sans font-black text-[#0D3B66] text-xl">Envio Efetuado com Sucesso!</h3>
                  <p className="text-xs text-[#4EA8DE] font-mono tracking-wider uppercase font-semibold mt-1">
                    Seu Capítulo 1 já está a caminho!
                  </p>
                </div>

                <p className="text-xs text-gray-500 font-sans leading-relaxed max-w-md mx-auto">
                  Olá, <strong>{nameInput}</strong>! Registramos seu download institucional. Já iniciamos o envio do Capítulo 1 completo direto para o endereço de e-mail <strong>{emailInput}</strong>.
                  Também tentamos liberar uma transferência direta em seu navegador!
                </p>

                <div className="bg-[#F7F9FC] p-4 rounded-2xl border border-gray-150 inline-flex items-center gap-3 max-w-sm mx-auto text-left">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500 shrink-0" />
                  <p className="text-[11px] text-[#0D3B66] font-sans leading-snug">
                    Ao terminar o primeiro capítulo, verifique seus e-mails para garantir um link promocional de <strong>30% de desconto</strong> para o livro impresso completo na Amazon Brasil!
                  </p>
                </div>

                <button
                  id="dismiss-book-success-btn"
                  onClick={onClose}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  Continuar Navegando
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
