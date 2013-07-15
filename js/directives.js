goninsModule.directive('goThumbnail', function () {
        return {
            restrict:'C',
            replace:true,
            transclude: true,
            scope:{
                title:'@title',
                span:'@span',
                image:'@image',
                thumb:'@thumb'
            },
            templateUrl:'partials/goThumbnailTpl.html'
        }
    }
);
