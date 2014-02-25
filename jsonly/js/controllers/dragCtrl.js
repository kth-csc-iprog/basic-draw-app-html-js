var DragCtrl = function(view,model,shape) {
	view.bind("dragstart", function(e) {
		e.originalEvent.dataTransfer.setData("DownloadURL","text/plain:shape.properties:data:text/plain;charset=utf-8," + encodeURIComponent(model.getShapeToText(shape)));
		e.originalEvent.dataTransfer.setData("text/plain",model.getShapeToText(shape));
	});

	view.bind("dragend", function(e) {
		if( e.originalEvent.dataTransfer.dropEffect!="none" ){
			model.removeShape(shape);
		};
	});
};