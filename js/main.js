/**
 * Created by sbusse on 05.04.2015.
 */

$(window).stellar({
	horizontalScrolling: false,
	verticalScrolling: true,
	positionProperty: 'transform',
	hideDistantElements: false,
	verticalOffset: 300,
	responsive: true
});

// $.stellar('refresh');

$(".product.green .content").click(function(event) {

	$(".product.green").toggleClass("open");
	setTimeout(function() {
		$(window).stellar('refresh');
	}, 510);
});
