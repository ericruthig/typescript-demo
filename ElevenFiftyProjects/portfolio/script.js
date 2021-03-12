$(document).ready(function ()  
{
  $(".close").on("click", function () 
	{
		$("#modalMain").css("display", "none")
	});
  
});

$(window).on('load', function() {
    $('#modalMain').modal('show');
});
