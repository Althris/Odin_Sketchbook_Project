
var grid = function(rows) {
	$(".box").remove();


	for (var i = 0; i < rows*rows; i++) {
		$("#frame").append("<div class='box'></div>");
	};

	var boxDim = ($("#frame").width()) / rows;
	$(".box").css("width", boxDim);
	$(".box").css("height", boxDim);

	$(".box").mouseenter(function(){
		$(this).css("background-color", "#19d600");
	});
};


$(document).ready(function(){
	grid(16);
	
	$("#top").click(function(){
		var size = window.prompt("Enter the number of rows of a new grid from 1-64:");
		if (size > 0 && size < 65) {
			grid(size);
		} else {
			window.alert("That is not a valid size.");
		};
	});

});
