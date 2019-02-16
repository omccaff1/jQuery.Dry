$(document).ready(function () { //This checks if the HTML is fully loaded.
	$('#btn-img-1').prop('disabled', true); //On first page view, the button for the visible image (1) has to be disabled (appears grayed-out).
	$('.my-button').on("click", function (e) { //When a button with the class .my-button is clicked,
		e.preventDefault(); //Add this always so we don't get weird behavior in older browsers.
		$('.my-button').prop('disabled', false); //Enable ALL button so none are disabled.
		$(this).prop('disabled', true); //Disable ONLY the button that was clicked –– "This" button that was clicked.
		var myInfo = $(this), // Gather the info related to "this" button that was clicked and store in a variable call myInfol
			myUrl = myInfo.data('image'); //from myInfo, grab the URL stored in data-image attribut and store in myUrll
		$('#aids-img').attr('src', myUrl); //Replace URL attribute for #aids-img by replacing what is in the src field.
	}); //End of the function.
}); //Closes all of the functions.