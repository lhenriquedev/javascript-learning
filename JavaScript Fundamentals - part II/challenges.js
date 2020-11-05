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

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(total);
