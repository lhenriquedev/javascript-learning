/* 
------------
Coding Challenge #1 and #2
------------
*/

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

/* console.log(`Marks weights ${markMass}kg and is ${markHeight}m tall`);
console.log(`John weights ${johnMass}kg and is ${johnHeight}m tall`);

console.log(bmiMark.toFixed(2), bmiJohn.toFixed(2));

console.log(markHigherBMI);
 */
