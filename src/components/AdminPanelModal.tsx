import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, Save, X, ToggleLeft, ToggleRight, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';

interface AdminPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: {
    enabled: boolean;
    text: string;
    linkText: string;
    bgColor: string;
    textColor: string;
  };
  onSave: (newConfig: {
    enabled: boolean;
    text: string;
    linkText: string;
    bgColor: string;
    textColor: string;
  }) => void;
}

export default function AdminPanelModal({ isOpen, onClose, config, onSave }: AdminPanelModalProps) {
  const [enabled, setEnabled] = useState(config.enabled);
  const [text, setText] = useState(config.text);
  const [linkText, setLinkText] = useState(config.linkText);
  const [bgColor, setBgColor] = useState(config.bgColor);
  const [textColor, setTextColor] = useState(config.textColor);
  const [saveIndicator, setSaveIndicator] = useState(false);

  const presets = [
    { label: 'Original Amarelo (#FFD166)', bg: '#FFD166', text: '#0D3B66' },
    { label: 'Azul Alerta (#4EA8DE)', bg: '#4EA8DE', text: '#FFFFFF' },
    { label: 'Vermelho Crítico Cores', bg: '#F25F5C', text: '#FFFFFF' },
    { label: 'Verde Sucesso Amigável', bg: '#70C1B3', text: '#0C352F' },
    { label: 'Escuro Elegante Minimalista', bg: '#0D3B66', text: '#F4F1DE' }
  ];

  const handleReset = () => {
    setEnabled(true);
    setText("Conheça o livro 'Salvando Meu Filho das Telas!': o guia completo para proteger crianças dos perigos das telas");
    setLinkText('Saiba Mais');
    setBgColor('#FFD166');
    setTextColor('#0D3B66');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      enabled,
      text,
      linkText,
      bgColor,
      textColor
    });
    setSaveIndicator(true);
    setTimeout(() => {
      setSaveIndicator(false);
      onClose();
    }, 850);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        id="admin-panel-modal-overlay"
        className="fixed inset-0 bg-[#000000]/75 backdrop-blur-md z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          className="bg-white text-[#0D3B66] rounded-3xl shadow-2xl max-w-lg w-full relative overflow-hidden p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            id="close-admin-panel-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full hover:bg-gray-150 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-9 h-9 bg-[#0D3B66] text-[#FFD166] rounded-xl flex items-center justify-center">
              <Settings className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-[#4EA8DE] uppercase tracking-wider block">
                Painel Administrativo Privado
              </span>
              <h3 className="font-sans font-black text-[#0D3B66] text-xl leading-none">
                Gestão da Barra Promocional
              </h3>
            </div>
          </div>

          <p className="text-xs text-gray-500 font-sans leading-relaxed mb-6">
            Altere em tempo real a mensagem de alerta, links e identidade visual da barra promocional fixa no topo da página institucional do Método Pinguim.
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            
            {/* Enabled / Disabled Toggle */}
            <div className="flex items-center justify-between bg-gray-50 p-3.5 rounded-xl border border-gray-200">
              <div>
                <span className="text-xs font-sans font-extrabold text-[#0D3B66] block leading-none">Status da Barra Promocional</span>
                <span className="text-[10px] text-gray-400 font-sans mt-0.5 block leading-none">Exibir ou ocultar no topo em todo o site</span>
              </div>
              <button
                type="button"
                id="toggle-announcement-status"
                onClick={() => setEnabled(!enabled)}
                className="text-gray-500 hover:text-[#0D3B66] transition-colors cursor-pointer"
              >
                {enabled ? (
                  <ToggleRight className="w-9 h-9 text-emerald-500 fill-emerald-50" />
                ) : (
                  <ToggleLeft className="w-9 h-9 text-gray-300" />
                )}
              </button>
            </div>

            {/* Config Fields */}
            <div className="space-y-3">
              <div>
                <label className="block text-[10px] text-gray-400 font-mono uppercase font-bold mb-1">Texto promocional da barra</label>
                <textarea
                  required
                  rows={2}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Ex: Conheça o livro Salvando Meu Filho das Telas!..."
                  className="w-full px-3.5 py-2 bg-gray-55/40 text-xs font-medium rounded-xl border border-gray-200 focus:outline-none focus:border-[#4EA8DE]"
                />
              </div>

              <div>
                <label className="block text-[10px] text-gray-400 font-mono uppercase font-bold mb-1">Texto do link / botão de chamada (CTA)</label>
                <input
                  type="text"
                  required
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="Ex: Saiba Mais"
                  className="w-full px-3.5 py-2.5 bg-gray-55/40 text-xs font-medium rounded-xl border border-gray-200 focus:outline-none focus:border-[#4EA8DE]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] text-gray-400 font-mono uppercase font-bold mb-1">Cor do Fundo (Hex)</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-8 h-8 rounded-lg cursor-pointer border border-gray-200 shrink-0"
                    />
                    <input
                      type="text"
                      required
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      placeholder="#FFD166"
                      className="w-full px-2 py-1.5 bg-gray-55/40 text-xs font-mono font-medium rounded-lg border border-gray-200 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-gray-400 font-mono uppercase font-bold mb-1">Cor do Texto (Hex)</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="w-8 h-8 rounded-lg cursor-pointer border border-gray-200 shrink-0"
                    />
                    <input
                      type="text"
                      required
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      placeholder="#0D3B66"
                      className="w-full px-2 py-1.5 bg-gray-55/40 text-xs font-mono font-medium rounded-lg border border-gray-200 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Presets Grid Selection */}
            <div>
              <label className="block text-[10px] text-gray-400 font-mono uppercase font-bold mb-1.5">Estilos Predefinidos Recomendados</label>
              <div className="grid grid-cols-1 gap-1.5 max-h-[140px] overflow-y-auto pr-1">
                {presets.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setBgColor(p.bg);
                      setTextColor(p.text);
                    }}
                    className="w-full text-left p-2 rounded-lg border border-gray-150 hover:bg-gray-50 flex items-center justify-between text-xs transition-colors"
                  >
                    <span className="font-sans font-semibold text-[#0D3B66]">{p.label}</span>
                    <div className="flex border border-gray-200 rounded overflow-hidden">
                      <div className="w-4 h-4" style={{ backgroundColor: p.bg }} />
                      <div className="w-4 h-4" style={{ backgroundColor: p.text }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Security Notice */}
            <div className="text-[10px] text-amber-600 bg-amber-50 rounded-xl px-3.5 py-2.5 border border-amber-100 flex items-start gap-2">
              <AlertCircle className="w-4.5 h-4.5 shrink-0 mt-0.5" />
              <p className="leading-normal">
                <strong>Aviso de Persistência:</strong> Suas alterações serão salvas localmente em seu navegador no slot de cache criptografado de administrador e estarão operacionais a cada carregamento futuro.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-3 border border-gray-200 hover:bg-gray-100 text-gray-550 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Restaurar Padrão</span>
              </button>

              <button
                id="submit-admin-save-btn"
                type="submit"
                className="flex-1 py-3 bg-[#0D3B66] hover:bg-[#4EA8DE] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {saveIndicator ? (
                  <>
                    <span className="animate-ping rounded-full h-2 w-2 bg-[#FFD166]" />
                    <span>Salvando nos Servidores...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Salvar Configuração</span>
                  </>
                )}
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
