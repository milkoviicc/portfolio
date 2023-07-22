let logoName = document.querySelector('.name-logo');
let navbar = document.querySelector('.main');
logoName.innerText = "milkoviicc";

window.addEventListener('scroll', (event) => {
    let scrollPos = this.scrollY;

    if(scrollPos > 0) {
        navbar.classList.add('onscroll');
    } else {
        navbar.classList.remove('onscroll');
    }
});


var body = document.body;
var scrollBtn = document.getElementById('scrollBtn');


window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll);
    if(scroll >= 800 ) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// MOBILE MENU

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navbarButton = document.querySelector('.navbarButton');
const closeNavbar = document.querySelector('.closeNavbar');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.add('open-menu');
};
  
navbarButton.addEventListener('click', mobileMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.open-menu');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.remove('open-menu');
  }
};

closeNavbar.addEventListener('click', hideMobileMenu);
menuLinks.addEventListener('click', hideMobileMenu);


// Scrolling animation

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));
