var goninsModule = angular.module('gonins', []);

goninsModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/gonins', {templateUrl:'partials/gonins.html', controller:GoninsCtrl}).
        when('/calendrier', {templateUrl:'partials/calendrier.html', controller:CalendrierCtrl}).
        when('/galerie', {templateUrl:'partials/galerie.html', controller:GalerieCtrl}).
        when('/contact', {templateUrl:'partials/contact.html', controller:ContactCtrl}).
        otherwise({redirectTo:'/gonins'});
}]);
