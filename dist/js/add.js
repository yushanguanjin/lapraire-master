var jian = document.getElementsByClassName("jian")[0];
    text = document.getElementById("text");
    jia = document.getElementsByClassName("jia")[0];
    // value = parseInt(text.value);
jian.onclick = function(){
    text.value = parseInt(text.value) - 1;//字符串转换
}
jia.onclick = function() {
    text.value = parseInt(text.value)+1;
}



$(function() {
   
  $(".email").click(function() {
      $(".huiyuan-content span").css("fontSize","16px");
  })

  $(".huiyuan-content span").click(function() {
      $(".huiyuan-content span").css("fontSize","20px");
  })
  

})
// var input = document.getElementById("#search-localcity");
// var inputValue = document.getElementById("#search-localcity").value;
// input.onchange = function() {
//   inputValue.innerHTML = "    搜索你所在的城市";
// }
// inputPlaceholder.style. = "absolute";
// inputValue.style.left = "18px";



var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
        '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
        ]);
    });
    document.querySelector('.prepend-slide').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
    });
    document.querySelector('.append-slide').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
    });
    document.querySelector('.append-2-slides').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
        '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
        ]);
    });

    
    