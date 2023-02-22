/* scrolling menu */ 

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

// para cada a do menu que for clicado, retorna função scrollToId
menuItems.forEach(item => {
    item.addEventListener('click', scrollToId);
})

// identifica o evento(click) e desce até o href
function scrollToId(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 130,
        behavior: 'smooth',
    })
}

/* typing effect */

const title = document.querySelector('#color');

function typeWriter(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach(function(character, i) {
        setTimeout(function() {
            element.innerHTML += character}, 75 * i ) // exibe letra a letra com 75 ms de delay
    }); 
}
typeWriter(title)


/*page items effect*/

const target = document.querySelectorAll('[data-animation]');
const animate = 'animate';

function scrollAnimation() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3 / 4); 
    target.forEach(function(element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(animate)
        }
        console.log(element.offsetTop);
    })
}

window.addEventListener('scroll', function(){
    scrollAnimation();
})

/* hamburguer menu */

var menuToggle =  document.querySelector('.menuToggle');
var nav = document.querySelector('header');
var dark = document.querySelector('.dark');

menuToggle.addEventListener('click', menuOnClick);

function menuOnClick() {
    menuToggle.classList.toggle('on');
    nav.classList.toggle('on');
    dark.classList.toggle('on');
}

/* dark-theme */

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})