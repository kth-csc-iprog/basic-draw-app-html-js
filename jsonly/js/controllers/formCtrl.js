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
	// This was the version before we included drag and drop
	// because drag and drop can't be performed on select and
	// option elements we had to replace is with ul and li
	// view.list.change( function(){
	// 	if (this.selectedIndex >= 0) {
	// 		selectedShape = model.getShapes()[this.selectedIndex];
	// 		view.selectShape(this.selectedIndex);
	// 	} else {
	// 		selectedShape = null;
	// 	}
	// });

	// Attach a listener to the li element of the list
	// this is a jQuery way of attaching the listener to the parent
	// that gets triggered on specific child (in our case each li)
	view.list.on("click","li", function(){
		var index = view.list.children().index(this);
		selectedShape = model.getShapes()[index];
		view.selectShape(index);
	});
};