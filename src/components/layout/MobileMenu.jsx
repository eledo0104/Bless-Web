import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import LanguageToggle from '../common/LanguageToggle';
import InstagramIcon from '../common/InstagramIcon';
import LuxuryButton from '../common/LuxuryButton';
import { X, MessageCircle, ArrowRight } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose }) {
  const { t, language } = useLanguage();

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/catalog', label: t.nav.catalog },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ];

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-between" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1A1A1A]/70 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="relative z-10 bg-[#F9F8F6] border-b border-[#1A1A1A] shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto">
        {/* Top Header inside Drawer */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-[#1A1A1A]/10">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-normal tracking-tight text-[#1A1A1A]">
              {siteConfig.brandName}
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#6C6863]">
              Atelier &amp; Catalog
            </span>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 text-[#1A1A1A] hover:text-[#D4AF37] transition-colors"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-6 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-4 border-b border-[#1A1A1A]/5 text-xs uppercase tracking-[0.22em] font-medium transition-colors ${
                  isActive
                    ? 'text-[#1A1A1A] border-b border-[#D4AF37] font-semibold'
                    : 'text-[#6C6863] hover:text-[#1A1A1A]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>
                  {isActive && <ArrowRight className="w-4 h-4 text-[#D4AF37] stroke-[1.5]" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* WhatsApp & Social Actions */}
        <div className="p-6 border-t border-[#1A1A1A]/10 space-y-4 bg-[#EBE5DE]/30">
          <LuxuryButton
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            variant="primary"
            className="w-full"
          >
            <MessageCircle className="w-4 h-4 stroke-[1.5]" />
            <span>{t.contact.whatsappDirect}</span>
          </LuxuryButton>

          <div className="flex items-center justify-between pt-2 text-[10px] uppercase tracking-[0.2em] text-[#6C6863]">
            <span>{siteConfig.tagline[language]}</span>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#6C6863] hover:text-[#1A1A1A] transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

