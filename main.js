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
  delay: 500,
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

ScrollReveal().reveal(".card--blog--1", {
  ...scrollRevealOption,
  origin: "left",
  delay: 2000,
});
ScrollReveal().reveal(".card--blog--2", {
  ...scrollRevealOption,
  origin: "top",
  delay: 2000,
});
ScrollReveal().reveal(".card--blog--3", {
  ...scrollRevealOption,
  origin: "right",
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
  delay: 1000,
});


ScrollReveal().reveal(".animate", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 1000,
});

const targetNumber = 252;
const duration = 4000; 
let isAnimating = false;

const increment = targetNumber / (duration / 16);

function updateNumber(currentNumber) {
  document.getElementById('number').textContent = Math.round(currentNumber);

  if (currentNumber < targetNumber) {
    requestAnimationFrame(() => updateNumber(currentNumber + increment));
  }
}

const targetNumber1 = 30;
const duration1 = 3500; 
let isAnimating1 = false;

const increment1 = targetNumber1 / (duration1 / 16);

function updateNumber1(currentNumber1) {
  document.getElementById('number1').textContent = Math.round(currentNumber1);

  if (currentNumber1 < targetNumber1) {
    requestAnimationFrame(() => updateNumber1(currentNumber1 + increment1));
  }
}


window.addEventListener('scroll', () => {
  if (!isAnimating1) {
    isAnimating1 = true;
    updateNumber1(0);
  }
});

window.addEventListener('scroll', () => {
  if (!isAnimating) {
    isAnimating = true;
    updateNumber(0);
  }
});

ScrollReveal().reveal(".animate", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 1000,
});

ScrollReveal().reveal(".number", {
  origin: "bottom",
  // delay: 100,
});
ScrollReveal().reveal(".number1", {
  origin: "bottom",
  // delay: 1000,
});

// script.js
document.addEventListener("DOMContentLoaded", function() {
  var accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        document.querySelectorAll(".accordion-content").forEach(function(el) {
          el.style.maxHeight = null;
        });
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
