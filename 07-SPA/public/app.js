var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function ($routeProvider, $locationProvider) {
	$routeProvider.when("/restaurants",
		{
			controller: "restaurantsController",
			templateUrl: "restaurants.html"
		});
	$routeProvider.when("/restaurants/:id",
		{
			controller: "restaurantController",
			templateUrl: "restaurant.html"
		});
	$routeProvider.when("/bars",
		{
			controller: "barsController",
			templateUrl: "bars.html"
		});
		$routeProvider.when("/diningOptions",
			{
			redirectTo: "/restaurants"	
			});
	
	$routeProvider.otherwise(
		{
			templateUrl : "notfound.html"
		}
	)	
		
   //h$locationProvider.html5Mode(true);

});

var restaurants = [
		{
			name :"Lockhart",
			id:1,
			rating :"5 stars!",
		},
		{
			name :"Uncle Uber",
			id:2,
			rating :"5 stars!",
		},
		{
			name :"RJs",
			id:3,
			rating :"4 stars!",
		},
	]

var restaurantsController = function($scope, $location)
{
	$scope.restaurants =restaurants;
	$scope.goToBestRestaurant = function()
	{
		$location.path("restaurants/1");
	};
	
};

var restaurantController = function($scope, $route)
{
	var p = $route.current.params;
	var restaurant = restaurants.filter
	(function (r){return r.id == p.id;})[0];
	$scope.restaurant = restaurant;
};
var barsController = function($scope)
{
	$scope.title = "These are my bars";
};

myApp.controller ("restaurantsController", restaurantsController);
myApp.controller ("restaurantController", restaurantController);
myApp.controller ("barsController", barsController);