'use strict'

app.directive('education', function($timeout) {
    return {
        templateUrl: 'js/common/directives/forms/views/directives/education.html',
        restrict: 'A',
        scope: {
            registerFormScope: '=',
            userData: '=',
            validateChildForm: '='
        },
        link: function postLink(scope) {
            scope.disabled = false;

            scope.form = {};
            var education = {
                // Add the form to the controller through the registerFormScope
            }
            $timeout(function() {
                scope.form.fields = [education];
            });

        }
    };
});