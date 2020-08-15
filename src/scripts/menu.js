const burger__menu = document.querySelector('.burger-menu__link');
const main__menu = document.querySelector('.main-menu');
const main__menuBtn = document.querySelector('.main-menuBtn');

burger__menu.addEventListener('click', function (e) {
	e.preventDefault();
	main__menu.style["display"] = 'flex';

});

main__menuBtn.addEventListener('click', function (e) {
	e.preventDefault();
	main__menu.style["display"] = 'none';
})


