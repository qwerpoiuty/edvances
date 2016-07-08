'use strict';

app.directive('comments', function() {
    return {
        templateUrl: 'js/common/directives/dashy/sidenav/comments/comments.html',
        restrict: 'E',
        replace: true,
    }
});