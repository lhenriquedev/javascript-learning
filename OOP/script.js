'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this, it's a bad practice
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// instance of Person
const henrique = new Person('Henrique', 2000);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

// console.log(matilda, jack, henrique);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
Person.prototype.species = 'Homo Sapiens';

henrique.calcAge();
matilda.calcAge();
jack.calcAge();

// console.log(Person.prototype);
// console.log(henrique.__proto__ === Person.prototype);

// console.log(henrique.species, matilda.species);
console.log(henrique.__proto__.__proto__);

const arr = [3, 5, 6, 7, 8, 6, 42];
console.log(arr.__proto__);

// Coding Challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h.`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h.`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
mercedes.brake();
