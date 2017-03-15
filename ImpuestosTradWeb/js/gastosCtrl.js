//===============================
// CONTROLADOR VER GASTOS
//===============================
angular
.module('ImpuestosTrad')
.controller('gastosCtrl', gastosCtrl);

function gastosCtrl(globales, $scope, $http) {

    //llamada al WS para ver el listado de gastos
    $scope.activar('mGastos');

    console.log("gastosCtrl activado");
    var vm = this;

    var url = globales.urlWS + "GastosVer" + globales.urlCallBack;

    console.log(url);

    vm.gastos = "";
    $http.jsonp(url)
    .success(function (data) { vm.gastos = data; console.log("lista de gastos:"); console.log(vm.gastos); })
    .error(function (data, status, headers, config) { alert(status); });


    //llamada al WS para ver las sesiones
    var urlb = globales.urlWS + "SesionesVer" + globales.urlCallBack;

    vm.sesion = "";
    console.log(urlb);

    $http.jsonp(urlb)
        .success(function (data) {
            vm.sesion = data; console.log("sesion:"); console.log(vm.sesion); console.log("sesion id:"); console.log(vm.sesion.SesionID)
        })
        .error(function (data, status, headers, config) { alert(status); });

    //función para ver el numbre de usuario a partir de la sesión creada
    this.getLoginUsuario = function () {
        return globales.loginUsuario.NombreUsuario;
    }

    this.getConsultaID = function () {
        return globales.Consulta.ConsultaID;
    }
}