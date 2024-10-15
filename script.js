document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // burger.addEventListener('click', () => {
    //     // Toggle Nav
    //     nav.classList.toggle('nav-active');
    //     burger.classList.toggle('active');

    //     // Animate Links
    //     navLinks.forEach((link, index) => {
    //         if (link.style.animation) {
    //             link.style.animation = '';
    //         } else {
    //             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    //         }
    //     });

    //     // Burger Animation
    //     burger.classList.toggle('toggle');
    // });
    
    // Smooth scrolling for navigation links
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         nav.classList.toggle('nav-active');
    //         burger.classList.toggle('active');
    //         burger.classList.toggle('toggle');
    //         navLinks.forEach((link, index) => {
    //             link.style.animation = '';
    //         });

    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });
});

let lastScrollTop = 0;
let navbar = document.querySelector('header');
let timer;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        clearTimeout(timer);
        timer = setTimeout(() => {
            navbar.classList.add('hidden');
        }, 1000);
    } else {
        // Scrolling up
        clearTimeout(timer);
        navbar.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop;
});
