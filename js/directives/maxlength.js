angular.module('AngularDirectives.directives')
    .directive('maxLength', function () {
        return function(scope, element, attrs) {
            var maxLength = parseInt(attrs.maxLength);
            element.bind("change paste keyup", function(e) {
                var text = element.val();
                if (text.length > maxLength) {
                    element.val(text.substr(0, maxLength));
                }
            });
        };
    }).directive('areaMaxLength', function() {
        return function(scope, element, attrs) {
            var areaMaxLength = parseInt(attrs.areaMaxLength);
            element.bind("change paste keyup", function(e) {
                var text = element.val();
                var lines = text.split('\n');
                var curPos = 0;
                var cursor = null;
                for (var i = 0; i < lines.length; i++) {
                    var line = lines[i];
                    if (line.length > areaMaxLength) {
                        lines[i] = line = line.substr(0, areaMaxLength);
                        cursor = curPos + line.length;
                    }
                    curPos += line.length + 1;
                }

                if (cursor !== null) {
                    element.val(lines.join('\n'));
                    setCaretToPos(element[0], cursor);

                }
            });

            function setSelectionRange(input, selectionStart, selectionEnd) {
                if (input.setSelectionRange) {
                    input.focus();
                    input.setSelectionRange(selectionStart, selectionEnd);
                } else if (input.createTextRange) {
                    var range = input.createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', selectionEnd);
                    range.moveStart('character', selectionStart);
                    range.select();
                }
            }

            function setCaretToPos(input, pos) {
                setSelectionRange(input, pos, pos);
            }
        };
    });