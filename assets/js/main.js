function efeitoParallax() {
    var scrollPos;
    var headerText = document.querySelector('.header-parallax .capa-description');
    scrollPos = window.scrollY;

    if (scrollPos <= 400) {
        headerText.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
        headerText.style.opacity = 1 - (scrollPos / 400);
    }
}

window.addEventListener('scroll', efeitoParallax);












