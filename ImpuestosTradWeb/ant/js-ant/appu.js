(function() {
	var app = angular.module('CalProU', []);

  	// factory, variables globales que abarcan toda la aplicación
	

	function CalPro_Usuarios_Controller($http)
    {
        console.log("CalPro_Usuarios_Controller activado");
        var vm = this; 

        var url = "http://localhost:1666/Service1.asmx/VerUsuarios?callback=JSON_CALLBACK";
        console.log(url);

        vm.usuarios = "";
        $http.jsonp(url)
        .success(function(data) {vm.usuarios = data; console.log(vm.usuarios[0].UsuarioID);})
        .error(function(data, status, headers, config) { alert(status); } );

        this.ListarUsuarios = function()
        {
        var url = "http://localhost:1666/Service1.asmx/VerUsuarios?callback=JSON_CALLBACK";
        console.log(url);

        vm.usuarios = "";
        $http.jsonp(url)
        .success(function(data) {vm.usuarios = data; console.log(vm.usuarios[0].UsuarioID);})
        .error(function(data, status, headers, config) { alert(status); } );
    
        }
        



    }


    app.controller('CalPro_Usuarios_Controller', CalPro_Usuarios_Controller);
})();




