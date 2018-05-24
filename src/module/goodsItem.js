define(["jquery","magnifier"],function($,magnifier){
    // console.log(magnifier);
    //放大镜
    new magnifier({
        small_ele:".big_pic",
        focus_ele:".grayBox",
        big_ele:".fixed_pic"
    })
    $(".small_pic_list ul li img").on("click",["img"],function(){
    // console.log();
        $(".big_pic img").attr("src",$(this).attr("rel"))
        $(".fixed_pic img").attr("src",$(this).attr("longdesc"))    
    })
    //小图框框变颜色
    $(".small_pic_list ul li").hover(function(){
        $(this).css("borderColor","#F8584F");
    },function(){
        $(this).css("borderColor","#dcdcdc");
    })

    //会员规则
    $(".member_rules").hover(function(){
        $(".memeber_rules_detail").show();
    },function(){
        $(".memeber_rules_detail").hide();
    })

    //选择颜色时候的放大镜
    $(".item_color_list a img").on("click",["img"],function(){
        // console.log($(this));
        // console.log($(this).attr("mid_src"))
        // console.log($(this).attr("mid_src"));
            $(".big_pic img").attr("src",$(this).attr("mid_src"))
            $(".fixed_pic img").attr("src",$(this).attr("large_src")) 
            // console.log()
            $("#colorSelected").html($(this).parent().attr("attr_value"))
    });
    //框框变颜色～
    //
    $(".item_color_list a").hover(function(){
        $(this).css("borderColor","#F8584F");
    },function(){
        $(this).css("borderColor","#dcdcdc");
    })

    // 尺码文字改变
    $(".goods_size ul li a").on("click",["a"],function(){
        $(".goods_size span i").html($(this).attr("attr_value"))
    })
//-----------添加购买数量：
    function GoodsNum (options){
        // console.log(options.add)
        this.init(options);
    }
    GoodsNum.prototype = {
        constructor:GoodsNum,
        init:function(options){
            this.num = 1 ;
            // console.log(options)
            this.addButton = $(options.add);
            // console.log(this.addButton)
            this.minusButton = $(options.minus);
            this.input = $(options.input);
            this.value = $(options.input).val();
            // console.log("origin:"+this.value)
            this.addButton.on("click",$.proxy(this.addNum,this))
            this.minusButton.on("click",$.proxy(this.minusNum,this))
            
        },
        addNum:function(){
            // console.log(1)
            this.value ++;
            // console.log("add:"+this.value)
            this.changeNum();
            if(this.value > 0){
                this.addButton.parent().next().fadeOut(500);
            }
        },
        minusNum:function(){
            // console.log(2)
            if(this.value === 0){
                this.addButton.parent().next().fadeIn(300);
                return 0;
            }
            this.value --;
            // console.log("minus:"+this.value)
            this.changeNum();
        },
        changeNum:function(){
            // console.log(this.value)
            this.input.attr("value",this.value); 
        }
    }
    
    var num_opt = {
        "add":".goods_add",
        "minus":".goods_minus",
        "input":"#item_num"
    }
    new GoodsNum(num_opt);
//-------------流氓顶部栏
    function FloatTop(){
        this.init();
    }
    FloatTop.prototype = {
        constructor:FloatTop,
        init(){
            $(window).scroll($.proxy(this.fixedPosition,this));
            this.long_tab = $(".tab");
            this.short_tab = $(".goods_detail_tab");
            this.goods_info = $(".goods_detail_tab ul>span");
            this.goods_info.on("click",$.proxy(this.borderShow,this));
        }, 
        fixedPosition(event){
            //console.log(event.currentTarget.scrollY)
            // console.log($(".goods_detail_info").outerHeight())
            if(event.currentTarget.scrollY < $(".goods_detail_info").outerHeight()){
                this.long_tab.css({
                    "position":"absolute",
                    // "top":"0"
                    "left":"-200px",
                    "boxShadow":"none"
                });
                this.short_tab.css({
                    "boxShadow":"0 3px 7px 0 rgba(0,0,0,.16)"
                });
                $(".goods_head_float").hide();
                this.goods_info.hide();
            }else if(event.currentTarget.scrollY >= $(".goods_detail_info").outerHeight()){
                this.long_tab.css({
                    "position":"fixed",
                    "top":"0",
                    "left":"120px",
                    "boxShadow":"0 3px 7px 0 rgba(0,0,0,.16)"
                });
                this.short_tab.css({
                    "boxShadow":"none"
                });
                $(".goods_head_float").show();
                this.goods_info.show();
            }
            // this.fixedPosition(event);
        },
        borderShow(){
            $(".item_select_wrap").show();
        }
    }

    new FloatTop();


})