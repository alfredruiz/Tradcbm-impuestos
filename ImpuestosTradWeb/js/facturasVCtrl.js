//===============================
// CONTROLADOR VER COMPRAS
//===============================
angular
.module('ImpuestosTrad')
.controller('facturasvCtrl', facturasvCtrl);

function facturasvCtrl(globales, $scope, $http) {
    
    var vm = this;

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

    vm.VerFacturasv();

    vm.sort = function (keyname) {
        vm.sortkey = keyname;
        vm.reverse = !vm.reverse;
    }


    
    ////función para ver el numbre de usuario a partir de la sesión creada
    //this.getLoginUsuario = function () {
    //    return globales.loginUsuario.NombreUsuario;
    //}

  
}