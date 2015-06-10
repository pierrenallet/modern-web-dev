var moviesApp = angular.module("movies", []);

moviesApp.controller("moviesController", function ($scope, $http) {
	var promise = $http.get("/api/movies");
	promise.then(function (response) {
		$scope.movies = response.data;
	});
	$http.get("/api/movies/2").then(function(response)
		{
			$scope.currentMovie = response.data;
			var editedMovie  = response.data;
			editedMovie.title = "new title";
			$http.put("/api/movies/2", editedMovie);
		});
});
	
	