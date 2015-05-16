angular.module('whatItSaysInNgApp')
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'PeopleController',
				templateUrl: 'templates/people.html'
			})
			.when('/people/:name', {
				controller: 'PersonController',
				templateUrl: 'templates/person.html'
			})
			.otherwise({
				controller: 'NotFoundController',
				templateUrl: 'templates/not_found.html'
			});
	});