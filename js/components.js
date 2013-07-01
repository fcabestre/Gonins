angular.module('components', []).
    directive('gmenu', function () {
        return {
            restrict:'E',
            transclude:true,
            scope:{},
            replace:true,
            template:
                '<div class="navbar navbar-inverse navbar-fixed-top">' +
                      '<div class="navbar-inner">' +
                            '<div class="container">' +
                                  '<a class="brand" href="gonins.html">Gonin\'Boys </a>' +
                                  '<ul class="nav">' +
                                       '<li><a href="calendrier.html">Calendrier</a></li>' +
                                       '<li class="dropdown">' +
                                            '<a href="galerie-carousel.html" class="dropdown-toggle" data-toggle="dropdown">' +
                                                'Galerie' +
                                                '<b class="caret"></b>' +
                                            '</a>' +
                                            '<ul class="dropdown-menu">' +
                                                 '<li><a href="galerie-carousel.html">Carousel</a></li>' +
                                                 '<li><a href="galerie-vignettes.html">Vignettes</a></li>' +
                                            '</ul>' +
                                       '</li>' +
                                       '<li><a href="contact.html">Contact</a></li>' +
                                  '</ul>' +
                            '</div>' +
                      '</div>' +
                '</div>'
        };
    });

function ListeDesMatchs($scope, $http) {
    $http.get('data/matchs.json').success(function (data, status) {
        $scope.matchs = data;
    });
}


