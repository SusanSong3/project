define(["myjquery"],function () {
	function HoverEle() {
	}
	HoverEle.prototype = {
		constructor:HoverEle,
		init:function(selector){
			this.father = $(selector);
			// this.child = $(child);
			// console.log(this.father,this.child);
			this.father.on("mouseover",$.proxy(this.toggle,this));
			// this.child.on("mouseover",$.proxy(this.toggle,this));
		},
		toggle:function () {
			this.father.on("mouseover",function () {
				$(this).hover(function() {
					$(this).css("opacity","0.8");
				}, function() {
					$(this).css("opacity","1");
				});
			})
		}
	}
	return new HoverEle();
})