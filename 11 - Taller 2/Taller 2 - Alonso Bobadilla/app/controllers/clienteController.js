'use strict';

(function() {
	angular.module('app')
		.controller('ClienteController', ClienteController);

	ClienteController.$inject = ['$scope', '$localStorage'];

	function ClienteController($scope, $localStorage) {

		// Se inicializan las variables, para que no hayan nuevos clientes en el formulario
		// Para que el arreglo de clientes este vacio y que no haya ninguno seleccionado

		// Ningún usuario seleccionado por defecto
		$scope.selected = false;

		// Formulario de prestamo y resumen deudas ocultos por defecto
		$scope.formPrestamo = false;
		$scope.mostrarDeudas = false;

		// Inicialización de variables clientes
		$scope.$storage = $localStorage;

		// Registrar un nuevo cliente
		$scope.registrarCliente = function() {

			// Si no existe ningún cliente, inicializar la variable clientes
			if (!$scope.$storage.clientes) {
				$scope.$storage.clientes = [];
			}
			console.log($scope.nuevoCliente.email);
			// Modelo nuevo cliente
			var cliente = {
				nombre_completo: $scope.nuevoCliente.nombre_completo,
				email: $scope.nuevoCliente.email,
				telefono: $scope.nuevoCliente.telefono
			};

			// Ingresar el nuevo cliente al localStorage
			$scope.$storage.clientes.push(cliente);

			// Limpiar los campos
			$scope.nuevoCliente = {};
		};

		// Modificar cliente
		$scope.modificarCliente = function() {
			$scope.selected = false;
			$scope.nuevoCliente = {};
		};

		// Eliminar cliente
		$scope.borrarCliente = function() {

			// Eliminar la coincidencia
			for (var i = 0; i < $scope.$storage.clientes.length; i++) {
				if ($scope.$storage.clientes[i].nombre_completo === $scope.nuevoCliente.nombre_completo) {
					$scope.$storage.clientes.splice(i, 1);
				}
			}

			// Limpiar los campos
			$scope.nuevoCliente = {};
			$scope.selected = false;
		};

		// Seleccionar cliente dando clicks
		$scope.selectCliente = function(cliente) {
			$scope.nuevoCliente = cliente;
			$scope.selected = true;
		};

		$scope.mostrarPrestamo = function() {
			if ($scope.mostrarDeudas) {
				$scope.resumenDeudas();
				$scope.formPrestamo = !$scope.formPrestamo;
			} else {
				$scope.formPrestamo = !$scope.formPrestamo;
			}
		}

		$scope.resumenDeudas = function() {
			if ($scope.formPrestamo) {
				$scope.mostrarPrestamo();
				$scope.mostrarDeudas = !$scope.mostrarDeudas;
			} else {
				$scope.mostrarDeudas = !$scope.mostrarDeudas;
			}

			$scope.nuevoCliente = {};
			$scope.selected = false;
		}
	};
})();