// Punto de entrada de la aplicacion
// Los parentesis finales hacen que se autoinvoque la funcion al cargarse en el html
angular
.module('ImpuestosTrad')
.controller('usuariosCtrl', usuariosCtrl)
//.controller('sesionCtrl', sesionCtrl);

	


//=================================
// CONTROLADOR VER LISTA USUARIOS
//=================================

console.log("USUARIOCTRL");

function usuariosCtrl($http, globales)
{
    var vm = this;
    vm.usuario = "";
    vm.loginUsuario = globales.loginUsuario.NombreUsuario;
    vm.usuarioID = globales.loginUsuario.UsuarioID;


    //******************************
    // Función para ver usuarios
    //******************************

    vm.VerUsuario = function () {

        console.log("** USUARIO VER - USUARIOCTRL **");
        console.log("usuariosCtrl activado");

        var url = globales.urlWS + "UsuariosVer" + globales.urlCallBack;

        console.log(url);

        vm.usuarios = "";
        $http.jsonp(url)
        .success(function (data) { vm.usuarios = data; console.log(vm.usuarios) })
        .error(function (data, status, headers, config) { alert(status); });
    }

    vm.nada = function () {
        vm.nombreUsuario = globales.loginUsuario.NombreUsuario;
        vm.usuario = globales.Usuario;
        vm.usuarioID = globales.loginUsuario.UsuarioID
    }
    //******************************
    // Función para ver un usuario concreto
    //******************************

    vm.UsuarioVerUno = function () {

        vm.nombreUsuario = globales.loginUsuario.NombreUsuario;
        vm.usuario = globales.Usuario;
        vm.usuarioID = globales.loginUsuario.UsuarioID

        //if (vm.usuarioID != "undefined") {
      
            var url = globales.urlWS + "UsuariosVerUno" + globales.urlCallBack + "&usuarioID=" + vm.usuarioID;

            $http.jsonp(url)
            .success(function (data) {
                vm.usuario = data;
                console.log("** USUARIO VER UNO - USUARIOCTRL **");

                console.log("data = " + data);
                console.log("vm.nombreUsuario = " + vm.nombreUsuario);
                console.log("globales.usuario= " + globales.Usuario);
                console.log("loginusuario" + globales.loginUsuario);
            })
            .error(function (data, status, headers, config) { });
        }
        //else { vm.nada();}
        

    //}


    //******************************
    // Función para añadir un usuario
    //******************************
    vm.AnadirUsuario = function (usuario) {

        console.log(" ** AÑADIR USUARIO . USAURIOCTRL ** ");
        var url = globales.urlWS + "UsuariosAgregar";

	    //mostramos los resultados por consola para verificar que todo va bien
	    console.log("URL AgragarUsuario ->" + url);
	    console.log("JSON DESPUES -> " + JSON.stringify(usuario));

	    // Hay que usar POST para evitar problemas de longitud del string
	    $http({
	        url: url,
	        method: "POST",
	        data: { usuario : JSON.stringify(usuario) },
	        headers: { 'Content-Type': 'application/json' }
	    })
        .success(function (data) {
            usuario = data; console.log(data); window.location = "/";
        })
        .error(function (data, status, headers, config) {
            console.log("ERROR->" + status); alert(status + ' ' + headers);
        });


    }

    //*****************************
    // Función para editar el usuario
    //*****************************

    vm.ModificarUsuario = function (usuario) {

        var url = globales.urlWS + "UsuarioModificar";
       

        //mostramos los resultados por consola para verificar que todo va bien
        console.log("URL modificar usuario->" + url);
        console.log("JSON DESPUES -> " + JSON.stringify(usuario));

        // Hay que usar POST para evitar problemas de longitud del string
        $http({
            url: url,
            method: "POST",
            data: { usuario: JSON.stringify(usuario) },
            headers: { 'Content-Type': 'application/json' }
        })
        .success(function (data) {
            usuario = data; console.log(data); window.location = "#/";
        })
        .error(function (data, status, headers, config) {
            console.log("ERROR->" + status); alert(status + ' ' + headers);
        });
    }

    //********************************
    // Función para eliminar un usuario
    //*********************************
    vm.EliminarUsuario = function (usuario) {

        var vm = this;

        
        vm.usuarioID = globales.loginUsuario.UsuarioID
        vm.usuario = {};
        console.log("usuarioID para eliminar -->" + vm.usuarioID)


        //var urlWS = "http://localhost:1666/Service1.asmx/";
        //var urlCallBack = "?callback=JSON_CALLBACK";
        var url = globales.urlWS + "UsuariosEliminar" + "?usuarioID=" + vm.usuarioID;

        $http.jsonp(url)
        .success(function (data) { vm.usuario = data; })
        .error(function (data, status, headers, config) { window.location = "#/"; });
    }

    //********************************************
    // Función para botón añadir/modificar usuario
    //********************************************

    vm.GuardarUsuario = function () {
        //if (vm.usuario === null) { vm.volverInicio();}
        if (vm.usuarioID != undefined) { vm.ModificarUsuario(vm.usuario); }
        else { vm.AnadirUsuario(vm.usuario); }
    }

    //Función de inicio de la vista
    vm.UsuarioVerUno();


}

//=================================
// CONTROLADOR DE SESIÓN (TODO COMENTADO)
//=================================


// Decalaramos un controlador para el login
//function sesionCtrl($http)
//{
//    console.log("sesionCtrl activado");
//    var vm = this;

//    this.ingresar = function(datos)
//    {
//        var url = "http://localhost:1666/Service1.asmx/Login?callback=JSON_CALLBACK";
//        ////validaciones
//        //vm.invalido = false; vm.errores = "";
//        //if (datos.correoElectronico.length < 3){
//        //    vm.invalido = true;
//        //    vm.errores = "introduzca correctamente su usuario";
//        //    return;

//        //} else if (datos.contrasena.length < 3) {
//        //    vm.invalido = true;
//        //    vm.errores = "introduzca correctamente su contraseña";
//        //    return;
//        //}
//        //vm.invalido = false; vm.cargando = true;


//        // Llamada al WS
//        vm.sesion = "";
//        var url = url + "&correoElectronico=" + datos.correoElectronico + "&contrasena=" + datos.contrasena;
//        console.log(url);

//        $http.jsonp(url)
//            .success(function (data) { vm.sesion = data; console.log(vm.sesion); console.log(vm.sesion.UsuarioNombre) } )
//            .error(function(data, status, headers, config) { alert(status); } );
//    }

//    this.getSesion = function()
//    {
//        return vm.sesion;
//    }


//};