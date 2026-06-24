import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Landmark, Sparkles, CheckCircle2, User, Building, Phone, Send, X, Lightbulb } from 'lucide-react';

export default function SchoolSection() {
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [schoolName, setSchoolName] = useState('');
  const [cityName, setCityName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!schoolName || !cityName || !role || !email) {
      alert('Por favor, preencha as informações obrigatórias para contato!');
      return;
    }
    setFormSent(true);
  };

  const resetForm = () => {
    setSchoolName('');
    setCityName('');
    setRole('');
    setEmail('');
    setPhone('');
    setFormSent(false);
    setShowInquiryModal(false);
  };

  const benefits = [
    {
      title: 'Palestras para Alunos',
      desc: 'Sem chatice ou sermão. Abordamos a neurociência dos games e redes de forma direta, lúdica e visual, desafiando-os a recuperar sua autonomia mental.'
    },
    {
      title: 'Capacitação para Professores',
      desc: 'Treinamento completo para identificar sinais precoces de vício digital, lidar com dispersão severa em sala e orientar as famílias em reuniões.'
    },
    {
      title: 'Workshops para Pais',
      desc: 'Encontros práticos focados nas configurações técnicas de limites domésticos e formas não violentas de resgatar conversas profundas.'
    },
    {
      title: 'Políticas Internas Saudáveis',
      desc: 'Consultoria e assessoria especializada para desenhar canais e diretrizes éticas sobre uso ou guarda de celulares dentro do perímetro escolar.'
    }
  ];

  return (
    <section id="contatos-escola" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative vector assets */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-[#4EA8DE]/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#FFD166]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text and Benefits Column */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-bold text-[#4EA8DE] uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Landmark className="w-4.5 h-4.5 text-[#4EA8DE]" />
              Área de Educação Escolar
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#0D3B66] leading-tight mb-6">
              Levando Educação Digital Para Escolas
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed mb-8">
              A verdadeira mudança exige uma parceria forte entre a casa e a escola. O Método Pinguim leva palestras dinâmicas, materiais pedagógicos prontos e programas permanentes de cidadania cibernética adaptados para o currículo da sua escola.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5.5 h-5.5 text-[#4EA8DE] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-extrabold text-[#0D3B66] text-sm mb-1">{b.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              id="request-school-btn"
              onClick={() => setShowInquiryModal(true)}
              className="px-8 py-4 bg-[#0D3B66] hover:bg-[#4EA8DE] text-white font-bold text-sm rounded-xl transition-all shadow-md transform hover:-translate-y-0.5 inline-flex items-center space-x-2 cursor-pointer"
            >
              <GraduationCap className="w-5 h-5 text-[#FFD166]" />
              <span>Solicitar Apresentação Escolar</span>
            </button>
          </div>

          {/* Graphical/Quote Column with glass board cards */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-[#F7F9FC] border border-gray-100 p-6 rounded-2xl shadow-lg relative max-w-sm">
              <div className="absolute -top-5 -left-5 bg-[#FFD166] text-[#0D3B66] w-11 h-11 rounded-xl flex items-center justify-center shadow-md border border-white/25">
                <Lightbulb className="w-5.5 h-5.5 text-[#0D3B66] shrink-0" />
              </div>

              <h4 className="font-sans font-extrabold text-[#0D3B66] text-base mb-3 mt-2 pr-6">
                Impacto imediato no foco
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed italic mb-4">
                "As escolas que aboliram o uso de celulares em salas de aula ou implantaram o Programa Pinguim registraram um aumento de 32% no foco durante explicações acadêmicas e uma diminuição substancial de boatos de cyberbullying."
              </p>
              
              <div className="flex items-center space-x-3 border-t border-gray-250 pt-4">
                <div className="w-9 h-9 bg-[#0D3B66] text-white rounded-full flex items-center justify-center font-sans font-bold text-xs">
                  EP
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#0D3B66]">Evidências Pedagógicas</span>
                  <span className="text-[10px] text-gray-400 font-mono">Relório Mundial UNESCO 2024</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Presentation Request inquiry modal */}
      <AnimatePresence>
        {showInquiryModal && (
          <div
            id="school-modal-overlay"
            className="fixed inset-0 bg-[#0D3B66]/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative p-6 sm:p-8"
            >
              <button
                id="close-school-modal"
                onClick={resetForm}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {!formSent ? (
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-[#FFD166]/20 rounded-full flex items-center justify-center text-xl">
                      🏫
                    </div>
                    <div>
                      <h3 className="font-sans font-black text-[#0D3B66] text-lg sm:text-xl">Inquérito Pedagógico</h3>
                      <p className="text-xs text-[#4EA8DE] font-mono tracking-wider uppercase font-semibold">Leve o método à sua escola</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* School Name */}
                    <div>
                      <label className="block text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest mb-1.5">Nome da Instituição Escolar *</label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-440" />
                        <input
                          type="text"
                          required
                          placeholder="Ex: Colégio Dom Bosco"
                          value={schoolName}
                          onChange={(e) => setSchoolName(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4EA8DE] text-sm text-[#0D3B66]"
                        />
                      </div>
                    </div>

                    {/* City & State */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest mb-1.5">Cidade / UF *</label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Salvador - BA"
                          value={cityName}
                          onChange={(e) => setCityName(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4EA8DE] text-sm text-[#0D3B66]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest mb-1.5">Cargo / Função *</label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Diretor, Pedagogo..."
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4EA8DE] text-sm text-[#0D3B66]"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest mb-1.5">E-mail Corporativo ou Pessoal *</label>
                      <div className="relative">
                        <Send className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-440" />
                        <input
                          type="email"
                          required
                          placeholder="Ex: diretor@colegio.com.br"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4EA8DE] text-sm text-[#0D3B66]"
                        />
                      </div>
                    </div>

                    {/* Phone WhatsApp */}
                    <div>
                      <label className="block text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest mb-1.5">WhatsApp para Contato Rápidos</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-440" />
                        <input
                          type="tell"
                          placeholder="Ex: (11) 99999-9999"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4EA8DE] text-sm text-[#0D3B66]"
                        />
                      </div>
                    </div>

                    <button
                      id="submit-school-inquiry"
                      type="submit"
                      className="w-full mt-4 py-3.5 bg-[#4EA8DE] hover:bg-[#0D3B66] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-[#FFD166]" />
                      <span>Solicitar Agendamento Grátis</span>
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 text-xl border border-emerald-150">
                    🕊️
                  </div>

                  <h3 className="font-sans font-black text-[#0D3B66] text-xl mb-1">Contato Registrado!</h3>
                  <p className="text-xs text-[#0D3B55]/70 font-mono tracking-wider uppercase font-semibold mb-4">
                    Equipe Pedagógica Pinguim
                  </p>
                  
                  <p className="text-xs text-gray-500 font-sans leading-relaxed max-w-sm mx-auto mb-6">
                    Agradecemos seu interesse, <strong>{role}</strong> da instituição <strong>{schoolName}</strong>. Um dos nossos especialistas pedagógicos entrará em contato via e-mail ou WhatsApp no prazo máximo de 24 horas para agendar sua palestra ou apresentação personalizada!
                  </p>

                  <button
                    id="finish-school-inquiry"
                    onClick={resetForm}
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all block cursor-pointer"
                  >
                    Fechar
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
