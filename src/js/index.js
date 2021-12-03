import "../sass/index.scss";
import "tailwindcss/tailwind.css";
const subnav1 = document.querySelector(".sub-nav1");
const subnav2 = document.querySelector(".sub-nav2");
const subnav3 = document.querySelector(".sub-nav3");
const navs = document.querySelectorAll(".hovers");
const hero = document.querySelector(".main-hero-content");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const productMenu = document.querySelector(".productmenu");
const productactive = document.querySelector(".product-active");
const companymenu = document.querySelector(".companymenu");
const companyactive = document.querySelector(".company-active");
const connectmenu = document.querySelector(".connectmenu");
const connectactive = document.querySelector(".connect-active");

productMenu.addEventListener("click", () => {
  productactive.classList.toggle("hidden");
  companyactive.classList.add("hidden");
  connectactive.classList.add("hidden");
});
companymenu.addEventListener("click", () => {
  companyactive.classList.toggle("hidden");
  productactive.classList.add("hidden");
  connectactive.classList.add("hidden");
});
connectmenu.addEventListener("click", () => {
  connectactive.classList.toggle("hidden");
  companyactive.classList.add("hidden");
  productactive.classList.add("hidden");
});

hamburgerIcon.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hidden");
});

hero.addEventListener("click", () => {
  subnav1.classList.add("hidden");
  subnav2.classList.add("hidden");
  subnav3.classList.add("hidden");
});

navs.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    if (e.target.classList.contains("hover1")) {
      subnav1.classList.toggle("hidden");
      subnav2.classList.add("hidden");
      subnav3.classList.add("hidden");
    }
    if (e.target.classList.contains("hover2")) {
      subnav2.classList.toggle("hidden");
      subnav1.classList.add("hidden");
      subnav3.classList.add("hidden");
    }
    if (e.target.classList.contains("hover3")) {
      subnav3.classList.toggle("hidden");
      subnav1.classList.add("hidden");
      subnav2.classList.add("hidden");
    }
  });
});
