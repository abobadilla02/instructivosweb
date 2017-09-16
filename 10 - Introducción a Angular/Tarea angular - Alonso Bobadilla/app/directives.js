'use strict';

(function() {
	var direc = angular.module('directivas', []);

	direc.directive('tarjeta', function() {
		return {
			restric: 'E',
			templateUrl: 'app/views/tarjeta.html'
		}
	});
})();