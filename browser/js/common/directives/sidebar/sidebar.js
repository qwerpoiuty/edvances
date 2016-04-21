'use strict'

app.directive('sidebar', function ($timeout) {
    return {
        templateUrl: 'js/common/directives/sidebar/sidebar.html',
        restrict: 'A',
        scope: {
        },
        link: function postLink(scope) {
            scope.disabled = false;

            scope.form = {};

            // Add the form to the controller through the registerFormScope
            $timeout(function () {

            });

        }
    };
});
