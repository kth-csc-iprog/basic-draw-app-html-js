var FormCtrl = function(view,model) {

	var selectedShape;

	view.container.find("input").on('input', function() {
		if (selectedShape) {
			model.updateShape(selectedShape,
				view.container.find("#x").val(),
				view.container.find("#y").val(),
				view.container.find("#h").val(),
				view.container.find("#w").val());
		}
	});

	view.list.change( function(){
		if (this.selectedIndex >= 0) {
			selectedShape = model.getShapes()[this.selectedIndex];
			view.selectShape(this.selectedIndex);
		} else {
			selectedShape = null;
		}
	});
};