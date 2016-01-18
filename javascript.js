var alwaysVar = false;

function init() 
{ 
	$('.thumbnail').mouseover(function() {
	   var id = ('#' + this.id);
	   var alwaysVar = true;
	   
	   $(id).animate( {opacity: .5}, {always: alwaysVar}  );

	});

	$('.thumbnail').mouseleave(function() {
	   var id = ('#' + this.id);
	   var alwaysVar = false;
	   
	   $(id).animate( {opacity: 1}, {always: alwaysVar}  );
	});
}