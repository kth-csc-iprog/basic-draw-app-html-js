window.app = angular.module("basicDraw",[]);

window.app.controller("CanvasCtrl", function($scope) {
	$scope.circles = [
		{type:'ellipse', x: 0, y:0, w:100, h:100},
		{type:'rectangle', x: 20, y:20, w:100, h:100}
	]

	$scope.selectedShape = {}
	$scope.mouse = {}
	$scope.Math = window.Math;

	$scope.setSelected = function (shape) {
		$scope.selectedShape = shape;
	};

	$("svg").mousedown( function(e) {
		if($scope.activeShape) {
			$scope.newShape = {x:e.offsetX, y:e.offsetY,h:1,w:1, type:$scope.activeShape};
			$scope.mouse.startDragX = e.offsetX;
			$scope.mouse.startDragY = e.offsetY;
			$scope.circles.push($scope.newShape);
		}
	});

	$("svg").mouseup (function(e) {
		$scope.newShape = null;
	});

	$("svg").mousemove( function(e) {
		if($scope.newShape) {
			updateShape(e.offsetX,e.offsetY);
		}
	});

	updateShape = function(offsetX,offsetY) {
		$scope.$apply(function() {
			$scope.newShape.w = offsetX - $scope.mouse.startDragX;
			$scope.newShape.h = offsetY - $scope.mouse.startDragY;
			$scope.newShape.x = $scope.mouse.startDragX //+ (offsetX - $scope.mouse.startDragX)*2;
			$scope.newShape.y = $scope.mouse.startDragY //+ (offsetY - $scope.mouse.startDragY)*2;
		});
	};

});

