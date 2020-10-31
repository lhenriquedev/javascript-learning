// Coding Challenge #1

// Calculate the average function.
const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
  return (scoreOne + scoreTwo + scoreThree) / 3;
};

// Test 1
let dolphinScore = calcAverage(44, 23, 71);
let koalasScore = calcAverage(65, 54, 49);

// Check the winner function.
const checkWinner = (avgDolphin, avgKoalas) => {
  if (avgDolphin >= 2 * avgKoalas) {
    console.log(`Dolphins win (${dolphinScore} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphin) {
    console.log(`Koalas win (${avgKoalas} vs. ${dolphinScore})`);
  } else {
    console.log(`Nobody wins.`);
  }
};

const match1 = checkWinner(dolphinScore, koalasScore);

// Test 2
dolphinScore = calcAverage(84, 54, 41);
koalasScore = calcAverage(23, 34, 27);

checkWinner(dolphinScore, koalasScore);
