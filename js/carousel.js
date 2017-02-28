/* Realization of carousel with the Slick plugin */

$('.slick').slick({
	prevArrow: '<i class="fa fa-angle-left slick-prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right slick-next" aria-hidden="true"></i>',
    responsive: [
    	{
    		breakpoint: 883,
    		settings: {
    			variableWidth: true
    		}
    	}
    ]
});