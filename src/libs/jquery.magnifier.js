;+function(factory){
    if(typeof define == "function" && defind.amd){
        define(['jquery'],factory)
    }else{
        factory(jquery);
    }
}(function($){
    function Magnifier(){}




    $.fn.magnifier = Magnifier;
    return Magnifier;
})