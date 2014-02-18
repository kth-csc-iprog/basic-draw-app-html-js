// Controllers are special type of objects in Angular.
// To the controller we pass the objects we need. Scope
// is required and is used to link the controller with 
// view template. Any object, function or field you 
// define on the scope you can use directly in the view.
// We also pass our ShapeModel service so we have the access
// to the model.
window.app.controller("CanvasCtrl", function($scope, ShapeModel) {

	// Store all the shapes in scope object field so
	// we can iterate over it in the view
	$scope.shapes = ShapeModel.getShapes()
	// We associate the Math object with the scope
	// so we can use it in the view for transformations
	$scope.Math = window.Math;
	
	var newShape;
	var mouse = {}

	// Function to start drawing the new shape. We will
	// associate it to the mouse down event on the SVG.
	$scope.startDrawShape = function(e) {
		if($scope.activeShape) {
			newShape = {x:e.offsetX, y:e.offsetY,h:1,w:1, type:$scope.activeShape};
			mouse.startDragX = e.offsetX;
			mouse.startDragY = e.offsetY;
			ShapeModel.addShape(newShape);
		}
	};

	// Function to stop drawing the shape. We will
	// associate it with the mouse up event on the SVG.
	$scope.stopDrawShape = function(e) {
		newShape = null;
	};

	// Function to update the currently drawn shape. We
	// will associate it with the mouse move event on the SVG.
	$scope.updateDrawShape = function(e) {
		if(newShape) {
			ShapeModel.updateShape(newShape,
				mouse.startDragX,
				mouse.startDragY,
				e.offsetY - mouse.startDragY,
				e.offsetX - mouse.startDragX);
		}
	};

});