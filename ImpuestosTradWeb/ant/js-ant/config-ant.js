
app.config(function ($routeProvider) {

    $routeProvider
		.when('/', {
		    templateUrl: 'home.html',
		    controller: 'inicioCtrl',
		})
		.when('/gastos', {
		    templateUrl: 'gastos/gastos.html',
		    controller: 'gatosCtrl',
		    controllerAs: 'vm'

		})
		.when('/usuarios', {
		    templateUrl: 'usuarios/usuarios.html',
		    controller: 'usuariosCtrl'
		})
		.otherwise({
		    redirectTo: '/'
		});


});