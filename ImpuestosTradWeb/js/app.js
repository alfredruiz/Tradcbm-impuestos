// Punto de entrada de la aplicacion
// Los parentesis finales hacen que se autoinvoque la funcion al cargarse en el html
(function() {
    var app = angular.module('ImpuestosTrad', ['ngRoute', 'ui.bootstrap', 'angularUtils.directives.dirPagination']);


    //===============================
    // FACTORY CON VARIABLES GLOBALES
    //===============================

  	 //factory, variables globales
	app.factory('globales', function() 
	{
	    var varGlobales = {};

	    //varGlobales de paginación
	    varGlobales.cargando = false;
	    varGlobales.numPagina = "";
	    varGlobales.totalRegistros = "";
	    varGlobales.totalPaginas = "";
	    varGlobales.offset = 0;
	    varGlobales.first = 10;
	    varGlobales.paginaActual = 1;
	    varGlobales.comprasTodas = "";
	    varGlobales.facturasTodas = "";
	 
        

	    //varGlobales.loginUsuario = {};
	    varGlobales.sesion = "";
	    varGlobales.loginUsuario = "";
	    varGlobales.Consulta = "";

	    varGlobales.Compra = "";
	    varGlobales.Compras = "";
	    varGlobales.Facturas = "";
	    varGlobales.Factura = "";

	    varGlobales.ParametroUrl = "";
	    varGlobales.Usuario = "";

        //urlWS para internet
	    //varGlobales.urlWS = "http://innovars.es/calprows/Service1.asmx/";

        //urlWS para localhost
	    //varGlobales.urlWS = "http://localhost:1666/Service1.asmx/";
	    //varGlobales.urlCallBack = "?callback=JSON_CALLBACK";

	    //urlWS para servidor local
	    varGlobales.urlWS = "http://192.168.104.106/tradimportapp/service1.asmx/";
	    varGlobales.urlCallBack = "?callback=JSON_CALLBACK";
        
	    return varGlobales;
	});
            
})();
