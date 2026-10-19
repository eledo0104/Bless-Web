import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import LuxuryButton from '../components/common/LuxuryButton';
import { MessageCircle, Clock, ArrowRight } from 'lucide-react';
import InstagramIcon from '../components/common/InstagramIcon';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-24 space-y-16 lg:space-y-24">
      {/* Editorial Header */}
      <div className="border-b border-[#1A1A1A]/15 pb-8 sm:pb-12 space-y-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#D4AF37]" />
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] font-medium">
            Salon Concierge &amp; Inquiries
          </span>
        </div>
        <div className="max-w-2xl space-y-3">
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1A1A1A] tracking-tight leading-tight">
            Direct <span className="italic font-normal text-[#D4AF37]">Dialogue</span>
          </h1>
          <p className="text-base sm:text-lg text-[#6C6863] font-light leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
      </div>

      {/* Concierge Channels: 12-Column Grid Defined by Lines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* WhatsApp Private Salon */}
        <div className="border-t border-[#1A1A1A]/20 pt-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium">
                01 / Primary Channel
              </span>
              <MessageCircle className="w-5 h-5 text-[#1A1A1A] stroke-[1.5]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A]">
              WhatsApp Concierge
            </h2>
            <p className="text-sm text-[#6C6863] leading-relaxed font-light">
              {t.contact.whatsappDesc}
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-[#1A1A1A] font-medium">
              +{siteConfig.whatsappNumber}
            </p>
          </div>

          <div className="pt-4">
            <LuxuryButton
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 stroke-[1.5]" />
              <span>Connect on WhatsApp</span>
            </LuxuryButton>
          </div>
        </div>

        {/* Instagram Visual Gallery & Salon */}
        <div className="border-t border-[#1A1A1A]/20 pt-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium">
                02 / Social Atelier
              </span>
              <InstagramIcon className="w-5 h-5 text-[#1A1A1A]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A]">
              Instagram Chronicle
            </h2>
            <p className="text-sm text-[#6C6863] leading-relaxed font-light">
              {t.contact.instagramDesc}
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-[#1A1A1A] font-medium">
              @bless.handicraft
            </p>
          </div>

          <div className="pt-4">
            <LuxuryButton
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <span>Visit Instagram</span>
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </LuxuryButton>
          </div>
        </div>
      </div>

      {/* Operational Response Note (Editorial Callout) */}
      <div className="border-t border-[#1A1A1A]/15 pt-8 flex items-start sm:items-center gap-4 text-xs text-[#6C6863] font-light">
        <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 sm:mt-0 stroke-[1.5]" />
        <p className="leading-relaxed">
          <strong className="font-medium text-[#1A1A1A] uppercase tracking-wider text-[11px] mr-1">Concierge Hours:</strong>
          {t.contact.responseNote}
        </p>
      </div>
    </div>
  );
}

