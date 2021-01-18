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

//  ------------------------- CHAINING METHODS ------------------------------

// PIPELINE
const totalDepositsUSD = movements
  .filter(movement => movement >= 0)
  // .map((movement, i, arr) => {
  //   return movement * eurToUsd;
  // })
  .map(movement => movement * eurToUsd)
  .reduce((acc, movement) => acc + movement, 0);

// console.log(totalDepositsUSD);

//  ------------------------- FIND ------------------------------
const firstWithdrawal = movements.find(mov => mov < 0);

// Equality operator
// console.log(movements);
// console.log(movements.includes(-130));

// Condition Some
const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// Condition Every
// console.log(movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;

// Flat and FlatMap

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// flat
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

// // flatMap

// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

//  ------------------------- SORT ------------------------------
const owners = ['Jonas', 'Adam', 'Martha', 'Zach'];
console.log(owners.sort());

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

movements.sort((a, b) => a - b);

console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

movements.sort((a, b) => b - a);

console.log(movements);
