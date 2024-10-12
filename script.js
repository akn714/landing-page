window.addEventListener('scroll', function() {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    
    parallaxSections.forEach(section => {
        const distance = window.pageYOffset;
        const speed = 0.5;
        section.style.backgroundPositionY = `${distance * speed}px`;
    });
});