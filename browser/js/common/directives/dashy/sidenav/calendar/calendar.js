'use strict';

app.directive('calendar', function() {
    return {
        templateUrl: 'js/common/directives/dashy/sidenav/calendar/calendar.html',
        restrict: 'E',
        replace: true,
    }
});