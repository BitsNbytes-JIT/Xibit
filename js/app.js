const menu=document.querySelector('#mobile-menu')
const menuLink=document.querySelector('.navbar__menu')

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
})

var side1 = document.getElementById("side1")
window.addEventListener('scroll', () => {
    side1.style.left = -window.pageYOffset + 'px';
})
var side2 = document.getElementById("side2")
window.addEventListener('scroll', () => {
    side2.style.left = window.pageYOffset + 'px';
})