// Punto de entrada de la aplicacion
// Los parentesis finales hacen que se autoinvoque la funcion al cargarse en el html
(function() {
    var app = angular.module('Cal2Pro', [
    'ngRoute',
    'Cal2Pro.gastosCtrl'
    ]);

  	// factory, variables globales
	app.factory('globales', function() 
	{
		var varGlobales = {};
        varGlobales.url = "http://localhost:1666/Service1.asmx/Login?callback=JSON_CALLBACK";	
        varGlobales.sesion = "";
		
  		return varGlobales;
	});
	
	
    // Decalaramos un controlador para el login
	function Cal2Pro_Controller($http, globales)
	{
        console.log("Cal2Pro_Controller activado");
        var vm = this;
                
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

    app.controller('Cal2Pro_Controller', Cal2Pro_Controller);	

    
})();
