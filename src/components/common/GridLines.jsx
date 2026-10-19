import React from 'react';

/**
 * 4 Visible Vertical Gridlines spanning full viewport height.
 * Aligned with standard 12-column editorial magazine boundaries.
 * Pointer-events disabled.
 */
export default function GridLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16" aria-hidden="true">
      <div className="w-full h-full grid grid-cols-4 sm:grid-cols-4 md:grid-cols-12 gap-6 lg:gap-8 border-x border-[#1A1A1A]/[0.06]">
        <div className="hidden md:block col-start-4 w-px h-full bg-[#1A1A1A]/[0.06]" />
        <div className="hidden md:block col-start-7 w-px h-full bg-[#1A1A1A]/[0.06]" />
        <div className="hidden md:block col-start-10 w-px h-full bg-[#1A1A1A]/[0.06]" />
      </div>
    </div>
  );
}
