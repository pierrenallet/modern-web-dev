/// <reference path="angular.js" />



var myApp = angular.module("myApp", []);

myApp.directive("eagle", function(){
	return{
		restrict : "EAC",
		replace: false,
		template : "<img src='https://tse1.mm.bing.net/th?&id=JN.HGyQu7QYkLtGGGbVUtFZNA&w=300&h=300&c=0&pid=1.9&rs=0&p=0&r=0'/>"
	};
});
