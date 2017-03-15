//===============================
// CONTROLADOR VER FACTURAS
//===============================
angular
.module('ImpuestosTrad')
.controller('facturasCtrl', facturasCtrl);

function facturasCtrl(globales, $scope, $http) {

    var vm = this;
        
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

            
    vm.VerFacturas();

    vm.sort = function (keyname) {
        vm.sortkey = keyname;
        vm.reverse = !vm.reverse;
    }
    
}