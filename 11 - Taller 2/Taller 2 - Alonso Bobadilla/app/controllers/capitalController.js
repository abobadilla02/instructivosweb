'use strict';

(function() {
	angular.module('app')
		.controller('CapitalController', CapitalController);

	CapitalController.$inject = ['$scope', '$localStorage'];

	function CapitalController($scope, $localStorage) {

		// Inicialización de localstorage
		$scope.$storage = $localStorage;

		/* Inicializar el capital, si es la primera vez que se accede se obtiene el
		   presupuesto inicial del problema, que es $15.000.000, por otro lado si ya
		   se ha almacenado en el localstorage, entonces se accede al valor que esté 
		   en ese momento (menos o más dependiendo de como se comporten los clientes)
		*/
		if (!$scope.$storage.capital && !$scope.$storage.capital != 0) {
			$scope.$storage.capital = 15000000;
		}

		// Inicializar modelo con las cuotas
		var cuotasFijas = [{
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

		$scope.modeloCuotas = cuotasFijas;

		// Función para registrar un nuevo prestamo
		$scope.registrarPrestamo = function() {

			// Si no existe ningúna deuda se inicia el arreglo
			if (!$scope.$storage.deudas) {
				$scope.$storage.deudas = [];
			}

			// Se busca la cuota en el arreglo (para saber los intereses y el número de cuotas)
			var tipoCuota = $scope.modeloCuotas[$scope.nuevoPrestamo.cuota_id - 1];

			// Obtención del campo prestamo
			var prestamo = $scope.nuevoPrestamo.prestamo;

			// Calculo del prestamo más los intereses 
			var total = prestamo + (prestamo * (tipoCuota.interes / 100));

			// Calculo de la cuota, sacada en base al total con intereses
			var valorCuota = total / tipoCuota.n_cuotas;

			// Inicialización de arreglo para las cuotas
			var cuotasDeuda = [];

			// Creación del arreglo de cuotas (dependiendo de cuantas se hayan seleccionado)
			for (var i = 0; i < tipoCuota.n_cuotas; i++) {
				var numCuota = {
					valor: valorCuota,
					pagado: false
				}
				cuotasDeuda.push(numCuota);
			}

			// Modelo para la nueva deuda ingresada
			var deuda = {
				cliente: {
					nombre_completo: $scope.nuevoCliente.nombre_completo,
					email: $scope.nuevoCliente.email,
					telefono: $scope.nuevoCliente.telefono
				},
				cuota_id: $scope.nuevoPrestamo.cuota_id,
				cuotas: cuotasDeuda,
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
		};

		$scope.pagarCuota = function(valorCuota, persona) {

			// Se suma el dinero pagado al capital
			$scope.$storage.capital = $scope.$storage.capital + valorCuota;

			// Se recorre el json de deudas para cambiar el estado de pago de la cuota
			for (var i = 0; i < $scope.$storage.deudas.length; i++) {
				if ($scope.$storage.deudas[i].cliente.nombre_completo === persona.cliente.nombre_completo) {
					for (var j = 0; j < $scope.$storage.deudas[i].cuotas.length; j++) {
						if (!$scope.$storage.deudas[i].cuotas[j].pagado) {
							$scope.$storage.deudas[i].cuotas[j].pagado = !$scope.$storage.deudas[i].cuotas[j].pagado;
							break;
						}
					}
				}
			}
			location.reload();
		};
	}
})();