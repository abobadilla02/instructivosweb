angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  /*
	Se pueden agregar tantos estados como se necesite, escribiendo
	.state('estado', {
	  url: '/urlAlComponente',
	  component: 'componente'
	})
  */
  /*
  $stateProvider
    .state('app', {
      url: '/',
      component: 'hola'
    })
    .state('nuevoComponente', {
      url: '/nuevoComponente',
      component: 'nuevoComponente'
    });
}
*/

$stateProvider
  .state('app', {
    url: '/',
    templateUrl: 'app/container/buscar.html'
  })
  .state('nuevoComponente', {
    url: '/nuevoComponente',
    component: 'nuevoComponente'
  })
  .state('letra', {
    url: '/letra/:artist/:title',
    component: 'letra'
  });
}