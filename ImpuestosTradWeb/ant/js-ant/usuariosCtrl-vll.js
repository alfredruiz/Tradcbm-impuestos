(function () {
    var app = angular.module('Cal2Pro.usuariosCtrl', []);

    app.controller('usuariosCtrl', usuariosCtrl);

    function usuariosCtrl($http) {

        this.ingresar = function (datos)
        {
            console.log("usuariosCtrl activado");
            var vm = this;

            var urlWS = "http://localhost:1666/Service1.asmx/";
            var urlCallBack = "?callback=JSON_CALLBACK";
            var url = urlWS + "Login" + urlCallBack + "&correoElectronico=" + datos.correoElectronico + "&contrasena=" + datos.contrasena;

            console.log(url);
            vm.sesion = "";
           $http.jsonp(url)
                .success(function (data) { vm.sesion = data; console.log(vm.sesion); console.log(vm.sesion.UsuarioNombre) })
                .error(function (data, status, headers, config) { alert(status); });
        }


        this.getSesion = function () {
            return vm.sesion;
        }

    };

})();
