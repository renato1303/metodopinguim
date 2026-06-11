import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronRight, CheckCircle, Mail, Award, Lock, Smartphone, RefreshCw, Star, Sparkles, AlertCircle, ShieldAlert, ShieldCheck, Crown, Target } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data.ts';

export default function InteractiveQuiz() {
  const [step, setStep] = useState<'welcome' | 'questions' | 'lead' | 'result'>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [consent, setConsent] = useState(true);

  const handleStart = () => {
    setFinished(false);
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setStep('questions');
  };

  const [finished, setFinished] = useState(false);

  const handleAnswerSelect = (score: number) => {
    const updatedAnswers = [...answers, score];
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep('lead');
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      alert('Por favor, preencha o seu nome e e-mail para receber o gabarito completo!');
      return;
    }
    setStep('result');
  };

  const getScoreTotal = () => answers.reduce((acc, curr) => acc + curr, 0);

  const getProfile = () => {
    const total = getScoreTotal();
    if (total <= 10) {
      return {
        title: 'Família Iniciante',
        subtitle: 'As telas comandam a rotina da casa.',
        color: 'text-red-600 bg-red-50/50 border-red-200',
        icon: AlertCircle,
        description: 'Seu lar está extremamente vulnerável aos riscos dos algoritmos, cyberbullying e conteúdos inadequados de internet. É comum ver reações agressivas na hora de desconectar e o sono das crianças provavelmente está fragmentado. Não desanime! Este é o exato momento de iniciar uma caminhada de resgate através do Método Pinguim.',
        action: 'Baixar o Plano Familiar Sem Telas imediatamente e implementar regras de desligamento noturno.'
      };
    } else if (total <= 19) {
      return {
        title: 'Família Atenta',
        subtitle: 'Você percebe as ameaças, mas carece de consistência.',
        color: 'text-amber-600 bg-amber-50/50 border-amber-250',
        icon: ShieldAlert,
        description: 'Você já tentou instalar bloqueadores ou limitar horários, mas a rotina e o cansaço fazem com que as regras sejam violadas frequentemente. As crianças sabem como negociar "cinco minutinhos" falsos e as telas ainda provocam discussões constantes no ambiente doméstico.',
        action: 'Assinar o Contrato de Uso do Celular com regras rígidas e rituais offline fixados em local visível.'
      };
    } else if (total <= 27) {
      return {
        title: 'Família Preparada',
        subtitle: 'As cercas virtuais estão de pé e funcionando bem.',
        color: 'text-blue-600 bg-blue-50/50 border-blue-200',
        icon: ShieldCheck,
        description: 'Parabéns pelos ótimos hábitos! Seus aparelhos estão equipados com controles parentais adequados, a mesa de refeições é respeitada de forma limpa e há um diálogo saudável estabelecido sobre os perigos reais da tecnologia na vida de crianças.',
        action: 'Ativar filtros de DNS ao nível de roteador para blindar eventuais acessos acidentais externos.'
      };
    } else {
      return {
        title: 'Família Pinguim',
        subtitle: 'Conexão profunda e segurança total garantidas!',
        color: 'text-emerald-700 bg-emerald-50/50 border-emerald-200',
        icon: Crown,
        description: 'Espetacular! Você alcançou o patamar máximo de liderança digital e afeto saudável. A tecnologia atua como uma ferramenta produtiva secundária na sua casa, o tempo ao ar livre é sagrado e sua família desfruta de conversas limpas, seguras e profundas no olho no olho diariamente.',
        action: 'Compartilhar o Método com outras famílias da escola para criar uma rede protetora comunitária ainda mais forte.'
      };
    }
  };

  const handleReset = () => {
    setStep('welcome');
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setName('');
    setEmail('');
  };

  const progressPercentage = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;
  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  return (
    <section id="quiz-teste" className="py-24 bg-gradient-to-b from-[#F7F9FC] to-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Frame wrapper */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-150 overflow-hidden min-h-[500px] flex flex-col justify-between">
          
          <AnimatePresence mode="wait">
            
            {/* 1. Welcome Screen */}
            {step === 'welcome' && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-8 sm:p-12 text-center flex-1 flex flex-col justify-center items-center"
              >
                <div className="w-16 h-16 bg-gradient-to-tr from-[#FFD166]/30 to-[#FFD166]/5 rounded-2xl border border-[#FFD166]/40 flex items-center justify-center text-[#0D3B66] mb-6 shadow-sm animate-pulse">
                  <Target className="w-7 h-7 shrink-0" />
                </div>
                
                <span className="text-xs font-mono font-bold text-[#4EA8DE] uppercase tracking-widest mb-2 block">
                  Capacitação Gratuita
                </span>
                <h3 className="font-sans font-black text-[#0D3B66] text-2xl sm:text-3xl tracking-tight mb-4 max-w-xl">
                  Sua família está preparada para o mundo digital?
                </h3>
                <p className="text-sm text-gray-500 font-sans font-light max-w-lg mb-8 leading-relaxed">
                  Os algoritmos de redes sociais e jogos foram programados para capturar a mente das crianças. Responda a 10 perguntas intuitivas e receba um diagnóstico detalhado com plano de ação prático do Método Pinguim.
                </p>

                <div className="inline-flex flex-wrap gap-4 items-center justify-center text-xs text-gray-400 mb-8 max-w-md">
                  <span className="flex items-center gap-1"><Lock className="w-4 h-4 text-[#4EA8DE]" /> Teste 100% Seguro</span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <span className="flex items-center gap-1"><Smartphone className="w-4 h-4 text-[#FFD166]" /> Pronto para Celular</span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <span className="flex items-center gap-1"><Star className="w-4 h-4 text-emerald-500" /> Resultado Imediato</span>
                </div>

                <button
                  id="start-quiz-btn"
                  onClick={handleStart}
                  className="px-8 py-4 bg-[#0D3B66] hover:bg-[#4EA8DE] text-white font-bold rounded-xl transition-all shadow-md transform hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Iniciar Diagnóstico Grátis</span>
                  <ChevronRight className="w-4.5 h-4.5" />
                </button>
              </motion.div>
            )}

            {/* 2. Questions screen */}
            {step === 'questions' && currentQuestion && (
              <motion.div
                key="questions"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-6 sm:p-10 flex-1 flex flex-col justify-between"
              >
                {/* Micro header for questions tracker */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-gray-400 mb-4 uppercase">
                    <span>Questão {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}</span>
                    <span>{Math.round(progressPercentage)}% Concluído</span>
                  </div>

                  {/* Progress Bar indicator */}
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-8">
                    <div
                      className="bg-gradient-to-r from-[#4EA8DE] to-[#FFAA00] h-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>

                  {/* The Question Text */}
                  <h4 className="font-sans font-extrabold text-[#0D3B66] text-lg sm:text-xl mb-6 leading-snug">
                    {currentQuestion.text}
                  </h4>

                  {/* Selected Options array */}
                  <div className="space-y-3.5">
                    {currentQuestion.options.map((option, index) => (
                      <button
                        key={index}
                        id={`quiz-option-${currentQuestionIndex}-${index}`}
                        onClick={() => handleAnswerSelect(option.score)}
                        className="w-full text-left p-4 rounded-xl border border-gray-150 hover:bg-[#F7F9FC] hover:border-[#4EA8DE]/50 font-sans text-sm text-[#0D3B66] font-medium transition-all duration-200 flex items-start gap-3 cursor-pointer group"
                      >
                        <span className="w-5 h-5 bg-[#0D3B66]/5 group-hover:bg-[#4EA8DE]/20 text-[#0D3B66] font-mono text-center flex items-center justify-center font-bold text-xs rounded-full shrink-0 mt-0.5 transition-all">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="leading-relaxed">{option.text}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-8 text-center text-xs text-gray-400">
                  Responda de forma sincera. Todos os resultados são confidenciais e livres de julgamentos morais.
                </div>
              </motion.div>
            )}

            {/* 3. Lead Capture screen */}
            {step === 'lead' && (
              <motion.div
                key="lead"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-8 sm:p-12 text-center flex-1 flex flex-col justify-center items-center"
              >
                <div className="w-16 h-16 bg-[#4EA8DE]/10 rounded-full flex items-center justify-center text-4xl mb-6">
                  ✉️
                </div>

                <span className="text-xs font-mono font-bold text-[#4EA8DE] uppercase tracking-widest mb-1.5 block">
                  Cadastro Seguro de Lead
                </span>
                <h4 className="font-sans font-black text-[#0D3B66] text-xl sm:text-2xl tracking-tight mb-3">
                  Quase pronto! Onde enviamos o diagnóstico?
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 font-sans max-w-md mb-8 leading-relaxed">
                  Insira abaixo o seu nome e e-mail para processar as suas respostas e emitirmos o seu PDF personalizado de recursos do Método Pinguim correspondente.
                </p>

                <form onSubmit={handleLeadSubmit} className="w-full max-w-sm space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Seu primeiro nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4EA8DE] text-sm text-[#0D3B66]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Seu melhor e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4EA8DE] text-sm text-[#0D3B66]"
                    />
                  </div>

                  <div className="flex items-start gap-2 text-left text-[10px] text-gray-400 mb-4">
                    <input
                      type="checkbox"
                      id="quiz-consent"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 cursor-pointer"
                    />
                    <label htmlFor="quiz-consent" className="leading-snug select-none cursor-pointer">
                      Aceito receber dicas semanais gratuitas sobre segurança digital e concordo com as políticas de privacidade de dados.
                    </label>
                  </div>

                  <button
                    id="submit-quiz-lead"
                    type="submit"
                    className="w-full py-3.5 bg-[#4EA8DE] hover:bg-[#0D3B66] text-white font-bold text-sm rounded-xl transition-all shadow-md transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Ver Resultado de Proteção</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            )}

            {/* 4. Results Screen */}
            {step === 'result' && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 sm:p-10 flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* Results top summary badges */}
                  <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
                    <div>
                      <span className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
                        destinatário
                      </span>
                      <span className="text-sm font-extrabold text-[#0D3B66]">
                        {name}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="block text-[10px] font-mono font-bold text-[#4EA8DE] uppercase tracking-widest leading-none mb-1">
                        pontuação total
                      </span>
                      <span className="text-base font-black text-[#0D3B66] bg-[#FFD166]/20 px-3 py-1 rounded-full">
                        {getScoreTotal()} / 30 pontos
                      </span>
                    </div>
                  </div>

                  {/* Profile Block with customized details */}
                  {(() => {
                    const profile = getProfile();
                    return (
                      <div className="space-y-6">
                        <div className={`p-5 rounded-2xl border ${profile.color} flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left`}>
                          <div className="w-12 h-12 rounded-xl bg-white/80 border border-current/15 flex items-center justify-center shrink-0 shadow-sm">
                            {profile.icon && <profile.icon className="w-6 h-6 text-current" />}
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-black uppercase tracking-wider block leading-none mb-1">
                              seu perfil familiar:
                            </span>
                            <h4 className="font-sans font-black text-lg mb-1 leading-none">{profile.title}</h4>
                            <p className="text-xs font-semibold leading-relaxed text-gray-600 italic">
                              "{profile.subtitle}"
                            </p>
                          </div>
                        </div>

                        {/* Description paragraphs */}
                        <div className="font-sans text-xs sm:text-sm text-gray-650 leading-relaxed space-y-3">
                          <p>{profile.description}</p>
                          <div className="p-4 bg-[#F7F9FC] rounded-xl border border-gray-150">
                            <h5 className="font-sans font-extrabold text-xs text-[#0D3B66] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                              Recomendação de Ação Imediata:
                            </h5>
                            <p className="text-xs font-medium text-gray-600">
                              {profile.action}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Reset or transition controls */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <button
                    id="reset-quiz-btn"
                    onClick={handleReset}
                    className="text-xs font-bold text-gray-400 hover:text-[#0D3B66] flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Realizar Teste Novamente</span>
                  </button>

                  <button
                    id="quiz-result-cta-downloads"
                    onClick={() => {
                      const el = document.getElementById('recursos-gratuitos');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#0D3B66] hover:bg-[#4EA8DE] text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Award className="w-4 h-4 text-[#FFD166] shrink-0" />
                    <span>Resgatar Meus Recursos Gratuitos</span>
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
