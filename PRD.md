# Product Requirements Document (PRD)
## Handicraft & Accessories Online Catalog

**Version:** 2.0  
**Status:** Final MVP

---

## 1. Product Overview

A simple website for showcasing handmade and accessory products.

Customers can:
1. browse products,
2. search for products by name or category,
3. view product details,
4. learn about the brand/artisan,
5. contact the seller through WhatsApp to place an order.

The website is **not a full e-commerce system**. There is no online payment or checkout.

### Main Flow

**Browse → Product Detail → WhatsApp**

---

## 2. Goals

The website should:
- present products in a clean and professional way,
- make it easy for customers to find products,
- provide important product information,
- introduce the brand/artisan,
- make it easy for customers to contact the seller through WhatsApp.

---

## 3. Target Users

### Customer

People who want to:
- browse the product collection,
- find a specific product,
- check product details and price,
- contact the seller to buy or ask questions.

### Seller

A brand owner who wants to:
- have an online product catalog,
- showcase products,
- direct customers to WhatsApp,
- manage product data in a simple way.

---

## 4. MVP Scope

The MVP consists of:
- Home
- Catalog
- Product Detail
- About
- Contact
- Search
- Category
- WhatsApp Order
- Indonesian / English language support

---

## 5. Pages

### 5.1 Home

The Home page includes:
- logo / brand name,
- simple hero section,
- featured products,
- product categories,
- short brand story,
- link to the catalog,
- WhatsApp button.

**Main Goal:** Help visitors understand the brand and discover products quickly.

### 5.2 Catalog

The Catalog displays all products.

Each product card shows:
- product image,
- product name,
- price,
- category,
- stock status.

Customers can:
- search by **product name**,
- search by **category**,
- select a category.

### 5.3 Product Detail

The Product Detail page includes:
- product images,
- product name,
- price,
- description,
- material,
- dimensions,
- stock status,
- artisan information if available,
- WhatsApp button.

If the product is available: **Order via WhatsApp**  
If the product is unavailable: **Sold Out**

Sold-out products **remain visible** in the catalog and on their product detail page.

### 5.4 About

The About page includes:
- brand story,
- artisan story,
- artisan photo if available.

**Goal:** Provide context and build trust around the products.

### 5.5 Contact

The Contact page includes:
- WhatsApp,
- Instagram / social media,
- other contact information if needed.

A contact form is not required.

---

## 6. Stock

Products have a simple stock status:
- `In Stock`
- `Sold Out`

For Indonesian:
- `Tersedia`
- `Habis`

Since the website supports two languages, the stock label follows the selected language.

Sold-out products are not removed from the catalog because customers should still be able to view the product collection.

---

## 7. Language

The website supports:
- Indonesian
- English

Users can switch between languages using a language toggle.

The following content should support both languages:
- navigation,
- buttons,
- labels,
- stock status,
- general information,
- About page,
- Contact page.

Product content should also support both languages where applicable.

Example:

```json
{
  "name": {
    "id": "Kalung Rotan",
    "en": "Rattan Necklace"
  },
  "description": {
    "id": "Kalung handmade dari rotan.",
    "en": "Handmade necklace made from rattan."
  }
}
```

---

## 8. Search & Category

Search is intentionally simple.

Customers can search using:
- product name,
- category.

The MVP does not require:
- advanced filters,
- price range,
- material filters,
- complex sorting.

---

## 9. WhatsApp Order

The website uses **one WhatsApp number** for the seller.

There is no multi-seller or multiple WhatsApp number functionality in the MVP.

When a customer clicks the WhatsApp button, WhatsApp opens with a pre-filled message.

### English

```text
Hi, I'm interested in:

Product: Rattan Necklace
Price: Rp85.000

Product link:
https://example.com/product/001
```

### Indonesian

```text
Halo, saya tertarik dengan:

Produk: Kalung Rotan
Harga: Rp85.000

Link produk:
https://example.com/product/001
```

The website only sends the customer to WhatsApp.

Payment, order confirmation, and further communication are handled by the seller through WhatsApp.

---

## 10. Product Data

Product data is stored in **JSON**.

Minimum product fields:
- `id`
- `name`
- `category`
- `price`
- `description`
- `material`
- `dimensions`
- `image`
- `stock`

Because the website is bilingual, text fields can contain Indonesian and English versions.

Example:

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
  "image": "/images/rattan-necklace.jpg",
  "stock": true
}
```

---

## 11. Design Requirements

The website should be:
- responsive,
- mobile-friendly,
- simple,
- fast,
- easy to use,
- focused on product photography,
- clear about the WhatsApp CTA.

A complex design system is not required.

---

## 12. Technical Direction

The MVP uses:
- React
- Vite
- Tailwind CSS
- React Router
- JSON for product data
- WhatsApp `wa.me`

A custom backend or database is not required for the MVP.

---

## 13. Out of Scope

The following features are not part of the MVP:
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
- advanced analytics.

---

## 14. MVP User Flow

```text
HOME
  ↓
CATALOG / ABOUT
  ↓
Search / Category
  ↓
Product Detail
  ↓
Order via WhatsApp
  ↓
SELLER
```

---

## 15. Launch Requirements

The MVP is ready for launch when:
- Home page works,
- Catalog works,
- name + category search works,
- category selection works,
- Product Detail works,
- Indonesian + English language support works,
- stock status works,
- sold-out products remain visible,
- WhatsApp button works,
- one WhatsApp number is configured,
- website is responsive on mobile and desktop,
- product data comes from JSON,
- there are no major errors.

---

## 16. Future Features

The following features may be considered after the MVP:
- shopping cart,
- multi-product WhatsApp order,
- wishlist,
- CMS,
- Google Sheets,
- payment gateway,
- analytics,
- shipping integration,
- customer order history.

---

## 17. Core Product Principle

The MVP should remain simple.

> **Show the product → Explain the product → Let the customer contact the seller.**

Every new feature should be evaluated based on whether it supports this main flow.

If it is not necessary for the main flow, it should be postponed to a later stage.
