$(function() {
    $(".navigation-btn").hover(function() {
            $(".hengxian").css("background","#ffffff");
            $(".navigation-menu span").css("color","#ffffff");
            $("navigation-btn .hengxian:nth-child(1)").css("top","-8px");
            $("navigation-btn .hengxian:nth-child(2)").css("top","0px");
            $("navigation-btn .hengxian:nth-child(3)").css("top","8px");
    },
        function() {
            $(".hengxian").css("background","#b5b5b5")
            $(".navigation-menu span").css("color","#b5b5b5")
        }
)
   
                                                                                                                  
    $(".icon-555").click(function() {
        $(".zixun").css("display","block");
    })
    $(".zixun").mouseover(function(){
        $(this).css("display","block");
    })
    $(".zixun").mouseout(function(){
        $(this).css("display","none");
    })

    
    $(".navigation-logo a .icon-search").click(function() {
        $(".search").css("display","block");
    })
    
    $(".search .search-form .icon-close").click(function() {
        $(".search").css("display","none");
    })
     $(".search .search-form .icon-close").click(function() {
        $(".search").css("display","none");
    })

    $(".navigation-logo > a > .icon-account").click(function() {
        $(".myaccount").animate({
            right: 0  
        },300)
    })
    $(".myaccount .icon-close").click(function() {
        $(".myaccount").animate({                    
            right: "-8.291667rem"
        },300)
    })
//点击侧边栏滑出
    $(".navigation-btn").click(function() {
        $(".nav").animate({
            left:0
        },300)
    })
//点击侧边栏滑入
    $(".nav-top  .icon-close").click(function() {
        $(".nav").animate({
            left: "-8.645833rem"
        },300)
    })
// 点击箭头
    // $(".liebiao").hover(function() {
    //     $(".siderbar  i").css("color","#303335");
    // })
    var oClick = true;
    $(".nav-item  .icon-moreunfold").click(function() {
        if (oClick) {
           $(this).css("transform","rotateX(180deg)");// jquery css 动画
        }  else {
            $(this).css("transform","rotateX(360deg)");// jquery css 动画
        }
        oClick = !oClick;
    })
    



    
    var liebiao = $(".liebiao");
    var arrow  = $(".fa-angle-down");
    for (var i = 0;i < liebiao.length;i++) {
            (function(i) {
                arrow[i].onmouseover = function() {
                    liebiao[i].style.background = "#ffffff";
                    
                }
            })(i),
            (function(i) {
                arrow[i].onmouseout = function() {
                    liebiao[i].style.background = "#303335";
                }
            })(i)
        }
   









    $("#arrow1").click(function() {
        $(".dropdown1").slideToggle();
        // $(".liebiao").not(".productslists").css("transform","translateY(150px)")
    })
    $("#arrow2").click(function() {
        $(".dropdown2").slideToggle();
    })
    $("#arrow3").click(function() {
        $(".dropdown3").slideToggle();
    })
    $("#arrow4").click(function() {
        $(".dropdown4").slideToggle();
    })
    

})



$(function(){
    // nav鏀剁缉灞曞紑
    $('.nav-item>a').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
                //灞曞紑鏈睍寮€
                $('.nav-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            }else{
                //鏀剁缉宸插睍寮€
                $(this).next('ul').slideUp(300);
                $('.nav-item.nav-show').removeClass('nav-show');
            }
        }
    });
    //nav-mini鍒囨崲
    $('#mini').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            $('.nav-item.nav-show').removeClass('nav-show');
            $('.nav-item').children('ul').removeAttr('style');
            $('.nav').addClass('nav-mini');
        }else{
            $('.nav').removeClass('nav-mini');
        }
    });
});