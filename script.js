/* scrolling menu */ 

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToId);
})

// identifies the event (click) and scrolls to href
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
            element.innerHTML += character}, 75 * i ) // 75 ms delay
    }); 
}
typeWriter(title)


/*page items effect*/

const target = document.querySelectorAll('[data-animation]');
const animate = 'animate';

function scrollAnimation() {
    const windowTop = window.scrollY + (window.innerHeight * 3 / 4); 
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

/* light theme */
const html = document.querySelector('html') 
const chk = document.getElementById('chk')

const getStyle = (element, style) => 
    window.getComputedStyle(element).getPropertyValue(style)

// initial and light mode colors + dinamic switch function 
const initialColors = {
    bg1: getStyle(html, '--bg1'),
    bg2: getStyle(html, '--bg2'),
    bg3: getStyle(html, '--bg3'),
    colorTexts: getStyle(html, '--color-texts'),
}

const lightMode = {
    bg1: "#ffffff",
    bg2: "#d8d3d3",
    bg3: "#fafafa",
    colorTexts: "#000000"
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase() // search for regEX

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])
    )
} 

chk.addEventListener('change', ({target}) => {
    target.checked ? changeColors(lightMode) : changeColors(initialColors)
})


