window.app.controller("CanvasCtrl", function($scope, ShapeModel) {

	$scope.shapes = ShapeModel.getShapes()
	$scope.mouse = {}
	$scope.Math = window.Math;

	// $("svg").mousedown( function(e) {
	$scope.startDrawShape = function(e) {
		if($scope.activeShape) {
			$scope.newShape = {x:e.offsetX, y:e.offsetY,h:1,w:1, type:$scope.activeShape};
			$scope.mouse.startDragX = e.offsetX;
			$scope.mouse.startDragY = e.offsetY;
			ShapeModel.addShape($scope.newShape);
		}
	};

	$scope.stopDrawShape = function(e) {
		$scope.newShape = null;
	};

	$scope.updateDrawShape = function(e) {
		if($scope.newShape) {
			$scope.newShape.w = e.offsetX - $scope.mouse.startDragX;
			$scope.newShape.h = e.offsetY - $scope.mouse.startDragY;
			$scope.newShape.x = $scope.mouse.startDragX 
			$scope.newShape.y = $scope.mouse.startDragY 
		}
	};

});