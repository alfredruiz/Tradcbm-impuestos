angular
.module('ImpuestosTrad')
.controller('menuCtrl', menuCtrl);


//=================================
// CONTROLADOR DE MENU
//=================================


// Decalaramos un controlador para el login
function menuCtrl(globales, $http, $scope) {
    var vm = this;

    //console.log("MENUCTRL");
    //vm.ConsultaID = globales.Consulta.ConsultaID;
    //console.log("id consulta = " + vm.ConsultaID);
    //vm.parametroUrl = globales.ParametroUrl;
    //vm.nombreUsuario = globales.loginUsuario.NombreUsuario;
    //vm.usuarioID = globales.loginUsuario.usuarioID;
    

    //console.log("nombre  usuario = " + vm.nombreUsuario);
    //console.log("nombre  usuario = " + globales.loginUsuario.nombreUsuario);

    //vm.VerConsultaCuantoGano = function () {
    //    window.location = "#/cuantogano/" + globales.ParametroUrl;
    //}

    //vm.VerBotonConsultas = function(){
    //    if (vm.nombreUsuario != "anonimo") { return true; }
    //    else { return false;}
    //}

    //******************************
    // Función para ver el usuario
    //******************************

    //vm.getLoginUsuario = function () {
    //    vm.Bienvenida = "Hola, " + globales.loginUsuario.NombreUsuario;
    //    if (globales.loginUsuario.NombreUsuario != undefined) { return vm.Bienvenida; }
    //    else { vm.Bienvenida = ""; return vm.Bienvenida;}
        
    //}




}