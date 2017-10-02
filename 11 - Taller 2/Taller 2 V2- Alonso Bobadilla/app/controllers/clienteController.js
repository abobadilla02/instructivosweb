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

		// Formulario de prestamo, pagos y resumen deudas ocultos por defecto
		$scope.formPrestamo = false;
		$scope.mostrarDeudas = false;
		$scope.mostrarPagos = false;

		// Inicialización de localstorage
		$scope.$storage = $localStorage;
		
		// Registrar un nuevo cliente
		$scope.registrarCliente = function() {

			// Si no existe ningún cliente, inicializar la variable clientes
			if (!$scope.$storage.clientes) {
				$scope.$storage.clientes = [];
			}
	
			// Modelo nuevo cliente
			var cliente = {
				nombre_completo: $scope.nuevoCliente.nombre_completo,
				email: $scope.nuevoCliente.email,
				telefono: $scope.nuevoCliente.telefono
			};

			// Ingresar el nuevo cliente al localStorage
			$scope.$storage.clientes.push(cliente);

			// Limpiar los campos del formulario
			$scope.nuevoCliente = {};
		};

		// Modificar cliente
		$scope.modificarCliente = function() {
			$scope.selected = false;
			$scope.nuevoCliente = {};
		};

		// Eliminar cliente
		$scope.borrarCliente = function() {

			// Eliminar la coincidencia usando como parametro el nombre
			for (var i = 0; i < $scope.$storage.clientes.length; i++) {
				if ($scope.$storage.clientes[i].nombre_completo === $scope.nuevoCliente.nombre_completo) {
					$scope.$storage.clientes.splice(i, 1);
				}
			}

			// Limpiar los campos del formulario
			$scope.nuevoCliente = {};
			$scope.selected = false;
		};

		// Seleccionar cliente dando click en la tabla
		$scope.selectCliente = function(cliente) {
			// Obtener el objeto cliente, cuando se da click en la tabla
			$scope.nuevoCliente = cliente;
			$scope.selected = true;

			// Almacenar de manera temporal al cliente
			$scope.$storage.deudor = cliente;
			// Obtener su nombre completo
			var nombre = $scope.$storage.deudor.nombre_completo;
			
			// Limpiar el parametro deudor para ingresar el json temporal
			$scope.$storage.deudor = [];			
			
			// Seleccionar las deudas del cliente específico buscando por nombre
			for (var i = 0; i < $scope.$storage.deudas.length; i++) {
				if ($scope.$storage.deudas[i].cliente.nombre_completo === nombre) {
					// Creación de json temporal con las deudas del cliente específico
					var prestamosDeudor = $scope.$storage.deudas[i];
					$scope.$storage.deudor = $scope.$storage.deudor.concat(prestamosDeudor);
				}
			}		
		};

		// Funciones para ocultar y mostrar formularios y tablas
		$scope.mostrarPrestamo = function() {
			
			if ($scope.mostrarDeudas) {
				$scope.resumenDeudas();
			}

			if ($scope.mostrarPagos) {
				$scope.cartolaPagos();
			}

			$scope.formPrestamo = !$scope.formPrestamo;
		};

		$scope.resumenDeudas = function() {

			if ($scope.mostrarPagos) {
				$scope.cartolaPagos();
			}

			if ($scope.formPrestamo) {
				$scope.mostrarPrestamo();
			}

			$scope.mostrarDeudas = !$scope.mostrarDeudas;

			$scope.nuevoCliente = {};
			$scope.selected = false;
		};

		$scope.cartolaPagos = function() {
			
			if ($scope.formPrestamo) {
				$scope.mostrarPrestamo();
			}

			if ($scope.mostrarDeudas) {
				$scope.resumenDeudas();
			}

			$scope.mostrarPagos = !$scope.mostrarPagos;
		};
	};
})();