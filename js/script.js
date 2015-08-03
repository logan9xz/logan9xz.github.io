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

alert("Track and field were all the information comes from.");

function submitEmail () {
	var email = $("#emailInput").val();
	$.ajax({
		type: "POST",
		url: "http://localhost:3000/join",
		data: { email: email },
		success: function (data) { console.log(data); alert("success"); }
	});
}
