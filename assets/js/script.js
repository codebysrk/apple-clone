const swiper = new Swiper('.swiper', {
  // Default (Desktop) settings
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1.5, // Show 3 slides on desktop
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
    // when window width is <= 768px (Tablet)
    768: {
      slidesPerView: 2, // Show 2 slides on tablets
      spaceBetween: 20
    },
    // when window width is <= 480px (Mobile)
    480: {
      slidesPerView: 1.2, // Show 1 and a bit of the next on mobile
      spaceBetween: 10
    }
  }
});