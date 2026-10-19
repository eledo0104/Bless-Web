import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedValue } from '../../hooks/useProducts';
import { formatPrice } from '../../utils/formatPrice';
import StockBadge from '../common/StockBadge';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  const { t, language } = useLanguage();

  if (!product) return null;

  const productName = getLocalizedValue(product.name, language);
  const productCategory = getLocalizedValue(product.category, language);
  const productDescription = getLocalizedValue(product.description, language);
  const productImage = product.image || product.images?.[0] || '';

  return (
    <Link
      to={`/product/${product.id}`}
      aria-label={`${productName} - ${productCategory} - ${formatPrice(product.price)}`}
      className="group flex flex-col justify-between bg-transparent border-t border-[#1A1A1A]/20 pt-6 pb-6 hover:bg-[#F9F8F6]/60 transition-all duration-700 ease-luxury relative"
    >
      {/* Product Image Frame */}
      <div className="relative aspect-[3/4] sm:aspect-square bg-[#EBE5DE]/40 overflow-hidden flex items-center justify-center p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-shadow duration-700">
        {/* Inner border frame */}
        <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] pointer-events-none z-10" />

        <img
          src={productImage}
          alt={productName}
          loading="lazy"
          className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[1500ms] ease-luxury"
        />

        {/* Stock Badge Overlay */}
        <div className="absolute top-3 right-3 z-20">
          <StockBadge stock={product.stock} />
        </div>
      </div>

      {/* Product Information */}
      <div className="pt-5 flex flex-col justify-between flex-grow space-y-3">
        <div className="space-y-1.5">
          <span className="text-[10px] font-medium text-[#6C6863] uppercase tracking-[0.25em] block">
            {productCategory}
          </span>
          <h3 className="font-serif text-base sm:text-lg text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-500 line-clamp-1">
            {productName}
          </h3>
          <p className="text-xs text-[#6C6863] line-clamp-2 leading-relaxed font-light">
            {productDescription}
          </p>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-[#1A1A1A]/10 flex items-center justify-between">
          <span className="text-sm font-medium text-[#1A1A1A]">
            {formatPrice(product.price)}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-500">
            <span>{t.common.viewDetails}</span>
            <ArrowRight className="w-3 h-3 stroke-[1.5]" />
          </span>
        </div>
      </div>
    </Link>
  );
}

