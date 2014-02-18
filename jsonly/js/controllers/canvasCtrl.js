var CanvasCtrl = function(view,model) {

	// Declaring the local variables
	var newShape;
	var mouse = {};
	var activeShape;

	// Attach listener to SVG mouse down event
	// so that we can start drawing the shape.
	view.svg.mousedown( function(e) {
		if(activeShape) {
			newShape = {x:e.offsetX, y:e.offsetY,h:1,w:1, type:activeShape};
			mouse.startDragX = e.offsetX;
			mouse.startDragY = e.offsetY;
			model.addShape(newShape);
		}
	});

	// Attach listener to SVG mouse up event
	// so that we can stop drawing the shape.
	view.svg.mouseup (function(e) {
		newShape = null;
	});

	// Attach listener to SVG mouse move event
	// so that we can start update the currently 
	// drawn shape.
	view.svg.mousemove( function(e) {
		if(newShape) {
			model.updateShape(newShape,
				mouse.startDragX,
				mouse.startDragY,
				e.offsetY - mouse.startDragY,
				e.offsetX - mouse.startDragX);
		}
	});

	// Attach listener to all the buttons in the 
	// canvas view so that we know which shape type
	// is currently active.
	view.container.find(".btn").click( function(e) {
		view.setActiveShape(this);
		activeShape = this.getAttribute("value");
	});
};