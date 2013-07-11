goninsModule.factory('dataFactory', function ($http, $log) {
    var factory = {};
    factory.getMatches = function (callback) {
        $http.get('data/matchs.json').success(function (data, status) {
            $log.info('Matches successfully loaded: ' + status);
            callback(data);
        }).error(function (status) {
            $log.error('Failure loading matches: ' + status);
        });
    };
    return factory;
});

