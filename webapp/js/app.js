angular.module('phonecat', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/phones', {templateUrl: 'templates/phone-list.html', controller: PhoneListCtrl}).
            when('/phones/:phoneId', {templateUrl: 'templates/phone-detail.html', controller: PhoneDetailCtrl}).
            otherwise({redirectTo: '/phones'});
    }]);