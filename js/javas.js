$(function () {
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 30){
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }
  })
})

$(document).ready(function(){
  var alt = $('.d1').offset().top;
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > alt ) {
      $('.d1').addClass('menu-fixed');
    }else {
      $('.d1').removeClass('menu-fixed');
    }
  })
});
