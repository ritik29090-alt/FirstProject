/**
 * Calculate the total price from cart items used by App.js.
 * Each cart item has the shape: { data: { price: number }, key: string }
 *
 * @param {Array<{data: {price: number}, key: string}>} cartItems
 * @returns {number} total rounded to 2 decimals
 */
export function calcTotal(cartItems) {
  if (!Array.isArray(cartItems)) return 0;
  const sum = cartItems.reduce((acc, item) => {
    const price = item && item.data && typeof item.data.price === 'number' ? item.data.price : 0;
    return acc + price;
  }, 0);
  return Number(sum.toFixed(2));
}

export default calcTotal;
