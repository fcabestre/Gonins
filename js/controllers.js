function GoninsCtrl($scope, $http) {
}

function CalendrierCtrl($scope, $http) {
    $http.get('data/matchs.json').success(function (data, status) {
        $scope.matchs = data;
    });
}

function GalerieCtrl($scope, $http) {
}

function ContactCtrl($scope, $window) {
    $scope.zoom = function() {
        $window.location.href = 'http://www.openstreetmap.org/?lat=43.573735&amp;lon=1.48414&amp;zoom=17&amp;layers=M&amp;mlat=43.57404&amp;mlon=1.48519'
    };
}



