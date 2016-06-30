'use strict';

app.directive('stats', function() {
    return {
        templateUrl: 'js/common/directives/dashy/stats/stats.html',
        restrict: 'E',
        replace: true,
        scope: {
            'icon': '@',
            'value': '@',
            'text': '@',
            'bgclass': '@'
        }
    }
});