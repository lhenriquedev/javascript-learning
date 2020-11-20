'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring properties
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with: ${ing1}, ${ing2}, ${ing3}`);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Rua do Comércio, 631',
  starterIndex: 2,
});

let [main, , secondary] = restaurant.categories;

// Switching variables
[main, secondary] = [secondary, main];

const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested destructing
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// Destructuring objects

const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;

// Mutating variables
let a = 123;
let b = 32;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
// console.log(a, b);

// Nested objects
const {
  fri: { open, close },
} = openingHours;
// console.log(open, close);

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];
console.log(newArr);

// Creating new item on menu
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays or more
const joinMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(joinMenu);

// Iterables: arrays, strings, maps, sets. NOT objects

const str = 'Henrique';
const letters = [...str, '', 'M.'];
console.log(letters);
console.log(...str);

// Real world example
// const ingredients = [
//   prompt(`Let's make pasta. Ingredient 1?`),
//   prompt(`Let's make pasta. Ingredient 2?`),
//   prompt(`Let's make pasta. Ingredient 3?`),
// ];

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {
  foundedInIn: 1993,
  ...restaurant,
  founder: 'Guiseppe',
};

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Butequinho dos gugu';
console.log(restaurant.name);
console.log(restaurantCopy.name);
