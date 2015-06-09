/// <reference path="angular.js" />



var myApp = angular.module("shopping", []);

/*
myApp.service("currencyConverter", function()
	{
		this.convert = function(value, fromCurrency, toCurrency)
		{
			return value * 2;
		};
	});
	*/
myApp.factory("currencyConverter", function()
	{
		return {
			convert : function(value, fromCurrency, toCurrency)
			{
				return value * 2;
			}
		};
	}
	);
	
var productsController = function($scope, currencyConverter){
	$scope.message = "Hello";
	
	$scope.products = [
		{name: "Maserati", price: 250000, message: "Cool car" },
		{name: "Mustang", price: 31995, message: "Convertible..." },
		{name: "Camry", price: 35123, message: "This is a Toyota"},
	];
		$scope.currencies = [
			{name: "$", id : "USD"},
			{name: "EUR", id : "EUR"},
			{name: "Bit coint", id : "BTC"},
		];
		$scope.newProductCurrencyId = "USD",
	$scope.removeProduct = function(product)
	{
		var productIndex = $scope.products.indexOf(product);
		$scope.products.splice (productIndex, 1);
	};
	$scope.addProduct  = function()
	{
		var convertedPrice = currencyConverter.convert (
			$scope.newProductPrice, $scope.newProductCurrencyId, "USD");
		$scope.products.push({
			name : $scope.newProductName , price : convertedPrice});
		$scope.newProductName = "";
		$scope.newProductPrice = "";
	};
};
/*

myApp.filter("myCurrency", function(value)
	{
		return value;
	});*/

myApp.controller("products", productsController);
