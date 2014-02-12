var CanvasCtrl = function(view,model) {

	var newShape;
	var mouse = {};
	var activeShape;

	view.svg.mousedown( function(e) {
		if(activeShape) {
			newShape = {x:e.offsetX, y:e.offsetY,h:1,w:1, type:activeShape};
			mouse.startDragX = e.offsetX;
			mouse.startDragY = e.offsetY;
			model.addShape(newShape);
		}
	});

	view.svg.mouseup (function(e) {
		newShape = null;
	});

	view.svg.mousemove( function(e) {
		if(newShape) {
			model.updateShape(newShape,
				mouse.startDragX,
				mouse.startDragY,
				e.offsetY - mouse.startDragY,
				e.offsetX - mouse.startDragX);
		}
	});

	view.container.find(".btn").click( function(e) {
		view.setActiveShape(this);
		activeShape = this.getAttribute("value");
	});
};