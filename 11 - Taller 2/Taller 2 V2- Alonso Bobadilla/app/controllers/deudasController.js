'use strict';

(function() {
	angular.module('app')
		.controller('DeudasController', DeudasController);

	DeudasController.$inject = ['$scope', '$localStorage'];

	function DeudasController($scope, $localStorage) {

		// Inicialización de localstorage
		$scope.$storage = $localStorage;
		
	}
})();