$(function(){
    $(".sub").hide();

    $(".main>li").hover(function(){
        $(".sub").stop().show();
    }, function(){
        $(".sub").stop().hide();
    })

})//jquery
