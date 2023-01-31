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

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const numberSlide = document.querySelector('.page-number')
numberSlide.textContent = 1

next.addEventListener('click', () => {
  numberSlide.textContent = parseInt(numberSlide.textContent) + 1
})

prev.addEventListener('click', () => {
  numberSlide.textContent = parseInt(numberSlide.textContent) - 1
})

swiper.on("slide", function(sliderValue) {

  if (sliderValue > numberSlide) {
    numberSlide.innerHTML = numberSlide + 1;
  } else {
    numberSlide.innerHTML = numberSlide - 1;
  }
});
