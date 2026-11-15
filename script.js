
// Dark and Light Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });

});

// Automatic Copyright Year
document.getElementById("year").textContent =
    new Date().getFullYear();

