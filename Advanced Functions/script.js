"use strict";

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
