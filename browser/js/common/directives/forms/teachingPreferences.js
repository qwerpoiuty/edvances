'use strict'

app.directive('teachingPreferences', function($timeout) {
    return {
        templateUrl: 'js/common/directives/forms/views/directives/teachingPreferences.html',
        restrict: 'A',
        scope: {
            registerFormScope: '=',
            userData: '=',
            validateChildForm: '='
        },
        link: function postLink(scope) {
            scope.disabled = false;

            scope.form = {};
            var grades = {}
                // Add the form to the controller through the registerFormScope
            $timeout(function() {
                scope.form.fields = ['Area', grades];
            });

        }
    };
});