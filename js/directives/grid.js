angular.module('AngularDirectives.directives')
    .directive('grid', function () {
        return {
            replace: true,
            scope: {
                scale: '=grid',
                showGrid: '='
            },
            link: function(scope, element, attrs) {

                element.css('width', '100%');
                element.css('height', '100%');

                scope.$watch('showGrid', function () {
                    if (scope.showGrid) {
                        element.show('fast');
                    } else {
                        element.hide('fast');
                    }
                });
                scope.$watch('scale', function() {
                    element.empty();
                    var scale = scope.scale;
                    var n = document.createElement('canvas');
                    var w = scale.x;
                    var h = scale.y;
                    n.width = w + 1;
                    n.height = h + 1;
                    var context = n.getContext('2d');
                    context.strokeStyle = '#000000';
                    context.lineWidth = 1;
                    context.moveTo(w, 0);
                    context.lineTo(w, h);
                    context.stroke();
                    context.moveTo(0, h);
                    context.lineTo(w, h);
                    context.stroke();
                    var url = n.toDataURL('image/png');
                    element.css('background-image', 'url('+url+')');
                    element.css('background-repeat', 'repeat-x repeat-y');
                    element.css('margin-left', 'auto');
                    element.css('margin-right', 'auto');
                    element.css('margin-bottom', 'auto');
                    element.css('margin-top', 'auto');
                }, true);
            }
        };
    }) ;