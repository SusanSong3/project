;+function(factory){
    if(typeof define === "function" && define.amd){
        define(["jquery"],factory)
    }else{
        factory(jquery);
    }
}(function($){
    function Pagination(url,item_main,button_main){
//        console.log(1)
        this.url = url;
        this.page = 1;
        this.pageNum ;
        this.item_main = $ (item_main);
        this.butto_main = $(button_main);
        if(this.url == "" || this.item_main.length == 0 || this.butto_main.length == 0 )return;
        this.init();
    }
    Pagination.prototype = {
        constructor:Pagination,
        init:function(){
            this.load_data()
            .then(function(res){
                //console.log(res);
                this.json = res.data["wydbm-7"].plateContent;

//                console.log(this.json);
                this.render_page();
            }.bind(this))
            this.create_btn();
//            this.button_main.on("click","a",$.proxy(this.change_page,this))
        },
        load_data:function(){
            var opt = {
                url:this.url,
                dataType:"jsonp",
//                data:{
//                    page:this.page
//                }
            }
            return $.ajax(opt);
        },
        render_page:function(){
            
            var html = "";
            this.json.forEach(function(item){
                if(item.plate_type == "6"){
                    //小图对象
                    console.log(item.goods_list)
                    this.colorProducts = item.goods_list.colorProducts;
//                    console.log(this.colorProducts);
                     
                    //遍历小图数组；
                    this.colorProducts.forEach(function(ele,index){
//                        console.log(index)
                       this.colorList = ele.imgUrl;
                       //报403错误啊啊啊啊啊啊啊 好气啊啊啊啊啊啊啊！
//                        console.log(this.colorList);
                        html +=`<li class="clear goods-item">
                                        <a href="#"><img src="${item.goods_list.imgUrl}" alt=""></a>
                                        <a href="" class="floatTop">${item.goods_list.displayTag}</a>
                                        <span class="goods_brand"><a href="">${item.goods_list.brand_name}</a></span>
                                        <label class="goods_account">5折</label>
                                        <span class="goods_title"><a href="">${item.goods_list.product_name}</a></span>
                                        <span class="goods_price">
                                            <b>${item.goods_list.sales_price}</b>
                                            <b>${item.goods_list.market_price}</b>
                                        </span>
                                        <div class="colorList">
                                            <div class="color_container">
                                                   <ul>
                                                       <li>
                                                           <a href="javascript:void(0)"><img src="" alt=""></a>
                                                       </li>

                                                   </ul>
                                            </div>
                                        </div>
                                    </li>`;
                                    
                    }.bind(this))
                 }
                }.bind(this))
            
//            console.log(html);
            this.item_main.html(html);
        },
        create_btn:function(){
            for(var i = 0 ; i < this.pageNum ; i ++){
                var $a = $("<a>");
                $a.attr("href","#javascript");
                $a.html(i+1);
                this.butto_main.append($a);
            }
        },
        change_page:function(event){
            var target = event.target || event.srcElement;
            var index = $(target).index();
            this.page = index + 1;
            this.load_data()
            .then(function(res){
                this.json = res.data["wydbm-7"].plateContent[6];
                this.reder_page();
            }.bind(this))
        },
        create_smallEle(){
//            console.log(this.colorList)
//            for(var i = 0 ; i < this.colorList.length ; i ++){
//                var $li = $("<li><a href="javascript:void(0)"><img src="" alt=""></a></li>");
//                $li.attr("src",this.colorList[i]);
//                
//            }
        }
    
    }
    $pagination = Pagination;
    return Pagination;
});