var CanvasView = function(container,model) {

	// Set the public elements that will be accessible from the controller
	var svg = this.svg = container.find("svg");
	this.container = container;

	// The function that loads all the shapes from the model and draws 
	// and 'draws' them on the canvas (i.e. creates the svg elements)
	var loadShapes = function() {
		// clear anything that's in the svg
		svg.html("")
		for (var i = 0; i<model.getShapes().length; i++) {
			var shape = model.getShapes()[i];
			var svgShape; 
			if (shape.type == 'ellipse') {
				svgShape = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
				svgShape.setAttribute("cx",Number(shape.x) + Number(shape.w/2));
				svgShape.setAttribute("cy",Number(shape.y) + Number(shape.h/2));
				svgShape.setAttribute("rx",shape.w/2);
				svgShape.setAttribute("ry",shape.h/2);
			}
			if (shape.type == 'rectangle') {
				svgShape = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
				svgShape.setAttribute("x",shape.x);
				svgShape.setAttribute("y",shape.y);
				svgShape.setAttribute("width",shape.w);
				svgShape.setAttribute("height",shape.h);
			}
			if (shape.type == 'segment') {
				svgShape = document.createElementNS('http://www.w3.org/2000/svg', 'line');
				svgShape.setAttribute("x1",shape.x);
				svgShape.setAttribute("y1",shape.y);
				svgShape.setAttribute("x2",Number(shape.x) + Number(shape.w));
				svgShape.setAttribute("y2",Number(shape.y) + Number(shape.h));
			}

			svgShape.setAttribute("style","fill-opacity:0;stroke:black;stroke-width:1");
			svg.append(svgShape);
		}
	}

	// The observer update function, triggered by the model when there are changes
	this.update = function() {
		loadShapes();
	}

	// The function triggered by the controller when the specific button is clicked
	this.setActiveShape = function(selectedButton) {
		container.find(".btn").removeClass("active");
		container.find(selectedButton).addClass("active");
	}

	model.addObserver(this);

	loadShapes();
};