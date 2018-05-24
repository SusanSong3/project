
;+function(factory){
    if(typeof define == "function" && define.amd){
        define(['jquery'],factory)
    }else{
        factory(jquery);
    }
}(function($){
    function Magnifier(options){
        //小图
        this.small_ele = $(options.small_ele);
        //移动窗口
        this.focus_ele = $(options.focus_ele);
        //大图
        this.big_ele = $(options.big_ele);
        if(this.small_ele.length == 0 || this.focus_ele.length == 0 || this.big_ele.length == 0 ) return;
        this.init();
    }
    Magnifier.prototype = {
        constructor:Magnifier,
        init:function(){
            //比例
            this.scale = 2;
            this.ratio();
            //小图控制大图是否显示；
            this.small_ele.on("mouseenter",{hidden:false},$.proxy(this.toggleFocus,this));
            this.small_ele.on("mouseleave",{hidden:true},$.proxy(this.toggleFocus,this));
            //小图--移动窗口的移动
            this.small_ele.on("mousemove.smallMove",$.proxy(this.smallMove,this));
            //大图的移动
            this.small_ele.on("mousemove.bigMove",$.proxy(this.bigMove,this));
        },
        toggleFocus:function(event){
            var opacity_img = this.small_ele.find(".opacity-img");
            if(event.data.hidden){
                this.focus_ele.stop().fadeOut(200);
                this.big_ele.stop().fadeOut(200);
                opacity_img.stop().fadeTo("fast",1);
            }else{
                this.focus_ele.stop().fadeIn(200);
                this.big_ele.stop().fadeIn(200);
                opacity_img.stop().fadeTo("fase",0.3);
            }
        },
        smallMove:function(){
            var eleX = event.offsetX - this.focus_ele.width() / 2;
            var eleY = event.offsetY - this.focus_ele.height() / 2;
            //边界检测
            var maxWidth = this.small_ele.width() - this.focus_ele.width();
            var maxHeight = this.small_ele.height() - this.focus_ele.height();

            eleX = eleX <= 0 ? 0 : eleX;
            eleX = eleX >= maxWidth ? maxWidth : eleX;

            eleY = eleY <= 0 ? 0 : eleY;
            eleY = eleY >= maxHeight ? maxHeight : eleY;

            this.focus_ele.css({
                left:eleX,
                top:eleY,
                backgroundPosition:`${-eleX}px ${-eleY}px`,
            })

            var fullLongX = this.small_ele.width() - this.focus_ele.width();
            var fullLongY = this.small_ele.height() - this.focus_ele.height();

            this.propX = Math.round(eleX / fullLongX * 100);
            this.propY = Math.round(eleY / fullLongY * 100);
        },
        bigMove:function(){
            var bigImg = this.big_ele.find("img");
            var fullLongX = bigImg.width() - this.big_ele.width();
            var fullLongY = bigImg.height() - this. big_ele.height();

            var eleX = -Math.round(fullLongX * this.propX / 100);
            var eleY = -Math.round(fullLongY * this.propY / 100);

            bigImg.css({
                left:eleX,
                top:eleY
            })
        },
        ratio:function(){
            var bigImg = this.big_ele.find("img");
            bigImg.css({
                width:Math.round(this.small_ele.width() * this.scale),
                height:Math.round(this.small_ele.height() * this.scale)
            })
        }

    }




    $.fn.magnifier = Magnifier;
    return Magnifier;
})