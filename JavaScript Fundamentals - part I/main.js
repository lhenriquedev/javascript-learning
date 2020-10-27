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
  console.log(`Don't spend it all :)`);
} else {
  console.log(`You should get a job!`);
}

let height; // falsy
if (height) {
  console.log(`Yay! Height is defined`);
} else {
  console.log(`Height is UNDEFINED`);
}

// Equality operator
