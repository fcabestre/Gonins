var controllers = {};

controllers.GoninsCtrl = function ($scope) {
};

controllers.CalendrierCtrl = function ($scope, $http) {
    $http.get('data/matchs.json').success(function (data, status) {
        $scope.matchs = data;
    });
};

controllers.GalerieCtrl = function ($scope) {
};

controllers.ContactCtrl = function ($scope, $window) {
    $scope.zoom = function() {
        $window.location.href = 'http://www.openstreetmap.org/?lat=43.573735&amp;lon=1.48414&amp;zoom=17&amp;layers=M&amp;mlat=43.57404&amp;mlon=1.48519'
    };
};

goninsModule.controller(controllers);


