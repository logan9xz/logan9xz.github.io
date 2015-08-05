
var visible = true;
$(document).ready(function(){

	$("#gofast").hide();
	$("button").click(function(){
		if (visible) {	
			$("#gofast").show();  
	    	$("p").hide();
	    	visible = false;
		} else {


			$("p").show();
			$("#gofast").hide();
			visible = true;
		}
	});
});

// alert("Track and field were all the information comes from.");

// function submitEmail () {
// 	var email = $("#emailInput").val();
// 	$.ajax({
// 		type: "POST",
// 		url: "http://localhost:3000/join",
// 		data: { email: email },
// 		success: function (data) { console.log(data); alert("success"); }
// 	});
// 

var url = "http://logan9xz.azurewebsites.net/";
function submitEmail () {
	var email = $("#emailInput").val();
	var name = $("#nameInput").val();
	if (name && isValidEmailAddress(email)) {
		$.ajax({
			type: "POST",
			url: url + "join",
			data: { 
				email: email, 
				name: name
			},
			success: function (data) { 
				console.log(data); 
				alert("Success");
			},
			error: function (error) {
					var code = error.status;
					switch (code) {
						case 500:
							alert("Something went wrong!");
							break;
						case 400:
							alert("Bad email address!");
							break;
						case 409:
							alert("Email already on the list!");
							break;
							default:
								break;
					}
				}
		});
		$("#emailInput").val("");
		$("#nameInput").val("");
	} else {
			alert("Please provide a name and vaild email address!");
	}
}


function isValidEmailAddress(emailAddress) {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(emailAddress);
};


