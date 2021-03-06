// Coding Challenge #1

// Calculate the average function.
// const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
//   return (scoreOne + scoreTwo + scoreThree) / 3;
// };

// // Test 1
// let dolphinScore = calcAverage(44, 23, 71);
// let koalasScore = calcAverage(65, 54, 49);

// // Check the winner function.
// const checkWinner = (avgDolphin, avgKoalas) => {
//   if (avgDolphin >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${dolphinScore} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphin) {
//     console.log(`Koalas win (${avgKoalas} vs. ${dolphinScore})`);
//   } else {
//     console.log(`Nobody wins.`);
//   }
// };

// const match1 = checkWinner(dolphinScore, koalasScore);

// Test 2
// dolphinScore = calcAverage(84, 54, 41);
// koalasScore = calcAverage(23, 34, 27);

// checkWinner(dolphinScore, koalasScore);

// Coding Challenge #2

// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

// console.log(total);

// Coding Challenge #3

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,

//   calcBMI() {
//     this.bmi = this.mass / this.height ** 2;
//     return `
//       ${this.fullName} BMI (${this.bmi.toFixed(2)})
//     `;
//   },
// };

// const john = {
//   fullName: 'John Miller',
//   mass: 92,
//   height: 1.95,

//   calcBMI() {
//     this.bmi = this.mass / this.height ** 2;
//     return `
//       ${this.fullName} BMI (${this.bmi.toFixed(2)})
//     `;
//   },
// };

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// if (mark.bmi > john.bmi) {
//   console.log(`Mark's BMI ${mark.bmi} is higher than John's (${john.bmi})`);
// } else {
//   console.log(`John's BMI ${john.bmi} is higher than Mark's (${mark.bmi})`);
// }

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}

// console.log(tips);
// console.log(total);
console.log(calcAverage(total));
console.log(calcAverage(tips));
