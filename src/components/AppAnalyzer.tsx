import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Info, ShieldAlert, Sparkles, Filter, Check, Eye, Instagram, Youtube, MessageSquare, Gamepad2, Hammer, Cpu, Send, Ghost, Music } from 'lucide-react';
import { APP_ANALYSES } from '../data.ts';

export default function AppAnalyzer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedAppId, setExpandedAppId] = useState<string | null>(null);

  const renderAppLogo = (id: string, containerClass = "w-11 h-11 rounded-xl", iconClass = "w-5 h-5") => {
    switch (id) {
      case 'tiktok':
        return (
          <div className={`${containerClass} overflow-hidden shadow-md shrink-0 border border-neutral-100 bg-white`}>
            <img src="/src/assets/images/logotiktok.png" alt="TikTok" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
        );
      case 'instagram':
        return (
          <div className={`${containerClass} bg-gradient-to-tr from-fuchsia-600 via-rose-500 to-amber-500 text-white flex items-center justify-center shadow-md shrink-0`}>
            <Instagram className={iconClass} />
          </div>
        );
      case 'youtube':
        return (
          <div className={`${containerClass} overflow-hidden shadow-md shrink-0 border border-neutral-100 bg-white`}>
            <img src="/src/assets/images/logoyoutube.png" alt="YouTube" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
        );
      case 'whatsapp':
        return (
          <div className={`${containerClass} overflow-hidden shadow-md shrink-0 border border-neutral-100 bg-white`}>
            <img src="/src/assets/images/logowhatsapp.png" alt="WhatsApp" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
        );
      case 'discord':
        return (
          <div className={`${containerClass} overflow-hidden shadow-md shrink-0 border border-neutral-100 bg-white`}>
            <img src="/src/assets/images/logodiscord.png" alt="Discord" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
        );
      case 'roblox':
        return (
          <div className={`${containerClass} overflow-hidden shadow-md shrink-0 border border-neutral-100 bg-white`}>
            <img src="/src/assets/images/logoroblox.png" alt="Roblox" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
        );
      case 'minecraft':
        return (
          <div className={`${containerClass} overflow-hidden shadow-md shrink-0 border border-neutral-100 bg-white`}>
            <img src="/src/assets/images/logominecraft.jpeg" alt="Minecraft" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
        );
      case 'chatgpt':
        return (
          <div className={`${containerClass} bg-slate-900 border border-teal-500/20 text-teal-400 flex items-center justify-center shadow-md shrink-0`}>
            <Cpu className={iconClass} />
          </div>
        );
      case 'telegram':
        return (
          <div className={`${containerClass} bg-sky-500 text-white flex items-center justify-center shadow-md shrink-0 border border-sky-600`}>
            <Send className={`${iconClass} -rotate-12 translate-x-px -translate-y-px`} />
          </div>
        );
      case 'snapchat':
        return (
          <div className={`${containerClass} bg-yellow-400 text-black flex items-center justify-center shadow-md shrink-0 border border-yellow-500`}>
            <Ghost className={iconClass} />
          </div>
        );
      default:
        return (
          <div className={`${containerClass} bg-gray-100 text-gray-500 flex items-center justify-center shadow-md shrink-0`}>
            <Sparkles className={iconClass} />
          </div>
        );
    }
  };

  const categories = [
    { value: 'all', label: 'Tudo' },
    { value: 'social', label: 'Redes Sociais' },
    { value: 'games', label: 'Jogos' },
    { value: 'comm', label: 'Comunicação' },
    { value: 'streaming', label: 'Streaming' },
    { value: 'ai', label: 'I.A.' }
  ];

  const filteredApps = APP_ANALYSES.filter((app) => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getRiskColor = (level: 'high' | 'medium' | 'low') => {
    switch (level) {
      case 'high':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'medium':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'low':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
  };

  const getRiskBadge = (level: 'high' | 'medium' | 'low') => {
    switch (level) {
      case 'high':
        return '🚨 Alto Risco';
      case 'medium':
        return '⚠️ Risco Médio';
      case 'low':
        return '✅ Risco Baixo';
    }
  };

  return (
    <section id="aplicativos" className="py-24 bg-gradient-to-b from-white via-[#F5F8FA] to-white relative overflow-hidden">
      {/* Decorative ambient background glowing orbs */}
      <div className="absolute top-10 left-[-5%] w-80 h-80 bg-[#4EA8DE]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-80 h-80 bg-[#FFD166]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#4EA8DE] uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5ClassName">
            BLINDAGEM DIGITAL COMUNÁRIA
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#0D3B66] tracking-tight mb-4">
            Análises dos Aplicativos Mais Utilizados
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-sans font-light leading-relaxed">
            Consulte nosso guia independente de segurança para conhecer os riscos de vício, privacidade, pornografia involuntária e comportamento predador ocultos em cada aplicativo.
          </p>
        </div>

        {/* Search & Filters Controls Container */}
        <div className="max-w-4xl mx-auto bg-[#F7F9FC] border border-gray-100 p-4 sm:p-6 rounded-2xl mb-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input field */}
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
              <input
                type="text"
                id="search-apps-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Ex: TikTok, Roblox, Snapchat..."
                className="w-full bg-white pl-10 pr-4 py-3 rounded-xl border border-gray-150 focus:outline-none focus:border-[#4EA8DE] text-sm text-[#0D3B66] placeholder:text-gray-400 transition-all font-sans font-medium shadow-inner"
              />
            </div>

            {/* Selector Categories pills */}
            <div className="md:col-span-7 flex flex-wrap gap-2 justify-start md:justify-end items-center">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  id={`filter-pill-${cat.value}`}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    selectedCategory === cat.value
                      ? 'bg-[#0D3B66] text-white shadow-md'
                      : 'bg-white text-gray-500 border border-gray-150 hover:bg-gray-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Results grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredApps.map((app) => (
              <motion.div
                key={app.id}
                id={`app-card-${app.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F7F9FC] rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  
                  {/* Top app brand row */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-150">
                    <div className="flex items-center space-x-3.5">
                      {renderAppLogo(app.id, "w-11 h-11 rounded-xl shadow-sm border border-gray-100 shrink-0", "w-5 h-5")}
                      <div>
                        <span className="block text-[10px] font-mono font-bold text-[#4EA8DE] uppercase tracking-wider">
                          {app.categoryLabel}
                        </span>
                        <h3 className="font-sans font-extrabold text-[#0D3B66] text-base">
                          {app.name}
                        </h3>
                      </div>
                    </div>

                    {/* Risk Badge with dynamic color logic */}
                    <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold border shrink-0 ${getRiskColor(app.riskLevel)}`}>
                      {getRiskBadge(app.riskLevel)}
                    </div>
                  </div>

                  {/* Summary & age recommendations */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="block text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
                        idade sugerida
                      </span>
                      <span className="text-xs font-bold text-[#0D3B66]">
                        {app.recommendedAge}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                      {app.description}
                    </p>
                  </div>

                </div>

                {/* Direct card expand CTAs */}
                <button
                  id={`app-btn-expand-${app.id}`}
                  onClick={() => setExpandedAppId(app.id)}
                  className="w-full text-center py-2.5 bg-white border border-gray-200 hover:bg-[#0D3B66] hover:text-white hover:border-transparent text-gray-600 text-xs font-extrabold rounded-xl transition-all shadow-sm flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ver Riscos e Dicas Secundárias</span>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Fallback Empty Case */}
          {filteredApps.length === 0 && (
            <div className="col-span-full text-center py-12">
              <span className="text-3xl">🕵️‍♂️</span>
              <p className="text-sm font-semibold text-gray-450 mt-2">Nenhum aplicativo foi encontrado com esse nome.</p>
              <button
                id="reset-search-btn"
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                className="text-xs text-[#4EA8DE] font-bold mt-1.5 underline cursor-pointer"
              >
                Limpar filtros de busca
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Expanded App review Modal drawer */}
      <AnimatePresence>
        {expandedAppId !== null && (() => {
          const targetApp = APP_ANALYSES.find((a) => a.id === expandedAppId);
          if (!targetApp) return null;

          return (
            <div
              id="app-modal-overlay"
              className="fixed inset-0 bg-[#0D3B66]/89 backdrop-blur-md z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-3xl shadow-2xl max-w-xl w-full relative p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
              >
                {/* Close modal */}
                <button
                  id="close-app-modal"
                  onClick={() => setExpandedAppId(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                >
                  <Search className="w-5 h-5 rotate-45 shrink-0" />
                </button>

                {/* Modal Title Row */}
                <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-gray-100">
                  {renderAppLogo(targetApp.id, "w-14 h-14 rounded-2xl border border-gray-100 shadow-sm shrink-0", "w-6 h-6")}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#4EA8DE] uppercase tracking-wider">{targetApp.categoryLabel}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${getRiskColor(targetApp.riskLevel)}`}>Score: {targetApp.riskScore}/10</span>
                    </div>
                    <h3 className="font-sans font-black text-[#0D3B66] text-xl sm:text-2xl">{targetApp.name}</h3>
                  </div>
                </div>

                {/* App summary */}
                <div className="space-y-6 text-xs sm:text-sm text-gray-650 leading-relaxed font-sans">
                  <div>
                    <span className="block text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Idade Mínima Recomendada pelo Método:</span>
                    <p className="text-[#0D3B66] font-semibold">{targetApp.recommendedAge}</p>
                  </div>

                  <div>
                    <span className="block text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest leading-none mb-2">Resumo da Plataforma:</span>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{targetApp.description}</p>
                  </div>

                  {/* Threat bullet list */}
                  <div className="p-4 rounded-2xl bg-red-50/50 border border-red-100">
                    <h4 className="font-sans font-extrabold text-red-700 text-xs tracking-wider uppercase mb-3 flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-red-500" />
                      Perigos e Ameaças Ocultas:
                    </h4>
                    <ul className="space-y-2">
                      {targetApp.dangers.map((danger, index) => (
                        <li key={index} className="flex gap-2 items-start text-xs text-gray-600 font-sans">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" />
                          <span>{danger}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Parent Tips bullet list */}
                  <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                    <h4 className="font-sans font-extrabold text-emerald-700 text-xs tracking-wider uppercase mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-500" />
                      Dicas Práticas para Pais Protegerem:
                    </h4>
                    <ul className="space-y-2">
                      {targetApp.parentTips.map((tip, index) => (
                        <li key={index} className="flex gap-2 items-start text-xs text-gray-600 font-sans">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Modal buttons */}
                <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
                  <button
                    id="close-app-review-modal"
                    onClick={() => setExpandedAppId(null)}
                    className="px-6 py-2.5 bg-[#0D3B66] hover:bg-[#4EA8DE] text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-sm"
                  >
                    Fechar Análise
                  </button>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
