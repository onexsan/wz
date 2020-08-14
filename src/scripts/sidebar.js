const openBtn = document.querySelector('.sidebar-menu__row');
const menu = document.querySelector('.sidebar-menu__row--insides');

$('.sidebar-menu__row').on('click', function (e) {
	if ($(e.target).hasClass('inactive')) {
		menu.style["display"] = 'flex';
		(e.target).classList.remove('inactive');
		(e.target).classList.add('active');

	} else {
		menu.style["display"] = 'none';
		(e.target).classList.remove('active');
		(e.target).classList.add('inactive');
	}

});