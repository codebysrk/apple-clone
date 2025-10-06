const swiper = new Swiper('.swiper', {
  // Default (Desktop) settings
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});