$(function () {
	$("#topAd_shade").mouseover(function () {
		$(this)
		.stop().animate({opacity:0.8},100);
	})
	$("#topAd_shade").mouseout(function () {
		$(this)
		.stop().animate({opacity:1},100);
	})
	$(".topline_button_show").hover(function() {
	$(this).css({
		"boxShadow":"0 0 5px #ccc",
		"border": "1px solid #B5B5B5",
		"border_bottom":"transparent",
		"marginTop":"-1px",
		"Left":"-2px"
	})
	// console.log($(this).eq(0));
	$(this).find(".topline_show").css({
		"display":"block",
	});
}, function() {
	$(this).css({
		"box-shadow":"none",
		"border":"none",
		"marginTop":"0px"
	});
	$(this).find(".topline_show").css('display', 'none');
});



	$("#logo").find("img").hover(function() {
		$(this).css("opacity","0.8");
	}, function() {
		$(this).css("opacity","1");
	});



	$(".navi_theme").find("Li").hover(function() {
		$(this).css('opacity', '0.8');
	}, function() {
		$(this).css('opacity', '1');;
	});
}) 