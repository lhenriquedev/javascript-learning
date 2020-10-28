/* 
------------
Coding Challenge #1, #2, #3, #4
------------
*/

/*
const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const bmiMark = markMass / (markHeight * markHeight);
const bmiJohn = johnMass / (johnHeight * johnHeight);

if (bmiMark > bmiJohn) {
  console.log(
    `Mark's BMI (${bmiMark.toFixed(
      2
    )}) is higher than John's (${bmiJohn.toFixed(2)})`
  );
} else {
  console.log(`John's BMI is higher than Mark's`);
}


const dolphinsScore = 97 + 112 + 80;
const koalasScore = 109 + 95 + 50;

const averageDolphins = dolphinsScore / 3;
const averageKoalas = koalasScore / 3;

const minimumScore = 100;

if (averageDolphins > averageKoalas && averageDolphins > minimumScore) {
  // console.log(`Dolphin is the winner!`);
} else if (averageKoalas > averageDolphins && averageKoalas > minimumScore) {
  // console.log(`Koalas are the winner!`);
} else if (
  averageKoalas === averageKoalas &&
  averageDolphins &&
  averageKoalas > 100
) {
  // console.log(`There was a draw`);
} else {
  // console.log(`NOBODY wins.`);
}
*/

const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const total = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value is ${total}`
);
