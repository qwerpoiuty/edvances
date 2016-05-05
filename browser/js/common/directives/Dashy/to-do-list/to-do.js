'use strict';

app.directive('todolist', function() {
    return {
        templateUrl: 'js/common/directives/dashy/to-do-list/to-do.html',
        restrict: 'E',
        replace: true,
        controller: function($scope) {

            setTimeout(function() {
                $('.todo-list-wrap').perfectScrollbar();
            }, 100);

        }
    }
});