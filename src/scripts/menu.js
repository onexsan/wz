const burger__menu = document.querySelector('.burger-menu__link');
const main__menu = document.querySelector('.main-menu');
const main__menuBtn = document.querySelector('.main-menuBtn');

const order__call = document.querySelector('.call__link');
const ordered = document.querySelector('.ordered');
const orderedBtn = document.querySelector('.orderedBtn-closed');

burger__menu.addEventListener('click', function (e) {
	e.preventDefault();
	main__menu.style["display"] = 'flex';

});

main__menuBtn.addEventListener('click', function (e) {
	e.preventDefault();
	main__menu.style["display"] = 'none';
});

order__call.addEventListener('click', function (e) {
	e.preventDefault();
	ordered.style["display"] = 'flex';

});

orderedBtn.addEventListener('click', function (e) {
	e.preventDefault();
	ordered.style["display"] = 'none';
})


