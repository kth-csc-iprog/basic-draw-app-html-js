window.app.controller("FormCtrl", function($scope, ShapeModel) {

	$scope.shapes = ShapeModel.getShapes()

	$scope.setSelected = function (shape) {
		$scope.selectedShape = shape;
	};

});