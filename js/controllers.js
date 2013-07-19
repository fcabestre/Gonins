var controllers = {};

controllers.NavbarCtrl = function ($scope, $log) {
    $scope.$on('view', function(event, isActive) {
        $log.info(isActive);
        var tmp = ['','','',''];
        tmp[isActive] = 'active';
        $scope.isActive = tmp;
    });
};

controllers.GoninsCtrl = function ($scope) {
    $scope.$emit('view', 0);
};

controllers.CalendrierCtrl = function ($scope, dataFactory) {
    $scope.$emit('view', 1);
    dataFactory.getMatches(function(data) {
        $scope.matchs = data;
    });
};

controllers.GalerieCtrl = function ($scope) {
    $scope.$emit('view', 2);
};

controllers.ContactCtrl = function ($scope, $window) {
    $scope.$emit('view', 3);
    $scope.zoom = function() {
        $window.location.href = 'http://www.openstreetmap.org/?lat=43.573735&amp;lon=1.48414&amp;zoom=17&amp;layers=M&amp;mlat=43.57404&amp;mlon=1.48519'
    };
};

goninsModule.controller(controllers);


