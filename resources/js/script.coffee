`(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "http://connect.facebook.net/ko_KR/sdk.js#xfbml=1&appId=1501811433375013&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
} (document, 'script', 'facebook-jssdk'));
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-56669999-2', 'auto');
ga('send', 'pageview');`

$ '.activate-modal'
    .click ->
        $ ".modal-title"
            .html $(this).data "title"
        $ ".modal-body"
            .html "<div id=\"loading\"></div>"
        $.ajax
            url: $(this).data('link')
            complete: (data, status) ->
                $ ".modal-body"
                    .html data.responseText

$ '.modal'
    .on "show.bs.modal", ->
        height = $(window).height() - 120
        $ this
            .find ".modal-body"
            .css "max-height", height

$ '.animate'
    .addClass "hidden-scroll"
    .viewportChecker
        classToAdd: "visible-scroll animated fadeIn"
        offset: 100
