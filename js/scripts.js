$(document.)ready(function() {
	$("form#PingPong").submit(function(event)){
		event.preventDefault();
		var form = parseInt($("input#form").val());
		var result = {'ping', 'pong', 'pingpong'};
		$("#enter").text(enter);
	});
});


