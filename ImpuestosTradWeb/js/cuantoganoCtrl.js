//===============================
// CONTROLADOR VER UN GASTO
//===============================
angular
.module('ImpuestosTrad')
//.controller('gastoCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
.controller('cuantoganoCtrl', cuantoganoCtrl);


function cuantoganoCtrl($scope, $routeParams, $http, globales, $route) {

    var vm = this;
    console.clear();
    vm.consulta = globales.Consulta;
    vm.usuario = globales.loginUsuario;
    vm.cuantogano = globales.CuantoGano;

    console.log("globales.loginUsuario = " + globales.loginUsuario.NombreUsuario);


    //******************************
    // Función para ver una consulta de cuanto gano
    //******************************

    vm.VerCuantoGano = function () {
        $scope.activar('mGastos');
        //var vm = this;

        vm.titulo = "Cuánto gano";
        globales.ParametroUrl = $routeParams.cuantoganoID;
        vm.cuantogano = "";

        if (vm.usuario == "") { window.location = "/"; };

        var url = globales.urlWS + "CuantoGanoVerUno" + globales.urlCallBack + "&cuantoganoID=" + globales.ParametroUrl;

        $http.jsonp(url)
        .success(function (data) {
            vm.cuantogano = data;
            console.log("CONSOLA DE CUANTOGANO");
            console.log("url" + url);
            console.log("globales CUANTO GANO = " + globales.CuantoGano);
            console.log("globales consulta gastosid= " + globales.Consulta.cuantoganoID);
            console.log("globales consulta = " + globales.Consulta);
            console.log("vm.cuantogano = " + vm.cuantogano);
            console.log("vm.cuantogano consulta id = " + vm.cuantogano.ConsultaID);
            console.log("parametro url = " + globales.ParametroUrl);
        })
        .error(function (data, status, headers, config) { alert(status) });
    }


    //***********************************************
    //funcionalidad doble del botón modificar/agregar
    //***********************************************

    vm.enviar = function () {
        if (globales.ParametroUrl != 0) { vm.ModificarCuantoGano(vm.cuantogano) }
        else { vm.AnadirCuantoGano(vm.cuantogano); }
    }

    //******************************
    // Función para ver el usuario
    //******************************

    this.getLoginUsuario = function () {
        return globales.loginUsuario.NombreUsuario;
    }

    //*****************************
    // Función para editar cuanto gano
    //*****************************

    vm.ModificarCuantoGano = function (cuantogano) {

        var url = globales.urlWS + "CuantoGanoModificar";

        //mostramos los resultados por consola para verificar que todo va bien
        console.log("-- CONSOLA DE MODIFICAR CUANTO GANO --");
        console.log("globales.parametrourl en modificar cuantgano = " + globales.ParametroUrl);
        console.log("URL modificar cuanto gano ->" + url);
        console.log("JSON DESPUES -> " + JSON.stringify(cuantogano));
        console.log("vm.cuantogano =" + cuantogano);

        // Hay que usar POST para evitar problemas de longitud del string
        $http({
            url: url,
            method: "POST",
            data: { cuantogano: JSON.stringify(cuantogano) },
            headers: { 'Content-Type': 'application/json' }
        })
        .success(function (data) {
            cuantogano = data; console.log(data); window.location = "#/consultas";
        })
        .error(function (data, status, headers, config) {
            console.log("ERROR->" + status); alert(status + ' ' + headers);
            console.log("JSON DESPUES de error -> " + JSON.stringify(cuantogano));
            ;
        });
    }

    //******************************
    // Función para añadir un gasto
    //******************************
    vm.AnadirCuantoGano = function (cuantogano) {

        $scope.activar('mGastos');
        var url = globales.urlWS + "CuantoGanoAgregar";

        //mostramos los resultados por consola para verificar que todo va bien
        console.log("URL AgragarGasto ->" + url);
        console.log("JSON DESPUES -> " + JSON.stringify(cuantogano));

        // Hay que usar POST para evitar problemas de longitud del string
        $http({
            url: url,
            method: "POST",
            data: { cuantogano: JSON.stringify(cuantogano) },
            headers: { 'Content-Type': 'application/json' }
        })
        .success(function (data) {
            cuantogano = data; console.log(data); window.location = "#/consultas";
        })
        .error(function (data, status, headers, config) {
            console.log("ERROR->" + status); alert(status + ' ' + headers);
        });
    }

    //********************************
    // Función para eliminar un gasto
    //*********************************
    vm.EliminarCuantoGano = function (cuantogano) {

        var vm = this;

        vm.codigo = cuantogano;
        vm.cuantogano = {};
        console.log("GastoID para eliminar -->" + vm.codigo)


        //var urlWS = "http://localhost:1666/Service1.asmx/";
        //var urlCallBack = "?callback=JSON_CALLBACK";
        var url = globales.urlWS + "CuantoGanoEliminar" + "?cuantoganoID=" + vm.codigo;

        $http.jsonp(url)
        .success(function (data) { vm.CuantoGanoEliminar = data; })
        .error(function (data, status, headers, config) { window.location = "#/CuantoGanoEliminar"; });
    }

    //**********************************************
    // Función para obtener el número de consulta
    //**********************************************
    vm.getConsultaID = function () {
        vm.consulta = globales.Consulta;
        if (vm.consulta == undefined) { window.location = "/"; }
        else { return globales.Consulta.ConsultaID; }
    }


    //Cuando se inicia la vista va directamente a la funcion VerGasto...
    vm.VerCuantoGano();
    setTimeout(function () {
        vm.VerCuantoGano();
    }, 500);



    //Para controlar que no se muestre la vista sin información de usuario ni de consulta
    if (vm.consulta == undefined || vm.usuario == null) { window.location = "/"; }
}