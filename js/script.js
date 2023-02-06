var swiper = new Swiper(".mySwiperBanner", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiperBlog", {
  slidesPerView: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var mySwiper = new Swiper(".swiper-container", {
  observer: true,
  observeParents: true,
  //autoplay: true,
  speed: 200,
  loop: true,
  slidesPerView: 5,
  spaceBetween: 15,
  slidesPerGroup: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    960: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    720: {
      slidesPerView: 3,
      spaceBetween: 5,
      slidesPerGroup: 1,
    },
  },
});
