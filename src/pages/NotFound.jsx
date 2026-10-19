import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import LuxuryButton from '../components/common/LuxuryButton';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 py-28 sm:py-36 text-center space-y-8">
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-[#D4AF37]" />
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] font-medium">
          Error 404 / Missing Archive
        </span>
        <span className="h-px w-8 bg-[#D4AF37]" />
      </div>

      <div className="space-y-4 max-w-lg mx-auto">
        <h1 className="font-serif text-7xl sm:text-9xl font-normal text-[#1A1A1A] leading-none tracking-tight">
          404
        </h1>
        <p className="font-serif text-xl sm:text-2xl text-[#1A1A1A] italic">
          {t.common.pageNotFound}
        </p>
        <p className="text-xs sm:text-sm text-[#6C6863] leading-relaxed font-light">
          The curated artifact or document you are attempting to view is not in our archive or has been repositioned.
        </p>
      </div>

      <div className="pt-4">
        <LuxuryButton to="/" variant="primary" size="default">
          <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
          <span>{t.nav.home}</span>
        </LuxuryButton>
      </div>
    </div>
  );
}

