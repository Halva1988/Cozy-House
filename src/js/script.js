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

const pets = document.querySelectorAll('.pets__card');
const dogName = ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Charly', 'Scarlet', 'Freddie'];

for(let i = 0; i < pets.length; i++) {
  pets[i].setAttribute('id', `${dogName[i]}`)
}