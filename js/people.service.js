// register a service that will communicate with API using injected $http module
angular.module('whatItSaysInNgApp').service('PeopleService', function($http) {
	// server url for convenience
	var host = 'http://theneva.com:8989';

	// define methods for controllers to use to separate concerns

	// automatically returned as promise
	this.findAll = function() {
		return $http.get(host + '/people');
	};

	// automatically returned as promise
	this.findOne = function(id) {
		return $http.get(host + '/people/' + id);
	}

	// automatically sent as application/json, returned as promise
	this.create = function(newPerson) {
		return $http.post(host + '/people', newPerson);
	};
});
