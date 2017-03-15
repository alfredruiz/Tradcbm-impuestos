//===============================
// CONTROLADOR VER COMPRAS
//===============================
angular
.module('ImpuestosTrad')
.controller('comprasvCtrl', comprasvCtrl);

function comprasvCtrl(globales, $scope, $http) {


    var vm = this;

    vm.VerComprasv = function () {

        var url = globales.urlWS + "VistaComprasPrVer" + globales.urlCallBack;


        $http.jsonp(url)
           .success(function (data) {
               vm.comprasvTodas = data;
               globales.totalRegistros = vm.comprasvTodas.length;
               globales.totalPaginas = Math.ceil(globales.totalRegistros / globales.first)-1;

               //globales.totalPaginas = Math.ceil(vm.totalRegistros / vm.first);
               console.log("-- VER COMPRAS --");
               console.log("total paginas = " + globales.totalPaginas);
               console.log("total Registros = " + globales.totalRegistros);
               console.log("total offset = " + globales.offset);
               console.log("total página acutal = " + globales.paginaActual);

           })
           .error(function (data, status, headers, config) { alert(status); });
    }

    vm.VerComprasv();

    vm.sort = function (keyname) {
        vm.sortkey = keyname;
        vm.reverse = !vm.reverse;
    }

    
}