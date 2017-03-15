//===============================
// CONTROLADOR PARA INDEX.HTML
//===============================

angular
.module('ImpuestosTrad')
//.controller('LoginUsuarioCtrl', LoginUsuarioCtrl)
.controller('inicioCtrl', inicioCtrl)

//************************
//
// CONTROLADOR DE INICIO
//
//************************

function inicioCtrl($scope, $http) {

    var vm = this;

    vm.entrar = function () {
        window.location = "#/compras";
    }

    $scope.menuSuperior = 'parcial/menu.html';
    //$scope.submenu = 'parcial/submenu.html';

    //$scope.activar = function (menu, submenu) {

    //    $scope.mInicio = "";
    //    $scope.mGastos = "";
    //    $scope.mUsuarios = "";

    //    $scope[menu];
    //};



    //******************************
    // Función para ir a gastos
    //****************************** 

    //this.irAGastos = function () {
    //    window.location = "#/gastos";
    //}

    //***************************************
    // Función para obtener nombre de usuario
    //***************************************

    //this.getLoginUsuario = function () {
    //    return globales.loginUsuario.NombreUsuario;
    //}

    //vm.RecargarVista = function () {
    //    setTimeout(function () {
    //        $route.reload();
    //    }, 200);
    //}


};



//************************************
//
// CONTROLADOR DE LOGIN DE USUARIO
//
//************************************

function LoginUsuarioCtrl(globales, $http, $scope) {

    
//    var vm = this;


//    console.log("***INICIOCTRL****");

//    globales.loginUsuario = "";
//    vm.mensajeError = "";

//    console.log("globales.Consulta = " + globales.Consulta);
//    console.log("globales.loginUsuario = " + globales.loginUsuario);

    //******************************
    // Función para identificarse
    //******************************

    //vm.ingresar = function (datos) {
      
    //    var url = globales.urlWS + "UsuarioLogin" + globales.urlCallBack + "&correoElectronico=" + datos.correoElectronico + "&contrasena=" + datos.contrasena;

    //    $http.jsonp(url)
    //    .success(function (data) {
    //        globales.loginUsuario = data;
    //            console.log("login -->" + globales.loginUsuario);
    //            //console.log("NombreUsuario -->" + globales.loginUsuario.NombreUsuario);
    //            console.log(url);

    //            if (globales.loginUsuario != null) { window.location = "#/consultas"; }
    //            else { vm.mensajeError = "correo o contraseña incorrectos"; }

    //    })
    //    .error(function (data, status, headers, config) { }
    //    );
    //}

    //******************************
    // Función para entrar anónimo
    //******************************

    //vm.ingresarAnonimo = function (datos) {

    //    var url = globales.urlWS + "UsuarioLogin" + globales.urlCallBack + "&correoElectronico=anonimo&contrasena=1234";

    //    $http.jsonp(url)
    //    .success(function (data) {
    //        globales.loginUsuario = data; console.log("login -->" + globales.loginUsuario); //window.location = "#/consultas";
    //    })
    //    .error(function (data, status, headers, config) { }
    //    );
    //}


    //*******************************************
    // Función para ver la ultima consulta creada
    //*******************************************
    //vm.ObtenerUltimaConsulta = function () {

    //    console.clear();
    //    console.log("hola");
    //    var url2 = globales.urlWS + "ConsultasVerUltima" + globales.urlCallBack;

    //    //mostramos los resultados por consola para verificar que todo va bien
    //    console.log(vm.gastosid);
    //    console.log("globales consulta = " + globales.Consulta);
    //    console.log("URL Agragar Consulta ->" + url2);

    //    // Hay que usar POST para evitar problemas de longitud del string
    //    $http({
    //        url: url2,
    //        method: "jsonp",
    //        data: { consultas: JSON.stringify(globales.Consulta) },
    //        headers: { 'Content-Type': 'application/json' }
    //    })
    //    .success(function (data) {
    //        globales.Consulta = data; console.log(data);
    //        console.log("vm.gatosid = " + vm.gastosid);
    //        console.log("globales.Consulta = " + globales.Consulta);
    //        console.log("JSON LAST DESPUES -> " + JSON.stringify(globales.Consulta));
    //        window.location = "#/gasto/" + globales.Consulta.GastosID;

    //    })
    //    .error(function (data, status, headers, config) {
    //        console.log("ERROR->" + status);
    //    });
    //}


    
    //****************************************************
    // Función para añadir una consulta anonima (antigua)
    //****************************************************

    //vm.AnadirConsultaAnonima = function (nombreUsuario) {

    //    $scope.activar('mConsulta');

    //    globales.Consulta = "";

    //    var url = globales.urlWS + "ConsultaAgregarVerUltima" + globales.urlCallBack + "&nombreUsuario=anonimo";

    //    //var url = globales.urlWS + "ConsultaAgregar" + globales.urlCallBack + "&nombreUsuario=anonimo";

    //    //mostramos los resultados por consola para verificar que todo va bien
    //    console.log("globales consulta = " + globales.Consulta);
    //    console.log("URL Agragar Consulta ->" + url);

    //    // Hay que usar POST para evitar problemas de longitud del string
    //    $http({
    //        url: url,
    //        method: "jsonp",
    //        data: { consultas: JSON.stringify(globales.Consulta) },
    //        headers: { 'Content-Type': 'application/json' }
    //    })
    //    .success(function (data) {
    //        globales.Consulta = data; console.log(data);
    //        console.log("JSON AÑADIR DESPUES -> " + JSON.stringify(globales.Consulta));
    //        console.log("consulta id = " + globales.Consulta.ConsultaID);
    //        window.location = "#/gasto/" + globales.Consulta.GastosID;
            
    //    })
    //    .error(function (data, status, headers, config) {
    //        console.log("ERROR->" + status);
    //    });



    //}

    //*****************************************
    // Función para retrasar obtener consulta
    //*****************************************
    //NOTA: al parecer cuando el servidor ya está en rodaje no sería necesario temporizador...
    //vm.IrConsultaAnonima = function () {
    //    setTimeout(function () {
    //        vm.ObtenerUltimaConsulta();
    //    }, 2000);
    //}

    //******************************
    // Función para agregar sesión
    //******************************

    //vm.AgregarSesion = function (sesion) {
    //    $scope.sesion = "";

    //    var url = globales.urlWS + "AgregarSesion" + globales.Callback;

    //    $http.jsonp(url)
    //    .success(function (data) {
    //        $scope.sesion = data; console.log("login -->" + $scope.sesion);})
    //    .error(function (data, status, headers, config) {}
    //    );

    //};

};
 
