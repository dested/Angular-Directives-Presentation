angular.module('AngularDirectives.directives')
    .directive('popOpenSection', [function () {
        return {
            replace: true,
            restrict: 'E',
            template: '<a style="display:block; width:100px; height:100px; ' +
                'color:white; background-color:darkblue;">View</a>',
            scope: {
                sectionInformation: "="
            },
            link: function(scope, el, attrs) {
                el.click(function() {
                    alert(scope.sectionInformation.CurrentUrl);
                });
            }
        };
    }]) ;