const swiper = new Swiper('.swiper', {
  // Optional parameters
  // wrapperClass: 'hero__swiper-wrapper',
  // slideClass: 'hero__swiper-slide',
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  effect: 'slide',
  grabCursor: true,
  speed: 1000,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // bulletClass: 'hero__swiper-pagination-bullet',
    // bulletActiveClass: 'hero__swiper-pagination-bullet-active',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
