/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import AboutFounder from './components/AboutFounder.tsx';
import MethodPillars from './components/MethodPillars.tsx';
import AgeJourneys from './components/AgeJourneys.tsx';
import InteractiveQuiz from './components/InteractiveQuiz.tsx';
import AppAnalyzer from './components/AppAnalyzer.tsx';
import FreeResources from './components/FreeResources.tsx';
import SchoolSection from './components/SchoolSection.tsx';
import Testimonials from './components/Testimonials.tsx';
import CommunitySection from './components/CommunitySection.tsx';
import BlogSection from './components/BlogSection.tsx';
import Newsletter from './components/Newsletter.tsx';
import Footer from './components/Footer.tsx';

// High-Fidelity Promotional components import
import AnnouncementBar from './components/AnnouncementBar.tsx';
import BookDetailModal from './components/BookDetailModal.tsx';
import AdminPanelModal from './components/AdminPanelModal.tsx';

export default function App() {
  // Load configuration with persistent state storage in local browser memory
  const [announcementConfig, setAnnouncementConfig] = useState(() => {
    const saved = localStorage.getItem('metodo_pinguim_announcement_config');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback safely to original specifications
      }
    }
    return {
      enabled: true,
      text: "Conheça o livro 'Salvando Meu Filho das Telas!': o guia completo para proteger crianças dos perigos das telas",
      linkText: 'Saiba Mais',
      bgColor: '#FFD166',
      textColor: '#0D3B66'
    };
  });

  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const handleSaveAnnouncement = (newConfig: {
    enabled: boolean;
    text: string;
    linkText: string;
    bgColor: string;
    textColor: string;
  }) => {
    setAnnouncementConfig(newConfig);
    localStorage.setItem('metodo_pinguim_announcement_config', JSON.stringify(newConfig));
  };

  const isBarActive = announcementConfig.enabled && isAnnouncementVisible;

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Dynamic offset scroll calculation accounts for dynamic announcement bar visibility
      const headerOffset = isBarActive ? 138 : 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="metodo-pinguim-app" className="min-h-screen bg-white text-[#0D3B66] antialiased transition-all duration-300">
      {/* Floating alert bar fixed above main menu */}
      <AnnouncementBar
        config={announcementConfig}
        visible={isAnnouncementVisible}
        onOpenBook={() => setIsBookModalOpen(true)}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        onClose={() => setIsAnnouncementVisible(false)}
      />

      {/* 1. Header fixed top menu navigation */}
      <Header onNavigate={handleNavigate} announcementActive={isBarActive} />

      {/* Main Page Layout Container with responsive dynamic spacing shifting */}
      <main 
        id="main-content-layout"
        style={{ 
          paddingTop: isBarActive ? '48px' : '0px',
          transition: 'padding-top 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* 2. Outstanding Hero Block */}
        <Hero onNavigate={handleNavigate} />

        {/* 3. About Founder Storyteller Panel */}
        <AboutFounder />

        {/* 4. Primary Pedagogical Pillars */}
        <MethodPillars />

        {/* 5. Age Milestone Roadmaps */}
        <AgeJourneys />

        {/* 6. Interactive Capacitation Diagnostic Test */}
        <InteractiveQuiz />

        {/* 7. App Safety Analyzer Directory */}
        <AppAnalyzer />

        {/* 8. Free family materials & downloads */}
        <FreeResources />

        {/* 9. Specialized School Talks Program */}
        <SchoolSection />

        {/* 10. Reviews & Testimonies carousel slider */}
        <Testimonials />

        {/* 11. Exclusive private group community */}
        <CommunitySection />

        {/* 12. Blog content indexfeed directory */}
        <BlogSection onOpenBook={() => setIsBookModalOpen(true)} />

        {/* 13. Sleek Newsletter subscription area footer */}
        <Newsletter />
      </main>

      {/* 14. Responsive footer listings directories */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenAdmin={() => {
          setIsAnnouncementVisible(true);
          setAnnouncementConfig(prev => ({ ...prev, enabled: true }));
          setIsAdminModalOpen(true);
        }} 
      />

      {/* Realistic Presentation Book Modal Info Deck */}
      <BookDetailModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />

      {/* Quick Access Administrative Control Panel */}
      <AdminPanelModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        config={announcementConfig}
        onSave={handleSaveAnnouncement}
      />
    </div>
  );
}
