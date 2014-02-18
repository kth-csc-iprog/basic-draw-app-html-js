// We create the model as Angular Service, which provides
// a singleton object that we can than include in controllers
window.app.service("ShapeModel", function() {
	
	// We define the model data.
	// In final application this would probably
	// read the data from some data source (i.e. database) 
	var shapes = [
		{type:'ellipse', x: 0, y:0, w:100, h:100},
		{type:'rectangle', x: 20, y:20, w:100, h:100}
	]

	// Angular Service needs to return an object
	return {
		// Function for getting all shapes
		getShapes : function() {
			return shapes;
		},
		// Function for adding a new shape
		addShape : function(shape) {
			shapes.push(shape);
		},
		// Function for updating the shape info
		updateShape : function(shape,x,y,h,w) {
			s = shapes[shapes.indexOf(shape)];
			s.x = x;
			s.y = y;
			s.h = h;
			s.w = w;
		}
	}

});