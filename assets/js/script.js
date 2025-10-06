const swiper = new Swiper('.swiper', {
  // Default (Desktop) settings
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1, // Base slidesPerView
  spaceBetween: 30,
  centeredSlides: true, // Slides ko center mein rakhein
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
    // Mobile: 1.2 slides, thodi peek dikhegi
    320: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    // Tablet: 2 slides, zyada chaudi
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // Desktop: 2.5 slides, har slide kafi chaudi dikhegi
    1024: {
      slidesPerView: 1.2, // Yahan badlav kiya gaya hai
      spaceBetween: 30,
    },
  },
});
