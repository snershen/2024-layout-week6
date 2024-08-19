import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const hitoSwiper = new Swiper(".hito-swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,
  allowTouchMove: true,
  breakpoints: {
    768: {
      allowTouchMove: false,
    },
  },
});

const hitoListEl = document.querySelector(".hito-list");

if (hitoListEl) {
  hitoListEl.addEventListener("click", (e) => {
    if (e.target.nodeName === "A") {
      e.preventDefault();

      const allButtons = hitoListEl.querySelectorAll("a");
      allButtons.forEach((button) => {
        button.classList.remove("bg-secondary-100");
      });

      e.target.classList.add("bg-secondary-100");

      const num = e.target.dataset.num;
      hitoSwiper.slideTo(num, 500);
    }
  });
}

const lifeSwiper = new Swiper(".swiper-life", {
  slidesPerView: 1,
  allowTouchMove: false,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      allowTouchMove: true,
    },
  },
  navigation: {
    nextEl: ".life .swiper-next-custom",
    prevEl: ".life .swiper-prev-custom",
  },
});

const articleSwiper = new Swiper(".article-swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  pagination: {
    el: ".article .swiper-navigation-custom",
    type: "fraction",
  },
  navigation: {
    nextEl: ".article .swiper-next-custom",
    prevEl: ".article .swiper-prev-custom",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
      allowTouchMove: true,
      slidesPerGroup: 2,
      centeredSlides: false,
    },
  },
});

const projectSwiper = new Swiper(".project-swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  centeredSlides: true,
});

function getBreakpoints() {
  let mobile = window.matchMedia("(max-width: 768px)");
  let pad = window.matchMedia("(min-width: 769px)");
  if (mobile.matches) {
    initReadSwiper();
  } else if (pad.matches) {
    initReadSwiper().destroy(false, true);
  }
}

function initReadSwiper() {
  const readSwiper = new Swiper(".read-swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 24,
    breakpoints: {
      767: {
        slidesPerView: 1,
        allowTouchMove: false,
      },
    },
  });
  return readSwiper;
}

window.addEventListener("load", () => {
  getBreakpoints();
});

window.addEventListener("resize", () => {
  getBreakpoints();
  lifeSwiper.slideTo(0);
  readSwiper.slideTo(0);
});
