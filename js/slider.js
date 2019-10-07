$('.menu-btn').on('click', function(e) {
	e.preventDefoult;
$(this).toggleClass('menu-btn_active');
$('.menu-nav').toggleClass('menu-nav_active');
});