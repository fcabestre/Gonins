var controllers = {};

controllers.NavbarCtrl = function ($scope) {
    $scope.$on('view', function(event, isActive) {
        var tmp = ['','','',''];
        tmp[isActive] = 'active';
        $scope.isActive = tmp;
    });
    $scope.mascot = function() {
        var mascot = $('#mascot');
        var wiewportHeigth = $(window).height();
        mascot.css('top', -231).css('left', 30).css('visibility', 'visible');
        mascot.show();
        var delta = (wiewportHeigth - 250) + 'px';
        mascot.stop().animate({
            top: delta
        }, 10000, function(){
            mascot.animate({left: '-256px'});
        });
    }
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


