

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
