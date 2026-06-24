import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Sparkles, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setSuccess(true);
  };

  return (
    <section id="newsletter-section" className="py-20 bg-[#F7F9FC] relative border-t border-gray-150">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Frame box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-150 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#4EA8DE]/5 rounded-tl-full pointer-events-none" />

          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-1 bg-[#FFD166]/15 text-[#0D3B66] text-[10px] font-mono font-bold px-3 py-1 rounded-full mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> 100% GRATUITO E SEGURO
            </span>

            <h3 className="font-sans font-black text-[#0D3B66] text-2xl sm:text-3xl tracking-tight mb-3">
              Receba dicas semanais sobre educação digital
            </h3>

            <p className="text-sm text-gray-500 font-sans leading-relaxed max-w-lg mx-auto mb-8">
              Toda terça-feira, enviamos um resumo prático contendo novos perigos das redes sociais, atualizações de jogos e acordos domésticos testados por especialistas pedagógicos e mentores familiares para implementar no seu lar.
            </p>

            {!success ? (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 max-w-xl mx-auto items-center">
                
                {/* Name */}
                <div className="sm:col-span-4 relative">
                  <input
                    type="text"
                    required
                    id="news-name-input"
                    placeholder="Seu primeiro nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#F7F9FC] rounded-xl px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#4EA8DE] text-sm text-[#0D3B66] font-medium transition-all"
                  />
                </div>

                {/* Email */}
                <div className="sm:col-span-5 relative">
                  <input
                    type="email"
                    required
                    id="news-email-input"
                    placeholder="Qual seu e-mail?"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#F7F9FC] rounded-xl px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#4EA8DE] text-sm text-[#0D3B66] font-medium transition-all"
                  />
                </div>

                {/* Submitting button CTA pointer */}
                <div className="sm:col-span-3">
                  <button
                    id="news-cta-submit"
                    type="submit"
                    className="w-full py-3 px-4 bg-[#4EA8DE] hover:bg-[#0D3B66] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <Send className="w-3.5 h-3.5 shrink-0" />
                    <span>Quero Receber</span>
                  </button>
                </div>

              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-5 bg-emerald-50 border border-emerald-150 rounded-2xl max-w-md mx-auto text-center"
              >
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-lg">
                  ✓
                </div>
                <h5 className="font-sans font-bold text-[#0D3B66] text-base mb-1">Inscrição Efetuada com Sucesso!</h5>
                <p className="text-xs text-gray-500 font-sans">
                  Pronto, <strong>{name}</strong>! Toda terça você receberá nossos alertas de cibersegurança familiar direcionados para <strong>{email}</strong>. Bem-vindo ao bando!
                </p>
              </motion.div>
            )}

            <span className="block text-[10px] text-gray-400 mt-4 leading-none font-sans font-light">
              Nós repudiamos spam. Seus dados estão seguros e você pode se descadastrar com apenas 1 clique a qualquer hora.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
