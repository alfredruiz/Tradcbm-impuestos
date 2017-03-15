//===============================
// CONTROLADOR VER UNA FACTURA
//===============================
angular
.module('ImpuestosTrad')
.controller('facturaCtrl', facturaCtrl);


function facturaCtrl($scope, $routeParams, $http, globales, $route){

    var vm = this;
    //console.clear();
    //vm.consulta = globales.Consulta;
    //vm.usuario = globales.loginUsuario;

    //console.log("globales.loginUsuario = " + globales.loginUsuario.NombreUsuario);


    //******************************
    // Función para ver una factura
    //******************************

    vm.VerFactura = function () {

        vm.titulo = "Facturas de traducciones";
        globales.ParametroUrl = $routeParams.IDFacturaProv;
        vm.factura = "";

        //if (vm.usuario == "") { window.location = "/"; };

        var url = globales.urlWS + "FacturaVer" + globales.urlCallBack + "&IDFacturaProv=" + globales.ParametroUrl;


        $http.jsonp(url)
        .success(function (data) {
            vm.factura = data;
            console.log("CONSOLA DE FACTURAS");
            //console.log("usuario" + vm.usuario);
            //console.log("usuario globales = " + globales.loginUsuario);
                console.log("globales factura = " + vm.factura);
                console.log("parametro url = " + globales.ParametroUrl);
        })
        .error(function (data, status, headers, config) { alert(status) });
    }


    //***********************************************
    //funcionalidad doble del botón modificar/agregar
    //***********************************************
    
    vm.enviar = function () {
        if (globales.ParametroUrl != 0) { vm.ModificarFactura(vm.factura);}
        else { vm.AnadirFactura(vm.factura); window.location = "#/facturacompleta"; }
        //vm.AnadirGasto(vm.gasto);
    }

    //***********************************************
    // (Solo) Añadir factura
    //***********************************************
    vm.anadir = function () {
        vm.AnadirFactura(vm.factura);
        
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

    vm.ModificarFactura = function (factura) {

        var url = globales.urlWS + "FacturasPrModificar";

        //mostramos los resultados por consola para verificar que todo va bien
        console.log(factura);
        console.log("URL AgregarFactura ->" + url);
        console.log("JSON DESPUES -> " + JSON.stringify(factura));

        // Hay que usar POST para evitar problemas de longitud del string
        $http({
            url: url,
            method: "POST",
            data: { facturaspr: JSON.stringify(factura) },
            headers: { 'Content-Type': 'application/json' }
        })
        .success(function (data) {
            factura = data; console.log(data); window.location = "#/facturacompleta";
        })
        .error(function (data, status, headers, config) {
            console.log("ERROR->" + status); alert(status + ' ' + headers);
        });
    }

    //******************************
    // Función para añadir una factura
    //******************************
    vm.AnadirFactura = function (facturaspr) {

        //$scope.activar('mFacturas');
        var url = globales.urlWS + "FacturasPrAgregar";
        

        //mostramos los resultados por consola para verificar que todo va bien
        console.log("URL AgragarFactura ->" + url);
        console.log("JSON DESPUES -> " + JSON.stringify(facturaspr));

        // Hay que usar POST para evitar problemas de longitud del string
        $http({
            url: url,
            method: "POST",
            data: { facturaspr: JSON.stringify(facturaspr) },
            headers: { 'Content-Type': 'application/json' }
        })
        .success(function (data) {
            facturaspr = data; console.log(data); //window.location = "#/facturas";
        })
        .error(function (data, status, headers, config) {
            console.log("ERROR->" + status); alert(status + ' ' + headers); console.log("vm.factura: " + vm.factura);
        });
    }

    //********************************
    // Función para eliminar una factura
    //*********************************
    vm.EliminarFactura = function (factura) {

             var vm = this;

            vm.codigo = factura;
            vm.factura = {};
            console.log("IDFacturaProv para eliminar -->" + vm.codigo)

            var url = globales.urlWS + "FacturasPrEliminar" + "?IDFacturasProv=" + vm.codigo;

            $http.jsonp(url)
            .success(function (data) { vm.factura = data; console.log("vm.factura = " + vm.factura);})
            .error(function (data, status, headers, config) { console.log("vm.factura = " + vm.factura); window.location = "#/facturacompleta"; });
        }
    vm.cancelar = function () {
        window.location = "#/facturacompleta"
    }

    vm.VerFactura();

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