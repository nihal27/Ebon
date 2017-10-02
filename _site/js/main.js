
$(window).on('load',function(){
  $('.spinner').fadeOut('slow',function(){
    $('.preloader').remove();
    $("nav").addClass('fixed-top');
  })
});


$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});



