angular.module('AngularDirectives.directives')
    .directive('focusMe', function($timeout) {
        return {
            scope: {
                focusMe: '='
            },
            link: function(scope, element, attrs) {
                scope.$watch('focusMe', function(value) {
                    if (value) {
                        $timeout(function () {
                            scope.focusMe = false;
                            element[0].focus();
                        });
                    }
                    
                });
            }
        };
    });