let hamburger = document.querySelector(".hamburger");
let navlinks = document.querySelector(".nav-links");
let navlink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navlink.forEach(l => l.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navlinks.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navlinks.classList.remove("active");
}
