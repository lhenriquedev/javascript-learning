// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//  ------------------------- MAP ------------------------------
const eurToUsd = 1.1;
// transform EUR to USD
const movementsUSD = movements.map(movement => movement * eurToUsd);

// FOR OF
const movementsUSDfor = [];
for (const movement of movements) {
  movementsUSDfor.push(movement * eurToUsd);
}

const movementsDescriptions = movements.map(
  (movement, i) =>
    `Movement ${i + 1}: You ${
      movement > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(movement)}`
);

// console.log(movementsDescriptions);

//  ------------------------- FILTER ------------------------------
const deposits = movements.filter(movement => movement > 0);
const withdrawals = movements.filter(movement => movement < 0);

// FOR OF
const depositFor = [];
for (const movement of movements) {
  if (movement > 0) {
    depositFor.push(movement);
  }
}
// console.log(deposits);
// console.log(withdrawals);

//  ------------------------- REDUCE ------------------------------

const balance = movements.reduce((acc, movement) => acc + movement, 0);
// console.log(balance);

// Maximum value
const max = movements.reduce((acc, movement) => {
  if (acc > movement) return acc;
  else return movement;
}, movements[0]);

// console.log(max);
