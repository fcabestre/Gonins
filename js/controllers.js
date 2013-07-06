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


