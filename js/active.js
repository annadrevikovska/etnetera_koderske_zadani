/* Selects active link in the menu */

/* Author: © - Anna Drevikovska */

$(document).ready(function() {
	$('.nav-link').click(function() {
		$('.nav-link').removeClass('active');
		$(this).addClass('active');
	});
});