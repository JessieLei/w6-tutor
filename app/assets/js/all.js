$(function () {
  console.log("Hello Bootstrap5");
});

$(".ham-icon").click(function (e) {
  e.preventDefault();
  $(".dropdown").toggleClass("active");
});

var swiper = new Swiper(".course-swiper", {
  autoplay: {
    disableOnInteraction: false,
    delay: 0,
  },
  speed: 1500,
  loop: true,
  spaceBetween: 16,
  slidesPerView: 3,
  //多欄
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 9,
    },
  },
});

const swiper2 = new Swiper(".feedbackSwiper", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
