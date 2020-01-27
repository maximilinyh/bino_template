//slider js import
import Swiper from "swiper";

//slider top init
const sliderTop = () => {
  let swiper = new Swiper(".top-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    loop: true,
    speed: 1200,
    effect: "slide",
    autoplay: {
      delay: 5000
    },
    navigation: {
      nextEl: ".top-slider__next",
      prevEl: ".top-slider__prev"
    }
  });
};

//services sliders init
const sliderServices = () => {
  let swiper1 = new Swiper(".services-content__slider", {
    direction: "vertical",
    mousewheel: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 700,
    effect: "slide",
    pagination: {
      el: "#js-services__pagination",
      clickable: true
    }
  });

  let swiper2 = new Swiper(".services-image__slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 700,
    effect: "fade"
  });

  //control
  swiper1.controller.control = swiper2;
  swiper2.controller.control = swiper1;
  //update sliders on load and resize
  window.addEventListener("resize", () => {
    setTimeout(function() {
      swiper1.update();
      swiper2.update();
    }, 100);
  });
};

//study slider init
const sliderStudy = () => {
  let swiper = new Swiper(".study__slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    loop: true,
    speed: 1200,
    effect: "slide",
    pagination: {
      el: "#js-study-slider-pagination ",
      clickable: true
    }
  });
};

//all sliders init
const slidersInit = () => {
  let sliders = [sliderTop(), sliderServices(), sliderStudy()];
};
slidersInit();
