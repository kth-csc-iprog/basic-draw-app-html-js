// We call all the initialization code inside this special
// jQuery function so that we are sure it is executed
// only after the page elements have finished loading
$(function() {
	// Instantiate the model
	var model = new ShapesModel();

	// Instantiate the view and pass it the container element and model
	var canvasView = new CanvasView($("#canvasView"),model);
	// Instantiate the controller and pass it the view and model
	var canvasCtrl = new CanvasCtrl(canvasView,model);

	// Instantiate the view and pass it the container element and model
	var formView = new FormView($("#formView"),model);
	// Instantiate the controller and pass it the view and model
	var formCtrl = new FormCtrl(formView, model);
});