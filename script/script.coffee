$(document).ready ->
	$ "#logo"
		.css "padding-top", Math.floor $(window).height() / 2 - $(window).height() / 3
		.css "padding-bottom", Math.floor $(window).height() / 2 + 10
	$ "html, head"
		.scrollTop(0)
	return
