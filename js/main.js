$(document).ready(function () {
  $(".btn")
  .on("mouseenter",function(e){
    var parentOffset = $(this).offset();
    var relx = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).find("span").css({
      top: relY,
      left: relx,
    })
  })
  .on("mouseout",function(e){
    var parentOffset = $(this).offset();
    var relx = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).find("span").css({
      top: relY,
      left: relx,
    })
  });
});