'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	//when the button testjs is clicked, fire the following function
	$("#testjs").click(function(e) {
		//change the jumbotron text
		$('.jumbotron h1').text("Javascript is connected");

		//change the text of the button
		$('#testjs').text("Ouch! That click hurt!");

		// toggle a css class active when the button is clicked
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click(updateProject);
}

function projectClick(e) {
	//For debugging purposes
	console.log("project clicked");

    // prevent the page from reloading 
    e.preventDefault();

    // In an event handler, $(this) refers to 
    // the object that triggered the event 

    $(this).css("background-color", "#7fff00");

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text(); //gets the text of the paragraph
    var jumbotronHeader = $(".jumbotron h1"); //saves the object in a var

    //#jumbtron selects the element with id="jumbotron"
    //while .jumbotron selects the element with class="jumbotron"

    jumbotronHeader.text(projectTitle); //sets the text

    //this appends the paragraph with certain text (in this case descrption)
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");

    //if the description is empty, append a description
    if (description.length == 0) {
    	$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    }
    //otherwise, tell the user to stop!
    else {
    	//descrption.html("<p> Stop clicking on me! You just did it at " + (new Date()) + "</p>");
        description.fadeOut();
    }
 }