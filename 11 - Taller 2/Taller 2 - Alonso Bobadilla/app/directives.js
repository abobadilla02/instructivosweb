'use strict';

(function() {
	var direc = angular.module('directivas', []);

	direc.directive('clientes', function() {
		return {
			restric: 'E',
			templateUrl: 'app/views/clientes.html'
		}
	});

	direc.directive('capital', function() {
		return {
			restric: 'E',
			templateUrl: 'app/views/capital.html'
		}
	});

	direc.directive('deudas', function() {
		return {
			restric: 'E',
			templateUrl: 'app/views/deudas.html'
		}
	});

	direc.directive('pagos', function() {
		return {
			restric: 'E',
			templateUrl: 'app/views/pagos.html'
		}
	})
})();