'use strict';
var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'ngGrid',
    'ui.bootstrap',

    'phonecatControllers',
    'carConrollers',
    'carDetailsConrollers',
    'adminConrollers'
    ]);

phonecatApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/phones', {templateUrl: 'templates/phone-list.html', controller: 'PhoneListCtrl'}).
            when('/phones/:phoneId', {templateUrl: 'templates/phone-detail.html', controller: 'PhoneDetailCtrl'}).
            when('/cars', {templateUrl: 'templates/car-list.html', controller: 'carListCtrl'}).
            when('/admin', {templateUrl: 'templates/admin.html', controller: 'adminCtrl'}).
            otherwise({redirectTo: '/cars'});
    }]);