'use strict';

/**
 * @ngdoc directive
 * @name DashdashyAngular.directive:pageHeader
 * @description
 * # pageHeader
 */

app.directive('pageheader', function() {
    return {
        templateUrl: 'js/common/directives/dashy/pageheader/pageheader.html',
        restrict: 'E',
        replace: true,
        scope: {
            'pagename': '@',
            'subtitle': '@'
        }
    }
});