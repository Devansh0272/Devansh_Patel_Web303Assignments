/*
	WEB 303 Assignment 1 - jQuery
	{Devansh Patel-0826664}
*/


$(document).ready(function(){

	var amount=0;
	$("#yearly-salary, #percent").on("change", function() {
		
        var salary = parseFloat($("#yearly-salary").val());
        var percent = parseFloat($("#percent").val());

		amount = (salary * percent / 100).toFixed(2);
		
    });

	$("#percent").on("change", function() {		
        $("#amount").text("$" + amount);
    });

});
