(function() {
	var app = angular.module('Cal2Pro.gastosCtrl', []);

  	// factory, variables globales que abarcan toda la aplicación
	

    //=================================
    // CONTROLADOR VER GASTOS
    //=================================

	app.controller('gastosCtrl', gastosCtrl);

	function gastosCtrl($http)
    {
	    console.log("gastosCtrl activado");
        var vm = this; 

        var urlWS = "http://localhost:1666/Service1.asmx/";
        var urlCallBack = "?callback=JSON_CALLBACK";
        var url = urlWS + "GastosVer" + urlCallBack;

        //var url = "http://localhost:1666/Service1.asmx/GastosVer?callback=JSON_CALLBACK";
        console.log(url);

        vm.gastos = "";
        $http.jsonp(url)
        .success(function(data) {vm.gastos = data; })
        .error(function(data, status, headers, config) { alert(status); } );
    }

    //=================================
    // CONTROLADOR VER GASTO
    //=================================

	app.controller('gastoCtrl', gastoCtrl);

	function gastoCtrl($http, data) {


	    this.verGasto = function (datos) {
	        console.log("gastoCtrl activado");
	        var vm = this;

	        var urlWS = "http://localhost:1666/Service1.asmx/";
	        var urlCallBack = "?callback=JSON_CALLBACK";
	        var url = urlWS + "VerGasto" + urlCallBack + + "&gastosID=" + datos.gastoID

	        console.log(url);

	        vm.gasto = "";
	        $http.jsonp(url)
            .success(function (data) { vm.gasto = data; console.log(gasto) })
            .error(function (data, status, headers, config) { alert(status); });
	    }
	}
      
    
})();




