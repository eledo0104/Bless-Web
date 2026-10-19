import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import LuxuryButton from '../components/common/LuxuryButton';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-24 space-y-20 lg:space-y-32">
      {/* Editorial Header */}
      <div className="border-b border-[#1A1A1A]/15 pb-8 sm:pb-12 space-y-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#D4AF37]" />
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] font-medium">
            Atelier Chronicle &amp; Philosophy
          </span>
        </div>
        <div className="max-w-3xl space-y-3">
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1A1A1A] tracking-tight leading-tight">
            The Philosophy of <br />
            <span className="italic font-normal text-[#D4AF37]">Patient Craft</span>
          </h1>
          <p className="text-base sm:text-lg text-[#6C6863] font-light leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>
      </div>

      {/* Main Narrative Split: Drop Cap + Asymmetric Framing */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Editorial Text Story (Col 1-7) */}
        <div className="lg:col-span-7 space-y-12">
          {/* Section 1: Brand Origin */}
          <section className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6C6863] font-medium block">
              01 / {t.about.brandSectionTitle}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              Honoring Cultural Memory
            </h2>
            <p className="editorial-drop-cap text-sm sm:text-base text-[#1A1A1A] leading-relaxed font-light">
              {t.about.brandText}
            </p>
          </section>

          <div className="w-full h-px bg-[#1A1A1A]/10" />

          {/* Section 2: Artisan Lineage */}
          <section className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6C6863] font-medium block">
              02 / {t.about.artisanSectionTitle}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              The Hands of Mastery
            </h2>
            <p className="text-sm sm:text-base text-[#6C6863] leading-relaxed font-light">
              {t.about.artisanText}
            </p>
            <p className="text-sm sm:text-base text-[#6C6863] leading-relaxed font-light pt-2">
              {language === 'en'
                ? 'Through each stitch, carve, and assembly, our artisans imbue raw elements with quiet dignity—creating tactile companions that remain cherished across generations.'
                : 'Melalui setiap jahitan, pahatan, dan rakitan, para pengrajin kami menghidupkan material alami menjadi karya bernilai tinggi yang abadi melintasi generasi.'}
            </p>
          </section>

          <div className="pt-4">
            <LuxuryButton to="/catalog" variant="primary" size="default">
              <span>{t.home.browseCatalog}</span>
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </LuxuryButton>
          </div>
        </div>

        {/* Editorial Artisan Vignette (Col 8-12) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="relative aspect-[3/4] bg-[#EBE5DE]/40 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] group">
            <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] pointer-events-none z-10" />
            <img
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200"
              alt="Artisan Craftsmanship at Bless"
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[1500ms] ease-luxury"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#1A1A1A]/90 p-4 text-[#F9F8F6]">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] block font-medium">
                Atelier Workshop
              </span>
              <p className="font-serif text-xs italic text-[#EBE5DE]">
                Indonesian handicraft preservation &amp; natural materiality.
              </p>
            </div>
          </div>

          {/* Curatorial Quote Box */}
          <div className="border-t border-[#1A1A1A]/20 pt-6 space-y-3">
            <p className="font-serif text-lg italic text-[#1A1A1A] leading-snug">
              “True luxury is not conspicuous; it is the silent mastery of patience, human dedication, and material truth.”
            </p>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6C6863] block font-medium">
              — {siteConfig.brandName} Manifesto
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

