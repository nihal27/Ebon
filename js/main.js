
// preloader
$(window).on('load',function(){
  $('.spinner').fadeOut('slow',function(){
    $('.preloader').remove();
    $("nav").addClass('fixed-top');
  })
});


// tab
$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});


// scroll
$(window).scroll(function() {
   $scroll = $(window).scrollTop();
   if ($scroll > 110 ) {

   	console.log("alert");
   }
   	console.log($scroll);
});



