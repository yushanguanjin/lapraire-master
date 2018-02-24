$(function() {
    $(".title li").click(function() {
        var item = $(".fangsai input").index(this);
        window.scrollBy(0, 512);
        // console.log($(".fangsai input")[item]);
        // console.log($(".fangsai input").not($(".fangsai input")[item]));
        // $(".fangsai input")[item].attr("checked", "checked");
        // $(".fangsai input").not($(".fangsai input")[item]).removeAttr("checked");
    })
    $(".title ul li ").click(function() {
        $(".fangsai").css("height", "1000px");
        $(".content2").css("display", "block");
        $(".content-common").eq($(".title ul li").index(this)).show().siblings(".content-common").hide();
        // $("#img6").css({
        //     "top": "110px",
        //     "left": "130px"
        // })
        // $(".product6").css("display", "block")
    })

    // if ($("#radio2").attr("checked", "checked")) {
    //     $(".fangsai").css("height", "1000px");
    // }
})





$(function() {
    $(".title li").click(function() {
        //            var $this=$(this);
        //            alert($this.index());
        $(this).addClass("active").siblings().removeClass("active");
        $("#content .mod").eq($(".title li").index(this)).show().siblings("#content .mod").hide();
    });
});