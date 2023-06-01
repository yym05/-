$(function(){

    $(".sub").hide();

    $(".main li, .sub").hover(function(){        
        $(".sub").stop().show()

    }, function(){
        $(".sub").stop().hide()
    })//

    $(".sub_list > li").hover(function(){
        var n = $(this).index();
        console.log("n :", n)

        $(".main li a").removeClass("on");
        $(".main li").eq(n).find("a").addClass("on");

    }, function(){
        $(".main li a").removeClass("on");
    })

    // 이미지 슬라이드

    // $(".fade li").hide();
    // $(".fade li").eq(0).show();

    // $(".fade li").eq(0).siblings().hide()
    
    // $(".fade li:gt(0)").hide()

    $(".fade li").eq(0).show();
    $(".fade li").eq(1).hide();
    $(".fade li").eq(2).hide();

    var n=0; //0 1 2

    setInterval(function(){

        $(".fade li").eq(n).fadeOut();

        if(n == 2){
            n=0;
        }else{
            n++;
        }//
        console.log("nm : " , n);

        $(".fade li").eq(n).fadeIn();
    },2500)


    // 탭메뉴

    // $(".not_gal h2").click(function(){

    //     $(".not_gal h2").removeClass("on");
    //     $(this).addClass("on");

    //     $(".not_gal ul").hide();
    //     $(this).next().show();

    // })//

    $(".notice h2").click(function(){
        $(".not_gal h2").removeClass("on");
        $(".not_gal ul").hide();
        $(this).addClass("on")
        $(this).next().show();

    })//

    $(".gallery h2").click(function(){
        $(".not_gal h2").removeClass("on");
        $(".not_gal ul").hide();
        $(this).addClass("on")
        $(this).next().show();
    })//


    $(".p_click").click(function(){
        $(".popup").show()
    })//

    $(".close").click(function(){
        $(".popup").hide()
    })//









})//jquery