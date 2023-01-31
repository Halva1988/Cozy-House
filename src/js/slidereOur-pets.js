const swiper = new Swiper('.swiper', {
  
  

  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 3,
      slidesPerColumn: 3,
      autoHeight: false,
      spaceBetween: 30,
      navigation: {
        enabled: true
      }
    },
    768: {
      slidesPerView: 6,
      slidesPerColumn: 3,
      autoHeight: false,
      spaceBetween: 30,
      navigation: {
        enabled: true
      }
    },
    1280: {
      slidesPerView: 8,
      slidesPerColumn: 2,
      autoHeight: false,
      spaceBetween: 30,
    },
  }
})