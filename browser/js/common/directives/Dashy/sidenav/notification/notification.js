'use strict';

app.directive('notification', function() {
    return {
        templateUrl: 'js/common/directives/dashy/sidenav/notification/notification.html',
        restrict: 'E',
        replace: true,
    }
});