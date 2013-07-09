goninsModule.directive('goThumbnail', function () {
        return {
            restrict:'C',
            replace:true,
            transclude: true,
            scope:{
                title:'@title',
                index:'@index',
                image:'@image',
                thumb:'@thumb'
            },
            templateUrl:'partials/goThumbnailTpl.html'
        }
    }
);
