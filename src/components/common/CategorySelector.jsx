import React from 'react';

export default function CategorySelector({
  categories = [],
  selectedCategory = 'all',
  onSelect,
  allLabel = 'All Collections',
  className = ''
}) {
  return (
    <div
      className={`flex items-center gap-6 sm:gap-8 overflow-x-auto pb-2 border-b border-[#1A1A1A]/10 scrollbar-none ${className}`}
      role="tablist"
      aria-label="Category filter"
    >
      <button
        type="button"
        role="tab"
        aria-selected={selectedCategory === 'all'}
        onClick={() => onSelect('all')}
        className={`pb-3 text-xs uppercase tracking-[0.22em] whitespace-nowrap transition-all duration-500 ease-luxury relative ${
          selectedCategory === 'all'
            ? 'text-[#1A1A1A] font-semibold after:content-[""] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#D4AF37]'
            : 'text-[#6C6863] hover:text-[#1A1A1A]'
        }`}
      >
        {allLabel}
      </button>

      {categories.map((cat) => {
        const isSelected = selectedCategory.toLowerCase() === cat.key.toLowerCase();
        return (
          <button
            key={cat.key}
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelect(cat.key)}
            className={`pb-3 text-xs uppercase tracking-[0.22em] whitespace-nowrap transition-all duration-500 ease-luxury relative ${
              isSelected
                ? 'text-[#1A1A1A] font-semibold after:content-[""] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#D4AF37]'
                : 'text-[#6C6863] hover:text-[#1A1A1A]'
            }`}
          >
            <span>{cat.label}</span>
            {typeof cat.count === 'number' && (
              <span className="ml-1.5 text-[10px] text-[#6C6863] font-normal">
                ({cat.count.toString().padStart(2, '0')})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

