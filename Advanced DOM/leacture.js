// Selecting elements

/*
 document.querySelector();
 document.querySelectorAll();
*/

// Creating and inserting  elements

/*
  .insertAdjacentHTML();
  document.createElement('div');  
  
*/

/*
  getComputedStyle();
  setProperty();
*/

// Data Attributes
const logo = document.querySelector(".nav__logo");
// console.log(logo.dataset.createBy);

// window scroll

/*
  window.scrollTo(sectionCoords.left + window.pageXOffSet,sectionCoords.top + window.pageYOffSet)


*/

// Event Propagation in Practice
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)}`;
