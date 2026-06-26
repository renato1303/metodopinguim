import { Instagram, Facebook, Shield, Heart, Lock } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenAdmin?: () => void;
}

export default function Footer({ onNavigate, onOpenAdmin }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    onNavigate(id);
  };

  return (
    <footer id="footer-navigation" className="bg-[#050D1E] text-white pt-20 pb-10 border-t-4 border-[#FFD166] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#4EA8DE]/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-4 space-y-4">
            <div
              className="flex items-center cursor-pointer w-fit"
              onClick={() => handleLinkClick('hero')}
            >
              <img
                src="/src/assets/images/logo.png"
                alt="Método Pinguim"
                className="h-12 sm:h-16 w-auto object-contain rounded-2xl transform hover:scale-102 transition-all"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-xs text-gray-300 leading-relaxed font-sans max-w-sm">
              Um movimento voltado a capacitar pais e responsáveis a reestabelecer o controle saudável sobre as telas, cultivando afeto, segurança digital e infâncias de verdade.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com/metodopinguim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#FFD166] flex items-center justify-center text-white hover:text-[#FFD166] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 shrink-0" />
              </a>
              <a
                href="https://facebook.com/metodopinguim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#FFD166] flex items-center justify-center text-white hover:text-[#FFD166] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-sans font-bold text-sm text-[#FFD166] uppercase tracking-wider">Links Rápidos</h4>
            <ul className="space-y-2 text-xs font-sans text-gray-305 font-medium">
              {[
                { name: 'Início', id: 'hero' },
                { name: 'Sobre o Fundador', id: 'sobre' },
                { name: 'O Método', id: 'metodo' },
                { name: 'Jornada por Idade', id: 'guias' },
                { name: 'Guia de Apps', id: 'aplicativos' },
                { name: 'Nosso Blog', id: 'blog' },
                { name: 'Comunidade', id: 'comunidade' },
                { name: 'Pedir Palestra', id: 'contatos-escola' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-[#FFD166] text-gray-300 transition-colors pointer-events-auto cursor-pointer text-left block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans font-bold text-sm text-[#FFD166] uppercase tracking-wider">Recursos de Atendimento</h4>
            <ul className="space-y-2 text-xs font-sans text-gray-305 font-medium">
              {[
                { name: 'Guia de Controle Parental', id: 'recursos-gratuitos' },
                { name: 'Checklist Digital Familiar', id: 'recursos-gratuitos' },
                { name: 'Contrato de Uso de Celular', id: 'recursos-gratuitos' },
                { name: 'Plano Familiar de Atividades', id: 'recursos-gratuitos' },
                { name: 'Ebook Neurobiologia do Vício', id: 'recursos-gratuitos' },
                { name: 'Teste de Proteção Familiar', id: 'quiz-teste' }
              ].map((res, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(res.id)}
                    className="hover:text-[#FFD166] text-gray-300 transition-colors pointer-events-auto cursor-pointer text-left block"
                  >
                    {res.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans font-bold text-sm text-[#FFD166] uppercase tracking-wider">Fale Conosco</h4>
            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              Dúvidas pedagógicas, solicitações de entrevistas acadêmicas ou contratações de palestras:
            </p>
            <div className="space-y-2 text-xs font-mono font-medium text-gray-305">
              <p className="text-gray-300">📧 <a href="mailto:contato@metodopinguim.com.br" className="underline hover:text-[#FFD166]">contato@metodopinguim.com.br</a></p>
              <p className="text-gray-300">📞 (11) 3280-4010</p>
              <p className="text-gray-300">📍 Av. Paulista, 1000 — São Paulo/SP</p>
            </div>
            
            <div className="inline-flex items-center gap-1.5 text-[10px] text-[#4EA8DE] font-mono border border-[#4EA8DE]/20 bg-[#4EA8DE]/5 rounded-xl px-3 py-1.5">
              <Shield className="w-3.5 h-3.5 text-[#FFD166]" />
              <span>Ambiente 100% Protegido</span>
            </div>
          </div>

        </div>

        {/* Closing credentials rights label */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-gray-400 gap-4">
          <p>© {currentYear} Método Pinguim. Desenvolvido com amor social à infância e responsabilidade familiar.</p>
          <div className="flex items-center gap-4 text-xs">
            <button onClick={() => alert('Parabéns pela cidadania digital! Nossos termos são baseados na LGPD brasileira.')} className="hover:text-white transition-colors cursor-pointer block">Políticas de Privacidade</button>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <button onClick={() => alert('O Método Pinguim é independente e livre de afiliação ou patrocínio de Big Techs.')} className="hover:text-white transition-colors cursor-pointer block">Termos de Uso</button>
            {onOpenAdmin && (
              <>
                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                <button id="footer-admin-link" onClick={onOpenAdmin} className="hover:text-[#FFD166] text-gray-400 font-bold tracking-tight transition-colors cursor-pointer inline-flex items-center gap-1.5 align-middle">
                  <Lock className="w-3 h-3 shrink-0" />
                  <span>Painel Admin</span>
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
}
