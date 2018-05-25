// alert(1);
define(["jquery","banner"],function(jq,banner){
    // console.log($);
    // console.log(myBanner);
    // $.fn.banner=myBanner;

    // console.log(jq)
    
   new banner(".myBanner-wrapper",{
        navigation:{
            prevEl:".myBanner-prev",
            nextEl:".myBanner-next"
        },
        pagination:{
            el:".myBanner-pagination"
        },
        direction:"fade",
        loop:true
    }); 
    
    // $("#topAd_shade").hover(function () {
	// 	$(this).css("opacity","0.8");
	// },function(){
	// 	$(this).css("opacity","1");
	// 	// console.log($(this))
	// })


// 	$(".topline_button_show").hover(function() {
// 	$(this).css({
// 		"boxShadow":"0 0 5px #ccc",
// 		"border": "1px solid #B5B5B5",
// 		"border_bottom":"transparent",
// 		"marginTop":"-1px",
// 		"Left":"-2px"
// 	})
// 	// console.log($(this).eq(0));
// 	$(this).find(".topline_show").css({
// 		"display":"block",
// 	});
// 	}, function() {
// 	$(this).css({
// 		"box-shadow":"none",
// 		"border":"none",
// 		"marginTop":"0px"
// 	});
// 	$(this).find(".topline_show").css('display', 'none');
// });



	// $("#logo").find("img").hover(function() {
	// 	$(this).css("opacity","0.8");
	// }, function() {
	// 	$(this).css("opacity","1");
	// });



	// $(".navi_theme").find("Li").hover(function() {
	// 	$(this).css('opacity', '0.8');
	// }, function() {
	// 	$(this).css('opacity', '1');;
	// })

	$("#login").hover(function(){
		$("#login_detail").show();
	},function(){
		$("#login_detail").hide();
	})
	$(".myBanggou").hover(function(){
		$(".myBangou_show").show();
	},function(){
		$(".myBangou_show").hide();
	})

	$(".nav_box li .navi").each(function(){
		// console.log($(this))
		$(this).hover(function(){
			// console.log("here")
			if($(this).find(".navi_more")){
				// console.log("has")
				$(this).find(".navi_more").show();
			}
		},function(){
			if($(this).find(".navi_more")){
				$(this).find(".navi_more").hide();
			}
		})
	})

})
