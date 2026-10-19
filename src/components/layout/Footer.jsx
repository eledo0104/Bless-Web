import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import LuxuryButton from '../common/LuxuryButton';
import InstagramIcon from '../common/InstagramIcon';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#F9F8F6] border-t border-[#1A1A1A] mt-auto relative z-20">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Info & Philosophy (Col 1-5) */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block group focus:outline-none">
              <span className="font-serif text-3xl sm:text-4xl font-normal text-[#F9F8F6] tracking-tight group-hover:text-[#D4AF37] transition-colors duration-500">
                {siteConfig.brandName}
              </span>
              <span className="block text-[9px] uppercase tracking-[0.3em] text-[#EBE5DE]/60 mt-1">
                Atelier of Curated Craft
              </span>
            </Link>

            <div className="w-12 h-px bg-[#D4AF37]" />

            <p className="text-sm text-[#EBE5DE]/80 leading-relaxed max-w-sm font-light">
              {siteConfig.tagline[language]}
            </p>
            <p className="text-xs text-[#EBE5DE]/50 leading-relaxed max-w-sm">
              {language === 'en'
                ? 'Carefully crafted handmade goods celebrating traditional craftsmanship, natural materials, and authentic local artisans.'
                : 'Karya kerajinan tangan bernilai seni tinggi yang merayakan tradisi lokal, material alami, dan dedikasi pengrajin autentik.'}
            </p>
          </div>

          {/* Quick Navigation (Col 6-8) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
              {language === 'en' ? 'Navigation' : 'Navigasi'}
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-[0.2em]">
              <li>
                <Link to="/" className="text-[#EBE5DE]/70 hover:text-[#D4AF37] transition-colors duration-300">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-[#EBE5DE]/70 hover:text-[#D4AF37] transition-colors duration-300">
                  {t.nav.catalog}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#EBE5DE]/70 hover:text-[#D4AF37] transition-colors duration-300">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#EBE5DE]/70 hover:text-[#D4AF37] transition-colors duration-300">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial Inquiries & Newsletter (Col 9-12) */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
              {language === 'en' ? 'Private Salon & Inquiries' : 'Inkuiri & Salon Privat'}
            </h4>
            
            <p className="text-xs text-[#EBE5DE]/70 leading-relaxed font-light">
              {language === 'en'
                ? 'Join our private salon circle for limited edition archival releases and bespoke commissions.'
                : 'Bergabunglah dengan salon privat kami untuk rilis arsip edisi terbatas dan pesanan khusus.'}
            </p>

            {/* Underline-only Newsletter Form */}
            {subscribed ? (
              <p className="text-xs text-[#D4AF37] italic font-serif py-3">
                {language === 'en' ? '✓ Thank you for subscribing to our private salon.' : '✓ Terima kasih telah bergabung dengan salon privat kami.'}
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'en' ? 'Enter your email address...' : 'Masukkan alamat email Anda...'}
                    className="w-full bg-transparent border-b border-[#F9F8F6]/20 focus:border-[#D4AF37] py-2.5 text-xs text-[#F9F8F6] placeholder:text-[#6C6863] placeholder:italic placeholder:font-serif focus:outline-none transition-colors duration-300"
                  />
                </div>
                <LuxuryButton type="submit" variant="outline-white" size="sm">
                  <span>{language === 'en' ? 'Subscribe' : 'Berlangganan'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </LuxuryButton>
              </form>
            )}

            {/* Direct Connect */}
            <div className="pt-2 flex items-center gap-6 text-xs tracking-[0.2em] uppercase">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#EBE5DE]/80 hover:text-[#D4AF37] transition-colors"
              >
                <MessageCircle className="w-4 h-4 stroke-[1.5]" />
                <span>WhatsApp</span>
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#EBE5DE]/80 hover:text-[#D4AF37] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F9F8F6]/10 mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-[#EBE5DE]/50 tracking-[0.15em] uppercase gap-4">
          <p>© {CURRENT_YEAR} {siteConfig.brandName}. All rights reserved.</p>
          <p className="text-[#EBE5DE]/40">
            {language === 'en'
              ? 'Editorial Catalog & Curated Artifacts'
              : 'Katalog Editorial & Artefak Terpilih'}
          </p>
        </div>
      </div>
    </footer>
  );
}

