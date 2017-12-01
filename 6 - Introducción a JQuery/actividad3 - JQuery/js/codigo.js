$(document).ready(function() {

	$("#btn-input").keypress(function(event) {
		var mensaje = $("#btn-input").val();
		if (mensaje != "") {
			if (event.which == 13) {
				$("ul").append("<li class='left clearfix'><span class='pull-left'>" +
					"</span><div class='chat-body clearfix'><div class='header'><strong class='primary-font'>" +
					"Alonso</strong><small class='pull-right text-muted'></div><p>" + mensaje + "</p></div></li>");
				mensaje = $("#btn-input").val("");
			}
		}
	});
	$("#btn-chat").click(function() {
		var mensaje = $("#btn-input").val();
		if (mensaje != "") {
			$("ul").append("<li class='left clearfix'><span class='pull-left'>" +
				"</span><div class='chat-body clearfix'><div class='header'><strong class='primary-font'>" +
				"Alonso</strong><small class='pull-right text-muted'></div><p>" + mensaje + "</p></div></li>");
			mensaje = $("#btn-input").val("");
		}
	});
});