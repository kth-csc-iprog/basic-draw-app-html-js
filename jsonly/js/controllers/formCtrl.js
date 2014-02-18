var FormCtrl = function(view,model) {

	// Declaring the local variables
	var selectedShape;

	// Attach listeners to all the inputs event and
	// modify the model when there is input registered
	view.container.find("input").on('input', function() {
		if (selectedShape) {
			model.updateShape(selectedShape,
				view.container.find("#x").val(),
				view.container.find("#y").val(),
				view.container.find("#h").val(),
				view.container.find("#w").val());
		}
	});

	// Attach a listener on the list change event and
	// mark call the view to inform on the selected shape
	view.list.change( function(){
		if (this.selectedIndex >= 0) {
			selectedShape = model.getShapes()[this.selectedIndex];
			view.selectShape(this.selectedIndex);
		} else {
			selectedShape = null;
		}
	});
};