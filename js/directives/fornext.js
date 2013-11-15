angular.module('AngularDirectives.directives')
    .directive('forNext', [function () {
        var forCounter = 0;
        return function(scope, elem, attrs) {

            var next = elem.next();
            var id = next.attr("id");
            if (id == null) {
                id = "forLink" + (forCounter++);
                next.attr("id", id);
            }

            elem.attr("for", id);
        };
    }]);