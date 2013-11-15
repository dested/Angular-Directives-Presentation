angular.module('AngularDirectives.directives')
    .directive('floatingWindow', function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            templateUrl: 'partials/templates/floatingwindow.html',
            scope: {
                width: '=',
                height: '=',
                left: '=',
                top: '=',
                windowTitle: '=',
                visible: '=',
                onclose: '&',
            },
            link: function (scope, element, attrs) {
                scope.positionStyles = {};
                scope.positionStyles.display = 'block';
                scope.positionStyles.left = scope.left;
                scope.positionStyles.top = scope.top;

                scope.positionStyles.zIndex = 10000;

                if (scope.left.indexOf('%') != -1) {
                    scope.positionStyles.marginLeft = (-(parseInt(scope.width.replace('px', '')) / 2)) + 'px';
                }
                if (scope.top.indexOf('%') != -1) {
                    scope.positionStyles.marginTop = (-(parseInt(scope.height.replace('px', '')) / 2)) + 'px';
                }


                scope.sizeStyle = {};
                scope.sizeStyle.width = scope.width;
                scope.sizeStyle.height = scope.height;

                scope.close = function() {
                    element.remove();
                    scope.onclose();
                };

            }
        };
    });