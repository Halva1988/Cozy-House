const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  navigation: {
    nextEl: '.arrow-right',
    prevEl: '.arrow-left',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1280: {
      slidesPerView: 3
    },
  }
})