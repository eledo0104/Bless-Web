import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function StockBadge({ stock, className = '' }) {
  const { t } = useLanguage();

  if (stock) {
    return (
      <span
        className={`inline-flex items-center px-2 py-0.5 border border-[#1A1A1A]/30 bg-[#F9F8F6]/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.22em] font-medium text-[#1A1A1A] ${className}`}
      >
        <span className="w-1 h-1 bg-[#D4AF37] mr-1.5" />
        {t.common.inStock}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 border border-[#1A1A1A]/10 bg-[#EBE5DE]/80 backdrop-blur-sm text-[9px] uppercase tracking-[0.22em] font-medium text-[#6C6863] ${className}`}
    >
      <span className="w-1 h-1 bg-[#6C6863] mr-1.5" />
      {t.common.soldOut}
    </span>
  );
}

