import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useProducts } from '../hooks/useProducts';
import { filterProducts } from '../utils/filterProducts';
import ProductGrid from '../components/product/ProductGrid';
import CategorySelector from '../components/common/CategorySelector';
import SearchBar from '../components/common/SearchBar';
import LuxuryButton from '../components/common/LuxuryButton';

export default function Catalog() {
  const { t, language } = useLanguage();
  const { products, getCategories } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState('');

  // Derived selectedCategory directly from URL param
  const selectedCategory = searchParams.get('category') || 'all';
  const categories = getCategories(language);

  const handleCategorySelect = (catKey) => {
    const next = new URLSearchParams(searchParams);
    if (catKey === 'all') {
      next.delete('category');
    } else {
      next.set('category', catKey);
    }
    setSearchParams(next);
  };

  const filteredProducts = filterProducts(products, {
    query: searchQuery,
    selectedCategory,
    language
  });

  const hasActiveFilters = searchQuery.trim() !== '' || selectedCategory !== 'all';

  return (
    <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-20 space-y-12 sm:space-y-16">
      {/* Editorial Page Masthead */}
      <div className="border-b border-[#1A1A1A]/15 pb-8 sm:pb-12 space-y-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#D4AF37]" />
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] font-medium">
            Atelier Catalog &amp; Archive
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1A1A1A] tracking-tight">
              Curated <span className="italic font-normal">Catalog</span>
            </h1>
            <p className="text-[#6C6863] text-sm sm:text-base font-light max-w-xl">
              {t.catalog.subtitle}
            </p>
          </div>

          {/* Result count indicator */}
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#6C6863]">
            {language === 'id'
              ? `Indeks / ${filteredProducts.length} Karya Ditemukan`
              : `Index / ${filteredProducts.length} Artifact${filteredProducts.length !== 1 ? 's' : ''}`}
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-6 items-stretch md:items-end justify-between">
          {/* Underline Search Input */}
          <div className="w-full md:w-96">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
              placeholder={t.common.searchPlaceholder}
            />
          </div>

          {/* Reset Action if active */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={() => { setSearchQuery(''); handleCategorySelect('all'); }}
              className="text-xs uppercase tracking-[0.2em] font-medium text-[#D4AF37] hover:text-[#1A1A1A] transition-colors self-start md:self-auto border-b border-[#D4AF37] pb-0.5"
            >
              {language === 'id' ? 'Reset Filter' : 'Reset Filters'}
            </button>
          )}
        </div>

        {/* Category Horizontal Tabline */}
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={handleCategorySelect}
          allLabel={t.common.allCategories}
        />
      </div>

      {/* Products Grid or Editorial Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-24 border-t border-b border-[#1A1A1A]/10 space-y-6">
          <p className="font-serif text-2xl text-[#1A1A1A] italic">
            {t.catalog.noResults}
          </p>
          <p className="text-xs text-[#6C6863] max-w-md mx-auto uppercase tracking-wider">
            {language === 'id'
              ? 'Silakan coba kata kunci lain atau pilih kategori koleksi yang berbeda.'
              : 'Try searching with another keyword or explore a different category.'}
          </p>
          {hasActiveFilters && (
            <div className="pt-2">
              <LuxuryButton
                variant="secondary"
                size="sm"
                onClick={() => { setSearchQuery(''); handleCategorySelect('all'); }}
              >
                <span>{language === 'id' ? 'Kembalikan Semua Koleksi' : 'Restore All Collections'}</span>
              </LuxuryButton>
            </div>
          )}
        </div>
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </div>
  );
}

