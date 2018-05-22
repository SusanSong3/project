//alert("nihao")
define(["jquery","pagination"],function(jq,pagination){
//    $(".top").load("../src/head.html");

    $.fn.pagination = pagination;
    var url = "http://bgact.banggo.com/plate/GetPlateContent?mark=index&&plate_id=777&_=1526370490477";
    new pagination(url,".goods_list",".pagination")
})
