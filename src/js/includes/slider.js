//sliders js
import Swiper from "swiper";

//slider top init
const sliderTop = () => {
  let swiper = new Swiper(".top-block-slider", {
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
      nextEl: ".top-block-slider-next",
      prevEl: ".top-block-slider-prev"
    }
  });
};

//services sliders init
const sliderServices = () => {
  let swiper1 = new Swiper(".services-content-slider", {
    direction: "vertical",
    mousewheel: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 700,
    effect: "slide",
    pagination: {
      el: "#js-services-content-slider-pagination",
      clickable: true
    }
  });

  let swiper2 = new Swiper(".services-image-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 700,
    effect: "fade"
  });

  //control
  if ($(".services-content-slider")[0]) {
    swiper1.controller.control = swiper2;
    swiper2.controller.control = swiper1;
  }

  //update sliders on load and resize
 window.addEventListener("resize", ()=> {
    if ($(".services-content-slider")[0]) {
      setTimeout(function() {
        swiper1.update();
        swiper2.update();
      }, 100);
    }
  });
};

//study slider init
const sliderStudy = () => {
  let swiper = new Swiper(".study-slider", {
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
