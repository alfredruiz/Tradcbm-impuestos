//===============================
// CONTROLADOR VER IRPF
//===============================
angular
.module('ImpuestosTrad')
.controller('irpfListadoCtrl', irpfListadoCtrl);

function irpfListadoCtrl(globales, $scope, $http) {


    var vm = this;

    vm.VerIrpfListado = function () {

        var url = globales.urlWS + "IrpfVerLista" + globales.urlCallBack;


        $http.jsonp(url)
           .success(function (data) {
               vm.irpfListado = data;
               //globales.totalRegistros = vm.comprasvTodas.length;
               //globales.totalPaginas = Math.ceil(globales.totalRegistros / globales.first)-1;

               //globales.totalPaginas = Math.ceil(vm.totalRegistros / vm.first);
               //console.log("-- VER COMPRAS --");
               //console.log("total paginas = " + globales.totalPaginas);
               //console.log("total Registros = " + globales.totalRegistros);
               //console.log("total offset = " + globales.offset);
               //console.log("total página acutal = " + globales.paginaActual);

           })
           .error(function (data, status, headers, config) { alert(status); });
    }

    vm.VerIrpfListado();

    vm.sort = function (keyname) {
        vm.sortkey = keyname;
        vm.reverse = !vm.reverse;
    }

    
}