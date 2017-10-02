
$(window).on('load',function(){
  $('.preloader').fadeOut('slow',function(){
    $('.overlay').remove();
  });
});


$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});



