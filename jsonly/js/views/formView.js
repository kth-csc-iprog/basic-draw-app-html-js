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
			option.text(shape.type + ":" + shape.x + ", " + shape.y + ", " + shape.h + ", " + shape.w);
			list.append(option);
		}

	}

	this.selectShape = function(index) {
		selectedShape = index;
		shape = model.getShapes()[index];
		container.find("#x").val(shape.x);
		container.find("#y").val(shape.y);
		container.find("#h").val(shape.h);
		container.find("#w").val(shape.w);
	}

	this.update = function() {
		loadShapes();
	}

	loadShapes();
};