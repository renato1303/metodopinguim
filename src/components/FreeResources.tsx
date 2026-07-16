import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, FileText, CheckCircle2, Lock, Sparkles, X, Mail } from 'lucide-react';
import { FREE_RESOURCES } from '../data.ts';
import { FreeResource } from '../types.ts';

export default function FreeResources() {
  const [downloadingResource, setDownloadingResource] = useState<FreeResource | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [downloadStep, setDownloadStep] = useState<'form' | 'progress' | 'success'>('form');
  const [progress, setProgress] = useState(0);

  const handleDownloadClick = (resource: FreeResource) => {
    setDownloadingResource(resource);
    setDownloadStep('form');
    setProgress(0);
  };

  const handleStartDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;

    setDownloadStep('progress');
    // Simulate real-time progress bar download
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setDownloadStep('success');
      }
    }, 150);
  };

  const triggerRawFileMockDownload = () => {
    if (!downloadingResource) return;

    if (downloadingResource.pdfUrl) {
      // Trigger actual PDF file download or open link
      const element = document.createElement('a');
      element.href = downloadingResource.pdfUrl;
      element.target = '_blank';
      element.download = downloadingResource.fileName;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } else {
      // Create virtual download file for premium client feel
      const element = document.createElement('a');
      const fileContent = `--- MÉTODO PINGUIM --- \nDocumento: ${downloadingResource.title}\nTipo: ${downloadingResource.type}\n\nRECURSO COMPLETO:\n${downloadingResource.contentPreview}\n\nParabéns por proteger o seu lar! Este arquivo simulado faz parte do ambiente institucional completo do Método Pinguim.`;
      const file = new Blob([fileContent], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = downloadingResource.fileName.replace('.pdf', '.txt');
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
    
    // Close modal
    setDownloadingResource(null);
  };

  return (
    <section id="recursos-gratuitos" className="py-24 bg-gradient-to-b from-white via-[#EEF4FA] to-white relative overflow-hidden">
      {/* Decorative ambient background glowing orbs */}
      <div className="absolute top-1/4 right-[-5%] w-96 h-96 bg-[#4EA8DE]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-5%] w-96 h-96 bg-[#FFD166]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#4EA8DE] uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
            MATERIAIS COMPLEMENTARES
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#0D3B66] tracking-tight mb-4 animate-fade-in">
            Ferramentas Gratuitas Para Pais
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-sans font-light leading-relaxed">
            Tenha acesso instantâneo a modelos de acordos, manuais e listas práticos criados por educadores e mentores familiares para implementar rotinas de desintoxicação digital em casa hoje.
          </p>
        </div>

        {/* Dynamic Resources Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FREE_RESOURCES.map((res) => (
            <motion.div
              key={res.id}
              id={`resource-card-${res.id}`}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* PDF icon header placeholder */}
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-orange-500 flex items-center justify-center mb-5 shrink-0">
                  <FileText className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-mono font-extrabold text-[#4EA8DE] uppercase tracking-wider block mb-2">
                  {res.type}
                </span>
                
                <h3 className="font-sans font-extrabold text-[#0D3B66] text-base mb-3 leading-snug">
                  {res.title}
                </h3>

                <p className="text-xs text-gray-500 font-sans leading-relaxed">
                  {res.description}
                </p>
              </div>

              {/* Action trigger button */}
              <button
                id={`resource-download-btn-${res.id}`}
                onClick={() => handleDownloadClick(res)}
                className="w-full text-center py-3 bg-[#0D3B66] hover:bg-[#4EA8DE] text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer mt-6"
              >
                <Download className="w-4 h-4 shrink-0" />
                <span>Baixar Gratuitamente</span>
              </button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Resource Lead Capture & Progress Modal */}
      <AnimatePresence>
        {downloadingResource && (
          <div
            id="download-modal-overlay"
            className="fixed inset-0 bg-[#0D3B66]/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative p-6 sm:p-8"
            >
              <button
                id="close-download-modal"
                onClick={() => setDownloadingResource(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Step 1: Input Email Form */}
              {downloadStep === 'form' && (
                <div className="text-center">
                  <div className="w-14 h-14 bg-[#4EA8DE]/10 text-[#4EA8DE] rounded-full flex items-center justify-center mx-auto mb-5 text-xl">
                    📩
                  </div>

                  <span className="text-[10px] font-mono font-bold text-[#4EA8DE] uppercase tracking-wider block mb-1">
                    Download de arquivos seguros
                  </span>
                  <h3 className="font-sans font-black text-[#0D3B66] text-xl mb-3 leading-snug">
                    {downloadingResource.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed max-w-sm mx-auto mb-6">
                    Por favor, insira o seu melhor e-mail corporativo ou pessoal para liberarmos instantaneamente o link de download direto do PDF e enviar as instruções.
                  </p>

                  <form onSubmit={handleStartDownload} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        required
                        id="download-lead-email"
                        placeholder="Ex: seunome@email.com"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4EA8DE] text-sm text-[#0D3B66] font-medium"
                      />
                    </div>

                    <button
                      id="confirm-download-btn"
                      type="submit"
                      className="w-full py-3.5 bg-[#4EA8DE] hover:bg-[#0D3B66] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-[#FFD166]" />
                      <span>Liberar Meu Arquivo PDF</span>
                    </button>
                  </form>
                </div>
              )}

              {/* Step 2: Progress Simulation */}
              {downloadStep === 'progress' && (
                <div className="text-center py-6">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4EA8DE] mx-auto mb-6" />
                  
                  <h4 className="font-sans font-extrabold text-[#0D3B66] text-lg mb-1">Processando download...</h4>
                  <p className="text-xs text-gray-400 font-sans font-light uppercase tracking-widest mb-6">
                    {downloadingResource.fileName}
                  </p>

                  <div className="w-full bg-gray-150 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#0D3B66] h-full transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="block text-sm font-bold text-[#0D3B66] mt-2 font-mono">{progress}%</span>
                </div>
              )}

              {/* Step 3: Success Screen */}
              {downloadStep === 'success' && (
                <div className="text-center">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 text-xl border border-emerald-150">
                    🎉
                  </div>

                  <h3 className="font-sans font-black text-[#0D3B66] text-xl mb-1">Download Liberado!</h3>
                  <p className="text-xs text-[#4EA8DE] font-mono tracking-wider uppercase font-semibold mb-3">
                    Pronto para carregar!
                  </p>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed max-w-sm mx-auto mb-6">
                    O manual foi processado e formatado com sucesso! Clique no botão abaixo para salvar o arquivo de texto em seu aparelho.
                  </p>

                  <button
                    id="trigger-browser-download"
                    onClick={triggerRawFileMockDownload}
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Salvar Arquivo no Aparelho</span>
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
