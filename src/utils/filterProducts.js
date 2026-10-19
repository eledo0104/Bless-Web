/**
 * Filters products by search query (matches against localized name or category)
 * and optional category filter.
 * 
 * Note: Sold-out products remain visible (never filtered out by stock).
 * 
 * @param {Array} products 
 * @param {Object} options
 * @param {string} options.query - Search query string
 * @param {string} options.selectedCategory - Category filter ('all' or specific name)
 * @param {string} options.language - 'id' | 'en'
 * @returns {Array} Filtered list of products
 */
export function filterProducts(products = [], { query = '', selectedCategory = 'all', language = 'id' } = {}) {
  const normalizedQuery = query.trim().toLowerCase();

  return products.filter((product) => {
    // 1. Category selection filter
    if (selectedCategory && selectedCategory !== 'all') {
      const catId = typeof product.category === 'object' ? product.category?.id?.toLowerCase() : String(product.category || '').toLowerCase();
      const catEn = typeof product.category === 'object' ? product.category?.en?.toLowerCase() : String(product.category || '').toLowerCase();
      const target = selectedCategory.toLowerCase();
      if (catId !== target && catEn !== target) {
        return false;
      }
    }

    // 2. Search query filter (matches product name or category)
    if (normalizedQuery) {
      const nameId = typeof product.name === 'object' ? product.name?.id?.toLowerCase() : String(product.name || '').toLowerCase();
      const nameEn = typeof product.name === 'object' ? product.name?.en?.toLowerCase() : String(product.name || '').toLowerCase();
      const catId = typeof product.category === 'object' ? product.category?.id?.toLowerCase() : String(product.category || '').toLowerCase();
      const catEn = typeof product.category === 'object' ? product.category?.en?.toLowerCase() : String(product.category || '').toLowerCase();

      const matchesName = Boolean((nameId && nameId.includes(normalizedQuery)) || (nameEn && nameEn.includes(normalizedQuery)));
      const matchesCategory = Boolean((catId && catId.includes(normalizedQuery)) || (catEn && catEn.includes(normalizedQuery)));

      if (!matchesName && !matchesCategory) {
        return false;
      }
    }

    return true;
  });
}
