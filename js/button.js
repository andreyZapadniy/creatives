$('.down').on('click', function(e) {
 e.preventDefault();
$(this).toggleClass('down-active');
$('.btn').toggleClass('btn-active');
});