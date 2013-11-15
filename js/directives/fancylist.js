angular.module('AngularDirectives.directives')
    .directive('fancyList', [function () {
        return {
            restrict: "EA",
            templateUrl: 'partials/templates/fancylist.html',
            replace: true,
            transclude: true,
            scope: {
                items: "=",
                bind: "="
            },
            link: function (scope, el, attrs) {

                scope.itemClick = function(item) {
                    scope.bind = item;
                };

                scope.currentClass = function (item) {
                    return (item == scope.bind)
                        ? "fancy-list-item fancy-list-item-selected" : "fancy-list-item";
                };

            }
        };
    }]);