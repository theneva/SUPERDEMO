// register a controller that deals with injected $scope
// also inject PeopleService to access its methods
angular.module('whatItSaysInNgApp').controller('PeopleController', function($scope, PeopleService) {
	// just get all people to display them immediately
	PeopleService.findAll()
		.success(function(people/*, status, headers, config*/) {
			// make 'people' visible for HTML template
			$scope.people = people;
		})
		.error(function(message/*, status, headers, config*/) {
			// handle errors in the best way possible
			alert(message);
		});

	// make function available on scope to be called when form is submitted
	$scope.saveNewPerson = function(newName, newAge) {
		// verify that both fields are OK
		if (!newName || !newAge) {
			alert('Fill out the whole form :(');
			return;
		}

		// save the new person via injected PeopleService
		PeopleService.create({
			name: newName,
			age: newAge
		}).success(function(newPerson) {
			// when successfully created (and created person is received from the API), add it to $scope.people
			// angular automatically updates the HTML template
			$scope.people.unshift(newPerson);
		});
	};
});
