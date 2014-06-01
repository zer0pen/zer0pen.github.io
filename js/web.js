$(document).ready(function(){
  if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera))
  {
    var mSkrollr = skrollr.init();
  }

   var path = "url('./image/title/"+ Math.floor(Math.random()*10) + ".jpg')";
   $(".top-imgbg").css("background-image", path);

   resizeImgbg();

   $(window).resize(function(){
     resizeImgbg();
   });
});

function resizeImgbg(){
  $(".top-imgbg").css("height", $(window).height());
  $("body").css("height", 0);
}
