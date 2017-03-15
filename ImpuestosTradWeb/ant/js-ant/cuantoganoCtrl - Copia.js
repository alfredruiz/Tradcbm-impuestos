//============================================
// CONTROLADOR VER UNA CONSULTA DE CUÁNTO GANO
//============================================
angular
.module('Cal2Pro')
.controller('cuantoganoCtrl', cuantoganoCtrl);


function cuantoganoCtrl(globales, $scope, $routeParams, $http) {


    var vm = this;
    console.clear();
    vm.consulta = globales.Consulta;
    vm.usuario = globales.loginUsuario;

    vm.ConsultaID = globales.Consulta.ConsultaID;
    console.log("id consulta en cuanto gano= " + vm.ConsultaID);

    console.log("globales.loginUsuario de cuanto gano= " + globales.loginUsuario.NombreUsuario);
    

    vm.VerCuantoGano = function () {

        vm.titulo = "Cuánto gano";
        vm.codigo = $routeParams.cuantoganoID;
        vm.CuantoGano = globales.CuantoGano;

        globales.CuantoGano = "";

        //if (vm.codigo != 0) {
        //    vm.titulo = "Detalle de consulta de la consulta cuánto gano";
        //} else {
        //    vm.titulo = "Crear consulta de cuángo gano";

        //}


        var urlWS = "http://localhost:1666/Service1.asmx/";
        var urlCallBack = "?callback=JSON_CALLBACK";
        var url = urlWS + "CuantoGanoVerUno" + urlCallBack + "&cuantoganoID=" + vm.codigo;

        $http.jsonp(url)
        .success(function (data) { globales.CuantoGano = data; console.log("CuantoGano = " + globales.CuantoGano); })
        .error(function (data, status, headers, config) { alert(status) });
    }

    //******************************
    // Función para ver el usuario
    //******************************

    this.getLoginUsuario = function () {
        return globales.loginUsuario.NombreUsuario;
    }

    //***********************************************
    //funcionalidad doble del botón modificar/agregar
    //***********************************************

    vm.enviar = function () {
        if (vm.codigo != 0) {vm.ModificarCuantoGano(vm.CuantoGano)}
        else { vm.AnadirCuantoGano(vm.CuantoGano); }
  
    }

    //************************************************
    // Función para editar la consulta de cuanto gano
    //************************************************

    vm.ModificarCuantoGano = function (cuantogano) {
        //$scope.actualizado = true; //para mostrar un mensaje de que el registro ha sido actualizado

        $scope.activar('mCuantoGano');
        var urlWS = "http://localhost:1666/Service1.asmx/CuantoGanoModificar";

        //mostramos los resultados por consola para verificar que todo va bien
        console.log("URL ModificarCuantoGano ->" + urlWS);
        console.log("JSON DESPUES -> " + JSON.stringify(cuantogano));

        // Hay que usar POST para evitar problemas de longitud del string
        $http({
            url: urlWS,
            method: "POST",
            data: { cuantogano: JSON.stringify(cuantogano) },
            headers: { 'Content-Type': 'application/json' }
        })
        .success(function (data) {
            cuantogano = data; console.log(data); window.location = "#/cuantoganolista";


            //si el registro ha sido actualizado se muestra el mensaje ((NO FUNCIONA))
            //if (data.err === false) {
            //    $scope.actualizado = true;
            //    setTimeout(function () {
            //        $scope.actualizado = false;
            //        $scope.$apply();
            //    }, 3500);
            //};

        })
        .error(function (data, status, headers, config) {
            console.log("ERROR->" + status); alert(status + ' ' + headers);
        });
    }

    //******************************
    // Función para añadir un gasto
    //******************************
    vm.AnadirCuantoGano = function (cuantogano) {
        //$scope.actualizado = true; //para mostrar un mensaje de que el registro ha sido actualizado

        $scope.activar('mCuantoGano');
        var urlWS = "http://localhost:1666/Service1.asmx/CuantoGanoAgregar";

        //mostramos los resultados por consola para verificar que todo va bien
        console.log("URL AgregarCuantoGano ->" + urlWS);
        console.log("JSON DESPUES -> " + JSON.stringify(cuantogano));

        // Hay que usar POST para evitar problemas de longitud del string
        $http({
            url: urlWS,
            method: "POST",
            data: { cuantogano: JSON.stringify(cuantogano) },
            headers: { 'Content-Type': 'application/json' }
        })
        .success(function (data) {
            gasto = data; console.log(data); window.location = "#/cuantoganolista";

            //si el registro ha sido actualizado se muestra el mensaje ((NO FUNCIONA))
            //if (data.err === false) {
            //    $scope.actualizado = true;
            //    setTimeout(function () {
            //        $scope.actualizado = false;
            //        $scope.$apply();
            //    }, 3500);
            //};

        })
        .error(function (data, status, headers, config) {
            console.log("ERROR->" + status); alert(status + ' ' + headers);
        });
    }

    //********************************
    // Función para eliminar una consulta cuanto gano
    //*********************************
    vm.EliminarCuantoGano = function (cuantogano) {

        var vm = this;

        vm.codigo = cuantogano;
        vm.cuantogano = {};
        console.log("CuantoganoID para eliminar -->" + vm.codigo)


        var urlWS = "http://localhost:1666/Service1.asmx/";
        var urlCallBack = "?callback=JSON_CALLBACK";
        var url = urlWS + "CuantoGanoEliminar" + "?cuantoganoID=" + vm.codigo;

        $http.jsonp(url)
        .success(function (data) { vm.cuantogano = data;  }) 
        .error(function (data, status, headers, config) { window.location = "#/cuantoganolista"; });
        

    }

    //**********************************************
    // Función para obtener el número de consulta
    //**********************************************
    vm.getConsultaID = function () {
        vm.consulta = globales.Consulta;
        if (vm.consulta == undefined) { window.location = "/"; }
        else { return globales.Consulta.ConsultaID; }
    }

    vm.VerCuantoGano();
}