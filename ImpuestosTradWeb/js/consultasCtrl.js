angular
.module('ImpuestosTrad')
.filter ('datetime',datetime)
.controller('consultaCtrl', consultaCtrl);


//************************************
//
// FILTRO PARA FORMATO DE FECHA
//
//************************************
function datetime() {
    return function (x) {
        return new Date(parseInt(x.substr(6)));
    }
}




//************************************
//
// CONTROLADOR DE CONSULTA
//
//************************************

function consultaCtrl(globales, $scope, $routeParams, $http, $route) {

    var vm = this;
    vm.usuario = globales.loginUsuario.NombreUsuario;


    vm.RecargarVista = function () {
        setTimeout(function () {
            $route.reload();
        }, 200);
    }

    //******************************
    // Función para ver el usuario
    //******************************

    this.getLoginUsuario = function () {
        return globales.loginUsuario.NombreUsuario;
    }


    //*********************************************************
    // Función para ver una consulta (repetida del controlador
    //*********************************************************

    vm.VerConsulta = function () {
        ////llamada al WS para ver una consulta completa
        $scope.activar('mConsulta');

        console.log("consultaCtrl activado");
        var vm = this;

        vm.usuario = globales.loginUsuario.NombreUsuario;
        if (vm.usuario == undefined) { window.location = "/"; };

        console.log("usuario = " + vm.usuario);
        
        var url = globales.urlWS + "ConsultasVerCompleta" + globales.urlCallBack;

        console.log(url);

        vm.consultaCompleta = "";
        $http.jsonp(url)
        .success(function (data) {
            vm.consultaCompleta = data; console.log("lista de consulta completa:"); console.log(vm.consultaCompleta); //$scope.apply();
        })
        .error(function (data, status, headers, config) { alert(status); });
    }

    vm.VerConsulta();
 

    //********************************************************
    // Función para añadir una consulta + ver ultima consulta
    //********************************************************

    vm.AnadirConsultaVerUltima = function (nombreUsuario) {
        //$scope.actualizado = true; //para mostrar un mensaje de que el registro ha sido actualizado

        $scope.activar('mConsulta');

        globales.Consulta = "";
        vm.Usuario = globales.loginUsuario.NombreUsuario;

        if (vm.Usuario != null) { vm.Usuario = globales.loginUsuario.NombreUsuario }
        else { vm.Usuario = 0; window.location = "/"; };

        var url = globales.urlWS + "ConsultaAgregarVerUltima" + globales.urlCallBack + "&nombreUsuario=" + vm.Usuario;

        //mostramos los resultados por consola para verificar que todo va bien
        console.log("globales consulta = " + vm.consulta);
        console.log("URL Agragar Consulta ->" + url);

        // Hay que usar POST para evitar problemas de longitud del string
        $http({
            url: url,
            method: "jsonp",
            data: { consultas: JSON.stringify(globales.Consulta) },
            headers: { 'Content-Type': 'application/json' }
        })
        .success(function (data) {
            globales.Consulta = data; console.log(data);
            console.log("JSON AÑADIR DESPUES -> " + JSON.stringify(globales.Consulta));
            console.log("consulta id = " + globales.Consulta.ConsultaID);
            window.location = "#/gasto/" + globales.Consulta.GastosID;

            //ObtenerUltimaConsulta();

        })
        .error(function (data, status, headers, config) {
            console.log("ERROR->" + status);
        });
    }



    //*********************************
    // Función para añadir una consulta
    //*********************************

    vm.AnadirConsulta = function (nombreUsuario) {
        //$scope.actualizado = true; //para mostrar un mensaje de que el registro ha sido actualizado

        $scope.activar('mConsulta');

        globales.Consulta = "";
        vm.Usuario = globales.loginUsuario.NombreUsuario;

        if (vm.Usuario != null) { vm.Usuario = globales.loginUsuario.NombreUsuario }
        else { vm.Usuario = 0; window.location = "/"; };

        var url = globales.urlWS + "ConsultaAgregar" +globales.urlCallBack+"&nombreUsuario=" + vm.Usuario;

        //mostramos los resultados por consola para verificar que todo va bien
        console.log("globales consulta = " + vm.consulta);
        console.log("URL Agragar Consulta ->" + url);

        // Hay que usar POST para evitar problemas de longitud del string
        $http({
            url: url,
            method: "jsonp",
            data: {consultas: JSON.stringify(globales.Consulta) },
            headers: { 'Content-Type': 'application/json' }
        })
        .success(function (data) {
            globales.Consulta = data; console.log(data);
            console.log("JSON AÑADIR DESPUES -> " + JSON.stringify(globales.Consulta));
            console.log("consulta id = " + globales.Consulta.ConsultaID);
            //ObtenerUltimaConsulta();

        })
        .error(function (data, status, headers, config) {
            console.log("ERROR->" + status); 
        });
      
    }

    //*******************************************
    // Función para ver la ultima consulta creada
    //*******************************************
    vm.ObtenerUltimaConsulta = function () {

        console.clear();
        console.log("hola");
    var url2 = globales.urlWS + "ConsultasVerUltima" + globales.urlCallBack;

    //mostramos los resultados por consola para verificar que todo va bien
    console.log(vm.gastosid);
    console.log("globales consulta = " + globales.Consulta);
    console.log("URL Agragar Consulta ->" + url2);

    // Hay que usar POST para evitar problemas de longitud del string
    $http({
        url: url2,
        method: "jsonp",
        data: { consultas: JSON.stringify(globales.Consulta) },
        headers: { 'Content-Type': 'application/json' }
    })
    .success(function (data) {
        globales.Consulta = data; console.log(data);
        console.log("vm.gatosid = " + vm.gastosid);
        console.log("globales.Consulta = " + globales.Consulta);
        console.log("JSON LAST DESPUES -> " + JSON.stringify(globales.Consulta));
        window.location = "#/gasto/" + globales.Consulta.GastosID;

    })
    .error(function (data, status, headers, config) {
        console.log("ERROR->" + status);
    });
    }

    //********************************
    // Función para eliminar una consulta
    //*********************************
    vm.EliminarConsulta = function (consulta) {

        var vm = this;

        vm.codigo = consulta;
        vm.cosulta = {};
        console.log("consultaID para eliminar -->" + vm.codigo)

        var url = globales.urlWS + "ConsultaEliminar" + "?ConsultaID=" + vm.codigo;

        $http.jsonp(url)
        .success(function (data) { vm.consulta = data; vm.VerConsulta();})
        .error(function (data, status, headers, config) { window.location = "#/consultas"; });
    }

    vm.VerConsultaTimeOut = function(){
        setTimeout(function () {
            vm.VerConsulta();
        }, 500);
    }

    //Se coloca el if al final para que el controlador pueda leer antes todas las funciones 
    //Para que distinga entre si es un usuario anónimo o logueado
    //if (globales.loginUsuario.NombreUsuario != "anonimo") { vm.VerConsulta() }
    //else { vm.AnadirConsulta(); vm.ObtenerUltimaConsulta() }

}