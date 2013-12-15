'use strict';

var carDetailsConrollers = angular.module('carDetailsConrollers', []);

carDetailsConrollers.controller('carDetailCtrl', function carDetailCtrl($scope, $rootScope, $routeParams) {
    $scope.carId = $routeParams.carId;

    $scope.$on('someEvent', function(event, data) {
        $scope.showDetails(data);
    });

    $scope.showDetails = function(data){
        $scope.car = data;
    };

    $scope.submit = function(){
        console.log("car",$scope.car);
        $scope.submittedData = $scope.car;
    };

});

