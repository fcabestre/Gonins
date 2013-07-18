var controllers = {};

controllers.NavbarCtrl = function ($scope) {
    $scope.$on('gonins', function() {
        $scope.gonins = 'active';
        $scope.calendrier = '';
        $scope.galerie = '';
        $scope.contact = '';

    });
    $scope.$on('calendrier', function() {
        $scope.gonins = '';
        $scope.calendrier = 'active';
        $scope.galerie = '';
        $scope.contact = '';
    });
    $scope.$on('galerie', function() {
        $scope.gonins = '';
        $scope.calendrier = '';
        $scope.galerie = 'active';
        $scope.contact = '';
    });
    $scope.$on('contact', function() {
        $scope.gonins = '';
        $scope.calendrier = '';
        $scope.galerie = '';
        $scope.contact = 'active';
    });
};

controllers.GoninsCtrl = function ($scope) {
    $scope.$emit('gonins');
};

controllers.CalendrierCtrl = function ($scope, dataFactory) {
    $scope.$emit('calendrier');
    dataFactory.getMatches(function(data) {
        $scope.matchs = data;
    });
};

controllers.GalerieCtrl = function ($scope) {
    $scope.$emit('galerie');
};

controllers.ContactCtrl = function ($scope, $window) {
    $scope.$emit('contact');
    $scope.zoom = function() {
        $window.location.href = 'http://www.openstreetmap.org/?lat=43.573735&amp;lon=1.48414&amp;zoom=17&amp;layers=M&amp;mlat=43.57404&amp;mlon=1.48519'
    };
};

goninsModule.controller(controllers);


