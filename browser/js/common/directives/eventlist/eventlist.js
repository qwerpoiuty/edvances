'use strict';

app.directive('eventlist', function() {
    return {
        templateUrl: 'js/common/directives/eventlist/eventlist.html',
        restrict: 'E',
        replace: true,
        link: function(scope, el, att) {

            scope.events = [{
                date: 'May 8th',
                text: 'SQL lesson with Sooch Johal'
            }, {
                date: 'May 12th',
                text: 'NodeJS lesson with Stan Le'
            }, {
                date: 'May 15th',
                text: 'SQL lesson with Sooch Johal'
            }, {
                date: 'May 30th',
                text: 'NodeJS lesson with Sooch Johal'
            }]

        }
    }
});