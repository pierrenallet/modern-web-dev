/// <reference path="angular.js" />



var myApp = angular.module("calculator", []);

var scopeHack;
var calculatorController = function($scope){
	$scope.a = 2;
	scopeHack = $scope;
	$scope.b = '0';
	$scope.result = "";
	$scope.add = function(){
		$scope.result = parseFloat($scope.a) + 
		parseFloat($scope.b);
	};
	$scope.divide = function(){
		$scope.result = parseFloat($scope.a) /
		parseFloat($scope.b);
	};
};

function onClick()
{
	scopeHack.result = parseFloat(scopeHack.a) -
		parseFloat(scopeHack.b);
	scopeHack.$apply();
};
myApp.controller("calculator", calculatorController);
