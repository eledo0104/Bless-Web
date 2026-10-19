import { siteConfig } from '../config/siteConfig';
import { formatPrice } from './formatPrice';

/**
 * Builds the WhatsApp pre-filled message text and wa.me URL
 * @param {Object} product
 * @param {string} language - 'id' | 'en'
 * @returns {string} Fully encoded wa.me URL
 */
export function buildWhatsAppLink(product, language = 'id') {
  const number = siteConfig.whatsappNumber;
  if (!product) {
    return `https://wa.me/${number}`;
  }

  const productName = product.name?.[language] || product.name?.id || product.name?.en || '';
  const formattedPrice = formatPrice(product.price);
  const baseUrl = siteConfig.siteUrl.replace(/\/+$/, '');
  const productUrl = `${baseUrl}/product/${product.id}`;

  let message = '';

  if (language === 'en') {
    message = `Hi, I'm interested in:\n\nProduct: ${productName}\nPrice: ${formattedPrice}\n\nProduct link:\n${productUrl}`;
  } else {
    message = `Halo, saya tertarik dengan:\n\nProduk: ${productName}\nHarga: ${formattedPrice}\n\nLink produk:\n${productUrl}`;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a generic WhatsApp message link for general inquiries
 * @param {string} language - 'id' | 'en'
 * @returns {string}
 */
export function buildGeneralWhatsAppLink(language = 'id') {
  const number = siteConfig.whatsappNumber;
  const message = language === 'en'
    ? "Hi, I would like to inquire about your handmade products."
    : "Halo, saya ingin bertanya tentang produk kerajinan tangan Anda.";

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
