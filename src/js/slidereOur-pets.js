const swiper = new Swiper('.swiper', {

  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      autoHeight: false,
    },
    768: {
      slidesPerView: 3,
      slidesPerColumn: 3,
      autoHeight: false,
    },
    1280: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      autoHeight: false,
      spaceBetween: 30,
    },
  }
})

const numberSlide = document.querySelector('.page-number')
numberSlide.textContent = 1

swiper.on("slideChange", function(sliderValue) {
  numberSlide.textContent = sliderValue.activeIndex + 1
});
