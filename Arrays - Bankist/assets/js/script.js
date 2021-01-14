'use strict';

/////////////////////////////////////////////////
// BANKIST APP

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

// array that contains all accounts
const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// BANKIST CODE
/////////////////////////////////////////////////

const displayMovements = movements => {
  // clear container
  containerMovements.innerHTML = '';

  // loop array movements
  movements.forEach((movement, i) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    // create html
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div> 
        <div class="movements__value">${Math.abs(movement)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = movements => {
  const balance = movements.reduce((acc, movement) => acc + movement, 0);

  labelBalance.textContent = `${balance}€`;
};

// access entire objects in accounts array
const calcDisplaySummary = accs => {
  // deposit
  const incomes = accs.movements
    .filter(mov => mov >= 0)
    .reduce((acc, mov) => acc + mov, 0);

  // withdrawls
  const out = accs.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  // interest
  const interest = accs.movements
    .filter(mov => mov >= 0)
    .map(deposit => (deposit * accs.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(out)}€`;
  labelSumInterest.textContent = `${interest}€`;
};

// access entire objects in accounts array
const createUsernames = accs => {
  // loop array accounts
  accs.forEach(acc => {
    // create a property called: username
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

// ----------------------- EVENT HANDLERS ------------------- //

// outside variable that contains the currenct account
let currentAccount;
btnLogin.addEventListener('click', e => {
  e.preventDefault();

  // find account and returns the object
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  // pin of current account has correct, then show
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // 1) Display UI and Welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // 2) Display Movements
    displayMovements(currentAccount.movements);
    // 3) Display Balance
    calcDisplayBalance(currentAccount.movements);
    // 4) Display Summary
    calcDisplaySummary(currentAccount);
  }
});
