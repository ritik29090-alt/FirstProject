/**
 * Format a number as currency using Intl.NumberFormat.
 * Defaults to USD if no currency is provided.
 *
 * @param {number} amount
 * @param {string} [currency='USD']
 * @param {string} [locale='en-US']
 * @returns {string}
 */
export function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
  if (typeof amount !== 'number' || Number.isNaN(amount)) return '$0.00';
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch (e) {
    // Fallback to fixed with $ if Intl fails
    return `$${amount.toFixed(2)}`;
  }
}

export default formatCurrency;
