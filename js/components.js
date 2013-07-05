var m = angular.module('components', []);

m.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/gonins', {templateUrl:'gonins.html', controller:GoninsCtrl}).
        when('/calendrier', {templateUrl:'calendrier.html', controller:CalendrierCtrl}).
        when('/galerie', {templateUrl:'galerie.html', controller:GalerieCtrl}).
        when('/contact', {templateUrl:'contact.html', controller:ContactCtrl}).
        otherwise({redirectTo:'/gonins'});
}]);

function GoninsCtrl($scope, $http) {
}

function CalendrierCtrl($scope, $http) {
    $http.get('data/matchs.json').success(function (data, status) {
        $scope.matchs = data;
    });
}

function GalerieCtrl($scope, $http) {
}

function ContactCtrl($scope, $http) {
}


