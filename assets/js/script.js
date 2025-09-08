//Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Sticky header 
window.onscroll = () => {
    sections.forEach(sec => {
     let top = window.scrollY;   
     let offset = sec.offsetTop - 100;
     let height = sec.offsetHeight;
     let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}
let progressBars = document.querySelectorAll('.progress');

progressBars.forEach(bar => {
    let percent = parseInt(bar.querySelector('h3 span').innerText.replace('%',''));
    let innerBar = bar.querySelector('.bar span');
    innerBar.style.width = percent + '%';
    innerBar.style.transition = 'width 1.5s ease-in-out';
    innerBar.style.display = 'block';
    innerBar.style.height = '100%';
    innerBar.style.backgroundColor = '#00abf0';
    innerBar.style.borderRadius = '5px';
});

// toggle menubar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}