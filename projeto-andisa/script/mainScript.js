let menu = document.querySelector('#menu');
let button = document.querySelector('#hamburger');

button.addEventListener('click', () => {
    menu.classList.toggle('active');
});
