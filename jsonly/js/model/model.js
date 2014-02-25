var ShapesModel = function () {

	// We define the model data.
	// In final application this would probably
	// read the data from some data source (i.e. database)
	var shapes = [
		{type:'ellipse', x: 0, y:0, w:100, h:100},
		{type:'rectangle', x: 20, y:20, w:100, h:100}
	]

	// Object function for getting all shapes
	this.getShapes = function () {
		return shapes;
	}

	// Object function for adding a new shape
	this.addShape = function (shape) {
		shapes.push(shape);
		this.notifyObservers();
	}

	// Object function for updating shape info
	this.updateShape = function(shape,x,y,h,w) {
		s = shapes[shapes.indexOf(shape)];
		s.x = x;
		s.y = y;
		s.h = h;
		s.w = w;
		this.notifyObservers();
	}

	// Following methods are added to support Drag and Drop modifications

	// Remove the passed shape from the model
	this.removeShape = function(shape) {
		shapes.splice(shapes.indexOf(shape),1);
		this.notifyObservers();
	}

	// Parse the passed text and transform it to shape
	// It expects to get lines of text where shape properties are of from:
	// key=value
	// For instance
	// type=rectangle
	// x=10
	// y=10
	// h=100
	// w=100
	// Lines without such form are ignored
	this.addShapeFromText = function(text) {
		var shape = new Object();
		var attrs = text.split("\n");
		for(var i=0; i<attrs.length; i++) {
			if(attrs[i].indexOf("=")>=1) {
				var key = attrs[i].split("=")[0]
				var value = attrs[i].split("=")[1]
				shape[key] = value;
			}
		}
		shapes.push(shape);
		this.notifyObservers();
	}

	// Transforms the shape to text output as described in addShapeFromText comment
	this.getShapeToText = function(shape) {
		s = shapes[shapes.indexOf(shape)]
		return "type=" + s.type + "\nx=" + s.x + "\ny=" + s.y + "\nh=" + s.h + "\nw=" + s.w;
	}

	/*****************************************  
	      Observable implementation    
	*****************************************/

	this._observers = [];

	this.addObserver = function(observer) 
	{
		this._observers.push(observer);
	}

	this.notifyObservers = function(arg) 
	{
		for(var i=0; i<this._observers.length; i++) 
		{
			this._observers[i].update(arg);
		}	
	}
};
