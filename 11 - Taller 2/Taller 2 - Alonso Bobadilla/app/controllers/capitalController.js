'use strict';

(function() {
	angular.module('app')
		.controller('CapitalController', CapitalController);

	CapitalController.$inject = ['$scope', '$localStorage'];

	function CapitalController($scope, $localStorage) {
		//$scope.$storage = $localStorage;
		//$scope.$storage.capital = 1230001;

	}
})();