$(document).ready(function() {		

	/* begin sign up, bring up modal window */
	$("#modal-start").click(function(){
		$("#modal-start").hide();
		$("#modal1").show();
		/* ensure user can't see other modal windows, in case they aren't on the first modal */
		$("#modal2").hide();
		$("#modal3").hide();
		$("#welcome-par").hide();		
		$("#hero-fireworks").hide();
		$(".progress-bar").show();
		$(".progress").css({"background-color":"red"});
		$(".progress").animate({"width":"33%" , "border-radius":"8px" , "height":"20px"});
	});
	
	/* give user exit option, show original starting point, remove progress bar */
	$(".exit").click(function() {
		$(".modal-window").hide();
		$(".progress-bar").hide();
		$("#hero-fireworks").show();
		$("#welcome-par").show();
	});
	
	/* user option to move forward to 2nd modal window */
	$("#change-1").click(function() {
		$("#modal1").hide();
		$("#modal2").show();
		$(".progress").css({"background-color":"red"});
		$(".progress").animate({"width":"66%" , "border-radius":"8px" , "height":"20px"});
	});
	
	/* user option to switch to previous modal screen, progress bar regresses */
	$("#reverse-1").click(function() {
		$("#modal2").hide();
		$("#modal1").show();
		$(".progress").css({"background-color":"red"});
		$(".progress").animate({"width":"33%" , "border-radius":"8px" , "height":"20px"});
	});
	
	/* user option to forward to 3rd modal window */
	$("#change-2").click(function() {
		$("#modal2").hide();
		$("#modal3").show();
		$(".progress").css({"background-color":"red"});
		$(".progress").animate({"width":"100%" , "border-radius":"8px" , "height":"20px"});
	});
	
	/* user option to switch to previous modal screen, progress bar regresses */
	$("#reverse-2").click(function(){
		$("#modal3").hide()
		$("#modal2").show();
		$(".progress").css({"background-color":"red"});
		$(".progress").animate({"width":"66%" , "border-radius":"8px" , "height":"20px"});
	});
	
	/* Capture form data and display on submit*/
	$("#change-3").click(function() {
		$(".progress-bar").hide();
		$("#modal3").hide();
		$("#form-data").show();		
	});

	
	
	$("#change-3").click(function() {
		$("#closing-fireworks").show()
		$("#form-header").show();
		$("#summary-message").show();
		$("#form-data").show();
		$("#confirmation").show();
		$("#main-head").hide();
		$("#second-head").hide();
		var fname = $("#first-name").val();
		var lname = $("#last-name").val();
		var email = $("#email").val();
		var phone = $("#contact-phone").val();
		var dish = $("#dish").val();
		var servings = $("#servings").val();
		var gluten;
		var vegan;
		var organic;
		var comments = $("#comments-suggestions").val();
		
		/* get values from check box */
		/* gluten check box */
		if ($(".gluten-check").prop("checked")) {
			gluten = "Yes";
		} else {
		    gluten = "No";
		}
		
		/* vegan check box */
		if ($(".vegan-check").prop("checked")) {
			vegan = "Yes";
		} else {
			vegan = "No";
		}
		
		/* organic check box */
		if ($(".organic-check").prop("checked")) {
			organic = "Yes";
		} else {
			organic = "No";
		}

	
	/* display form information on final page */	
	 $("#form-data").html("<p> <span class='field-data'>Name:</span> " + fname + " " +  lname + "</p> <p> <span class='field-data'>Email: </span>" + email + "</p> <p> <span class='field-data'> Phone Number: </span>" + phone + "</p ><p> <span class='field-data'>Potluck Dish: </span>" + dish + "</p> <p> <span class='field-data'> Servings: <span>" + servings + "</p> <p> <span class='field-data'> Gluten Free: </span>" + gluten + "</p> <p> <span class='field-data'>Vegan: </span>" + vegan + "</p> <p> <span class='field-data'> Organic: </span>" + organic + "</p> <p> <span class='field-data'> Additional Notes: </span>" + comments + "</p>");
	
	}); // end of change-3 click
	
}); /* end of ready */