const menuButton = document.getElementById('main-nav-button');
const navMenu = document.getElementById('main-nav');

menuButton.addEventListener('click', () => {
  navMenu.toggleAttribute('data-visible');
});
