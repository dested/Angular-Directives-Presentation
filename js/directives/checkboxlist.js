angular.module('AngularDirectives.directives')
    .directive('checkBoxList', [function () {
        var collectionId = 0;
        return {
            templateUrl: 'partials/templates/checkBoxList.html',
            restrict: 'EA',
            scope: {
                collection: '=',
                selection: '='
            },
            link: function(scope, elem, attrs) {
                scope.collectionId = collectionId++;

                scope.toggleSelection = function(name) {
                    var ind = scope.selection.indexOf(name);

                    if (ind > -1) {
                        scope.selection.splice(ind, 1);
                    } else {
                        scope.selection.push(name);
                    }
                };
            }
        };
    }]);