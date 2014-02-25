var DropCtrl = function(view,model) {

	// Declaring the local variables
	var selectedShape;

	if (typeof window.FileReader === 'undefined') {
	  console.log('fail');
	} else {
	  console.log('success');
	}
 

	// Attach listeners to all the inputs event and
	// modify the model when there is input registered
	view.list.bind( "dragover", function (e) {
		view.list.addClass("drag-over");
		e.preventDefault();
	});
	view.list.bind( "dragleave", function (e) {
		view.list.removeClass("drag-over");
		// return false; 
	});
	view.list.bind( "drop", function(e) {
		view.list.removeClass("drag-over");
		e.preventDefault();
		if( e.originalEvent.dataTransfer.types.indexOf("text/plain") >= 0  ) {
			var shapeText = e.originalEvent.dataTransfer.getData("text/plain");
			window.setTimeout(function(){
	  			model.addShapeFromText(shapeText);
	  		},10);
	  	} else if ( e.originalEvent.dataTransfer.types.indexOf("Files") >= 0 ) {
			var file = e.originalEvent.dataTransfer.files[0];
	      	var reader = new FileReader();
	  		reader.onload = function (event) {
	  			model.addShapeFromText(event.target.result);
	    		console.log(event.target.result);
	  		};
  			reader.readAsText(file);
	  	}
	});

};