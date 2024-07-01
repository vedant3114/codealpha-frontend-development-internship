
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});


const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
           
            document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
        }
    });

    
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    
    if (!navbar.contains(event.target) && window.scrollY > 100) {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
});

ScrollReveal({ 
    distance :'80px',
    duration : 2000,
    delay : 200,
 });

 ScrollReveal().reveal('.home-content , heading' , {origin:'top'});
 ScrollReveal().reveal('.home-img , .services-container , .portfolio-box , .contact form',{origin:'bottom'});
 ScrollReveal().reveal('.home-contact h1, .about-img', {origin:'left'});
 ScrollReveal().reveal('.home-contact p ,  about-content', {origin:'right'});

 const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Problem Solver', 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});
