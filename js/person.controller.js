angular.module('whatItSaysInNgApp')
	.controller('PersonController', function($scope, $routeParams, PeopleService) {
		var name = $routeParams.name;

		PeopleService.findOne(name)
			.success(function(person) {
				$scope.person = person;
			});
	});
