// // 'use strict';

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // Destructuring properties
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with: ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   },
// };

// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: 'Via del Sole, 21',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// // restaurant.orderDelivery({
// //   address: 'Rua do Comércio, 631',
// //   starterIndex: 2,
// // });

// // restaurant.orderPizza('mushrooms', 'onion', 'olives', 'tomato');
// // restaurant.orderPizza('tomato');

// // let [main, , secondary] = restaurant.categories;

// // // Switching variables
// // [main, secondary] = [secondary, main];

// // const [starter, mainCourse] = restaurant.order(2, 0);
// // // console.log(starter, mainCourse);

// // // Nested destructing
// // const nested = [2, 4, [5, 6]];
// // // const [i, , j] = nested;
// // // console.log(i, j);
// // const [i, , [j, k]] = nested;
// // // console.log(i, j, k);

// // // Default values
// // const [p = 1, q = 1, r = 1] = [8, 9];
// // // console.log(p, q, r);

// // // Destructuring objects

// // const { name, openingHours, categories } = restaurant;

// // // console.log(name, openingHours, categories);

// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;

// // // console.log(restaurantName, hours, tags);

// // // Default values
// // const { menu = [], starterMenu: starters = [] } = restaurant;

// // // Mutating variables
// // let a = 123;
// // let b = 32;

// // const obj = { a: 23, b: 7, c: 14 };
// // ({ a, b } = obj);
// // // console.log(a, b);

// // // Nested objects
// // const {
// //   fri: { open, close },
// // } = openingHours;
// // // console.log(open, close);

// // const arr = [7, 8, 9];

// // const newArr = [1, 2, ...arr];
// // console.log(newArr);

// // // Creating new item on menu
// // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);

// // // Copy array
// // const mainMenuCopy = [...restaurant.mainMenu];

// // // Join 2 arrays or more
// // const joinMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // console.log(joinMenu);

// // // Iterables: arrays, strings, maps, sets. NOT objects

// // const str = 'Henrique';
// // const letters = [...str, '', 'M.'];
// // console.log(letters);
// // console.log(...str);

// // // Real world example
// // // const ingredients = [
// // //   prompt(`Let's make pasta. Ingredient 1?`),
// // //   prompt(`Let's make pasta. Ingredient 2?`),
// // //   prompt(`Let's make pasta. Ingredient 3?`),
// // // ];

// // // restaurant.orderPasta(...ingredients);

// // // Objects
// // const newRestaurant = {
// //   foundedInIn: 1993,
// //   ...restaurant,
// //   founder: 'Guiseppe',
// // };

// // console.log(newRestaurant);

// // const restaurantCopy = { ...restaurant };
// // restaurantCopy.name = 'Butequinho dos gugu';
// // console.log(restaurant.name);
// // console.log(restaurantCopy.name);

// // // Rest pattern and Parameters

// // // 1) DESTRUCTURING

// // // SPREAD, because on RIGHT side
// // const arr1 = [1, 2, 3, ...[3, 4]];

// // // REST
// // const [h, l, ...others] = [12, 13, 14, 15];
// // console.log(h, l, others);

// // const [pizza, , risotto, ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];

// // console.log(pizza, risotto, otherFood);

// // // Objects
// // const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(sat, weekdays);

// // // 2) FUNCTIONS
// // const add = (...numbers) => {
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) {
// //     sum += numbers[i];
// //   }
// //   console.log(sum);
// // };

// // add(2, 3);
// // add(5, 3, 7, 2);

// // const x = [23, 6, 7, 8, 12];
// // add(...x);

// // // Short Circuiting (&& and ||)

// // console.log('----- or ------');
// // console.log(3 || 'Jonas');
// // console.log(undefined || 0);

// // console.log('------ and -------');
// // console.log(0 && 'Henrique');
// // console.log(7 && 'Jonas');
// // console.log('Hello' && 23 && null && 'jonas');

// // // Practical example
// // if (restaurant.orderPizza) restaurant.orderPizza('tomato', 'mushrooms');

// // restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'vtnc');

// // // Nullish Coalescing Operator (??)
// // restaurant.numGuests = undefined;

// // // Nullish: null and undefined (NOT 0 or '')
// // const guestCorret = restaurant.numGuests ?? 10;
// // console.log(guestCorret);

// // for of
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const item of menu) {
//   // console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} - ${el}`);
// }

// // Optional Chaining (.?)

// // with optional chaining
// // console.log(restaurant.openingHours.mon?.open);

// // real example
// const days = ["mon", "tue", "wed", "thu", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

// // arrays

// const users = [{ name: "Henrique", email: "hello@henrique.io" }];

// // new method on arrays
// // console.log(users[0]?.name ?? "User does not exist");

// // old method
// if (users.length > 0) {
//   // console.log(users[0].name);
// } else {
//   // console.log("user does not exist");
// }

// // Property Name
// const properties = Object.keys(restaurant.openingHours);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // Property  VALUES
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open  at ${open} and close at ${close}`);
// }

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScriot"],
  ["correct", 3],
  [true, "Correct :)"],
  [false, "Try again!"],
]);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt("Your answer?"));

console.log(question.get(question.get("correct") === answer));

// convert map to array
console.log([...question]);

// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);

// console.log(ordersSet);
// console.log(ordersSet.size);
// ordersSet.has("Pizza");
// ordersSet.has("Bread");
// console.log(ordersSet.add("Garlic Bread"));

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
