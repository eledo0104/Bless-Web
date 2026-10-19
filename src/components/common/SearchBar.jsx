import React from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({
  value = '',
  onChange,
  onClear,
  placeholder = 'Search the collection...',
  className = ''
}) {
  return (
    <div className={`relative flex-1 ${className}`}>
      <Search
        className="w-4 h-4 text-[#6C6863] absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none stroke-[1.5]"
        aria-hidden="true"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full pl-7 pr-8 py-3 bg-transparent border-b border-[#1A1A1A]/30 focus:border-[#D4AF37] text-sm text-[#1A1A1A] placeholder:text-[#6C6863] placeholder:italic placeholder:font-serif focus:outline-none transition-colors duration-500 ease-luxury"
      />
      {value && (
        <button
          type="button"
          onClick={onClear}
          aria-label="Clear search"
          className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-[#6C6863] hover:text-[#1A1A1A] transition-colors"
        >
          <X className="w-4 h-4 stroke-[1.5]" />
        </button>
      )}
    </div>
  );
}

