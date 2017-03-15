//===============================
// CONTROLADOR VER COMPRAS
//===============================
angular
.module('ImpuestosTrad')
.controller('facturasCtrl', facturasCtrl);

function facturasCtrl(globales, $scope, $http) {

    //llamada al WS para ver el listado de gastos
    //$scope.activar('mFacturas');

    var vm = this;
    vm.facturas = "";
    vm.facturasTodas = "";

    vm.first = globales.first;

    vm.offset = globales.offset;
    vm.totalPaginas = globales.totalPaginas;
    vm.totalRegistros = globales.totalRegistros;
    vm.pagina = globales.paginaActual;

    vm.cargando = false;
    vm.tiempoEspera = 1500;

    vm.orden = '-NumFactura';

    if (globales.offset == 0) globales.paginaActual = 1;
    //vm.paginaActual = globales.paginaActual;


    vm.VerFacturas = function () {
        
        var url = globales.urlWS + "FacturasPrVer" + globales.urlCallBack;

        $http.jsonp(url)
           .success(function (data) {
               vm.facturasTodas = data;
               globales.totalRegistros = vm.facturasTodas.length;
               globales.totalPaginas = Math.ceil(globales.totalRegistros / globales.first)-1;

               console.log("-- VER FACTURAS --");
               console.log("total paginas = " + globales.totalPaginas);
               console.log("total Registros = " + globales.totalRegistros);
               console.log("total offset = " + globales.offset);
               console.log("total página acutal = " + globales.paginaActual);

           })
           .error(function (data, status, headers, config) { alert(status); });
    }

    vm.VerFacturasPaginado = function () {

        var urlPaginado = globales.urlWS + "FacturasPrVerporPag" + globales.urlCallBack + "&offset=" + globales.offset + "&first=" + globales.first;

        $http.jsonp(urlPaginado)
            .success(function (datap) {
                vm.facturas = datap;
                vm.cargando = false;
                console.log("-- VER FACTURAS PAGINADO --");

                console.log("listado paginado de facturas:");
                console.log(vm.facturas);
                console.log("total paginas p = " + globales.totalPaginas);
                console.log("total Registros p = " + globales.totalRegistros);
                console.log("total globales offset p = " + globales.offset);
                console.log("total página acutal p = " + globales.paginaActual);
            })
            .error(function (data, status, headers, config) { alert(status); });

    }

    vm.VerFacturasPaginado();
    vm.VerFacturas();


    vm.UltPag = function () {
        vm.cargando = true;
        setTimeout(function () {
            if (globales.paginaActual != 1) {
                globales.paginaActual = Math.ceil(globales.totalRegistros / globales.first) - 1;
                globales.offset = globales.paginaActual * 10;
            }

            globales.paginaActual = Math.ceil(globales.totalRegistros / globales.first) - 1;
            globales.offset = globales.paginaActual * 10;

            console.log("total Registros UP = " + globales.totalRegistros);
            console.log("total globales offset UP = " + globales.offset);
            console.log("total página acutal up = " + globales.paginaActual);

            vm.VerFacturasPaginado();
        }, vm.tiempoEspera);

    }

    vm.PrimPag = function () {
        vm.cargando = true;
        setTimeout(function () {
            globales.paginaActual = 1;
            globales.offset = 0;


            console.log("total Registros UP = " + globales.totalRegistros);
            console.log("total globales offset UP = " + globales.offset);
            console.log("total página acutal up = " + globales.paginaActual);

            vm.VerFacturasPaginado();
        }, vm.tiempoEspera);

    }

    vm.AntPag = function () {
        vm.cargando = true;

        setTimeout(function () {
        
        if (globales.paginaActual != 1) {

            globales.paginaActual--;
            globales.offset = globales.paginaActual * 10;

        } else {

            globales.paginaActual = Math.ceil(globales.totalRegistros / globales.first)-1;
            globales.offset = globales.paginaActual * 10;
        }
        vm.VerFacturasPaginado();
        }, vm.tiempoEspera);



    }


    vm.SigPag = function () {

        vm.cargando = true;
        setTimeout(function () {

        if (globales.paginaActual == Math.ceil(globales.totalRegistros / globales.first) - 1) {
            globales.offset = 0;
            globales.paginaActual = 1;

        } else {
            globales.paginaActual++;
            globales.offset = globales.paginaActual * 10;
        }
        vm.VerFacturasPaginado();
        }, vm.tiempoEspera);

    }

    vm.VerPaginaActual = function () {
        return globales.paginaActual;
    }

    vm.verTotalPaginas = function () {
        return globales.totalPaginas;
    }

    //vm.VerCompras = function () {

    //    console.log("comprasCtrl activado");

    //    var url = globales.urlWS + "ComprasPrVer" + globales.urlCallBack;

    //    console.log(url);

    //    $http.jsonp(url)
    //    .success(function (data) {
    //        vm.comprasTodas = data; vm.total = Math.ceil(vm.comprasTodas.length); 
    //         console.log("totalregistros = " + vm.total);

    //    })
    //    .error(function (data, status, headers, config) { alert(status); });

    //}

    //vm.VerCompras();


    //llamada al WS para ver las sesiones
    //var urlb = globales.urlWS + "SesionesVer" + globales.urlCallBack;

    //vm.sesion = "";
    //console.log(urlb);

    //$http.jsonp(urlb)
    //    .success(function (data) {
    //        vm.sesion = data; console.log("sesion:"); console.log(vm.sesion); console.log("sesion id:"); console.log(vm.sesion.SesionID)
    //    })
    //    .error(function (data, status, headers, config) { alert(status); });

    ////función para ver el numbre de usuario a partir de la sesión creada
    //this.getLoginUsuario = function () {
    //    return globales.loginUsuario.NombreUsuario;
    //}

    //this.getConsultaID = function () {
    //    return globales.Consulta.ConsultaID;
    //}
}