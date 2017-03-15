(function() {
	var app = angular.module('CalProG', []);

  	// factory, variables globales que abarcan toda la aplicación
	

	function CalPro_Gastos_Controller($http)
    {
        console.log("CalPro_Gastos_Controller activado");
        var vm = this; 

        var urlWS = "http://localhost:1666/Service1.asmx/";
        var urlCallBack = "?callback=JSON_CALLBACK";
        var url = urlWS + "VerGastos" + urlCallBack;

        //var url = "http://localhost:1666/Service1.asmx/VerGastos?callback=JSON_CALLBACK";
        console.log(url);

        vm.gastos = "";
        $http.jsonp(url)
        .success(function(data) {vm.gastos = data; })
        .error(function(data, status, headers, config) { alert(status); } );

    }


    app.controller('CalPro_Gastos_Controller', CalPro_Gastos_Controller);
})();




