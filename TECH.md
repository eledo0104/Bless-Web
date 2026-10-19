# Technical Architecture Document (TECH.md)
## Handicraft & Accessories Online Catalog

**Version:** 2.0  
**Status:** MVP  
**Last Updated:** October 14, 2026

> This document is the technical implementation companion to **PRD v2.0**.  
> The PRD is the source of truth for product requirements and MVP scope.  
> This document defines how those requirements should be implemented.

---

## 1. Technical Goals

The MVP must remain simple and directly support the core flow:

**Browse → Product Detail → WhatsApp**

Technical priorities:

- simple architecture,
- low hosting and maintenance cost,
- responsive mobile-first UI,
- fast page loading,
- JSON-based product data,
- Indonesian / English support,
- sold-out products remain visible,
- simple name + category search,
- one WhatsApp number,
- no custom backend or database.

Features outside the PRD MVP scope must not be added unless explicitly approved.

---

## 2. Technology Stack

### 2.1 Frontend

| Layer | Choice | Notes |
|---|---|---|
| Framework | **React** | Required by PRD |
| Build tool | **Vite** | Fast local development and production builds |
| Routing | **React Router** | Home, Catalog, Product Detail, About, Contact |
| Styling | **Tailwind CSS** | Simple responsive styling |
| Icons | **lucide-react** | Optional, lightweight icon set |
| State | React state / Context only when needed | No Redux required |
| Language | Simple React language state/context | Indonesian + English |
| Data | Static JSON | Required for MVP |
| Order handoff | WhatsApp `wa.me` | No payment or checkout |

### 2.2 Deliberately Not Required

The MVP does **not** require:

- Redux,
- Zustand,
- backend API,
- database,
- authentication,
- CMS,
- shopping cart,
- payment gateway,
- checkout system,
- admin dashboard,
- order management system.

---

## 3. Architecture

The application is a static React SPA.

```text
                    ┌─────────────────────┐
                    │       Browser       │
                    │                     │
                    │   React + Vite      │
                    │         │           │
                    │    React Router     │
                    │         │           │
                    │  Pages / Components │
                    └─────────┬───────────┘
                              │
              ┌───────────────┼────────────────┐
              │                                │
              ▼                                ▼
       Static JSON Data                 WhatsApp `wa.me`
       products.json                    pre-filled message
              │                                │
              ▼                                ▼
       Product Catalog                  Seller / WhatsApp
```

There is no custom backend for the MVP.

Product data is bundled with the frontend and read from JSON.

---

## 4. Project Structure

Recommended structure:

```text
handicraft-shop/
├── public/
│   ├── images/
│   │   ├── products/
│   │   └── artisans/
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   └── ...
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── MobileMenu.jsx
│   │   │
│   │   ├── product/
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── ProductGallery.jsx
│   │   │   └── WhatsAppButton.jsx
│   │   │
│   │   └── common/
│   │       ├── SearchBar.jsx
│   │       ├── CategorySelector.jsx
│   │       ├── LanguageToggle.jsx
│   │       ├── StockBadge.jsx
│   │       └── NotFoundState.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Catalog.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   ├── data/
│   │   └── products.json
│   │
│   ├── hooks/
│   │   ├── useProducts.js
│   │   ├── useLanguage.js
│   │   └── useWhatsAppLink.js
│   │
│   ├── utils/
│   │   ├── formatPrice.js
│   │   ├── filterProducts.js
│   │   └── buildWhatsAppMessage.js
│   │
│   ├── config/
│   │   └── siteConfig.js
│   │
│   ├── context/
│   │   └── LanguageContext.jsx
│   │
│   ├── router/
│   │   └── AppRouter.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

The structure should not introduce folders or abstractions that are not needed by the MVP.

---

## 5. Product Data

Product data must be stored in JSON.

### 5.1 Required Fields

Each product must contain:

- `id`
- `name`
- `category`
- `price`
- `description`
- `material`
- `dimensions`
- `image`
- `stock`

### 5.2 Recommended JSON Shape

The PRD requires bilingual text fields. Use this structure:

```json
{
  "id": "001",
  "name": {
    "id": "Kalung Rotan",
    "en": "Rattan Necklace"
  },
  "category": {
    "id": "Kalung",
    "en": "Necklace"
  },
  "price": 85000,
  "description": {
    "id": "Kalung handmade dari rotan.",
    "en": "Handmade necklace made from rattan."
  },
  "material": "Rattan",
  "dimensions": "45 cm",
  "image": "/images/products/rattan-necklace.jpg",
  "stock": true
}
```

### 5.3 Stock

Use a simple boolean:

```json
"stock": true
```

or

```json
"stock": false
```

Map it to the UI:

| JSON | Indonesian | English |
|---|---|---|
| `true` | Tersedia | In Stock |
| `false` | Habis | Sold Out |

Sold-out products **must remain visible**.

Do not filter them out of the catalog.

---

## 6. Product Card

Every product card should show:

1. product image,
2. product name,
3. category,
4. price,
5. stock status.

For a sold-out product:

- keep the card visible,
- show the sold-out status clearly,
- do not provide an active order CTA.

The product can still be opened to view its details.

---

## 7. Search and Category

Search is intentionally simple.

Supported search fields:

- product name,
- category.

Search should be case-insensitive.

Example:

```text
User enters: necklace

↓
Search product name
Search category
↓
Show matching products
```

The MVP does not implement:

- price filters,
- material filters,
- advanced sorting,
- multi-filter systems,
- complex search ranking.

Category selection should filter the catalog by the selected category.

---

## 8. Routing

Recommended routes:

| Route | Page |
|---|---|
| `/` | Home |
| `/catalog` | Catalog |
| `/product/:id` | Product Detail |
| `/about` | About |
| `/contact` | Contact |

Unknown routes should display a simple `NotFound` page.

Product IDs should be used as stable identifiers.

---

## 9. Product Detail

The Product Detail page must display:

- product image,
- product name,
- price,
- description,
- material,
- dimensions,
- stock status,
- artisan information if available,
- WhatsApp CTA when available.

### Available Product

Display:

**Order via WhatsApp**

### Sold Out Product

Display:

**Sold Out**

The sold-out product remains accessible and viewable.

---

## 10. WhatsApp Integration

The MVP uses one seller WhatsApp number.

Recommended configuration:

```javascript
export const siteConfig = {
  whatsappNumber: "62812xxxxxxx"
};
```

The number must use the international format without `+`, spaces, or punctuation.

Example:

```text
62812xxxxxxx
```

### 10.1 WhatsApp URL

Use:

```text
https://wa.me/<number>?text=<url-encoded-message>
```

### 10.2 Message

English:

```text
Hi, I'm interested in:

Product: Rattan Necklace
Price: Rp85.000

Product link:
https://example.com/product/001
```

Indonesian:

```text
Halo, saya tertarik dengan:

Produk: Kalung Rotan
Harga: Rp85.000

Link produk:
https://example.com/product/001
```

The message language should follow the currently selected website language.

The website only redirects the customer to WhatsApp.

Payment, order confirmation, and further communication remain outside the website.

---

## 11. Language System

Supported languages:

```text
id
en
```

Recommended default:

```text
id
```

unless the project owner specifies another default.

Language state can be handled with a small React Context.

Example:

```javascript
const translations = {
  id: {
    catalog: "Katalog",
    inStock: "Tersedia",
    soldOut: "Habis",
    orderWhatsApp: "Pesan via WhatsApp"
  },
  en: {
    catalog: "Catalog",
    inStock: "In Stock",
    soldOut: "Sold Out",
    orderWhatsApp: "Order via WhatsApp"
  }
};
```

The language toggle should update:

- navigation,
- buttons,
- labels,
- stock status,
- general page content,
- About,
- Contact,
- product content where bilingual data exists,
- WhatsApp message.

---

## 12. Page Implementation

### 12.1 Home

Components:

- Header
- Hero
- Featured Products
- Categories
- Brand Story
- Catalog CTA
- WhatsApp CTA
- Footer

### 12.2 Catalog

Components:

- Header
- SearchBar
- CategorySelector
- ProductGrid
- ProductCard
- Footer

### 12.3 Product Detail

Components:

- Header
- ProductGallery / ProductImage
- Product information
- StockBadge
- WhatsAppButton when in stock
- Footer

### 12.4 About

Content:

- brand story,
- artisan story,
- artisan photo when available.

### 12.5 Contact

Content:

- WhatsApp,
- Instagram / social media,
- other contact information if needed.

No contact form is required.

---

## 13. Images

For MVP, images should be stored in:

```text
/public/images/products/
/public/images/artisans/
```

Use native image loading:

```jsx
<img
  src={product.image}
  alt={product.name[language]}
  loading="lazy"
/>
```

Do not introduce a complex image service for MVP.

Recommended image practices:

- use appropriately sized images,
- prefer WebP where practical,
- provide meaningful `alt` text,
- lazy-load below-the-fold images.

---

## 14. Configuration

Keep project-specific configuration in one place.

Example:

```javascript
export const siteConfig = {
  brandName: "Your Brand",
  whatsappNumber: "62812xxxxxxx",
  instagramUrl: "",
  defaultLanguage: "id"
};
```

Do not hard-code the WhatsApp number across multiple components.

---

## 15. Environment Variables

Only use environment variables for values that need deployment-specific configuration.

Example:

```env
VITE_SITE_URL=https://yourdomain.com
VITE_WHATSAPP_NUMBER=62812xxxxxxx
```

Analytics variables are optional and outside the MVP.

Never put secrets in frontend environment variables. Anything prefixed with `VITE_` is exposed to the client.

---

## 16. Dependencies

Keep dependencies minimal.

Core dependencies:

```text
react
react-dom
react-router-dom
tailwindcss
lucide-react
```

Testing dependencies, if tests are added:

```text
vitest
@testing-library/react
@testing-library/jest-dom
```

Do not add a large UI component library for the MVP.

---

## 17. Performance Requirements

The website should be fast and mobile-friendly.

Implementation checklist:

- [ ] Lazy-load below-the-fold images
- [ ] Optimize product images
- [ ] Avoid unnecessary dependencies
- [ ] Keep JavaScript bundle small
- [ ] Use Vite production build
- [ ] Avoid unnecessary global state
- [ ] Test on mobile viewport
- [ ] Run Lighthouse before launch

Route-level code splitting can be added if the application becomes large, but it is not required for the initial MVP.

---

## 18. Accessibility

Minimum requirements:

- semantic HTML,
- descriptive image `alt` text,
- keyboard-accessible buttons and links,
- visible focus states,
- sufficient text contrast,
- form controls with labels if any forms are added,
- language toggle must be accessible.

Product cards should use links/buttons that are clearly identifiable.

---

## 19. SEO

Basic SEO should be implemented without introducing a complex SEO system.

At minimum:

- meaningful page titles,
- meta descriptions,
- descriptive product URLs,
- semantic headings,
- image alt text.

Example product URL:

```text
/product/001
```

Advanced SEO, dynamic sitemap generation, and server-side rendering are not required for MVP.

---

## 20. Security

Because the MVP has no backend, the attack surface is small.

Requirements:

- deploy over HTTPS,
- do not commit secrets,
- safely render product content,
- do not use `dangerouslySetInnerHTML` unless there is a specific trusted-content requirement,
- encode WhatsApp message parameters with `encodeURIComponent`.

Search input should only be used for client-side filtering and should not be executed as code.

---

## 21. Testing

### 21.1 Manual QA

Before launch, verify:

- Home loads,
- Catalog loads,
- Product Detail loads,
- About loads,
- Contact loads,
- product images load,
- name search works,
- category search works,
- category selection works,
- Indonesian language works,
- English language works,
- stock labels are correct,
- sold-out products remain visible,
- sold-out products cannot trigger an order,
- available products open WhatsApp,
- WhatsApp message contains the correct product,
- mobile layout works,
- desktop layout works.

### 21.2 Automated Tests

Automated tests are recommended but should remain focused.

Priority:

1. product filtering,
2. price formatting,
3. language selection,
4. WhatsApp link/message generation,
5. ProductCard behavior.

A full E2E suite is optional for the MVP.

---

## 22. Development Workflow

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## 23. Deployment

Recommended hosting:

- Vercel, or
- Netlify.

Deployment flow:

```text
Developer
   ↓
Git repository
   ↓
main branch
   ↓
Vercel / Netlify
   ↓
Production website
```

The project does not require a backend server.

A custom domain can be connected after deployment.

---

## 24. MVP Acceptance Mapping

| PRD Requirement | Technical Implementation |
|---|---|
| Home | `Home.jsx` |
| Catalog | `Catalog.jsx` |
| Product Detail | `ProductDetail.jsx` |
| About | `About.jsx` |
| Contact | `Contact.jsx` |
| Search by name | Client-side JSON filtering |
| Search by category | Client-side JSON filtering |
| Category selection | `CategorySelector.jsx` |
| Indonesian / English | `LanguageContext` |
| Stock status | `stock` boolean |
| Sold-out products remain visible | No stock filtering from catalog |
| Product data in JSON | `src/data/products.json` |
| One WhatsApp number | `siteConfig.js` / env |
| WhatsApp order | `wa.me` deep link |
| No checkout | No cart/payment implementation |
| Responsive design | Tailwind CSS |
| Mobile-friendly | Mobile-first layout |

---

## 25. Explicit MVP Exclusions

Do not implement the following unless the PRD is changed:

- payment gateway,
- checkout,
- shopping cart,
- customer accounts,
- login,
- wishlist,
- admin dashboard,
- CMS,
- order tracking,
- shipping calculator,
- multi-vendor support,
- multiple WhatsApp numbers,
- mobile app,
- advanced analytics,
- advanced filters,
- price range filtering,
- material filtering,
- complex sorting.

These belong to future phases.

---

## 26. Future Migration Path

The architecture should leave room for future improvements without building them now.

### Phase 1 — Current MVP

```text
React + Vite
     ↓
Static JSON
     ↓
WhatsApp
```

### Phase 2 — Content Management

If the owner needs to update products without editing code:

```text
React
  ↓
Google Sheets / CMS
  ↓
Product data
```

### Phase 3 — More Commerce Features

If ordering becomes more complex:

```text
React / Next.js
       ↓
Backend / CMS
       ↓
Cart / Orders / Payment
```

These are future options, not MVP requirements.

---

## 27. Core Technical Principle

Keep the implementation proportional to the product.

> **Do not build an e-commerce platform for a catalog website.**

The technical architecture should support:

**Show the product → Explain the product → Let the customer contact the seller.**

Any technical decision that does not directly support the MVP should be kept simple or postponed.
