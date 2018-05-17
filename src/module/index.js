// alert("i am index.js");
define(["hover","banner","myjquery"],function (ele,ele1) {
	//点击

	console.log(ele,ele1)
	ele.init("#logo_pic");
	

	//轮播图
	$(".myBanner-container")
    .myBanner(".myBanner-wrapper",{
	    navigation: {
	        nextEl: '.myBanner-next',
	        prevEl: '.myBanner-prev',
	    },
	    pagination:{
	        el:".myBanner-pagination"
	    },
	    direction:"scroll",
	    loop:true
	})
});
