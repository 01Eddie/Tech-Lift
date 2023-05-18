// menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
// Scroll sections active link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    const top = window.scrollY;

    sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});


// sticky navbar
window.onscroll = () =>{
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // remove menu icon navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x')
    menuIcon.classList.remove('active')
};

// Swiper
  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // dark light mode
  let darkModeIcon = document.querySelector('#darkMode-icon');
  darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
  }
  // scroll reveal
  ScrollReveal ({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  })
  ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
  ScrollReveal().reveal('.profession-container, .services-container, .portafolio-box, .testimonial-wrapper, .contact form', {origin: 'bottom'});
  ScrollReveal().reveal('.home-content h1, .about-img img', {origin: 'left'});
  ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', {origin: 'right'});
