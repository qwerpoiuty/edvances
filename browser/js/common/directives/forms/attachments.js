'use strict'

app.directive('attachments', function ($timeout) {
    return {
      templateUrl: 'js/common/directives/forms/views/directives/attachments.html',
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
          scope.form.fields = ['attachment'];
        });

      }
    };
  });
