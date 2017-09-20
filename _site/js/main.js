//manupulation of service section

$(".detail-container").on("mouseenter",function (){
   $(this).hide();
});

// $(".detail-container").on("mouseleave",function (){
//    $(this).show();
// });

$(".consultancy-container img").on("mouseenter",function (){
  $(".consultancy-container .overlay").css("transform","translateY(-450px)");
});
