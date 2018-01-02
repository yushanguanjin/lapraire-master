$(function() {

    $("dd").hide();
    $("dt a").click(function(){
    $(this).parent().toggleClass("bg");
    $(this).parent().prevAll("dt").removeClass("bg")
    $(this).parent().nextAll("dt").removeClass("bg")
    $(this).parent().next().slideToggle();
    $(this).parent().prevAll("dd").slideUp("slow");
    $(this).parent().next().nextAll("dd").slideUp("slow");
    return false;
    });
    
    // var dt = $("dt");
    // var len= dt.length;
    // for (var i = 0;i < len;i++) {
    //     (function(i) {
    //         dt[i].click(
    //             function() {
    //                 dt[i].css("background","#26272a");
    //                 dd[i].css("background","#26272a");  

    //             })
    //     })(i)
    // }
    
    var oClick = true;
    $(".dt1 a").click(function() {
        if (oClick) {
            $(".dt1 ").css("background","#26272a");
            $(".dd1 ").css("background","#26272a");
        }  else {
            $(".dt1 ").css("background","#2f3335");
            $(".dd1 ").css("background","#2f3335");
        }
        oClick = !oClick;
    })
    $(".dt2 a").click(function() {
        if (oClick) {
            $(".dt2 ").css("background","#26272a");
            $(".dd2 ").css("background","#26272a");
        }  else {
            $(".dt2 ").css("background","#2f3335");
            $(".dd2 ").css("background","#2f3335");
        }
        oClick = !oClick;
    })
    $(".dt3 a").click(function() {
        if (oClick) {
            $(".dt3 ").css("background","#26272a");
            $(".dd23").css("background","#26272a");
        }  else {
            $(".dt3 ").css("background","#2f3335");
            $(".dd3 ").css("background","#2f3335");
        }
        oClick = !oClick;
    })





    $(".dd1-li2:first").click(function() {
        $(".dd1-li2:first a").css({
            "transform":"translateY(-30px)",
            "font-size":"12px"
        })})
    
    $(".dd1-li3").click(function() {
        $(".dd1-li3 a").css({
            "transform":"translateY(-30px)",
            "font-size":"12px"
        })})
    
    // if ($.trim($('#zhanhao').val()).length == 0) { 
    //     $(this).innerHTML = "手机号没有输入";
    //       $('#zhanhao').focus();
    //      } else {
    //       if(isPhoneNo($.trim($('#zhanhao').val()) == false)) {
    //        str += '手机号码不正确\n';
    //     $(this).innerHTML = "";
    //        $('#zhanhao').focus();
    //       }
    //      }

    $("#zhanhao").each(function(){
        if($(this).val() == ''){
          alert("该项不可为空！");
          $(this).focus();
          return false;
        }
        })

        if($('.dropdown').attr("checked")==true)  {
            $(this).css("background","transparent")
        }
        for(var i=2018 ; i>1900;i--){
            var newOption  = document.createElement("option");
            newOption.style.background = "#ffffff";
           
            newOption.text=i;
            newOption.value=i;
            document.getElementById("years").add(newOption);
          }
        $(".years").click(function() {
            $("#years").css("display","block");
        })
        $(".months").click(function() {
            $("#months").css("display","block");
        })
        $(".dates").click(function() {
            $("#dates").css("display","block");
        })












        
})