// Controllers are special type of objects in Angular.
// To the controller we pass the objects we need. Scope
// is required and is used to link the controller with 
// view template. Any object, function or field you 
// define on the scope you can use directly in the view.
// We also pass our ShapeModel service so we have the access
// to the model.
window.app.controller("FormCtrl", function($scope, ShapeModel) {

	// Store all the shapes in scope object field so
	// we can iterate over it in the view
	$scope.shapes = ShapeModel.getShapes()

	// Function to set the selected shape 
	$scope.setSelected = function (shape) {
		$scope.selectedShape = shape;
	};

});