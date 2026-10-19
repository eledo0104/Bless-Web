import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageToggle({ className = '' }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`Switch language, currently ${language === 'id' ? 'Indonesian' : 'English'}`}
      title={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
      className={`inline-flex items-center gap-2 px-3 py-1.5 border border-[#1A1A1A]/20 hover:border-[#1A1A1A] bg-transparent text-[#1A1A1A] text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-500 ease-luxury focus:outline-none focus:border-[#D4AF37] ${className}`}
    >
      <Globe className="w-3.5 h-3.5 text-[#6C6863] stroke-[1.5]" />
      <span className={language === 'id' ? 'text-[#1A1A1A] font-bold' : 'text-[#6C6863]'}>ID</span>
      <span className="text-[#1A1A1A]/20">/</span>
      <span className={language === 'en' ? 'text-[#1A1A1A] font-bold' : 'text-[#6C6863]'}>EN</span>
    </button>
  );
}

