// LECTURES
// Data
const account5 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account6 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account7 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account8 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts1 = [account5, account6, account7, account8];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*  
// FIND
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// FILTER

// positives 
const deposits = movements.filter(mov => mov > 0);

// negatives 
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// REDUCE 

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// maximum value 
const max = movements.reduce((acc, mov) => {
  return acc > mov ? acc : mov;
}, movements[0]);

console.log(max);

// MAP
const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movementsUSD);

// For Of
for (const movement of movements) {
  console.log(
    movement > 0
      ? `You deposited ${movement}`
      : `You withdrew ${Math.abs(movement)}`
  );
}

console.log('----------- foreach ------------');

// ForEach
movements.forEach((mov, i, arr) => {
  if (mov > 0) {
    console.log(`Movement ${i + 1} - You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} - You withdrew ${Math.abs(mov)}`);
  }
});

// Map

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currenciesUnique.forEach((value, _, map) => {
  console.log(`${value}: ${value}`);
});

const eurosToUsd = 1.1;
const totalDepositedUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurosToUsd)
  .reduce((acc, mov) => acc + mov, 0)
  .toFixed(2);

console.log(totalDepositedUSD);
*/
