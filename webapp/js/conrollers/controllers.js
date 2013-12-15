'use strict';

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', function ($scope, $http) {
    $http.get('json/phones.json').success(function(data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
});

phonecatControllers.controller('PhoneDetailCtrl', function PhoneDetailCtrl($scope, $routeParams) {
        $scope.phoneId = $routeParams.phoneId;
});

