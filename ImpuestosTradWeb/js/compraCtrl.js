//===============================
// CONTROLADOR VER UNA COMPRA
//===============================
angular
.module('ImpuestosTrad')
.controller('compraCtrl', compraCtrl);


function compraCtrl($scope, $routeParams, $http, globales, $route){

    var vm = this;
    //console.clear();
    //vm.consulta = globales.Consulta;
    //vm.usuario = globales.loginUsuario;

    //console.log("globales.loginUsuario = " + globales.loginUsuario.NombreUsuario);


    //******************************
    // Función para ver una compra
    //******************************

    vm.VerCompra = function () {

        vm.titulo = "Facturas de compra";
        globales.ParametroUrl = $routeParams.IDCompras;
        vm.compra = "";

        //if (vm.usuario == "") { window.location = "/"; };

        var url = globales.urlWS + "CompraVer" + globales.urlCallBack + "&IDCompras=" + globales.ParametroUrl;


        $http.jsonp(url)
        .success(function (data) {
            vm.compra = data;
            console.log("CONSOLA DE COMPRAS");
            //console.log("usuario" + vm.usuario);
            //console.log("usuario globales = " + globales.loginUsuario);
                console.log("globales compra = " + vm.compra);
                //console.log("globales consulta IDCompras= " + globales.Consulta.IDCompras);
                //console.log("globales consulta = " + globales.Consulta);
                console.log("parametro url = " + globales.ParametroUrl);
        })
        .error(function (data, status, headers, config) { alert(status) });
    }


    //***********************************************
    //funcionalidad doble del botón modificar/agregar
    //***********************************************
    
    vm.enviar = function () {
        if (globales.ParametroUrl != 0) { vm.ModificarCompra(vm.compra);}
        else { vm.AnadirCompra(vm.compra); window.location = "#/compras"; }
        //vm.AnadirGasto(vm.gasto);
    }

    //***********************************************
    // (Solo) Añadir compra
    //***********************************************
    vm.anadir = function () {
        vm.AnadirCompra(vm.compra);
        
    }

    //***********************************************
    //funcionalidad ver u ocultar input fecha
    //***********************************************
    vm.Mostrar = function () {
        vm.VerModificar = false;
        vm.VerAnadir = false;
        if (globales.ParametroUrl != 0) { vm.VerModificar = true; vm.VerAnadir = false; }
        else { vm.VerModificiar = false; vm.VerAnadir = true; }
    }

    //***********************************************
    //funcionalidad ver u ocultar boton guardar
    //***********************************************
    vm.MostrarBtn = function () {
        vm.VerBtnModificar = false;
        vm.VerBtnAnadir = false;
        if (globales.ParametroUrl != 0) { vm.VerBtnModificar = true; vm.VerBtnAnadir = false; }
        else { vm.VerBtnModificiar = false; vm.VerBtnAnadir = true; }
    }

    //******************************
    // Función para ver el usuario
    //******************************

    //this.getLoginUsuario = function () {
    //    return globales.loginUsuario.NombreUsuario;
    //}

    //*****************************
    // Función para editar el gasto
    //*****************************

    vm.ModificarCompra = function (compra) {

        var url = globales.urlWS + "ComprasPrModificar";

        //mostramos los resultados por consola para verificar que todo va bien
        console.log(compra);
        console.log("URL AgregarCompra ->" + url);
        console.log("JSON DESPUES -> " + JSON.stringify(compra));

        // Hay que usar POST para evitar problemas de longitud del string
        $http({
            url: url,
            method: "POST",
            data: { compraspr: JSON.stringify(compra) },
            headers: { 'Content-Type': 'application/json' }
        })
        .success(function (data) {
            compra = data; console.log(data); window.location = "#/compras";
        })
        .error(function (data, status, headers, config) {
            console.log("ERROR->" + status); alert(status + ' ' + headers);
        });
    }

    //******************************
    // Función para añadir un gasto
    //******************************
    vm.AnadirCompra = function (compraspr) {

        //$scope.activar('mCompras');
        var url = globales.urlWS + "ComprasPrAgregar";
        

        //mostramos los resultados por consola para verificar que todo va bien
        console.log("URL AgragarCompra ->" + url);
        console.log("JSON DESPUES -> " + JSON.stringify(compraspr));

        // Hay que usar POST para evitar problemas de longitud del string
        $http({
            url: url,
            method: "POST",
            data: { compraspr: JSON.stringify(compraspr) },
            headers: { 'Content-Type': 'application/json' }
        })
        .success(function (data) {
            compraspr = data; console.log(data); //window.location = "#/compras";
        })
        .error(function (data, status, headers, config) {
            console.log("ERROR->" + status); alert(status + ' ' + headers); console.log("vm.compra: " + vm.compra);
        });
    }

    //********************************
    // Función para eliminar una compra
    //*********************************
    vm.EliminarCompra = function (compra) {

             var vm = this;

            vm.codigo = compra;
            vm.compra = {};
            console.log("IDCompra para eliminar -->" + vm.codigo)

            var url = globales.urlWS + "ComprasPrEliminar" + "?IDCompras=" + vm.codigo;

            $http.jsonp(url)
            .success(function (data) { vm.compra = data; console.log("vm.compra = " + vm.compra);})
            .error(function (data, status, headers, config) { console.log("vm.compra = " + vm.compra); window.location = "#/compras"; });
    }

    vm.cancelar = function () {
        window.location = "#/compras"
    }

    vm.VerCompra();

    //**********************************************
    // Función para obtener el número de consulta
    //**********************************************
    //vm.getConsultaID = function () {
    //    vm.consulta = globales.Consulta;
    //    if ( vm.consulta == undefined) { window.location = "/"; }
    //    else {return globales.Consulta.ConsultaID;}
    //}
    
    
    //Cuando se inicia la vista va directamente a la funcion VerGasto...
    //vm.VerGasto();
    //setTimeout(function () {
    //    vm.VerGasto();
    //}, 500);

    
    
    //Para controlar que no se muestre la vista sin información de usuario ni de consulta
    //if (vm.consulta == undefined || vm.usuario == null) { window.location = "/"; }
}