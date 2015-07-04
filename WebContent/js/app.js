
(function(angular) {
	'use strict';
	var myApp = angular.module('app', []);

	var uid = 1;
	function ContactController($scope) {
		$scope.contacts = [ {
			id : 0,
			'name' : 'Viral',
			'email' : 'hello@gmail.com',
			'phone' : '123-2343-44'
		} ];
		$scope.add = function() {
			if ($scope.newContact.id == null) {
				$scope.newContact.id = uid++;
				$scope.contacts.push($scope.newContact);
			} else {

				for ( var i in $scope.contacts) {
					if ($scope.contacts[i].id == $scope.newContact.id) {
						$scope.contacts[i] = $scope.newContact;
					}
				}
			}
			$scope.newContact = {};
		}
		$scope.edit = function(id) {
			for ( var i in $scope.contacts) {
				if ($scope.contacts[i].id == id) {
					$scope.newContact = angular.copy($scope.contacts[i]);
				}
			}
		}
	}
	myApp.controller('ContactController', [ "$scope", ContactController ]);
})(window.angular);