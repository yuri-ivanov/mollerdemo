'use strict';

var carConrollers = angular.module('carConrollers', []);

carConrollers.controller('carListCtrl', function ($scope, $rootScope, $http) {

    $http.get('json/cars.json').success(function(data) {
        $scope.cars= data;
    });

    $scope.gridSelections = [];
    $scope.filterOptions= {filterText: "", useExternalFilter: false};

    $scope.carGrid = {
        data: 'cars',
        multiSelect: false,
        showGroupPanel: false,
        selectedItems: $scope.gridSelections,
        showFilter: true,
        filterOptions: $scope.filterOptions,
        columnDefs: [
            {field:'reference', displayName:'Ref'}, {field:'customer', displayName:'Customer'},
            {field:'model', displayName:'Model'}, {field:'vin', displayName:'VIN'},
            {field:'orderNumber', displayName:'Order'}],
        afterSelectionChange: function(data) {
            if($scope.gridSelections[0]){
                $rootScope.$broadcast('someEvent', $scope.gridSelections[0]);
            }
        }
    };

});

function MainCntl($route, $routeParams, $location) {
    this.menuItems = [
        {"link":"/cars", "name":"Cars"},
        {"link":"/phones", "name":"Phones"},
        {"link":"/admin", "name":"Admin"}
    ];

    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
    console.log('test');

}