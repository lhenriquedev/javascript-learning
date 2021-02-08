"use strict";

///////////////////////////////////////
// Modal window

const header = document.querySelector(".header");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseCookie = document.querySelector(".btn--close-cookie");
const btnScrollTo = document.querySelector(".btn--scroll-to");

const sectionOne = document.querySelector("#section--1");

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((button) => {
  button.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Cookie message
const message = document.createElement("div");

message.classList.add("cookie-message");
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

header.appendChild(message);

document.querySelector(".btn--close-cookie").addEventListener("click", (e) => {
  message.remove();
});

// Smooth Scrooling
btnScrollTo.addEventListener("click", (e) => {
  /* Old School
   window.scrollTo({
    left: sectionOneCoords.left + window.pageXOffset,
    top: sectionOneCoords.top + window.pageYOffset,
    behavior: "smooth",
   });
  */
  // Modern
  sectionOne.scrollIntoView({ behavior: "smooth" });
});

// document.querySelectorAll(".nav__link").forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.preventDefault();

//     const id = el.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();

  // Mathing strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
