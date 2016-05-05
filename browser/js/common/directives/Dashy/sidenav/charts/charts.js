'use strict';

app.directive('charts', function() {
    return {
        templateUrl: 'js/common/directives/dashy/sidenav/charts/charts.html',
        restrict: 'E',
        replace: true,
    }
});