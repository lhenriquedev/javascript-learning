/* Exporting Module */
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to cart.`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };
