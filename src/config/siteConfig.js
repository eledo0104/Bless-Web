export const siteConfig = {
  brandName: "Bless Handicraft",
  tagline: {
    id: "Koleksi Aksesoris & Kerajinan Handmade",
    en: "Handmade Accessories & Handicraft Collection"
  },
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "628980492606",
  siteUrl: import.meta.env.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : "http://localhost:5173"),
  instagramUrl: "https://instagram.com",
  defaultLanguage: "id"
};
