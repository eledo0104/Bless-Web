/**
 * Formats a numeric price into IDR currency string (e.g. 85000 -> "Rp85.000")
 * @param {number} price 
 * @returns {string}
 */
export function formatPrice(price) {
  if (typeof price !== 'number' || isNaN(price)) {
    return 'Rp0';
  }
  return `Rp${price.toLocaleString('id-ID')}`;
}
