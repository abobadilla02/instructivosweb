'use strict';

(function() {
	var controlador = angular.module('app-controller', []);
	controlador.controller('appController', ['$scope', function($scope) {
		var users = [{
			nombre: 'Juan',
			apellido: 'Nieves',
			imagen: 'https://pbs.twimg.com/profile_images/613894506480439296/MGWBzW3B.jpg',
			vivo: true
		}, {
			nombre: 'Daenerys',
			apellido: 'Targaryen',
			imagen: 'https://pbs.twimg.com/profile_images/699219278927675393/de5Cjrju.png',
			vivo: false
		}, {
			nombre: 'Eddard',
			apellido: 'Stark',
			imagen: 'https://pbs.twimg.com/profile_images/623606708531818496/8ap1ZAb6.jpg',
			vivo: true
		}];

		$scope.personajes = users;

		$scope.formulario = function() {
			
			$scope.personajes = $scope.personajes.concat([{
				nombre: $scope.nombreI,
				apellido: $scope.apellidoI,
				imagen: $scope.rutaI,
				vivo: $scope.estadoI
			}]);
			$scope.nombreI = "";
			$scope.apellidoI = "";
			$scope.rutaI = "";
			$scope.estadoI = "";
		}
	}]);
})();