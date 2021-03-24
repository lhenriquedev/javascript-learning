/* Importing module */
import {
  addToCart,
  totalPrice as price,
  totalQuantity,
  cart,
} from './shoppingCart.js';
/*
console.log('Importing module');

addToCart('bread', 5);
addToCart('bananas', 10);
console.log(cart);
console.log(price, totalQuantity);
 */

/* const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 236;
  const totalQuantity = 23;

  const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(`${product} ${quantity} added to cart.`);
  };

  const orderStock = (product, quantity) => {
    console.log(`${product} ${quantity} ordered from supplier.`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
 */

/* import cloneDeep from './node_modules/lodash-es/cloneDeep.js'; */
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'banana', quantity: 25 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateCloneDeep = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone, stateCloneDeep);

if (module.hot) {
  module.hot.accept();
}
const cart = [{ product: 'Lemon', quantity: 5 }];
console.log('Henrique' ?? null);
/* console.log(cart.find(el => el.quantity >= 2)); */
