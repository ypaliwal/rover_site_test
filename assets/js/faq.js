$(document).ready(function() {

	$(".renters").hide();
	$(".about").hide();

	$(".ownersBtn").toggleClass("btn-primary");
	
	$("#currentView").addClass("ownersView");


	// Click events
	$(".ownersBtn").click(function() {
		if($("#currentView").hasClass("ownersView")) {
			// do nothing
		} else {
			$("#currentView").removeClass();
			$("#currentView").addClass("ownersView");
			
			$(".owners").show();

			$(".renters").hide();
			$(".about").hide();

			if(!$(".rentersBtn").hasClass("btn-primary")) {
				$(".rentersBtn").addClass("btn-primary");
			}

			if(!$(".aboutBtn").hasClass("btn-primary")) {
				$(".aboutBtn").addClass("btn-primary");
			}

			$(".ownersBtn").removeClass("btn-primary");
		}
	});

	$(".rentersBtn").click(function() {
		if($("#currentView").hasClass("rentersView")) {
			// do nothing
		} else {
			$("#currentView").removeClass();
			$("#currentView").addClass("rentersView");
			
			$(".renters").show();

			$(".owners").hide();
			$(".about").hide();

			if(!$(".ownersBtn").hasClass("btn-primary")) {
				$(".ownersBtn").addClass("btn-primary");
			}

			if(!$(".aboutBtn").hasClass("btn-primary")) {
				$(".aboutBtn").addClass("btn-primary");
			}

			$(".rentersBtn").removeClass("btn-primary");
		}
	});

	$(".aboutBtn").click(function() {
		if($("#currentView").hasClass("aboutView")) {
			// do nothing
		} else {
			$("#currentView").removeClass();
			$("#currentView").addClass("aboutView");
			
			$(".about").show();

			$(".owners").hide();
			$(".renters").hide();

			if(!$(".ownersBtn").hasClass("btn-primary")) {
				$(".ownersBtn").addClass("btn-primary");
			}

			if(!$(".rentersBtn").hasClass("btn-primary")) {
				$(".rentersBtn").addClass("btn-primary");
			}

			$(".aboutBtn").removeClass("btn-primary");
		}
	});

});