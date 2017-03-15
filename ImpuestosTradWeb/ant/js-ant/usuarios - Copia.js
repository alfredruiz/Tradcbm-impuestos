// Punto de entrada de la aplicacion
// Los parentesis finales hacen que se autoinvoque la funcion al cargarse en el html
angular
.module('Cal2Pro');

// factory, variables globales
app.factory('globales', function() 
{
	var varGlobales = {};
    varGlobales.url = "http://localhost:1666/Service1.asmx/Login?callback=JSON_CALLBACK";	
    varGlobales.sesion = "";
		
  	return varGlobales;
});
	
//=================================
// CONTROLADOR DE SESIÓN
//=================================

app.controller('sesionCtrl', sesionCtrl);

// Decalaramos un controlador para el login
function sesionCtrl($http, globales)
{
    console.log("sesionCtrl activado");
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

//=================================
// CONTROLADOR VER LISTA USUARIOS
//=================================

app.controller('usuariosCtrl', usuariosCtrl);
function usuariosCtrl($http)
{
	console.log("usuariosCtrl activado");
	var vm = this;

	var urlWS = "http://localhost:1666/Service1.asmx/";
	var urlCallBack = "?callback=JSON_CALLBACK";
	var url = urlWS + "VerUsuarios" + urlCallBack;

	console.log(url);

	vm.usuarios = "";
	$http.jsonp(url)
    .success(function (data) { vm.usuarios = data; })
    .error(function (data, status, headers, config) { alert(status); });
}