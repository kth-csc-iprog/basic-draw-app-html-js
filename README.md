Basic Draw App - HTML version
=============================
This is the simple drawing application developed for the [Interaction Programing course](https://www.kth.se/social/course/DH2641/) with the purpose to demonstrate the [MVC](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) principles on the client side JavaScript and HTML. 

## Java Script only version + Drag and Drop

The JavaScript only version uses basic JavaScript (with [jQuery](http://jquery.com/)). The MVC concepts are implemented "manually", in other words each of the MVC components (model, views and controllers) are just simple JavaScript objects with some functions and fields assigned to them.

In order to keep they view in sync with the model, we needed to implement the [Observer pattern](http://en.wikipedia.org/wiki/Observer_pattern) including it's internals since, unlike Java, basic JavaScript doesn't have it implemented. However, if you refer to model code, you will notice it's quite simple and straight forward.

This version also includes drag and drop support. The drag and drop is implemented using HTML5 [drag and drop functionality ](https://developer.mozilla.org/en-US/docs/DragDrop/Drag_and_Drop) and allows the user to drag the a shape from the list of shapes to another Basic Draw App (including Java and JavaFx versions) or to drag it to the desktop (Finder/Windows Explorer) and store it as a file (latter works only with Chrome). [FileReader API](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) is used to in combination with drag and drop to enable the possibility to drop shape file from desktop to the shape list.


## Angular version

This version uses [AngularJS](http://angularjs.org/) which is a popular JavaScript library for writing enhanced web applications. Among many other things, it uses a variation of MVC paradigm. 

One of the most useful and powerful features of Angular are it's declarative bindings that allow us to bind the HTML elements directly to the dynamic values (that we get through the controller). You can notice them if you look at [index.html](https://github.com/kth-csc-iprog/basic-draw-app-html-js/blob/master/angular/index.html) and all the different `ng-` attributes you see there. In this way, we don't need a separate view code (as in JS only example). Also, the form controller is much simpler because, thanks to binding on the input elements, which is bi-directional, we don't need to listen to the on change events to update the model. This is taken care of by angular automatically. 

Angular version at the moment doesn't have the drag and drop support, but implementing it would be very similar to the JS only version.
