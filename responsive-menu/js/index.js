
const chevronClick = (index) => {
  const links = document.querySelectorAll('#link')
  const chevron = links[index].children[0];
  const subMenu = links[index].nextElementSibling;

  if (chevron.classList.contains('rotate')) {
    chevron.classList.remove('rotate');

    subMenu.classList.add('hide');
    subMenu.classList.remove('show');
  } else {
    chevron.classList.add('rotate');

    subMenu.classList.remove('hide');
    subMenu.classList.add('show');
  }
}

const toggleNav = (e) => {
  const nav = document.getElementById('navbar');
  const brandingName = document.getElementById('branding-name');
  const brImg = document.getElementById('branding-img');

  if (e.target.classList.contains('fa-chevron-left')) {
    e.target.classList.remove('fa-chevron-left');
    e.target.classList.add('fa-chevron-right');
    hideMainMenu();
    showSmMenu();
    styleBranding(true);
    
    // nav
    nav.style.width = '100px';
    
    // brImg
    brandingName.style.display = 'none';
    brImg.style.textAlign = 'center';
  } else {
    e.target.classList.remove('fa-chevron-right');
    e.target.classList.add('fa-chevron-left');
    showMainMenu();
    hideSmMenu();
    styleBranding(false);

    // nav
    nav.style.width = '280px';
    brandingName.style.display = 'flex';
  }
}

const hideMainMenu = () => {
  const uls = document.querySelectorAll('.list-group');
  uls.forEach((ul) => ul.style.display = 'none');
}

const showMainMenu = () => {
  const uls = document.querySelectorAll('.list-group');
  uls.forEach((ul) => ul.style.display = 'block');
}

const hideSmMenu = () => {
  const uls = document.querySelectorAll('.sm-list-group');
  uls.forEach((ul) => ul.style.display = 'none');
}

const showSmMenu = () => {
  const uls = document.querySelectorAll('.sm-list-group');
  uls.forEach((ul) => ul.style.display = 'flex');
}

const styleBranding = (style) => {
  const branding = document.querySelector('.branding');

  if (style) {
    branding.style.justifyContent = 'center';
  } else {
    branding.style.removeProperty('justify-content');
  }
}

addEventListener('DOMContentLoaded', () => {
  hideSmMenu();
})