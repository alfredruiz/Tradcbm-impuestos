var app = angular.module('CalPro20', ['ngRoute']);

app.controller('inicioCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.menuSuperior = 'parcial/menu.html';
}]);