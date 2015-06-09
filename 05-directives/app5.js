/// <reference path="angular.js" />

var myApp = angular.module("myApp", []);

myApp.directive("fancy", function(){
	return{
		restrict : "E",
		replace : false,
		scope:{
			prop1:"=prop2"
		},
		template: "<div> my property is {{prop1}} </div>"
	};
});

var controller = function($scope){
	$scope.message = "message!!";
	$scope.otherMessage = "other message";
};

myApp.controller("myController", controller);