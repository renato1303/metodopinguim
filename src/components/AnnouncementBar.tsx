import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ArrowRight } from 'lucide-react';

interface AnnouncementBarProps {
  config: {
    enabled: boolean;
    text: string;
    linkText: string;
    bgColor: string;
    textColor: string;
  };
  onOpenBook: () => void;
  onOpenAdmin: () => void;
  onClose: () => void;
  visible: boolean;
}

export default function AnnouncementBar({ config, onOpenBook, onOpenAdmin, onClose, visible }: AnnouncementBarProps) {
  if (!config.enabled || !visible) return null;

  return (
    <motion.div
      id="announcement-bar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -60, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-4 sm:px-6 shadow-sm border-b border-black/[0.04]"
      style={{
        height: '48px',
        backgroundColor: config.bgColor,
        color: config.textColor,
      }}
    >
      {/* Symmetrical spacer to keep layout centered */}
      <div className="w-10 md:w-16 shrink-0" />

      {/* Main Campaign Content Centered */}
      <a 
        id="announcement-content"
        href="https://salvandomeusfilhosdastelas.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 text-center text-xs sm:text-sm font-sans font-extrabold tracking-tight cursor-pointer group hover:opacity-95 transition-opacity px-2 max-w-[85%] select-none"
      >
        <BookOpen className="w-4.5 h-4.5 shrink-0 animate-bounce" style={{ animationDuration: '3s' }} />
        
        <p className="truncate sm:whitespace-normal line-clamp-1 leading-normal">
          {config.text}{' '}
          <span className="inline-flex items-center gap-0.5 underline font-black ml-1 text-xs tracking-wide">
            {config.linkText} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform inline-block" />
          </span>
        </p>
      </a>

      {/* Symmetrical spacer to keep layout centered */}
      <div className="w-10 md:w-16 shrink-0" />
    </motion.div>
  );
}
