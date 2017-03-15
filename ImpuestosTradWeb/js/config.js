//===============================
// CONFIG CON RUTAS
//===============================
angular
.module('ImpuestosTrad')
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'parcial/home.html',
            controller: 'inicioCtrl',
        })

        //compras
        .when('/compras', {
            templateUrl: 'compras/compras.html',
            controller: 'comprasCtrl',
            controllerAs: 'vm'
        })
        .when('/compra', {
            templateUrl: 'compras/compra.html',
            controller: 'compraCtrl',
            controllerAs: 'vm'
        })
        .when('/compra/:IDCompras', {
            templateUrl: 'compras/compra.html',
            controller: 'compraCtrl',
            controllerAs: 'vm'
        })
        .when('/comprascompleta', {
            templateUrl: 'compras/comprasv.html',
            controller: 'comprasvCtrl',
            controllerAs: 'vm'
        })

        //facturas
        .when('/facturas', {
            templateUrl: 'facturas/facturas.html',
            controller: 'facturasCtrl',
            controllerAs: 'vm'
        })
        .when('/factura', {
            templateUrl: 'facturas/factura.html',
            controller: 'facturaCtrl',
            controllerAs: 'vm'
        })
        .when('/factura/:IDFacturaProv', {
            templateUrl: 'facturas/factura.html',
            controller: 'facturaCtrl',
            controllerAs: 'vm'
        })

        .when('/facturacompleta', {
            templateUrl: 'facturas/facturasv.html',
            controller: 'facturasvCtrl',
            controllerAs: 'vm'
        })

        //irpf
        .when('/irpflista', {
            templateUrl: 'impuestos/irpflistado.html',
            controller: 'irpfListadoCtrl',
            controllerAs: 'vm'
        })
        .when('/irpf', {
            templateUrl: 'impuestos/irpfvista.html',
            controller: 'irpfVistaCtrl',
            controllerAs: 'vm'
        })
        .when('/irpf/:IdDeclaracionIRPF', {
            templateUrl: 'impuestos/irpfvista.html',
            controller: 'irpfVistaCtrl',
            controllerAs: 'vm'
        })

       


        //usuarios y login
        .when('/usuarios', {
            templateUrl: 'usuarios/usuarios.html',
            controller: 'usuariosCtrl',
            controllerAs: 'vm'
        })
        .when('/usuario', {
            templateUrl: 'usuarios/usuario.html',
            controller: 'usuariosCtrl',
            controllerAs: 'vm'
        })
        .when('/usuario/:usuarioID', {
            templateUrl: 'usuarios/usuario.html',
            controller: 'usuariosCtrl',
            controllerAs: 'vm'
        })
        .when('/login', {
            templateUrl: 'usuarios/login.html',
            controller: 'sesionCtrl'
        })


        //otherwise
        .otherwise({
            redirectTo: '/'
        });



}]);