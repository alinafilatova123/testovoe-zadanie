const openModal = document.querySelector('.open-modal-btn')
const closeModal = document.querySelector('.modal__close-btn')
const modal = document.querySelector('.modal')

const phone = document.querySelector('.phone-number')
const submitBtn = document.querySelector('.modal__submit-btn')
const error = document.querySelector('.error-message')
const form = document.querySelector('.modal__content-form')

openModal.addEventListener('click', ()=>{
  window.scrollTo(0,0)
  modal.classList.add('show')
})
closeModal.addEventListener('click', ()=>{
  modal.classList.remove('show')
})

submitBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  if(phone.value.length === 0) {
    error.classList.add('visible')
    error.innerText = 'Заполните все поля'
    submitBtn.classList.add('disabled')
  } else if(isNaN(phone.value) || phone.value.length < 11) {
    error.classList.add('visible')
    error.innerText = 'Введите валидный номер'
    submitBtn.classList.add('disabled')
  } else {
    error.classList.remove('visible')
    submitBtn.classList.remove('disabled')
    modal.classList.remove('show')
    form.reset()
  }
})

