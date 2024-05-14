const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".logo-1 img", {
  ...scrollRevealOption,
  origin: "right",
  delay: 500,
});
ScrollReveal().reveal(".logo-2 img", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1000,
});
ScrollReveal().reveal(".logo-3 img", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1500,
});
ScrollReveal().reveal(".logo-4 img", {
  ...scrollRevealOption,
  origin: "right",
  delay: 2000,
});
ScrollReveal().reveal(".logo-5 img", {
  ...scrollRevealOption,
  origin: "right",
  delay: 2500,
});
ScrollReveal().reveal(".logo-6 img", {
  ...scrollRevealOption,
  origin: "right",
  delay: 3000,
});
ScrollReveal().reveal(".logo-7 img", {
  ...scrollRevealOption,
  origin: "right",
  delay: 3500,
});

ScrollReveal().reveal(".quote", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 1500,
});

ScrollReveal().reveal(".card-1", {
  ...scrollRevealOption,
  origin: "right",
  delay: 2000,
});
ScrollReveal().reveal(".card-2", {
  ...scrollRevealOption,
  origin: "top",
  delay: 2000,
});
ScrollReveal().reveal(".card-3", {
  ...scrollRevealOption,
  origin: "left",
  delay: 2000,
});

ScrollReveal().reveal(".review-border--1", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 500,
});

ScrollReveal().reveal(".review-border--2", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1000,
});

ScrollReveal().reveal(".review-border--3", {
  ...scrollRevealOption,
  origin: "left",
  delay: 2000,
});

ScrollReveal().reveal(".review-border--4", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 3000,
});


ScrollReveal().reveal(".animate", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 1000,
});