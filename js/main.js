// very useful


$(document).ready(function() {
	//slowly fade out loading image when the website loads
	$(window).load(function() {
		$('.doc-loader').fadeOut('slow');
	});

	//check to see if this is a touch screen, if not, then animate the navigation bar. 
	if (!(Modernizr.touch)) {
		//alert("not touch screen");
		// used to animate the navigation bar on the left
		//animation: when mouse enters, the tab sticks out
		$('.navigation li a').hover(

			function() {
				$(this).stop().animate({
					'paddingLeft': '1.2em',
					'paddingRight': '1.2em'
				}, 'fast');

			},
			function() {
				$(this).stop().animate({
					'paddingLeft': '0.5em',
					'paddingRight': '0.5em'
				}, 'fast');

			}
		);
	}

	//for IE, CSS3 is not supported so this script is needed for it to add new elements
	$(function() {
		if (window.PIE) {
			$('.rounded').each(function() {
				PIE.attach(this);
			});
		}
	});
});