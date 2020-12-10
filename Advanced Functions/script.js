'use strict';

// Default parameters

/*
const bookings = [];
const createBooking = (flightNum, numPassangers = 15, price = 150) => {
  const booking = {
    flightNum,
    numPassangers,
    price,
  };

  bookings.push(booking);
  console.log(bookings);
};

createBooking("123LH", 50, 200);
createBooking("111LH", 20, 100);
createBooking("122LH");
*/

/*
const flight = "Gol";

const henrique = {
  name: "Henrique",
  passport: 23424235340,
};

const checkIn = (flightNum, passenger) => {
  flightNum = "Azul";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 234242235340) {
    alert("Checked in");
  } else {
    alert("Wrong passport");
  }
};

checkIn(flight, henrique);

// Real Life

const newPassport = (person) => {
  person.passport = Math.trunc(Math.random() * 10000000);
};
*/

// Higher Order Functions

// transform phrases in one word
/*
const oneWord = (str) => {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = (str) => {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = (str, fn) => {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer("JavaScript is the best!", upperFirstWord);
*/
// function returning function

/*
const greet = greeting => name => console.log(`${greeting}, ${name}`);

const greeter = greet('Hello')('Kazama');

// Call apply bind

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({
      flight: `${this.iataCode}`,
      name,
    });
  },
};

lufthansa.book(234, 'Jonas Schmedtmann');
lufthansa.book(231, 'Henrique Marques');

console.log(lufthansa);

const book = lufthansa.book;
// Call method

const eurowings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};

book.call(eurowings, 3452, 'Camila Nascente');

console.log(eurowings);

// Apply method
const flightData = [237, 'Mary Cooper'];
// book.apply(swiss, flightData);

// Modern copy method
book.call(swiss, ...flightData);
console.log(swiss);

// With event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  console.log(this.planes++);
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addTaxVAT = addTax(0.2);
console.log(addTaxVAT(40));
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), 
  which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). 
  This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 

4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (typeof type === 'array') {
      console.log(this.answers);
    } else if (typeof type === 'string') {
      console.log(`Poll results are: ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answer: [5, 2, 3] }, 'string');
