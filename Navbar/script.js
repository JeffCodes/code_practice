const navLinks = document.getElementById('navLinks');
const menuIcon = document.getElementById('icon');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('openNav');
})