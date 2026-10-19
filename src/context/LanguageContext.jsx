import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

export const LanguageContext = createContext();

export const translations = {
  id: {
    nav: {
      home: "Beranda",
      catalog: "Katalog",
      about: "Tentang Kami",
      contact: "Kontak"
    },
    common: {
      searchPlaceholder: "Cari produk atau kategori...",
      allCategories: "Semua Kategori",
      inStock: "Tersedia",
      soldOut: "Habis",
      orderWhatsApp: "Pesan via WhatsApp",
      contactSeller: "Hubungi Penjual",
      viewDetails: "Lihat Detail",
      price: "Harga",
      material: "Bahan",
      dimensions: "Dimensi",
      category: "Kategori",
      backToCatalog: "Kembali ke Katalog",
      productNotFound: "Produk tidak ditemukan",
      pageNotFound: "Halaman tidak ditemukan",
      currency: "Rp",
      viewAll: "Lihat Semua"
    },
    home: {
      heroBadge: "Karya Tangan Bernilai Seni",
      heroTitle: "Kerajinan Tangan Penuh Cerita & Kehangatan",
      heroSubtitle: "Temukan koleksi aksesoris handmade autentik yang dirangkai teliti oleh pengrajin lokal dari material alami pilihan.",
      browseCatalog: "Jelajahi Katalog",
      askWhatsApp: "Tanya via WhatsApp",
      featuredBadge: "Pilihan Kurator",
      featuredTitle: "Produk Pilihan",
      featuredSubtitle: "Karya terfavorit pilihan pelanggan yang siap melengkapi gaya harian Anda.",
      categoriesBadge: "Eksplorasi Karya",
      categoriesTitle: "Kategori Produk",
      categoriesSubtitle: "Telusuri aneka ragam perhiasan dan aksesoris kerajinan tangan kami.",
      brandStoryBadge: "Filosofi Kami",
      brandStoryTitle: "Cerita di Balik Setiap Karya",
      brandStoryShort: "Kami menghubungkan dedikasi dan keterampilan tangan pengrajin lokal dengan para pencinta karya buatan tangan yang unik, ramah lingkungan, dan bernilai abadi.",
      readMoreAbout: "Pelajari Kisah Kami",
      whatsappCtaBadge: "Pelayanan Personal",
      whatsappCtaTitle: "Tertarik dengan Koleksi Kami atau Mau Tanya Ukuran?",
      whatsappCtaSubtitle: "Kami siap melayani Anda secara langsung via WhatsApp untuk pertanyaan stok, detail produk, atau pemesanan khusus.",
      whatsappCtaButton: "Hubungi Kami di WhatsApp",
      itemsCount: "karya"
    },
    catalog: {
      title: "Katalog Produk",
      subtitle: "Jelajahi seluruh karya buatan tangan kami. Klik produk untuk informasi detail dan pemesanan.",
      noResults: "Tidak ada produk yang cocok dengan pencarian Anda."
    },
    about: {
      title: "Tentang Bless",
      subtitle: "Kisah di Balik Setiap Karya",
      brandSectionTitle: "Perjalanan Kami",
      brandText: "Bless lahir dari kecintaan mendalam terhadap seni kriya tradisional Indonesia. Setiap karya merupakan perpaduan antara ketelitian tangan, material alami pilihan, dan desain kontemporer yang abadi.",
      artisanSectionTitle: "Dedikasi Pengrajin",
      artisanText: "Koleksi kami diciptakan bersama para pengrajin lokal berbakat yang mewarisi teknik anyam dan ukir turun-temurun dengan penuh cinta dan ketelatenan."
    },
    contact: {
      title: "Hubungi Kami",
      subtitle: "Punya pertanyaan seputar produk atau pesanan khusus? Kami siap membantu Anda.",
      whatsappDirect: "Chat via WhatsApp",
      whatsappDesc: "Respon cepat untuk tanya stok, detail produk, atau pemesanan.",
      instagramDesc: "Ikuti perkembangan karya dan katalog terbaru kami.",
      responseNote: "Jam operasional: Setiap hari, 09.00 - 18.00 WIB"
    },
    waMessage: {
      greeting: "Halo, saya tertarik dengan:",
      productLabel: "Produk",
      priceLabel: "Harga",
      linkLabel: "Link produk"
    }
  },
  en: {
    nav: {
      home: "Home",
      catalog: "Catalog",
      about: "About Us",
      contact: "Contact"
    },
    common: {
      searchPlaceholder: "Search products or categories...",
      allCategories: "All Categories",
      inStock: "In Stock",
      soldOut: "Sold Out",
      orderWhatsApp: "Order via WhatsApp",
      contactSeller: "Contact Seller",
      viewDetails: "View Details",
      price: "Price",
      material: "Material",
      dimensions: "Dimensions",
      category: "Category",
      backToCatalog: "Back to Catalog",
      productNotFound: "Product not found",
      pageNotFound: "Page not found",
      currency: "Rp",
      viewAll: "View All"
    },
    home: {
      heroBadge: "Artisan Craftsmanship",
      heroTitle: "Handcrafted with Warmth & Soul",
      heroSubtitle: "Discover authentic handmade accessories thoughtfully created by local artisans using selected natural materials.",
      browseCatalog: "Browse Catalog",
      askWhatsApp: "Ask via WhatsApp",
      featuredBadge: "Curated Selection",
      featuredTitle: "Featured Products",
      featuredSubtitle: "Customer-favorite handcrafted pieces ready to elevate your everyday style.",
      categoriesBadge: "Explore Collections",
      categoriesTitle: "Product Categories",
      categoriesSubtitle: "Discover our diverse collection of handmade jewelry and artisanal accessories.",
      brandStoryBadge: "Our Philosophy",
      brandStoryTitle: "The Story Behind Each Piece",
      brandStoryShort: "We bridge the dedication and craftsmanship of local artisans with lovers of unique, eco-conscious, and soulful handmade creations.",
      readMoreAbout: "Read Our Story",
      whatsappCtaBadge: "Personal Assistance",
      whatsappCtaTitle: "Interested in Our Pieces or Looking for Custom Sizing?",
      whatsappCtaSubtitle: "We are glad to assist you directly via WhatsApp for stock questions, custom sizing, or placing orders.",
      whatsappCtaButton: "Connect with Us on WhatsApp",
      itemsCount: "items"
    },
    catalog: {
      title: "Product Catalog",
      subtitle: "Explore our complete collection of handmade goods. Click any item for details and ordering.",
      noResults: "No products matched your search."
    },
    about: {
      title: "About Bless",
      subtitle: "The Story Behind Each Craft",
      brandSectionTitle: "Our Journey",
      brandText: "Bless was born from a deep appreciation for authentic craftsmanship. Each piece brings together handcrafted precision, natural materials, and timeless contemporary design.",
      artisanSectionTitle: "Artisan Dedication",
      artisanText: "Our collections are crafted alongside talented local artisans who preserve traditional weaving and carving techniques with love and meticulous care."
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Have questions about our pieces or custom requests? We are happy to assist.",
      whatsappDirect: "Chat on WhatsApp",
      whatsappDesc: "Quick response for stock inquiries, product details, or orders.",
      instagramDesc: "Follow our creative process and newest catalog arrivals.",
      responseNote: "Operational hours: Daily, 09:00 - 18:00 (GMT+7)"
    },
    waMessage: {
      greeting: "Hi, I'm interested in:",
      productLabel: "Product",
      priceLabel: "Price",
      linkLabel: "Product link"
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('bless_lang') || siteConfig.defaultLanguage || 'id';
  });

  useEffect(() => {
    localStorage.setItem('bless_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'id' ? 'en' : 'id'));
  };

  const t = translations[language] || translations.id;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
