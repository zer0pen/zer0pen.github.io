$(document).ready(function(){
   var mSkrollr = skrollr.init();

   var path = "url('./image/title/"+ Math.floor(Math.random()*10) + ".jpg')";
   $(".top-imgbg").css("background-image", path);

   resizeImgbg();

   $(window).resize(function(){
     resizeImgbg();
   });
});

function resizeImgbg(){
  $(".top-imgbg").css("height", $(window).height());
}
