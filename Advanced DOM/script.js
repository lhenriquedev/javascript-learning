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

const nav = document.querySelector(".nav");

const sectionOne = document.querySelector("#section--1");

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

/* ----------------------------------------------------------------
* Modal Window
----------------------------------------------------------------
*/
const openModal = (e) => {
  e.preventDefault();

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((button) => {
  button.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/* ----------------------------------------------------------------
 * Cookie message
----------------------------------------------------------------
*/
// const message = document.createElement("div");

// message.classList.add("cookie-message");
// message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// header.appendChild(message);

// document.querySelector(".btn--close-cookie").addEventListener("click", (e) => {
//   message.remove();
// });

/* ----------------------------------------------------------------
 * Smooth scrolling
----------------------------------------------------------------
*/
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

// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();

  // Mathing strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href"); // ex: section--1
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

/* ----------------------------------------------------------------
 * Tabbed Content
----------------------------------------------------------------
*/

tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return;

  // Remove active classes
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );

  // Active tabs
  clicked.classList.add("operations__tab--active");

  // Active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Menu fading animation
const handlerHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handlerHover.bind(0.5));
nav.addEventListener("mouseout", handlerHover.bind(1));

/* ----------------------------------------------------------------
 * Nav sticky
----------------------------------------------------------------
*/

// Method #1

/*

const initialCoords = sectionOne.getBoundingClientRect();

window.addEventListener("scroll", () => {
  if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
});
*/

// Method #2
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

/* ----------------------------------------------------------------
 * Reveal Section
----------------------------------------------------------------
*/

const allSections = document.querySelectorAll(".section");

const revealSection = (entries, observer) => {
  const [entry] = entries;

  // Guard cause
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

/* 
################################################################
 Lazy loading images
################################################################
*/

const imgTargets = document.querySelectorAll("img[data-src");

const loadImg = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", () => {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

/* 
################################################################
 Slider
################################################################
*/
const slider = () => {
  const slides = document.querySelectorAll(".slide");

  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  const dotContainer = document.querySelector(".dots");

  let currentSlide = 0;
  let maxSlides = slides.length;

  // loops through slides and add translateX
  slides.forEach(
    (slide, i) => (slide.style.transform = `translateX(${100 * i}%)`)
  );

  //Functions
  const createDots = () => {
    slides.forEach((s, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = (slide) => {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = (slide) => {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next Slide
  const nextSlide = () => {
    // if slide is in the last item
    // then return it to 0
    // otherwise keep going
    if (currentSlide === maxSlides - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  // Previous Slide
  const prevSlide = () => {
    // if slide is the first item
    // slide becomes 0
    if (currentSlide === 0) {
      currentSlide = maxSlides - 1;
    } else {
      // else keep coming back
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = () => {
    createDots();
    activateDot(0);
    goToSlide(0);
  };

  init();
  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });

  dotContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
/*
----------------- LECTURES ------------------

// Selecting elements


 document.querySelector();
 document.querySelectorAll();


// Creating and inserting  elements


  insertAdjacentHTML();
  document.createElement('div');


  getComputedStyle();
  setProperty();


// Data Attributes
// const logo = document.querySelector(".nav__logo");
// console.log(logo.dataset.createBy);

// window scroll

  window.scrollTo(sectionCoords.left + window.pageXOffSet,sectionCoords.top + window.pageYOffSet)



// Event Propagation in Practice
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)}`;

*/
