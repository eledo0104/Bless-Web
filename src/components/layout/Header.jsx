import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import LanguageToggle from '../common/LanguageToggle';
import MobileMenu from './MobileMenu';
import LuxuryButton from '../common/LuxuryButton';
import { Menu, MessageCircle } from 'lucide-react';

export default function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/catalog', label: t.nav.catalog },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#F9F8F6]/95 backdrop-blur-md border-b border-[#1A1A1A]/10 transition-colors">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo / Brand Area */}
            <Link
              to="/"
              className="flex flex-col group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1A1A1A]"
            >
              <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-500 leading-none">
                {siteConfig.brandName}
              </span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#6C6863] font-medium mt-1">
                Atelier &amp; Catalog
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-12" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-[0.22em] font-medium transition-colors duration-500 ease-luxury py-2 relative ${
                      isActive
                        ? 'text-[#1A1A1A] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#D4AF37]'
                        : 'text-[#6C6863] hover:text-[#D4AF37]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Actions: Language Switch, WhatsApp Button, Mobile Menu Button */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Language Switch */}
              <LanguageToggle />

              {/* WhatsApp Quick Chat with sliding gold effect */}
              <div className="hidden sm:block">
                <LuxuryButton
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="primary"
                >
                  <MessageCircle className="w-3.5 h-3.5 stroke-[1.5]" />
                  <span>Inquire</span>
                </LuxuryButton>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile menu"
                aria-expanded={mobileMenuOpen}
                className="md:hidden p-2 text-[#1A1A1A] hover:text-[#D4AF37] focus:outline-none transition-colors duration-300"
              >
                <Menu className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dedicated Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

