const hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");
const navList = document.querySelector(".nav-list");
const links = document.querySelectorAll(".nav-subList");
hamburger.addEventListener("click", function (e) {
  navList.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
