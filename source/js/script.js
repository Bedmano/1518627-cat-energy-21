const menu = document.querySelector(".bar__toggle");
const nav = document.querySelector(".main-nav");
const slider = document.querySelector(".slider");
const after = document.querySelector(".slider__after");
const before = document.querySelector(".slider__before");
const afterButton = document.querySelector(".slider-bar__text--after");
const beforeButton = document.querySelector(".slider-bar__text--before");
const sliderItemAfter = document.querySelector(".slider-list__item--after");
const sliderItemBefore = document.querySelector(".slider-list__item--before");

window.onload = () => {
  nav.classList.remove("main-nav--nojs");
  menu.classList.add("bar__toggle--show");
};
if (screen.width <= 767) {
  menu.addEventListener("click", () => {
    menu.classList.toggle("bar__toggle--hamburger");
    menu.classList.toggle("bar__toggle--cross");
    nav.classList.toggle("main-nav--nojs");
  });
  if (slider) {
    afterButton.addEventListener("click", () => {
      after.classList.add("slider--current");
      before.classList.remove("slider--current");
      sliderItemAfter.classList.add("slider-list__item--current");
      sliderItemBefore.classList.remove("slider-list__item--current");
    });

    beforeButton.addEventListener("click", () => {
      after.classList.remove("slider--current");
      before.classList.add("slider--current");
      sliderItemAfter.classList.remove("slider-list__item--current");
      sliderItemBefore.classList.add("slider-list__item--current");
    });
  }
}

// const sliderButton = document.querySelectorAll(".slider-bar__text");
// for (i = 0; i < sliderButton.length; i++) {
//   sliderButton[i].addEventListener("click", () => {
//     after.classList.toggle("slider--current");
//     before.classList.toggle("slider--current");
//   });
// }
