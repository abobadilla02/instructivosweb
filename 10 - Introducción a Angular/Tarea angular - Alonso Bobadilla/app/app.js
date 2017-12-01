'use strict';

(function() {
	var app = angular.module('app', ['directivas', 'app-controller']);

	app.filter("estado", function() {
		return function(entrada) {
			if (entrada == true) {
				return "Vivo";
			} else {
				return "Muerto";
			}

		}
	});
})();