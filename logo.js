$(function(){
	
$(".button").click(function(event) {
	
	var programType = $('[name="program-type"]').val();
   
    var programSelector="";
	    if(programType!="")
	    {
	    programSelector="."+programType;
	    }

	var educationLevel = $('[name="education-level"]').val();
    
    var educationSelector="";
	    if(educationLevel!="")
	    {
	    educationSelector="."+educationLevel;
	    }

    var totalselector=programSelector+" "+educationSelector;

	    if(totalselector===" ")
	    {
	      $('img').addClass('active');
	    }
	    else
	    {
	    	$('img').removeClass('active');
	    	$(programSelector).addClass('active');
	        $(educationSelector).addClass('active');
	    }

});

});