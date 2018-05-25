/*
	1 传入轮播图父级
		myBanner-wrapper 

	2 配置参数
	{
		direction:slide 滑动| fade 淡入淡出 | scroll 滚动
		loop : true | false 自动轮播

		可选参数：
		navigation :{		按钮
			nextEl:".myBanner-next",
			prevEl:".myBanner-prev"
		}
		pagination:{		分页器
			el:".myBanner-pagination"
		}
	}

*/
;+function(factory){
    //AMD判断;
    if(typeof define === "function" && define.amd){
       define(["jquery"],factory)
    }else{
        factory(jQuery);
    }
}(function($){
	function Banner(banner_selector,options) {
		this.init(banner_selector,options);
	}
	Banner.prototype = {
		constructor:Banner,
		init:function(banner_selector,options) {
			//当前显示元素的下标；
            // console.log("linked");
			this.index = 0 ;
			//主体元素选择
			this.bannerWrapper = $(banner_selector);
			//具体元素选择
			this.bannerItem = this.bannerWrapper.children();
			//动画模式 默认的动画模式为： 滚
			// this.direction = options.direction ? options.direction : "scroll";
			this.bannerNum = this.bannerItem.length;
			
			// this.looping = options.loop;
			// console.log(this.looping)
			// this.loopTimer = null;
			
			this.pagination = $(options.pagination.el);
			// console.log(this.pagination)
			this.paginationItem = this.pagination.children();
			// console.log(this.paginationItem)
			this.paginationItem.on("mouseover.changeIndex",$.proxy(this.change_index,this));
			this.paginationItem.on("mouseover.animation",$.proxy(this.animation,this));
			// this.paginationItem.on("mouseout",function(){
			// 	this.looping = false;
			// }.bind(this));
		

			// this.nextBtn = $(options.navigation.nextEl);
			// // console.log(this.nextBtn)
			// this.nextBtn.on("click.changeIndex",$.proxy(this.change_index,this))
			// this.nextBtn.on("click.animation",$.proxy(this.animation,this))


		},
		change_index:function(event){
			// console.log($(event))
			var turnList = {
				"next":function () {
					this.prev = this.index;
					if(this.index == this.bannerNum - 1){
						this.index = 0;
					}else{
						this.index ++;
					}
				}.bind(this),
				//去目标那页
				
				"toIndex":function () {
					this.prev = this.index;
					this.index = $(event.currentTarget).index();
					
				}.bind(this),
			};
			// if(this.looping == "true"){
			// 	this.loopTimer = setInterval(function(){
			// 		turnList["next"];
			// 	}.bind(this),1000)
				
			// }else{
			// 	clearInterval(this.loopTimer)
			console.log($(event.currentTarget).index())
				turnList["toIndex"];

			// }
			// console.log(this.index)
		},
		animation:function(event) {

			// if(this.prev == this.index) return ;
			console.log("now"+this.index)
			var animationList = {
				"fade":function(){
					animationList.slideFadeInit();
					console.log(this.bannerItem.eq(this.index))
                    // this.bannerItem.eq(this.index)
                    // .css("zIndex","100")
                    // .fadeIn()
                    // .siblings()
					// .css("zIndex","0");    

				}.bind(this),
				"slideFadeInit":function () {
					this.bannerItem.eq(this.prev)
					.css({
						zIndex:1
					})
					.siblings()
					.css({
						zIndex:""
					})
				}.bind(this),
			};
			animationList["fade"]();
		},
	}
	return Banner;
});