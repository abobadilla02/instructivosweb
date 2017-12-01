(function () {
	'use strict';

	angular
	.module('app')
	.component('mytoolbar', {
		templateUrl: 'app/components/toolbar/toolbar.html',
		controller: toolbarCtrl,
		controllerAs: 'vm'
	});
	
	function toolbarCtrl() {
		
	}
})();
