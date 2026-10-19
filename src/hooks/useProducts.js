import { useMemo } from 'react';
import productsData from '../data/products.json';

/**
 * Safely resolves a field that may be localized object { id: "...", en: "..." } or a plain string
 * @param {Object|string} field 
 * @param {string} language - 'id' | 'en'
 * @returns {string}
 */
export function getLocalizedValue(field, language = 'id') {
  if (!field) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'object') {
    return field[language] || field.id || field.en || '';
  }
  return String(field);
}

/**
 * Safely resolves an array field (such as tags) that may be { id: [], en: [] } or string[]
 * @param {Object|Array} field 
 * @param {string} language - 'id' | 'en'
 * @returns {Array<string>}
 */
export function getLocalizedArray(field, language = 'id') {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  if (typeof field === 'object') {
    return field[language] || field.id || field.en || [];
  }
  return [];
}

/**
 * Hook providing access to static products list, categories, and query helpers
 */
export function useProducts() {
  const products = useMemo(() => productsData, []);

  const getProductById = (id) => {
    if (!id) return null;
    const strId = String(id).trim();
    return (
      products.find(
        (item) =>
          String(item.id) === strId ||
          String(item.id).padStart(3, '0') === strId.padStart(3, '0')
      ) || null
    );
  };

  const getFeaturedProducts = () => {
    const featured = products.filter((p) => p.featured === true);
    return featured.length > 0 ? featured : products.slice(0, 4);
  };

  const getCategories = (language = 'id') => {
    const categoryMap = new Map();
    products.forEach((p) => {
      const label = getLocalizedValue(p.category, language);
      const key = p.category?.en || p.category?.id || label;
      if (key) {
        if (!categoryMap.has(key)) {
          categoryMap.set(key, {
            key,
            label,
            count: 1,
            sampleImage: p.image || p.images?.[0] || ''
          });
        } else {
          categoryMap.get(key).count += 1;
        }
      }
    });
    return Array.from(categoryMap.values());
  };

  return {
    products,
    getProductById,
    getFeaturedProducts,
    getCategories,
    getLocalizedValue,
    getLocalizedArray
  };
}
