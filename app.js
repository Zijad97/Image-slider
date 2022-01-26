"use strict";
const images = document.querySelectorAll("img");
const btns = document.querySelectorAll(".mini");
console.log(images);
let slide = 0;
const show = function () {
  images.forEach((img, idx) => {
    img.style.transform = `translateX(${(idx - slide) * 100}%)`;
  });
  btns.forEach((btn) => {
    btn.classList.remove("gray");
    btns[slide].classList.add("gray");
  });
};
show();
const right = document.querySelector(".right");
const left = document.querySelector(".left");

const toRight = function () {
  if (slide === images.length - 1) slide = 0;
  else slide++;
  show();
};

const toLeft = function () {
  if (slide === 0) slide = images.length - 1;
  else slide--;
  show();
};
right.addEventListener("click", toRight);
left.addEventListener("click", toLeft);

btns.forEach((btn, i) =>
  btn.addEventListener("click", function () {
    slide = i;
    show();
  })
);
