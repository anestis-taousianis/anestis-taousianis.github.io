// Typed text
new Typed(".input", {
    strings: ["Frontend Developer"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});
const toggleBtn = document.querySelector('.togglebtn');
const navLinks = document.querySelector('.navlinks');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
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
