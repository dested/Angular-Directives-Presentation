angular.module('AngularDirectives.directives')
    .directive('draggable', [function() {
        return {
            link: function(scope, el, attrs) {
                el.draggable();
            }
        };
    }]);