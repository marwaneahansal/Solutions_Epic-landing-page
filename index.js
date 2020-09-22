
document.addEventListener('scroll', () => {
    if(window.pageYOffset > (document.getElementById("aboutUs").offsetTop - 100)) {
        document.querySelector('.navbar').classList.add('fixed');
        document.querySelector('.fixed').style = "width: 100%";
        
    } else {
        document.querySelector('.navbar').classList.remove('fixed');
    }
});
gsap.to('#loading', 3, {
    delay: 2,
    top: "-110%",
    ease: Expo.easeInOut,
    onComplete: () => {
        document.getElementById('landing').classList.remove('anime');
    }
});

// gsap.from(".homeSection", 3, {
//     delay: 2.3,
//     opacity: 0,
//     y: 50,
//     ease: Expo.easeInOut
// });


// gsap.from(".logo", 3, {
//     delay: 2.2,
//     opacity: 0,
//     y: -100,
//     ease: Expo.easeInOut
// });


// gsap.from("nav ul", 3, {
//     delay: 2.2,
//     opacity: 0,
//     y: -100,
//     ease: Expo.easeInOut
// });






const navSlide = () => {
    const menuToggle = document.querySelector('.menuToggle');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        menuToggle.classList.toggle('toggle');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = "";
            } else link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        });
    });

    
}

navSlide();
