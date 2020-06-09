let button = document.querySelector('.hamburger');
let nav = document.querySelector('.mobile-nav')
let cancel = document.querySelector('.cancel')
let isDisplayed = false

button.addEventListener('click',()=>{
  if(!isDisplayed){
    nav.classList.add('display')
    isDisplayed = true
  }
})
cancel.addEventListener('click',()=>{
  if(isDisplayed){
    nav.classList.remove('display')
    isDisplayed = false
  }
})