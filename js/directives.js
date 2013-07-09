goninsModule.directive('gModal', function () {
        return {
            restrict:'ACEM',
            replace:true,
            scope:{
                title:'@title',
                index:'@index',
                image:'@image',
                thumb:'@thumb'
            },
            templateUrl:'partials/gModalTemplate.html'
        }
    }
);
