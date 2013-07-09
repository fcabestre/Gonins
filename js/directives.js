goninsModule.directive('goThumbnail', function () {
        return {
            restrict:'ACEM',
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
