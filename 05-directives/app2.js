/// <reference path="angular.js" />

var myApp = angular.module("myApp", []);

myApp.directive("fancy", function(){
	return{
		restrict : "A",
		
		link: function(s, iElement, attrs){
			var clicked = false;
			debugger;
			iElement[0].onclick = function(){
				iElement.css("background", clicked?"red":"green");
				clicked = !clicked;
			};
		}
	};
});
