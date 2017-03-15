//===============================
// CONTROLADOR VER UN GASTO
//===============================
angular
.module('ImpuestosTrad')
//.controller('gastoCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
.controller('gastoCtrl', gastoCtrl);


function gastoCtrl($scope, $routeParams, $http, globales, $route){

    var vm = this;
    console.clear();
    vm.consulta = globales.Consulta;
    vm.usuario = globales.loginUsuario;

    console.log("globales.loginUsuario = " + globales.loginUsuario.NombreUsuario);


    //******************************
    // Función para ver un gasto
    //******************************

    vm.VerGasto = function () {

        vm.titulo = "Gastos anuales";
        globales.ParametroUrl = $routeParams.GastosID;
        vm.gasto = globales.Gasto;

        if (vm.usuario == "") { window.location = "/"; };

        var url = globales.urlWS + "GastosVerUno" + globales.urlCallBack + "&GastosID=" + globales.ParametroUrl;

        $http.jsonp(url)
        .success(function (data) {
            globales.Gasto = data;
            console.log("CONSOLA DE GASTOS");
            console.log("usuario" + vm.usuario);
            console.log("usuario globales = " + globales.loginUsuario);
                console.log("globales gasto = " + globales.Gasto);
                console.log("globales consulta gastosid= " + globales.Consulta.GastosID);
                console.log("globales consulta = " + globales.Consulta);
                console.log("vm.gasto = " + vm.gasto);
                console.log("parametro url = " + globales.ParametroUrl);
        })
        .error(function (data, status, headers, config) { alert(status) });
    }


    //***********************************************
    //funcionalidad doble del botón modificar/agregar
    //***********************************************
    
    vm.enviar = function () {
        if (globales.ParametroUrl != 0) { vm.ModificarGasto(vm.gasto) }
        else { vm.AnadirGasto(vm.gasto); }
        //vm.AnadirGasto(vm.gasto);
    }

    //******************************
    // Función para ver el usuario
    //******************************

    this.getLoginUsuario = function () {
        return globales.loginUsuario.NombreUsuario;
    }

    //*****************************
    // Función para editar el gasto
    //*****************************

    vm.ModificarGasto = function (gasto) {

        var url = globales.urlWS + "GastosModificar";

        //mostramos los resultados por consola para verificar que todo va bien
        console.log(gasto);
        console.log("URL AgregarGasto ->" + url);
        console.log("JSON DESPUES -> " + JSON.stringify(gasto));

        // Hay que usar POST para evitar problemas de longitud del string
        $http({
            url: url,
            method: "POST",
            data: { gastos: JSON.stringify(gasto) },
            headers: { 'Content-Type': 'application/json' }
        })
        .success(function (data) {
            gasto = data; console.log(data); window.location = "#/consultas";
        })
        .error(function (data, status, headers, config) {
            console.log("ERROR->" + status); alert(status + ' ' + headers);
        });
    }

    //******************************
    // Función para añadir un gasto
    //******************************
    vm.AnadirGasto = function (gasto) {

        $scope.activar('mGastos');
        var url = globales.urlWS + "GastosAgregar";
        //var urlWS = "http://localhost:1666/Service1.asmx/GastosAgregar";

        //mostramos los resultados por consola para verificar que todo va bien
        console.log("URL AgragarGasto ->" + url);
        console.log("JSON DESPUES -> " + JSON.stringify(gasto));

        // Hay que usar POST para evitar problemas de longitud del string
        $http({
            url: url,
            method: "POST",
            data: { gastos: JSON.stringify(gasto) },
            headers: { 'Content-Type': 'application/json' }
        })
        .success(function (data) {
            gasto = data; console.log(data); window.location = "#/consultas";
        })
        .error(function (data, status, headers, config) {
            console.log("ERROR->" + status); alert(status + ' ' + headers);
        });
    }

    //********************************
    // Función para eliminar un gasto
    //*********************************
    vm.EliminarGasto = function (gasto) {

        var vm = this;

        vm.codigo = gasto;
        vm.gasto = {};
        console.log("GastoID para eliminar -->" + vm.codigo)


        //var urlWS = "http://localhost:1666/Service1.asmx/";
        //var urlCallBack = "?callback=JSON_CALLBACK";
        var url = globales.urlWS + "GastosEliminar" + "?GastosID=" + vm.codigo;

        $http.jsonp(url)
        .success(function (data) { vm.gasto = data;  }) 
        .error(function (data, status, headers, config) { window.location = "#/gastos"; });
    }

    //**********************************************
    // Función para obtener el número de consulta
    //**********************************************
    vm.getConsultaID = function () {
        vm.consulta = globales.Consulta;
        if ( vm.consulta == undefined) { window.location = "/"; }
        else {return globales.Consulta.ConsultaID;}
    }
    
    
    //Cuando se inicia la vista va directamente a la funcion VerGasto...
    vm.VerGasto();
    setTimeout(function () {
        vm.VerGasto();
    }, 500);

    
    
    //Para controlar que no se muestre la vista sin información de usuario ni de consulta
    if (vm.consulta == undefined || vm.usuario == null) { window.location = "/"; }
}