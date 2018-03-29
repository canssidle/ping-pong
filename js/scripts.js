// Back-end logic
var num2 = 3
var division = function(num1,num2) {
	var num3 = num1/num2;
	return ping;
}


// Fornt-end logic
$(document).ready(function(event) {



	$("#divisionForm").submit(function(event){
		event.preventDefault();
		var userInputOne = parseInt($("#divideNumberOne").val());
	
		var resultDivide = divide(userInputOne,num2)
		$("#divideOutput").text(resultDivide)

	}
})