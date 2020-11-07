// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Problem 1:
// We work for a company building a smart home thermometer. Our most recent task is this:"Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowes temp
// - How to compute max and min Temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = temps => {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};

const amplitude = calcTempAmplitude([3, 7, 1, 'error']);
// console.log(amplitude);

// Problem 2:
// Function should now receive 2 arrays of temps

// 1) - With 2 arrays, should we implement funcionality twice? NO! Just merge two arrays

// 2) - Merge 2 arrays

const calcTempAmplitudeRefactoring = (temp1, temp2) => {
  const temps = temp1.concat(temp2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};

const amplitudeNew = calcTempAmplitudeRefactoring([3, 7, 1], [2.1, -7, 4]);

console.log(amplitudeNew);
