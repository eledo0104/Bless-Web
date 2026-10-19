import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useProducts, getLocalizedValue, getLocalizedArray } from '../hooks/useProducts';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';
import { buildGeneralWhatsAppLink } from '../utils/buildWhatsAppMessage';
import { formatPrice } from '../utils/formatPrice';
import StockBadge from '../components/common/StockBadge';
import LuxuryButton from '../components/common/LuxuryButton';
import {
  ArrowLeft,
  MessageCircle,
  AlertCircle,
  BellRing,
} from 'lucide-react';

/* ─────────────────────────────────────────
   Architectural Spec row helper
───────────────────────────────────────── */
function SpecRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-[#1A1A1A]/10 text-xs">
      <span className="text-[10px] uppercase tracking-[0.25em] text-[#6C6863] font-medium">{label}</span>
      <span className="text-[#1A1A1A] font-light text-right">{value}</span>
    </div>
  );
}

/* ─────────────────────────────────────────
   Sold-Out Notice (Editorial Minimalist)
───────────────────────────────────────── */
function SoldOutBanner({ language, inquiryUrl }) {
  return (
    <div className="border border-[#1A1A1A]/20 bg-[#EBE5DE]/30 p-6 space-y-4">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[#6C6863] inline-block" />
        <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1A1A1A]">
          {language === 'id' ? 'Koleksi Arsip (Habis)' : 'Archival Piece (Currently Sold Out)'}
        </span>
      </div>
      <p className="text-xs text-[#6C6863] leading-relaxed font-light">
        {language === 'id'
          ? 'Karya ini sedang dalam antrean produksi atelier. Hubungi kami via WhatsApp untuk reservasi atau estimasi restok.'
          : 'This item is currently undergoing atelier recreation. Contact us via WhatsApp for reservation inquiries or bespoke commission.'}
      </p>
      <LuxuryButton
        href={inquiryUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        size="default"
        className="w-full"
      >
        <BellRing className="w-4 h-4 stroke-[1.5]" />
        <span>
          {language === 'id' ? 'Inkuiri Ketersediaan via WhatsApp' : 'Inquire on WhatsApp'}
        </span>
      </LuxuryButton>
    </div>
  );
}

/* ─────────────────────────────────────────
   In-Stock Order CTA
───────────────────────────────────────── */
function OrderButton({ language, orderUrl }) {
  return (
    <div className="space-y-3">
      <LuxuryButton
        href={orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
        size="lg"
        className="w-full"
      >
        <MessageCircle className="w-4 h-4 stroke-[1.5]" />
        <span>{language === 'id' ? 'Pesan Langsung via WhatsApp' : 'Order via WhatsApp Concierge'}</span>
      </LuxuryButton>
      <p className="text-[10px] uppercase tracking-[0.18em] text-[#6C6863] text-center leading-relaxed">
        {language === 'id'
          ? 'Terhubung langsung dengan concierge kami dengan detail spesifikasi otomatis.'
          : 'Direct private concierge connection with automated curation details.'}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────
   Not-Found fallback
───────────────────────────────────────── */
function ProductNotFound({ t, language }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-28 text-center space-y-6">
      <AlertCircle className="w-10 h-10 text-[#6C6863] mx-auto stroke-[1.5]" />
      <h1 className="font-serif text-3xl font-normal text-[#1A1A1A]">{t.common.productNotFound}</h1>
      <p className="text-[#6C6863] text-sm max-w-sm mx-auto leading-relaxed font-light">
        {language === 'en'
          ? 'The artifact you are seeking is not present in our active catalog archive.'
          : 'Karya yang Anda cari tidak tersedia dalam arsip katalog aktif kami.'}
      </p>
      <LuxuryButton to="/catalog" variant="secondary" size="default">
        <ArrowLeft className="w-4 h-4" />
        <span>{t.common.backToCatalog}</span>
      </LuxuryButton>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main Page
───────────────────────────────────────── */
export default function ProductDetail() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const { getProductById } = useProducts();
  const { getProductOrderUrl } = useWhatsAppLink();

  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!product) return <ProductNotFound t={t} language={language} />;

  const primaryImage = product.image || product.images?.[0] || '';
  const galleryImages = Array.isArray(product.images) && product.images.length > 1
    ? product.images
    : [primaryImage];
  const activeImage = selectedImage || primaryImage;

  const productName     = getLocalizedValue(product.name, language);
  const productCategory = getLocalizedValue(product.category, language);
  const productDesc     = getLocalizedValue(product.description, language);
  const productMaterial = getLocalizedValue(product.material, language);
  const productDims     = getLocalizedValue(product.dimensions, language);
  const tags            = getLocalizedArray(product.tags, language);

  const orderUrl   = getProductOrderUrl(product);
  const inquiryUrl = buildGeneralWhatsAppLink(language);

  return (
    <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-20 space-y-12">
      {/* Editorial Return Link */}
      <Link
        to="/catalog"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-medium text-[#6C6863] hover:text-[#D4AF37] transition-colors duration-300"
      >
        <ArrowLeft className="w-3.5 h-3.5 stroke-[1.5]" />
        <span>{t.common.backToCatalog}</span>
      </Link>

      {/* Main Asymmetrical Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* LEFT COLUMN — Gallery (Col 1-7) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Hero Image with Grayscale hover transition */}
          <div className="relative aspect-[3/4] sm:aspect-[4/5] bg-[#EBE5DE]/40 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] group">
            <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] pointer-events-none z-10" />
            <img
              src={activeImage}
              alt={productName}
              className={`w-full h-full object-contain p-8 sm:p-12 filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[1500ms] ease-luxury ${!product.stock ? 'opacity-60' : ''}`}
              loading="lazy"
            />
            {/* Stock badge */}
            <div className="absolute top-4 right-4 z-20">
              <StockBadge stock={product.stock} />
            </div>
          </div>

          {/* Thumbnails (0px border-radius, clean line borders) */}
          {galleryImages.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  aria-label={`${language === 'id' ? 'Tampilkan gambar' : 'Show image'} ${idx + 1}`}
                  className={`relative shrink-0 w-24 h-24 bg-[#EBE5DE]/40 overflow-hidden transition-all duration-300 ${
                    activeImage === img
                      ? 'border border-[#1A1A1A] opacity-100'
                      : 'border border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`View ${idx + 1}`}
                    className="w-full h-full object-contain p-2"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN — Curatorial Details & WhatsApp Concierge (Col 8-12) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Overline & Title */}
          <div className="space-y-3 border-b border-[#1A1A1A]/15 pb-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium">
                {productCategory}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1A1A] tracking-tight leading-tight">
              {productName}
            </h1>

            {/* Price */}
            <div className="pt-2 text-2xl sm:text-3xl font-light text-[#1A1A1A] tracking-wide">
              {formatPrice(product.price)}
            </div>
          </div>

          {/* Description with Classic Drop Cap */}
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6C6863] font-medium block">
              Curatorial Notes
            </span>
            <p className="editorial-drop-cap text-sm sm:text-base text-[#1A1A1A] leading-relaxed font-light">
              {productDesc}
            </p>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 border border-[#1A1A1A]/15 text-[10px] uppercase tracking-[0.2em] text-[#6C6863] bg-transparent"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Specifications Table */}
          <div className="border-t border-[#1A1A1A]/15 pt-4 space-y-1">
            <SpecRow label={t.common.material} value={productMaterial} />
            <SpecRow label={t.common.dimensions} value={productDims} />
            <SpecRow label={t.common.category} value={productCategory} />
          </div>

          {/* WhatsApp Action Area */}
          <div className="pt-4">
            {product.stock ? (
              <OrderButton language={language} orderUrl={orderUrl} />
            ) : (
              <SoldOutBanner language={language} inquiryUrl={inquiryUrl} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


