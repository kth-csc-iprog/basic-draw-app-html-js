var FormView = function(container,model) {

	var list = this.list = container.find("#shapeList");
	this.container = container;

	var selectedShape;

	model.addObserver(this);

	var loadShapes = function() {
		// clear anything that's in the list
		list.html("");
		for (var i = 0; i<model.getShapes().length; i++) {
			var shape = model.getShapes()[i];
			var option = $("<option/>");
			option.text(shape.type + "=>" + shape.x + "x" + shape.y);
			list.append(option);
		}

		if (selectedShape) {

		}
	}

	this.update = function() {
		loadShapes();
	}

	loadShapes();
};