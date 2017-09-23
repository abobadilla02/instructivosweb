'use strict';

(function() {
	angular.module('app')
		.controller('CapitalController', CapitalController);

	CapitalController.$inject = ['$scope', '$localStorage'];

	function CapitalController($scope, $localStorage) {

		$scope.$storage = $localStorage;

		if (!$scope.$storage.capital && !$scope.$storage.capital != 0) {
			$scope.$storage.capital = 15000000;
		}

		console.log($scope.$storage.deudas);

		// Inicializar cuotas
		var cuotas = [{
			id: 1,
			n_cuotas: 1,
			interes: 0
		}, {
			id: 2,
			n_cuotas: 3,
			interes: 6
		}, {
			id: 3,
			n_cuotas: 6,
			interes: 15
		}, {
			id: 4,
			n_cuotas: 9,
			interes: 25
		}]

		$scope.modeloCuotas = cuotas;

		// Función para registrar un nuevo prestamo
		$scope.registrarPrestamo = function() {

			// Si no existe ningúna deuda se inicia el arreglo
			if (!$scope.$storage.deudas) {
				$scope.$storage.deudas = [];
			}

			// Se busca la cuota en el arreglo (para saber los intereses y el número de cuotas)
			var tipoCuota = $scope.modeloCuotas[$scope.nuevoPrestamo.cuota_id - 1];

			// Obtención de el campo prestamo
			var prestamo = $scope.nuevoPrestamo.prestamo;

			// Calculo del prestamo más los intereses 
			var total = prestamo + (prestamo * (tipoCuota.interes / 100));

			// Calculo de la cuota, sacada en base al total con intereses
			var valorCuota = total / tipoCuota.n_cuotas;

			// Creación del arreglo de cuotas (dependiendo de cuantas se hayan seleccionado)
			var cuotas = [];
			for (var i = 0; i < tipoCuota.n_cuotas; i++) {
				var numCuota = {
					valor: valorCuota,
					boolean: false
				}
				cuotas.push(numCuota);
			}

			// Modelo nueva deuda
			var deuda = {
				cliente: {
					nombre_completo: $scope.nuevoCliente.nombre_completo,
					email: $scope.nuevoCliente.email,
					telefono: $scope.nuevoCliente.telefono
				},
				cuota_id: $scope.nuevoPrestamo.cuota_id,
				cuotas: cuotas,
				prestamo: prestamo,
				total: total
			};

			// Ingresar el nuevo prestamo al localStorage
			$scope.$storage.deudas.push(deuda);

			// Actualizar el capital
			$scope.$storage.capital = $scope.$storage.capital - prestamo;

			// Esconder y limpiar los campos
			$scope.mostrarPrestamo();
			$scope.nuevoPrestamo = {};
		}
	}
})();