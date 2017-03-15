// Punto de entrada de la aplicacion
// Los parentesis finales hacen que se autoinvoque la funcion al cargarse en el html
(function() {
    var app = angular.module('Cal2Pro', ['ngRoute']);

    //===============================
    // FACTORY CON VARIABLES GLOBALES
    //===============================

  	 //factory, variables globales
	app.factory('globales', function() 
	{
		var varGlobales = {};
        varGlobales.url = "http://localhost:1666/Service1.asmx/Login?callback=JSON_CALLBACK";	
        varGlobales.sesion = "";
        
		
  		return varGlobales;
	});

    ////===============================
    //// CONFIG CON RUTAS
    ////===============================

	//app.config(['$routeProvider', function ($routeProvider) {

	//    $routeProvider
    //        .when('/', {
    //            templateUrl: 'home.html',
    //            controller: 'inicioCtrl',
    //        })
    //        .when('/gastos', {
    //            templateUrl: 'gastos/gastos.html',
    //            controller: 'gastosCtrl',
    //            controllerAs: 'vm'
    //        })
    //        .when('/gasto/:GastosID', {
    //            templateUrl: 'gastos/gasto.html',
    //            controller: 'gastoCtrl',
    //            controllerAs: 'vm'

    //        })

    //        .when('/usuarios', {
    //            templateUrl: 'usuarios/usuarios.html',
    //            controller: 'usuariosCtrl'
    //        })

    //        .otherwise({
    //            redirectTo: '/'
    //        });


	//}]);

    ////===============================
    //// CONTROLADOR PARA INDEX.HTML
    ////===============================


	//app.controller('inicioCtrl', ['$scope', '$http', function ($scope, $http) {

	//    $scope.menuSuperior = 'parcial/menu.html';
	//}]);

    ////===============================
    //// CONTROLADOR VER GASTOS
    ////===============================

	//app.controller('gastosCtrl', gastosCtrl);

	//function gastosCtrl($http) {
	//    console.log("gastosCtrl activado");
	//    var vm = this;

	//    var urlWS = "http://localhost:1666/Service1.asmx/";
	//    var urlCallBack = "?callback=JSON_CALLBACK";
	//    var url = urlWS + "GastosVer" + urlCallBack;

	//    //var url = "http://localhost:1666/Service1.asmx/GastosVer?callback=JSON_CALLBACK";
	//    console.log(url);

	//    vm.gastos = "";
	//    $http.jsonp(url)
    //    .success(function (data) { vm.gastos = data; })
    //    .error(function (data, status, headers, config) { alert(status); });
	//}

    //===============================
    // CONTROLADOR VER UN GASTO
    //===============================

	//app.controller('gastoCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

    //    var vm = this;

	//    vm.codigo = $routeParams.GastosID;
	//    vm.gasto = {};
	   
        
	//    var urlWS = "http://localhost:1666/Service1.asmx/";
	//    var urlCallBack = "?callback=JSON_CALLBACK";
	//    var url = urlWS + "VerGasto"  + urlCallBack + "&GastosID="+vm.codigo;

	//    $http.jsonp(url)
    //    .success(function (data) {vm.gasto = data;})
    //    .error(function (data, status, headers, config) { alert(status) });

	//    vm.guardarGasto = function (gasto)
	//    {
	//        //$scope.actualizado = true; //para mostrar un mensaje de que el registro ha sido actualizado

	//        var urlWS = "http://localhost:1666/Service1.asmx/ModificarGastos";

    //        //mostramos los resultados por consola para verificar que todo va bien
	//        console.log("URL ModificarGasto ->" + urlWS);
	//        console.log("JSON DESPUES -> " + JSON.stringify(gasto));

	//        // Hay que usar POST para evitar problemas de longitud del string
	//        $http({
	//            url: urlWS,
	//            method: "POST",
	//            data: { gastos: JSON.stringify(gasto) },
	//            headers: { 'Content-Type': 'application/json' }
	//        })
	//		.success(function (data) {
	//		    gasto = data; console.log(data);

	//		    //si el registro ha sido actualizado se muestra el mensaje ((NO FUNCIONA))
	//		    //if (data.err === false) {
	//		    //    $scope.actualizado = true;
	//		    //    setTimeout(function () {
	//		    //        $scope.actualizado = false;
	//		    //        $scope.$apply();
	//		    //    }, 3500);
	//		    //};

	//		})
	//		.error(function (data, status, headers, config) {
	//		    console.log("ERROR->" + status); alert(status + ' ' + headers);
	//		});
	//    }

	//    //vm.AnadirGasto = function (gasto) {
	//    //    //$scope.actualizado = true; //para mostrar un mensaje de que el registro ha sido actualizado

	//    //    var urlWS = "http://localhost:1666/Service1.asmx/AgregarGastos";

	//    //    //mostramos los resultados por consola para verificar que todo va bien
	//    //    console.log("URL ModificarGasto ->" + urlWS);
	//    //    console.log("JSON DESPUES -> " + JSON.stringify(gasto));

	//    //    // Hay que usar POST para evitar problemas de longitud del string
	//    //    $http({
	//    //        url: urlWS,
	//    //        method: "POST",
	//    //        data: { gastos: JSON.stringify(gasto) },
	//    //        headers: { 'Content-Type': 'application/json' }
	//    //    })
	//	//	.success(function (data) {
	//	//	    gasto = data; console.log(data);

	//	//	    //si el registro ha sido actualizado se muestra el mensaje ((NO FUNCIONA))
	//	//	    //if (data.err === false) {
	//	//	    //    $scope.actualizado = true;
	//	//	    //    setTimeout(function () {
	//	//	    //        $scope.actualizado = false;
	//	//	    //        $scope.$apply();
	//	//	    //    }, 3500);
	//	//	    //};

	//	//	})
	//	//	.error(function (data, status, headers, config) {
	//	//	    console.log("ERROR->" + status); alert(status + ' ' + headers);
	//	//	});
	//    //}
	//}]);


    //===============================
    // CONTROLADOR DE LOGIN Y USUARIO
    //===============================

	app.controller('Cal2Pro_Controller', Cal2Pro_Controller);	
	
    // Decalaramos un controlador para el login
	function Cal2Pro_Controller($http, globales)
	{
        console.log("Cal2Pro_Controller activado");
        var vm = this;
        //vm.menuSuperior = 'parcial/menu.html';
                
        this.ingresar = function(datos)
        {
            //validaciones
            vm.invalido = false; vm.errores = "";
            if (datos.correoElectronico.length < 3){
                vm.invalido = true;
                vm.errores = "introduzca correctamente su usuario";
                return;

            } else if (datos.contrasena.length < 3) {
                vm.invalido = true;
                vm.errores = "introduzca correctamente su contraseña";
                return;
            }
            vm.invalido = false; vm.cargando = true;


            // Llamada al WS
            globales.sesion = "";
            var url = globales.url + "&correoElectronico=" + datos.correoElectronico + "&contrasena=" + datos.contrasena;
            console.log(url);
        
            $http.jsonp(url)
                .success(function (data) { globales.sesion = data; console.log(globales.sesion); console.log(globales.sesion.UsuarioNombre) } )
                .error(function(data, status, headers, config) { alert(status); } );
        }

        this.getSesion = function()
        {
            return globales.sesion;
        }


	};



    
})();
