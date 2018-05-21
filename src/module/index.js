
define(["jquery","banner"], function (jq,myBanner) {
   // console.log(myBanner);
    //把返回的构造函数 添加到 $ 的原型上；这样就可以用jquery调用啦～～～  感谢韩丹大佬！
    $.fn.banner=myBanner;
    $(".myBanner-container").banner(".myBanner-wrapper",{
        pagination:{
            el:".myBanner-pagination"
        },
        direction:"scroll",
        loop:true
    }); 

    console.log(1)
    $(".top").load("head.html");
    
    
});
