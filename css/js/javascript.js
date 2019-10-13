$(document).ready(function() {
	$(".invisivel").hide();
	$(".visivel").click(function() {
		$(this).toggleClass("active").next().slideToggle("slow");
		return false;
	});
});