var moviesApp = angular.module("movies", ["ngResource"]);

moviesApp.factory ("moviesResource", function($resource)
	{
		return $resource('/api/movies/:id', {id: '@id'
    }, {
			update: {method: 'PUT'}
		});
		
	});
	
moviesApp.controller("moviesController", function ($scope, moviesResource) {

	$scope.movies = moviesResource.query();
});
	
	