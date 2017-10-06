
// preloader
$(window).on('load',function(){
  $('.spinner').fadeOut('slow',function(){
    $('.preloader').remove();
    $("nav").addClass('fixed-top');
  });
});


// tab
$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});


// scroll

$width = $(window).width();
if ($width > 480) {


$(window).scroll(function() {
   $scroll = $(window).scrollTop();
   if ($scroll < 400 ) {
      $(".sidebar h3").css("padding-top",100+$scroll+"px");
   }
});

}
