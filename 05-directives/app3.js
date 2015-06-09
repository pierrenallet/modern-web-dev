/// <reference path="angular.js" />

var myApp = angular.module("myApp", []);

myApp.directive("fancy", function(){
	return{
		restrict : "A",
		replace : false,
		transclude : true,
		template: "<div> I want to see my original content here -->> <div ng-transclude></div> <<-- </div>"
	};
});
