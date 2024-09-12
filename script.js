// script.js
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav ul');
    const toggleMenu = document.querySelector('.menu-toggle');

    toggleMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
