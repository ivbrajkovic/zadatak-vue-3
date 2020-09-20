/**
 * Capitalize first letter in string
 * @param {string} str String to capitalize
 */
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Format price
 * @param {nnumber} price Price
 */
export const formatPrice = (price) => price.toFixed(2).replace(".", ",");
