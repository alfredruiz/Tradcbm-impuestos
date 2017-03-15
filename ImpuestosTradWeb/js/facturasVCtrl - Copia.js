//===============================
// CONTROLADOR VER COMPRAS
//===============================
angular
.module('ImpuestosTrad')
.controller('facturasvCtrl', facturasvCtrl);

function facturasvCtrl(globales, $scope, $http) {

    //llamada al WS para ver el listado de gastos
    //$scope.activar('mFacturas');

    var vm = this;
    vm.facturasv = "";
    vm.facturasvTodas = "";

    vm.first = globales.first;

    vm.offset = globales.offset;
    vm.totalPaginas = globales.totalPaginas;
    vm.totalRegistros = globales.totalRegistros;
    vm.pagina = globales.paginaActual;

    vm.cargando = false;
    vm.tiempoEspera = 1500;

    vm.orden = '-NumFacturav';

    if (globales.offset == 0) globales.paginaActual = 1;
    //vm.paginaActual = globales.paginaActual;


    vm.VerFacturasv = function () {
        
        var url = globales.urlWS + "VistaFacturasPrVer" + globales.urlCallBack;

        $http.jsonp(url)
           .success(function (data) {
               vm.facturasvTodas = data;
               globales.totalRegistros = vm.facturasvTodas.length;
               globales.totalPaginas = Math.ceil(globales.totalRegistros / globales.first)-1;

               console.log("-- VER FACTURASv --");
               console.log("total paginas = " + globales.totalPaginas);
               console.log("total Registros = " + globales.totalRegistros);
               console.log("total offset = " + globales.offset);
               console.log("total página acutal = " + globales.paginaActual);

           })
           .error(function (data, status, headers, config) { alert(status); });
    }

    vm.VerFacturasvPaginado = function () {

        var urlPaginado = globales.urlWS + "VistaFacturasPrVerporPag" + globales.urlCallBack + "&offset=" + globales.offset + "&first=" + globales.first;

        $http.jsonp(urlPaginado)
            .success(function (datap) {
                vm.facturasv = datap;
                vm.cargando = false;
                console.log("-- VER FACTURASv PAGINADO --");
                console.log(urlPaginado);

                console.log("listado paginado de facturasv:");
                console.log(vm.facturasv);
                console.log("total paginas p = " + globales.totalPaginas);
                console.log("total Registros p = " + globales.totalRegistros);
                console.log("total globales offset p = " + globales.offset);
                console.log("total página acutal p = " + globales.paginaActual);
            })
            .error(function (data, status, headers, config) { alert(status); });

    }

    vm.VerFacturasvPaginado();
    vm.VerFacturasv();


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

            vm.VerFacturasvPaginado();
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

            vm.VerFacturasvPaginado();
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
        vm.VerFacturasvPaginado();
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
        vm.VerFacturasvPaginado();
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