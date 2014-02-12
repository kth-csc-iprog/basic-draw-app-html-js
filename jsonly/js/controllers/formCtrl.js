var FormCtrl = function(view,model) {

	var selectedShape;

	view.container.find("input").change( function() {
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
			console.log($(this).val());
			selectedShape = model.getShapes()[this.selectedIndex];
		} else {
			selectedShape = null;
		}
	});
};