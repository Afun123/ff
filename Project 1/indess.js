const iconToggle = document.querySelector('.dent');
const navbarMenu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu-link');
const iconClose = document.querySelector('.toggle_icon');

if (iconToggle) {
    iconToggle.addEventListener('click', () => {
        navbarMenu.classList.add('active');
    });
  };
  if (iconClose) {
    iconClose.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
  };
  if (menuLink) {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
  };

