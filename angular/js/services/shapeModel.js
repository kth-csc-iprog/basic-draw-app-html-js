window.app.service("ShapeModel", function() {
	var shapes = [
		{type:'ellipse', x: 0, y:0, w:100, h:100},
		{type:'rectangle', x: 20, y:20, w:100, h:100}
	]

	return {
		getShapes : function() {
			return shapes;
		},
		addShape : function(shape) {
			shapes.push(shape);
		}
	}

});