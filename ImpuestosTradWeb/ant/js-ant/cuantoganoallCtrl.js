//===============================
// CONTROLADOR VER CUANTO GANO
//===============================
angular
.module('Cal2Pro')
.controller('cuantoganoallCtrl', cuantoganoallCtrl);

function cuantoganoallCtrl(globales, $scope, $http) {

    //llamada al WS para ver el listado de la consulta cuanto gano
    $scope.activar('mCuantoGano');

    console.log("cuantoganoallCtrl activado");
    var vm = this;

    var url = globales.urlWS + "CuantoGanoVerTodo" + globales.urlCallBack;

    console.log(url);

    vm.cuantoganoall = "";
    $http.jsonp(url)
    .success(function (data) { vm.cuantoganoall = data; console.log("lista de cuantoganoall:"); console.log(vm.cuantoganoall); })
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
}