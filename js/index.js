/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
})

// click do menu

let myButton = document.querySelectorAll('.group_button > li a');

myButton.forEach(function(key){
    key.addEventListener('click', function(){
        removeStyles();
        this.setAttribute('class', 'button_click');
    });
})

function removeStyles(){
    for(let i = 0;i < myButton.length;i++){
        document.querySelectorAll('.group_button > li a')[i].removeAttribute('class');
    }
}

// configuração das animações de scroll

ScrollReveal().reveal('.delay_distance', { duration: 2000, delay: 50, distance: '50px' });
ScrollReveal().reveal('.delay', { duration: 2000, delay: 50 });
ScrollReveal().reveal('.delay_500', {delay: 500 });
ScrollReveal().reveal('.easing_title', { easing: 'ease-in', delay:500, distance: '40px' });
ScrollReveal().reveal('.easing_text', { easing: 'ease-in', delay:1000, distance: '40px' });
ScrollReveal().reveal('.easing_card', { easing: 'ease-in-out', delay:500, distance: '10px' });











