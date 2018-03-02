// JavaScript Document
//Matthew Rossi. Form Validation, pure JS, 2/23/2018

$("[type='button']").click(function (){
	
	if($(".red").length == 0){
		
		$("#form").hide();
		$("#confirmation").css("visibility", "visible");
		$("#nameOut").html($("#firstName").val() + " " + $("#lastName").val());
		$("#emailOut").html("Email: " + $("#email").val());
		$("#phoneOut").html("Phone: " + $("#phone").val());
	}
	
});
timer = setInterval(checkErrors, 500);

//Check boxes for errors every .5 second so they update in "real time"
function checkErrors(){
if($("#firstName").val() == ""){ // if a form is empty, add a red asterisk next to it, and change the label to red
	
	$("#fn_Error").html(" *")
	$("#fn_Error").parent().addClass("red");
}

else{
	$("#fn_Error").html(" ")
	$("#fn_Error").parent().removeClass("red");
}
if($("#lastName").val() == ""){
	$("#ln_Error").html(" *")
	$("#ln_Error").parent().addClass("red");
}
else{
	$("#ln_Error").html(" ")
	$("#ln_Error").parent().removeClass("red");
}
if($("#confirm").val() == ""){
	
	$("#emailconfirm_Error").html(" *")
	$("#emailconfirm_Error").parent().addClass("red");
}
else if($("#confirm").val() !== $("#email").val()){
	
	$("#emailconfirm_Error").html(" * Confirmation does not match!")
	$("#emailconfirm_Error").parent().addClass("red");

}
else{
	$("#emailconfirm_Error").html(" ")
	$("#emailconfirm_Error").parent().removeClass("red");
}


if($("#email").val() == ""){
	
	$("#email_Error").html(" *")
	$("#email_Error").parent().addClass("red");
}
else{
	$("#email_Error").html(" ")
	$("#email_Error").parent().removeClass("red");
}
if($("#phone").val() == ""){
	
	$("#phone_Error").html(" *")
	$("#phone_Error").parent().addClass("red");
}
else{
	$("#phone_Error").html(" ")
	$("#phone_Error").parent().removeClass("red");
}
}
