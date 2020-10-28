// Type conversion and coercion

// type conversion
const inputYear = '1991';
// console.log(Number(inputYear));

// type coercion
/*
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' / '2');
*/

// Truthy and Falsy
// Falsy -> 0, '', undefined, null, NaN;
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean([]));
*/

const money = 0;
if (money) {
  // console.log(`Don't spend it all :)`);
} else {
  // console.log(`You should get a job!`);
}

let height; // falsy
if (height) {
  // console.log(`Yay! Height is defined`);
} else {
  // console.log(`Height is UNDEFINED`);
}

// Equality operator -> return true or false -> strict and loose
// const favourite = Number(prompt(`What is your favourite number?`));
// if (favourite === 23) console.log('Yeeees, it is 23.');

// Different
// if (favourite !== 23) console.log(`Nooo, it is not 23.`);

// Boolean Logic
const hasDriversLicense = true;
const hasGoodVision = true;

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log(`Someone else should drive...`);
// }

const isTired = true; // isTired = true, !isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
  // console.log(`Sarah is able to drive!`);
} else {
  // console.log(`Someone else should drive...`);
}

// Switch case
const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
    // console.log('Plan course structure');
    break;
  case 'tuesday':
    // console.log('Prepare theory videos');
    break;
  default:
  // console.log('Not a valid day!');
}

// Statements and Expressions

// Expression -> it is a piece of code that produces a value
// Statements -> not produces a value itself

// Conditional Operator -> Ternary
// const age = 23;
// const fullAge = age
//   ? console.log(`I like to drink wine 🍷`)
//   : console.log(`I like to drink water 🌊`);
