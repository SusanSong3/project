// alert("I am test.js");
define(["myjquery"],function () {
	function GetEle(ele) {
	}
	GetEle.prototype = {
		constructor:GetEle,
		init:function (ele) {
			this.item = $(ele);
			console.log(this.item)
		}
	}
	return new GetEle();
})