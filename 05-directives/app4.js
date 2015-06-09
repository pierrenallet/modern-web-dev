/// <reference path="angular.js" />

var myApp = angular.module("myApp", []);

myApp.directive("fancy", function(){
	return{
		restrict : "E",
		replace : false,
		scope:{
			prop1:"@prop1"
		},
		template: "<div> my property is {{prop1}} </div>"
	};
});
