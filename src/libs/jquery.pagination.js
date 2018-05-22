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
        init(){
            this.load_data()
            .then(function(res){
//                  console.log(res);
                this.json = res.data["wydbm-7"].plateContent[6];
                console.log(this.json)
                this.render_page();
                }.bind(this))
        },
        load_data(){
            var opt = {
                url:this.url,
                dataType:"jsonp",
                data:{
                    page:this.page
                }
            }
            return $.ajax(opt);
        },
        render_page(){
            var html = "";
            this.json.forEach(function(item){
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
                                                   <a href="javascript:void(0)"><img src="http://pic.banggo.com/sources/images/goods/MB/603232/603232_00_00.jpg?x-oss-process=image/resize,m_fill,w_90" alt=""></a>
                                               </li>
                                               <li>
                                                   <a href="javascript:void(0)"><img src="http://pic.banggo.com/sources/images/goods/MB/603232/603232_30_00.jpg?x-oss-process=image/resize,m_fill,w_90" alt=""></a>
                                               </li>
                                               <li>
                                                   <a href="javascript:void(0)"><img src="http://pic.banggo.com/sources/images/goods/MB/603232/603232_60_00.jpg?x-oss-process=image/resize,m_fill,w_90" alt=""></a>
                                               </li>
                                               <li>
                                                   <a href="javascript:void(0)"><img src="http://pic.banggo.com/sources/images/goods/MB/603232/603232_70_00.jpg?x-oss-process=image/resize,m_fill,w_90" alt=""></a>
                                               </li>
                                               <li>
                                                   <a href="javascript:void(0)"><img src="http://pic.banggo.com/sources/images/goods/MB/603232/603232_90_00.jpg?x-oss-process=image/resize,m_fill,w_90" alt=""></a>
                                               </li>
                                           </ul>
                                    </div>
                                </div>
                            </li>`;
            })
            console.log(html);
            this.item_main.html(html);
        }
        
    }
    $pagination = Pagination;
    return Pagination;
});