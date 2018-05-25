//alert("nihao")
define(["jquery","pagination"],function(jq,pagination){

    // $.fn.pagination = pagination;
    var url = "http://bgact.banggo.com/plate/GetPlateContent?mark=index&callback=jQuery18305316835207223058_1526370479734&plate_id=777&_=1526370490477";
    
    new pagination(url,".goods_list",".pagination")
    
    
})
