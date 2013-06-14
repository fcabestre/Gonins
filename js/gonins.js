function ListeDesMatchs($scope, $http) {
    $http.get('data/matchs.json').success(function(data, status) {
	$scope.matchs = data;
    }).error(function(data, status){
	/* Todo */
    });
}
