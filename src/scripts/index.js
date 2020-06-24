const menuButton = document.getElementById("main-nav-button");
const navMenu = document.getElementById("main-nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.toggleAttribute("data-visible");
});
