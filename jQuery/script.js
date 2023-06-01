$(function(){
    // 메뉴

    $(".main > li").hover(function(){
        $(this).children(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })//hover



    // 슬라이드이미지
    // var n=0; //0 1 2

    // setInterval(function(){

    //     // n=(n+1) % 3;
    //     if( n == 2){
    //         n=0;
    //     }else{
    //         n++;
    //     }//
    //     console.log("n : " , n);
    //     pos=n*( -100 ) + "%" ;
    //     console.log("pos : " , pos);
    //     $(".left_move").animate({left :pos  } ,500 )
    // }, 3000)


    setInterval(function(){
        $(".left_move").animate({left:"-100%"}, 500, function(){
            $(".left_move").append(  $(".left_move li").eq(0)  );
            $(".left_move").css({left : "0"})
        })//
    }, 2500)



    // 모달팝업

    $(".p_click").click(function(){
        $(".pop_bg , .popup").show()
    })//


    $(".close").click(function(){
        $(".pop_bg , .popup").hide()
    })//




})//jquery