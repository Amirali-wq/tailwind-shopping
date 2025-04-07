const burgerBtn = document.getElementById('burgerBtn');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');
let menuOpen = false;
function toggleMenu() {
    menuOpen = !menuOpen;
    sideMenu.classList.toggle('translate-x-full', !menuOpen);
    sideMenu.classList.toggle('translate-x-0', menuOpen);
  }
burgerBtn.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', () => {
  menuOpen = false;
  sideMenu.classList.add('translate-x-full');
  sideMenu.classList.remove('translate-x-0');
});
