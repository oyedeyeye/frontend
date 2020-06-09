const hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");
const navList = document.querySelector(".nav-list");
const list = document.querySelectorAll(".nav-list li");
hamburger.addEventListener("click", function (e) {
  navList.classList.toggle("open");
});
