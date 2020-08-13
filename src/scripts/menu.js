const openBtn = document.querySelector('.app-menu__link');
const menu = document.querySelector('.hover-menu');
const openBurger = document.querySelector('#menu__toggle');
const header = document.querySelector('.header');
const contacts = document.querySelector('.contacts');
const lineRed = document.querySelector('.menu__btn');
const logo = document.querySelector('.header__logo');


openBtn.addEventListener('mouseenter', function (e) {
  e.preventDefault();
  menu.style["display"] = 'flex';

});

menu.addEventListener('mouseleave', function () {
  menu.style['display'] = 'none';
});


openBurger.addEventListener('click', function (e) {
  if (e.currentTarget.checked) {
    menu.style["display"] = 'flex';
    header.style['backgroundColor'] = 'white';
    contacts.style['backgroundColor'] = '#df271c';
    contacts.style['color'] = 'white';

    logo.classList.add('header__logo--red');
    lineRed.classList.add('menu__btn--red-bg');

  } else {
    menu.style["display"] = 'none';
    //lineRed.classList.remove('menu__btn--red-bg');
  }

});



