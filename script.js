// document.addEventListener('DOMContentLoaded', function() {
//     const burger = document.querySelector('.burger-menu');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');

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
// });


document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger-menu");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        // Toggle Nav
        nav.classList.toggle("nav-active");
        burger.classList.toggle("active");

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 7 + 0.3
                }s`;
            }
        });

        // Burger Animation
        burger.classList.toggle("toggle");
    });

    // Smooth scrolling for navigation links
    document
        .querySelectorAll(".nav-link")
        .forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                nav.classList.toggle("nav-active");
                burger.classList.toggle("active");
                burger.classList.toggle("toggle");
                navLinks.forEach((link, index) => {
                    link.style.animation = "";
                });

                document
                    .querySelector(this.getAttribute("href"))
                    .scrollIntoView({
                        behavior: "smooth",
                    });
            });
        });

    function closeAllFAQ(question) {
        let FaqItem = document.querySelectorAll(".faq-item");
        FaqItem.forEach((item) => {
            if (question != item.children[0])
                item.children[0].classList.remove("active");
            item.style.borderBottom = "1px solid #e0e0e0";
            let answer = item.children[1];
            answer.style.display = "none";
        });
    }

    // Add FAQ toggle functionality
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach((question) => {
        const answer = question.nextElementSibling;
        answer.style.display = "none";
        question.addEventListener("click", () => {
            closeAllFAQ(question);
            question.classList.toggle("active");
            answer.style.display = question.classList.contains(
                "active"
            )
                ? "block"
                : "none";
        });
    });

    // Parallax effect
    window.addEventListener("scroll", function () {
        const parallaxBgs =
            document.querySelectorAll(".parallax-bg");
        parallaxBgs.forEach((bg) => {
            const scrollPosition = window.pageYOffset;
            bg.style.transform = `translateY(${
                scrollPosition * 0.5
            }px)`;
        });

        // Fade-in animation on scroll
        const fadeElements = document.querySelectorAll(".fade-in");
        fadeElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight * 0.8) {
                element.classList.add("visible");
            }
            else{
                element.classList.remove("visible");
            }
        });

        // header bg
        var header = document.querySelector('header');
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
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
