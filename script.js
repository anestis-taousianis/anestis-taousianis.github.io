// Typed text (skipped safely if the library fails to load)
if (window.Typed) {
    new Typed(".input", {
        strings: ["Electronic Engineer", "Junior Web Developer", "IoT & Embedded Developer"],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });
}

// Mobile menu
const toggleBtn = document.querySelector('.togglebtn');
const navLinks = document.querySelector('.navlinks');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < trigger) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
