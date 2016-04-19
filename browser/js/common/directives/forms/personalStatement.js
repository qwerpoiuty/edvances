'use strict'

app.directive('personalStatement', function ($timeout) {
    return {
      templateUrl: 'js/common/directives/forms/views/directives/personalStatement.html',
      restrict: 'A',
      scope: {
        registerFormScope: '=',
        userData: '=',
        validateChildForm: '='
      },
      link: function postLink(scope) {
        scope.disabled = false;

        scope.form = {};

        // Add the form to the controller through the registerFormScope
        $timeout(function () {
          scope.form.fields = ['statement'];
        });

      }
    };
  });
