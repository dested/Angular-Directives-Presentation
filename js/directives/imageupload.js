angular.module('AngularDirectives.directives')
    .directive('imageUpload', [function () {
        return {
            template: "<input type='file'/>",
            replace: true,
            restrict: 'EA',
            scope: {
                imageLoaded: '&',
            },
            link: function(scope, elm, attrs) {
                var inp = elm;
                inp.change(function() {
                    var input = (this);
                    if (input.files && input.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            scope.imageLoaded({ loadedImage: { content: e.target.result, fileName: $(input).val() } });
                            scope.$apply(); 
                            inp.replaceWith(inp = inp.clone(true));
                        };
                        reader.readAsDataURL(input.files[0]);

                    }
                });

            }
        };
    }])
     ;