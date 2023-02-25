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
const html = document.querySelector('html') 
const chk = document.getElementById('chk')

// pegar valores direto do computed style (https://bityli.com/Zng7e)
const getStyle = (element, style) => 
    window.getComputedStyle(element).getPropertyValue(style)

// define as cores iniciais e de modo escuro + função dinamica para fazer a alteração 
const initialColors = {
    bg1: getStyle(html, '--bg1'),
    bg2: getStyle(html, '--bg2'),
    bg3: getStyle(html, '--bg3'),
    colorTexts: getStyle(html, '--color-texts'),
    colorSubtexts: getStyle(html, '--color-subtexts'),
    subtextsPanel: getStyle(html, '--subtexts-panel')
}

const darkMode = {
    bg1: "#232c35",
    bg2: "#34383b",
    bg3: "#262e36",
    colorTexts: "#f0f6fc",
    colorSubtexts: "#925a5a",
    subtextsPanel: "#6e0a0a94"
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase() // busca por expressão regular

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])
    )
} 

chk.addEventListener('change', ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})


