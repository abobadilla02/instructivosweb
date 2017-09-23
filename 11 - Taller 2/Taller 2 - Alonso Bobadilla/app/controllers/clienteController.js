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

		// Inicialización de variables clientes
		$scope.$storage = $localStorage;
		
		/*$scope.$storage.clientes = [{
			nombre_completo: "Alonso Bobobadilla",
			email: "a.bobadilla02@ufromail.cl",
			telefono: "67039813"
		}]; */
		
		$scope.$storage.capital = 1000000;

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

			// Limpiar los campos
			$scope.nuevoCliente = {};
		};

		// Modificar cliente
		$scope.modificarCliente = function() {
			$scope.selected = false;
			$scope.nuevoCliente = {};
		};

		// Eliminar cliente
		$scope.borrarCliente = function(cliente) {
			// Obtener el cliente a ser eliminado
			var eliminado = $scope.$storage.clientes[$scope.nuevoCliente.nombre_completo];
			
			// Eliminar el cliente mediante el método splice
			$scope.$storage.clientes.splice(eliminado, 1);

			// Limpiar los campos
			$scope.nuevoCliente = {};
			$scope.selected = false;
		};

		// Seleccionar cliente dando clicks
		$scope.selectCliente = function(cliente) {
			$scope.nuevoCliente = cliente;
			$scope.selected = true;
		};
	};
})();