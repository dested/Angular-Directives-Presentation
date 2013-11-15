angular.module('AngularDirectives.directives')
    .directive('ellipses', ['$timeout', function ($timeout) {
        return {
            scope: {
                content: '='
            },
            link: function(scope, el, attrs) {
                var count = parseInt(attrs.ellipses);
                scope.$watch('content', function() {
                    if (scope.content && scope.content.length > count) {
                        el.html(scope.content.substring(0, count) + '...');
                    } else {
                        el.html(scope.content);
                    }
                    el.attr('title', scope.content);
                });
            }
    };
}]);