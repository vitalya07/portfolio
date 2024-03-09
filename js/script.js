const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close');
        
hamburger.addEventListener('click', () =>{
    menu.classList.add('active');
});   
close.addEventListener('click', ()=>{
    menu.classList.remove('active');
}); 
const counters = document.querySelectorAll('.skills__ratings-counter'),
        Lines = document.querySelectorAll('.skills__ratings-line span');
counters.forEach((item, i) => {
    Lines[i].style.width = item.innerHTML;
});     

new WOW().init();

const scrollButton = document.getElementById('scrollButton');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 1000) {
    scrollButton.classList.add('pageUp-active');
  } else {
    scrollButton.classList.remove('pageUp-active');
  }
});

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
};






