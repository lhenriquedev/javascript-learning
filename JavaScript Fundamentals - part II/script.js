'use strict';

/* #1 Class - use strict

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('I can drive :)');
*/

/* #2 Class -> Function

function logger() {
  // console.log('My name is Henrique');
}
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(12, 2);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/* #3 Class - function declaration and expression 

// function declaration
function calcAge1(birthYear) {
  return 2020 - birthYear;
}

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age1 = calcAge1(20);
const age2 = calcAge2(1991);
console.log(age1, age2);

*/

/* #3 Class - arrow function 

// arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(30);

console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const currentAge = 2020 - birthYear;
  const retirement = 65 - currentAge;

  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, 'Pedro'));
console.log(yearsUntilRetirement(2001, 'Camila'));

*/

/* #4 Class - function calling other function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and 
  ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/* #5 Class - Reviewing functions */
const calcAge = (birthYear) => 2021 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
  const currentAge = calcAge(birthYear);
  const retirement = 65 - currentAge;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }

  // return `${firstName} retires in ${retirement} years.`;
};

// console.log(yearsUntilRetirement(2001, 'Camila'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

/* Arrays */
const friends = ['Pedro', 'Camila', 'Mustashe'];
const henrique = ['Henrique', 'Marques', 2020 - 2000, 'Intern', friends];
// console.log(friends[friends.length - 1]); // last item
// console.log(henrique);

// Exercise
const calcAgeNew = (birthYear) => 2037 - birthYear;

const ages = [];
const years = [1990, 1965, 2002, 2010, 2020];
const a1 = calcAgeNew(years[0]);
const a2 = calcAgeNew(years[1]);
const a3 = calcAgeNew(years[years.length - 1]);

console.log(a1, a2, a3);

// Methods
ages.push(a1, a2, a3);
ages.pop();

// console.log(ages.indexOf(47));

// Return true or false;
console.log(ages.includes(47));
