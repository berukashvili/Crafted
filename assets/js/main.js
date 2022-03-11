// Media queries
let mediaDesktop = window.matchMedia("(min-width: 600px)");

// Header sticky
const header = document.querySelector(".header__desktop");
const hero = document.querySelector(".hero");

const headerSticky = function () {
  if (window.scrollY > 88) {
    hero.style.marginTop = 0;
    headerMobileNav.style.marginTop = "88px";
  } else {
    hero.style.marginTop = "-88px";
    headerMobileNav.style.marginTop = 0;
  }
  header.classList.toggle("header-sticky", window.scrollY > 88);
};

const headerSlide = function () {
  const scrolled = window.scrollY;
};

window.addEventListener("scroll", headerSticky);
window.addEventListener("scroll", headerSlide);

// Hamburger menu icon

const headerHamNav = document.querySelector(".header__ham-nav");

let isMenuOpen = false;

headerHamNav.addEventListener("click", function () {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    headerHamNav.classList.add("header__ham-nav__open");
  } else {
    headerHamNav.classList.remove("header__ham-nav__open");
  }
});

// Hamburger menu
const hamNav = document.querySelector(".header__ham-nav");
const headerMobileNav = document.querySelector(".header__nav-mobile");
const navMobileLink = document.querySelector(".header__nav-mobile__list");

hamMenuOpen = function () {
  headerMobileNav.classList.toggle("header__nav-mobile--open");
};

HamMenuClose = function () {
  headerMobileNav.classList.remove("header__nav-mobile--open");
};

hamNav.addEventListener("click", hamMenuOpen);
navMobileLink.addEventListener("click", HamMenuClose);

// Parallax
const heroPrlx = document.querySelector(".hero");
const testimonialsPrlx = document.querySelector(".testimonials");

const PrlxFunc = function () {
  const offset = window.pageYOffset;
  heroPrlx.style.backgroundPositionY = offset * -0.425 + "px";
  testimonialsPrlx.style.backgroundPositionY = offset * -0.04 + "px";
};

window.addEventListener("scroll", PrlxFunc);

// Testimonials slider
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },
  loopAdditionalSlides: 30,
  slidesPerView: 2,
  slideToClickedSlide: true,
  slidesPerGroup: 1,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: ".testimonials__control-item__left",
    prevEl: ".testimonials__control-item__right",
  },

  breakpoints: {
    911: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
