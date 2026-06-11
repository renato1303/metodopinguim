import { useState, useEffect } from 'react';
import { Menu, X, ShieldAlert } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  announcementActive?: boolean;
}

export default function Header({ onNavigate, announcementActive = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Método', id: 'metodo' },
    { label: 'Guias', id: 'guias' },
    { label: 'Aplicativos', id: 'aplicativos' },
    { label: 'Blog', id: 'blog' },
    { label: 'Comunidade', id: 'comunidade' },
    { label: 'Contato', id: 'contato' }
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      id="header-navigation"
      className={`fixed left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D3B66]/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
      style={{
        top: announcementActive ? '48px' : '0px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="header-logo"
            className="flex items-center cursor-pointer"
            onClick={() => handleItemClick('hero')}
          >
            <img
              src="/src/assets/images/logo.png"
              alt="Método Pinguim"
              className="h-12 sm:h-16 w-auto object-contain rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className="px-3 py-2 text-sm font-medium text-white/90 hover:text-[#FFD166] rounded-md transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              id="cta-comecar-agora"
              onClick={() => handleItemClick('quiz-teste')}
              className="bg-[#4EA8DE] hover:bg-[#4EA8DE]/90 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
            >
              Começar Agora
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:text-[#FFD166] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div id="mobile-menu-panel" className="lg:hidden bg-[#0D3B66]/98 backdrop-blur-lg border-t border-white/10">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-mobile-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className="block w-full text-left px-4 py-3 text-base font-semibold text-white border-b border-white/5 hover:bg-white/5 hover:text-[#FFD166] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 px-4">
              <button
                id="cta-comecar-agora-mobile"
                onClick={() => handleItemClick('quiz-teste')}
                className="w-full text-center bg-[#FFD166] text-[#0D3B66] font-bold py-3 rounded-xl transition-all duration-200 block shadow-md"
              >
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
