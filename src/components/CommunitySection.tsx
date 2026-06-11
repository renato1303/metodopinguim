import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Users, Lock, CheckCircle, HelpCircle, ArrowRight, Video, FileCheck, X } from 'lucide-react';

export default function CommunitySection() {
  const [showInvitationModal, setShowInvitationModal] = useState(false);
  const [invitedEmail, setInvitedEmail] = useState('');
  const [inviteSent, setInviteSent] = useState(false);

  const handleInviteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!invitedEmail) return;
    setInviteSent(true);
  };

  const resetInviteModule = () => {
    setInvitedEmail('');
    setInviteSent(false);
    setShowInvitationModal(false);
  };

  const communityPerks = [
    {
      title: 'Suporte Clínico Diário',
      desc: 'Tire suas dúvidas técnicas ou de relacionamento diretamente com Walace Freiman e uma equipe voluntária especialista em psicologia de comportamento juvenil.',
      icon: Users
    },
    {
      title: 'Encontros Quinzenais ao Vivo',
      desc: 'Webinars ao vivo e dinâmicos via Zoom para debater novos perigos, trocar experiências sinceras de sucesso e receber metas guiadas de rituais offline.',
      icon: Video
    },
    {
      title: 'Arquivo de Alertas Tecnológicos',
      desc: 'Um canal ágil de comunicados que alerta os pais sobre mídias ou novas trends perigosas virais que acabaram de invadir escolas brasileiras.',
      icon: Lock
    },
    {
      title: 'Conteúdos Exclusivos em Vídeo',
      desc: 'Mini-aulas interativas sobre segurança em redes e controle parental detalhados de maneira que qualquer leigo possa blindar o lar em 5 minutos.',
      icon: FileCheck
    }
  ];

  return (
    <section id="comunidade" className="py-24 bg-[#0D3B66] relative overflow-hidden text-white">
      {/* Visual background style orbs */}
      <div className="absolute top-1/2 left-1/2 w-[550px] h-[550px] bg-[#4EA8DE]/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#FFD166] uppercase tracking-widest mb-3 flex items-center justify-center gap-1.5 animate-pulse">
            <Lock className="w-4 h-4" /> COMPANHEIRISMO EXCLUSIVO
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight mb-4 text-white">
            Você não está sozinho nessa jornada
          </h2>
          <p className="text-base sm:text-lg text-gray-200 font-sans font-light leading-relaxed">
            Educar filhos contra o vício digital em uma sociedade hiperconectada é cansativo. Na nossa comunidade fechada, você troca experiências sem vergonha e une forças com outros pais conscientes.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {communityPerks.map((p, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-all duration-300 backdrop-blur-subtle"
            >
              <div className="w-11 h-11 bg-[#FFD166]/15 rounded-xl flex items-center justify-center text-[#FFD166] shrink-0">
                <p.icon className="w-5 h-5 shrink-0" />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-white text-base mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action section badge centered */}
        <div className="text-center">
          <button
            id="join-community-btn"
            onClick={() => setShowInvitationModal(true)}
            className="px-8 py-4 bg-[#FFD166] hover:bg-[#FFD166]/90 text-[#0D3B00] font-black text-sm rounded-xl transition-all shadow-md transform hover:-translate-y-0.5 inline-flex items-center space-x-2.5 cursor-pointer"
          >
            <span>Quero Entrar na Comunidade Privada</span>
            <ArrowRight className="w-4.5 h-4.5 text-[#0D3B00]" />
          </button>
          
          <span className="block text-xs text-gray-400 mt-2.5 font-sans">
            Acesso permanente incluído sem custos adicionais para alunos do Método Pinguim.
          </span>
        </div>

      </div>

      {/* Invitations details modal popup */}
      <AnimatePresence>
        {showInvitationModal && (
          <div
            id="invitation-modal-overlay"
            className="fixed inset-0 bg-[#000000]/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in text-[#0D3B66]"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full relative p-6 sm:p-8"
            >
              <button
                id="close-invitation-modal"
                onClick={resetInviteModule}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {!inviteSent ? (
                <div className="text-center">
                  <div className="w-14 h-14 bg-[#FFD166]/20 rounded-full flex items-center justify-center mx-auto mb-5 text-xl">
                    🕊️
                  </div>

                  <span className="text-[10px] font-mono font-bold text-[#4EA8DE] uppercase tracking-wider block mb-1">
                    Portas de Segurança
                  </span>
                  <h3 className="font-sans font-black text-[#0D3B66] text-xl mb-3 leading-snug">
                    Solicitar Convite Especial
                  </h3>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed max-w-sm mx-auto mb-6">
                    A comunidade é estritamente moderada para garantir um ambiente seguro, empático e de total privacidade. Caso queira receber o convite com link de acesso temporário, insira seu e-mail de contato abaixo.
                  </p>

                  <form onSubmit={handleInviteSubmit} className="space-y-4">
                    <input
                      type="email"
                      required
                      placeholder="Qual seu e-mail principal?"
                      value={invitedEmail}
                      onChange={(e) => setInvitedEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4EA8DE] text-sm text-[#0D3B66] font-medium"
                    />

                    <button
                      id="submit-invitation-btn"
                      type="submit"
                      className="w-full py-3.5 bg-[#4EA8DE] hover:bg-[#0D3B66] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-[#FFD166]" />
                      <span>Garantir Reserva de Vaga</span>
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 text-xl border border-emerald-150">
                    📧
                  </div>

                  <h3 className="font-sans font-black text-[#0D3B66] text-xl mb-1">Inscrição Reservada!</h3>
                  <p className="text-xs text-[#4EA8DE] font-mono tracking-wider uppercase font-semibold mb-3">
                    Código de Convite Gerado
                  </p>
                  
                  <p className="text-xs text-gray-500 font-sans leading-relaxed max-w-sm mx-auto mb-6">
                    Seu interesse foi registrado com sucesso em nossos servidores! Enviamos um convite com instruções de aprovação de perfil pedagógico para <strong>{invitedEmail}</strong>. Por favor, verifique sua caixa de entrada e spam.
                  </p>

                  <button
                    id="finish-invitation-btn"
                    onClick={resetInviteModule}
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all block cursor-pointer"
                  >
                    Excelente, Obrigado!
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
