// alert(1);
define(["jquery","banner"],function(jq,banner){
    // console.log($);
    // console.log(myBanner);
    // $.fn.banner=myBanner;

    // console.log(jq)
    
   new banner(".myBanner-wrapper",{
        navigation:{
            prevEl:".myBanner-prev",
            nextEl:".myBanner-next"
        },
        pagination:{
            el:".myBanner-pagination"
        },
        direction:"fade",
        loop:true
    }); 
})
