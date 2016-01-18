var alwaysVar1 = false;
var alwaysVar2 = false;

function init() 
{ 
	$('.thumbnail').mouseover(function() {
	   var id = ('#' + this.id);
	   var alwaysVar1 = true;
	   
	   $(id).animate( {opacity: .5}, {always: alwaysVar1}  );

	});

	$('.thumbnail').mouseleave(function() {
	   var alwaysVar1 = false;
	   var id = ('#' + this.id);
	   
	   $(id).animate( {opacity: 1}, {always: alwaysVar1}  );
	});

	$('.text').mouseover(function() {
		var id = ('#' + this.id);
		var alwaysVar2 = true;

	});

	$('.text').mouseleave(function() {
		var alwaysVar2 = false;
	})
}