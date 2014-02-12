var ShapesModel = function () {

	// other model data
	// a function that changes the Observable so it will notify
	shapes = [
		{type:'ellipse', x: 0, y:0, w:100, h:100},
		{type:'rectangle', x: 20, y:20, w:100, h:100}
	]

	this.getShapes = function () {
		return shapes;
	}

	this.addShape = function (shape) {
		shapes.push(shape);
		this.notifyObservers();
	}

	this.updateShape = function(shape,x,y,h,w) {
		s = shapes[shapes.indexOf(shape)];
		s.x = x;
		s.y = y;
		s.h = h;
		s.w = w;
		this.notifyObservers();
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
