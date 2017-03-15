//===============================
// CONTROLADOR VER UN GASTO
//===============================
angular
.module('ImpuestosTrad')
//.controller('gastoCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
.controller('horastrabajadasCtrl', horastrabajadasCtrl);


function horastrabajadasCtrl($scope, $routeParams, $http, globales, $route) {

    var vm = this;
    //console.clear();
    vm.consulta = globales.Consulta;
    vm.usuario = globales.loginUsuario;

    console.log("globales.loginUsuario = " + globales.loginUsuario.NombreUsuario);


    //******************************
    // Función para ver un gasto
    //******************************

    vm.VerHorasTrabajadas = function () {

        vm.titulo = "Horas trabajadas";
        globales.ParametroUrl = $routeParams.horastrabajadasID;
        vm.horastrabajadas = globales.HorasTrabajadas;

        if (vm.usuario == "") { window.location = "/"; };

        var url = globales.urlWS + "HorasTrabajadasVerUno" + globales.urlCallBack + "&horastrabajadasID=" + globales.ParametroUrl;

        $http.jsonp(url)
        .success(function (data) {
            globales.HorasTrabajadas = data;
            console.log("CONSOLA DE GASTOS");
            console.log("globales HorasTrabajadas = " + globales.HorasTrabajadas);
            console.log("globales consulta HorasTrabajadas id= " + globales.Consulta.horastrabajadasID);
            console.log("globales consulta = " + globales.Consulta);
            console.log("vm.HorasTrabajadas = " + vm.horastrabajadas);
            console.log("parametro url = " + globales.ParametroUrl);
        })
        .error(function (data, status, headers, config) { alert(status) });
    }


    //***********************************************
    //funcionalidad doble del botón modificar/agregar
    //***********************************************
    
    vm.enviar = function () {
        if (vm.codigo != 0) { vm.ModificarHorasTrabajadas(vm.horastrabajadas) }
        else { vm.AnadirHorasTrabajadas(vm.horastrabajadas); }
        //vm.AnadirGasto(vm.gasto);
    }

    //******************************
    // Función para ver el usuario
    //******************************

    this.getLoginUsuario = function () {
        return globales.loginUsuario.NombreUsuario;
    }

    //*****************************
    // Función para editar horas trabajads
    //*****************************

    vm.ModificarHorasTrabajadas = function (horastrabajadas) {

        $scope.activar('mGastos');
        var url = globales.urlWS + "HorasTrabajadasModificar";
        //var urlWS = "http://localhost:1666/Service1.asmx/HorasTrabajadasModificar";

        //mostramos los resultados por consola para verificar que todo va bien
        console.log("URL AgregarHorasTrabajadas->" + url);
        console.log("JSON DESPUES -> " + JSON.stringify(horastrabajadas));

        // Hay que usar POST para evitar problemas de longitud del string
        $http({
            url: url,
            method: "POST",
            data: { horastrabajadas: JSON.stringify(horastrabajadas) },
            headers: { 'Content-Type': 'application/json' }
        })
        .success(function (data) {
            horastrabajadas = data; console.log(data); window.location = "#/consultas";
        })
        .error(function (data, status, headers, config) {
            console.log("ERROR->" + status); alert(status + ' ' + headers);
        });
    }

    //******************************
    // Función para añadir un gasto
    //******************************
    vm.AnadirHorasTrabajadas = function (horastrabajadas) {

        $scope.activar('mGastos');
        var url = globales.urlWS + "HorasTrabajadasAgregar";
        //var urlWS = "http://localhost:1666/Service1.asmx/HorasTrabajadasAgregar";

        //mostramos los resultados por consola para verificar que todo va bien
        console.log("URL Agragarhorastrabajadas ->" + urlWS);
        console.log("JSON DESPUES -> " + JSON.stringify(horastrabajadas));

        // Hay que usar POST para evitar problemas de longitud del string
        $http({
            url: url,
            method: "POST",
            data: { horastrabajadas: JSON.stringify(horastrabajadas) },
            headers: { 'Content-Type': 'application/json' }
        })
        .success(function (data) {
            horastrabajadas = data; console.log(data); window.location = "#/consultas";
        })
        .error(function (data, status, headers, config) {
            console.log("ERROR->" + status); alert(status + ' ' + headers);
        });
    }

    //********************************
    // Función para eliminar un gasto
    //*********************************
    vm.EliminarHorasTrabajadas = function (horastrabajadas) {

        var vm = this;

        vm.codigo = horastrabajadas;
        vm.horastrabajadas = {};
        console.log("horastrabajadasID para eliminar -->" + vm.codigo)


        //var urlWS = "http://localhost:1666/Service1.asmx/";
        //var urlCallBack = "?callback=JSON_CALLBACK";
        var url = globales.urlWS + "HorasTrabajadasEliminar" + "?horastrabajadasID=" + vm.codigo;

        $http.jsonp(url)
        .success(function (data) { vm.horastrabajadas = data; })
        .error(function (data, status, headers, config) { window.location = "#/horastrabajadas"; });
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
    vm.VerHorasTrabajadas();
    setTimeout(function () {
        vm.VerHorasTrabajadas();
    }, 500);

    
    
    //Para controlar que no se muestre la vista sin información de usuario ni de consulta
    if (vm.consulta == undefined || vm.usuario == null) { window.location = "/"; }
}