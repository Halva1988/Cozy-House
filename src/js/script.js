
const burger = document.querySelector('.burger')
const navigation = document.querySelector('.header__navigation')

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_pressed')
  navigation.classList.toggle('header__navigation_burgerIsActive')
})

const pets = document.querySelectorAll('.pets__card');
const dogName = ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Charly', 'Scarlet', 'Freddie'];
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal__close-button')

for (let i = 0; i < pets.length; i++) {
  pets[i].setAttribute('id', `${dogName[i]}`)
}

const learn = document.querySelectorAll('.learn');

learn.forEach(element => element.addEventListener('click', (e) => {
  let card = e.target.closest('.pets__card');
  fetch('../../dataBase/pets.txt')
    .then(response => response.json())
    .then(result => {
      result.map(pet => {
        if (pet.name === card.id) {
          modal.style.display = 'flex'
          modal.querySelector('.modal__img').setAttribute('src', `${pet.img}`)
          modal.querySelector('.modal__pet-name').innerHTML = pet.name
          modal.querySelector('.modal__pet-breed').innerHTML = pet.breed
          modal.querySelector('.modal__pet-description').innerHTML = pet.desc
        }
      })
    })
    .catch(err => {
      console.log("error: ", err);
    })
}))

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})