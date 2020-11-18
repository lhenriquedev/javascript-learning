'use strict';

// Scope chain
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}. You are ${age}, born in ${birthYear}`;
    // console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial.`;
      // console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = 'Henrique';
calcAge(1991);

// Variable environment && hoisting

// This keyword
// console.log(this);
const calcAgeNew = function (birthYear) {
  // console.log(2037 - birthYear);
  // console.log(this);
};

const calcAgeArr = birthYear => {
  // console.log(2037 - birthYear);
  // console.log(this);
};

calcAgeNew(1991);
calcAgeArr(1991);

// Regular function vs. Arrow function

// Primitives vs References
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
// console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
// console.log(jessica, marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Mary'],
};

const jessicaCopy = { ...jessica2 };
jessicaCopy.lastName = 'Davis';
jessicaCopy.age = 32;

jessicaCopy.family.push('John');

console.log(jessica2, jessicaCopy);
