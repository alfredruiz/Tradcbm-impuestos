//===============================
// CONTROLADOR VER COMPRAS
//===============================
angular
.module('ImpuestosTrad')
.controller('comprasCtrl', comprasCtrl);

function comprasCtrl(globales, $scope, $http) {


    var vm = this;

    vm.VerCompras = function () {

        var url = globales.urlWS + "ComprasPrVer" + globales.urlCallBack;


        $http.jsonp(url)
           .success(function (data) {
               vm.comprasTodas = data;
               globales.totalRegistros = vm.comprasTodas.length;
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

    vm.VerCompras();

    vm.sort = function (keyname) {
        vm.sortkey = keyname;
        vm.reverse = !vm.reverse;
    }

    
}