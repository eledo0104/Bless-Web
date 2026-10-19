import { useLanguage } from '../context/LanguageContext';
import { buildWhatsAppLink, buildGeneralWhatsAppLink } from '../utils/buildWhatsAppMessage';

/**
 * Hook to generate contextual WhatsApp URLs
 */
export function useWhatsAppLink() {
  const { language } = useLanguage();

  const getProductOrderUrl = (product) => {
    return buildWhatsAppLink(product, language);
  };

  const getGeneralInquiryUrl = () => {
    return buildGeneralWhatsAppLink(language);
  };

  return {
    getProductOrderUrl,
    getGeneralInquiryUrl
  };
}
