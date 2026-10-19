import React from 'react';
import Header from './Header';
import Footer from './Footer';
import GridLines from '../common/GridLines';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F6] text-[#1A1A1A] relative selection:bg-[#EBE5DE] selection:text-[#1A1A1A]">
      {/* Paper noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none paper-grain-overlay z-50 opacity-40" aria-hidden="true" />
      
      {/* 4 Architectural vertical gridlines */}
      <GridLines />

      <Header />
      <main className="flex-grow relative z-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}

