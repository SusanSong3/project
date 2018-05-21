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
            console.log("linked");
			this.index = 0 ;
			//主体元素选择
			this.bannerWrapper = $(banner_selector)
			//具体元素选择
			this.bannerItem = this.bannerWrapper.children();
			//动画模式 默认的动画模式为： 淡入淡出
			this.direction = options.direction ? options.direction : "fade";

			this.bannerNum = this.bannerItem.length;
			//判断 分页器 是否有有参数传入
			this.pagination = $(options.pagination ? options.pagination.el : "");

			if(this.pagination.length !== 0){
				this.paginationItem = this.pagination.children().children();
				console.log(this.paginationItem)
				//如果存在pagination参数，创建span => 下方分页器
				// this.paginationItem.on('mouseover', function(event) {
				// 	event.preventDefault();
				// 	$(this).wrap('<div class="extra-wrapper"></div>');
				// }.bind(this));
				
			
				this.paginationItem.on("mouseover.changeIndex",{"turn":"toIndex"},$.proxy(this.change_index,this));
                this.paginationItem.on("mouseover.animation",$.proxy(this.animation,this));
			}

			//判断 按钮 是否有参数传入 
			if(typeof options.navigation == "object"){
				//获取两个按钮
				this.btnPrev = $(options.navigation.prevEl);
				this.btnNext = $(options.navigation.nextEl);
				//给两个按钮添加事件
				this.btnPrev
				.on("click.changeIndex",{turn:"prev"},$.proxy(this.change_index,this))
				.on("click.animation",$.proxy(this.animation,this));
				this.btnNext
				.on("click",{turn:"next"},$.proxy(this.change_index,this))
				.on("click",$.proxy(this.animation,this))
			}

			//判断 分页器 是否有参数传入
			if(typeof options.pagination == "object"){
				this.paginationEl = $(options.pagination.el);
			}

			this.animation.moving = false;
		},
		change_index:function(event){
			if(this.animation.moving){
				return;
			}
			var turnList = {
				//向前按钮
				"prev":function () {
					this.prev = this.index;
					if(this.index == 0 ){
						this.index = this.bannerNum - 1;
					}else{
						this.index --;
					}
				}.bind(this),
				//向后按钮
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
					this.index = $(event.target).index();
				}.bind(this),
			};

			var direction = turnList[event.data.turn];
			if(typeof direction == "function"){
				return ;
			}

			turnList[event.data.turn]();
		},
		animation:function(event) {
			if(this.animation.moving){
				return;//当正在运动的时候 ，不执行这个函数；
			}
			if(this.prev == this.index) return ;
			var animationList = {
				"slide":function () {
					animationList.slideFadeInit();
					this.bannerItem.eq(this.index)
					.addClass("myBanner-active")
					.css({
						display:"none"
					})
					.slideDown()
					.siblings()
					.removeClass("mybanner-active")
				}.bind(this),
				"fade":function(){
					animationList.slideFadeInit();
					this.bannerItem.eq(this.index)
					.addClass("myBanner-active")
					.css({
						display:"none"
					})
					.fadeIn()
					.siblings()
					.removeClass("myBanner-active")
				}.bind(this),
				"scroll":function () {
					this.bannerItem
					.css({
						zIndex:0
					})
					.eq(this.prev)//前一个元素
					.css({
						zIndex:2
					})
					.end()//回到改变样式之前的元素
					.eq(this.index)//选择当前显示的元素
					.css({
						zIndex:2
					})

					//判定从左到右 还是从右到左
					if((this.prev > this.index) && (this.prev == 0 && this.index == this.bannerNum - 1 )){


						this.bannerItem.eq(this.prev)
						.animate({
							left:this.bannerItem.outerWidth()
						},function () {
							this.animation.moving = false;
						}.bind(this))
						.end()
						.eq(this.index)
						.css({
							left:-this.bannerItem.outerWidth()
						})
						.animate({
							left:0
						},function () {
							this.animation.moving = false;
						}.bind(this))	
					}else{
						this.bannerItem.eq(this.prev)
						.animate({
							left:-this.bannerItem.outerWidth()
						},function () {
							this.animation.moving = false;
						}.bind(this))
						.end()
						.eq(this.index)
						.css({
							left:this.bannerItem.width()
						})
						.animate({
							left:0
						},function () {
							this.animation.moving = false;
						}.bind(this))
					}
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
			this.animation.moving = true;
			animationList[this.direction]();
			this.pagination.children().eq(this.index)
			.addClass("myBanner-active")
			.siblings()
			.removeClass("myBanner-active");
		}
	}

	$banner = Banner;
	return Banner;
});
// })