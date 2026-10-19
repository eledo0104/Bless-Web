import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useProducts } from '../hooks/useProducts';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';
import ProductGrid from '../components/product/ProductGrid';
import LuxuryButton from '../components/common/LuxuryButton';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Home() {
  const { t, language } = useLanguage();
  const { getFeaturedProducts, getCategories } = useProducts();
  const { getGeneralInquiryUrl } = useWhatsAppLink();

  const featuredProducts = getFeaturedProducts();
  const categories = getCategories(language);
  const generalWhatsAppUrl = getGeneralInquiryUrl();

  // Representative hero image from product data or fallback
  const heroImage = featuredProducts?.[0]?.image || 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200';
  const artisanStoryImage = 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200';

  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* 1. HERO SECTION (Asymmetric 12-Column Editorial) */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 pt-8 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          {/* Left Column: Extreme Type Scale & Spoken Cadence (Col 1-7) */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            {/* Overline with decorative architectural line */}
            <div className="flex items-center gap-4">
              <span className="h-px w-8 sm:w-12 bg-[#1A1A1A]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#6C6863] font-medium">
                {t.home.heroBadge} — Vol. 2026
              </span>
            </div>

            {/* Massive Dramatic Serif Headline with Mixed Italics & Gold */}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.75rem] font-normal text-[#1A1A1A] leading-[0.92] tracking-tight">
              Curated <br />
              <span className="italic text-[#D4AF37] font-normal">Handmade</span> <br />
              Excellence.
            </h1>

            {/* Subtitle with generous line height and warm grey */}
            <p className="text-base sm:text-lg text-[#6C6863] leading-relaxed max-w-xl font-light">
              {t.home.heroSubtitle}
            </p>

            {/* Hero Actions with Sliding Gold Layer & Secondary Outline */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <LuxuryButton to="/catalog" variant="primary" size="lg">
                <span>{t.home.browseCatalog}</span>
                <ArrowRight className="w-4 h-4 stroke-[1.5]" />
              </LuxuryButton>

              <LuxuryButton
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
              >
                <MessageCircle className="w-4 h-4 stroke-[1.5]" />
                <span>{t.home.askWhatsApp}</span>
              </LuxuryButton>
            </div>
          </div>

          {/* Right Column: Framed Editorial Photography with Vertical Label & Ultra-Slow Reveal (Col 8-12) */}
          <div className="lg:col-span-5 relative group">
            {/* Decorative Vertical Side Label */}
            <div className="absolute -left-7 top-6 hidden xl:block writing-vertical-rl text-[9px] uppercase tracking-[0.3em] text-[#6C6863] font-medium select-none pointer-events-none">
              Editorial / Edition 01
            </div>

            {/* Main Editorial Frame */}
            <div className="relative aspect-[3/4] bg-[#EBE5DE]/40 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1)] group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] transition-all duration-[1500ms] ease-luxury">
              {/* Inner framing shadow */}
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] pointer-events-none z-10" />

              <img
                src={heroImage}
                alt="Bless Handcrafted Artifact"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[1500ms] ease-luxury"
              />

              {/* Minimalist image tag */}
              <div className="absolute bottom-4 left-4 z-20 bg-[#F9F8F6]/90 backdrop-blur-sm px-3 py-1.5 border border-[#1A1A1A]/10 text-[9px] uppercase tracking-[0.25em] text-[#1A1A1A]">
                Archival Masterpiece
              </div>
            </div>
          </div>
        </div>

        {/* Value Pillars: 4 Architectural Columns with 1px top border */}
        <div className="mt-20 sm:mt-28 pt-10 sm:pt-14 border-t border-[#1A1A1A]/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium block">
              01 / Craftsmanship
            </span>
            <h4 className="font-serif text-base text-[#1A1A1A]">
              100% Authentic Handcraft
            </h4>
            <p className="text-xs text-[#6C6863] leading-relaxed font-light">
              Each artifact is patiently shaped by master Indonesian artisans preserving ancestral lineage.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium block">
              02 / Materiality
            </span>
            <h4 className="font-serif text-base text-[#1A1A1A]">
              Natural &amp; Ethically Sourced
            </h4>
            <p className="text-xs text-[#6C6863] leading-relaxed font-light">
              Selected organic fibers, sustainable timbers, and genuine textures designed to age gracefully.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium block">
              03 / Provenance
            </span>
            <h4 className="font-serif text-base text-[#1A1A1A]">
              Archival Protection &amp; Care
            </h4>
            <p className="text-xs text-[#6C6863] leading-relaxed font-light">
              Meticulously packaged with personalized handling and insured nationwide delivery.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CURATED TAXONOMY / CATEGORIES (Cards Defined By Lines) */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#1A1A1A]/15 pb-6 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium">
                {t.home.categoriesBadge}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1A1A] tracking-tight">
              The <span className="italic font-normal">Collections</span>
            </h2>
          </div>

          <LuxuryButton to="/catalog" variant="link">
            <span>{t.common.viewAll}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </LuxuryButton>
        </div>

        {/* Categories Grid with Grayscale slow reveal */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <Link
              key={cat.key}
              to={`/catalog?category=${encodeURIComponent(cat.key)}`}
              className="group flex flex-col justify-between border-t border-[#1A1A1A]/20 pt-5 space-y-4 hover:bg-[#F9F8F6]/80 transition-colors duration-700"
            >
              <div className="relative aspect-[4/5] bg-[#EBE5DE]/40 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)] group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-[1500ms]">
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] pointer-events-none z-10" />
                {cat.sampleImage ? (
                  <img
                    src={cat.sampleImage}
                    alt={cat.label}
                    loading="lazy"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[1500ms] ease-luxury"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs uppercase tracking-widest text-[#6C6863]">
                    {cat.label}
                  </div>
                )}
                <div className="absolute top-2 left-2 z-20 text-[9px] uppercase tracking-[0.2em] text-[#1A1A1A] bg-[#F9F8F6]/90 px-2 py-0.5">
                  0{idx + 1}
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <h3 className="font-serif text-base text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-500">
                  {cat.label}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#6C6863]">
                  ({cat.count.toString().padStart(2, '0')})
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. FEATURED ARTIFACTS SECTION */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#1A1A1A]/15 pb-6 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium">
                {t.home.featuredBadge}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1A1A] tracking-tight">
              Selected <span className="italic font-normal">Artifacts</span>
            </h2>
          </div>

          <LuxuryButton to="/catalog" variant="link">
            <span>{t.home.browseCatalog}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </LuxuryButton>
        </div>

        {/* Featured Products Grid */}
        <ProductGrid products={featuredProducts} />
      </section>

      {/* 4. EDITORIAL BRAND STORY (Drop Cap Storytelling & Asymmetric Layout) */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="border-t border-b border-[#1A1A1A]/20 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative with classic Drop Cap (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium">
                {t.home.brandStoryBadge}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1A1A] tracking-tight leading-tight">
              The Poetry of <br />
              <span className="italic font-normal">Patient Hands</span>
            </h2>

            <p className="editorial-drop-cap text-base sm:text-lg text-[#1A1A1A] leading-relaxed font-light">
              {t.home.brandStoryShort}
            </p>

            <p className="text-sm text-[#6C6863] leading-relaxed font-light">
              {language === 'en'
                ? 'In an age of instant mass reproduction, we celebrate the deliberate rhythm of artisan craft. Every curve, stitch, and weave is a testament to cultural memory, human intention, and timeless dignity.'
                : 'Di era reproduksi massal yang serba instan, kami merayakan ritme karya para pengrajin. Setiap lekuk, jahitan, dan anyaman merupakan bukti memori budaya, niat tulus manusia, dan keindahan abadi.'}
            </p>

            <div className="pt-4">
              <LuxuryButton to="/about" variant="secondary" size="default">
                <span>{t.home.readMoreAbout}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </LuxuryButton>
            </div>
          </div>

          {/* Artisan Vignette / Framed Portrait with Grayscale Hover (Col 8-12) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] bg-[#EBE5DE]/40 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.16)] transition-all duration-[1500ms]">
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] pointer-events-none z-10" />
              <img
                src={artisanStoryImage}
                alt="Artisan Craftsmanship"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[1500ms] ease-luxury"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#1A1A1A]/95 text-[#F9F8F6] space-y-1">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] block font-medium">
                  Atelier Heritage
                </span>
                <p className="font-serif text-sm italic text-[#EBE5DE]">
                  “We do not just make objects; we preserve the living dialogue of tradition.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRIVATE COMMISSIONS / WHATSAPP SALON CTA (Inverted Dark Section) */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="bg-[#1A1A1A] text-[#F9F8F6] p-12 sm:p-20 lg:p-24 relative overflow-hidden border border-[#1A1A1A] space-y-8 text-center sm:text-left">
          {/* Subtle gold accent divider */}
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] font-medium">
              Private Salon &amp; Bespoke
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F9F8F6] tracking-tight leading-tight">
                Private <span className="italic text-[#D4AF37] font-normal">Commissions</span> <br />
                &amp; Direct Inquiries.
              </h2>
              <p className="text-sm sm:text-base text-[#EBE5DE]/70 leading-relaxed font-light max-w-2xl">
                {t.home.whatsappCtaSubtitle}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-end gap-3">
              <LuxuryButton
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 stroke-[1.5]" />
                <span>{t.home.whatsappCtaButton}</span>
              </LuxuryButton>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#EBE5DE]/40">
                Direct Concierge via WhatsApp
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

