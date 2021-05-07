const menuIcon = document.getElementById('icon');
const nav = document.getElementById('nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('openNav');
})