'use strict';

(function() {
	angular.module('app')
		.controller('PagosController', PagosController);

	PagosController.$inject = ['$scope', '$localStorage'];

	function PagosController($scope, $localStorage) {

		// Inicialización de localstorage
		$scope.$storage = $localStorage;
		console.log($scope.$storage);

		$scope.pagarCuota = function(valorCuota, persona) {

			// Se suma el dinero pagado al capital
			$scope.$storage.capital = $scope.$storage.capital + valorCuota;

			// Se recorre el json de deudas para cambiar el estado de pago de la cuota
			/*for (var i = 0; i < $scope.$storage.deudas.length; i++) {
				if ($scope.$storage.deudas[i].cliente.nombre_completo === persona.cliente.nombre_completo) {
					for (var j = 0; j < $scope.$storage.deudas[i].cuotas.length; j++) {
						if (!$scope.$storage.deudas[i].cuotas[j].pagado) {
							$scope.$storage.deudas[i].cuotas[j].pagado = true;
							$scope.$storage.push();
							var flag = true;
							break;
						}
					}
					if (flag) {
						break;
					}
				}
			} */
			//location.reload();
			for (var i = 0; i < $scope.$storage.deudor.length; i++) {
				for (var j = 0; j < $scope.$storage.deudor[i].cuotas.length; j++) {
					if (!$scope.$storage.deudor[i].cuotas[j].pagado) {
						$scope.$storage.deudor[i].cuotas[j].pagado = true;
						var flag = true;
						break;
					}
					if (flag) {
						break;
					}
				}
			}
		}
	}
})();