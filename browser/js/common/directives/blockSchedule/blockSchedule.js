app.directive('blockschedule', function($rootScope, AuthService, AUTH_EVENTS, $state, socket) {
    return {
        restrict: 'E',
        scrope: {
            user: "=",
            dashboard: "="
        },
        templateUrl: 'js/common/directives/blockSchedule/blockSchedule.html',
        link: function(scope, element, attrs) {

            scope.weekdays = [{
                id: 0,
                day: 'Monday'
            }, {
                id: 1,
                day: 'Tuesday'
            }, {
                id: 2,
                day: 'Wednesday'
            }, {
                id: 3,
                day: 'Thursday'
            }, {
                id: 4,
                day: 'Friday'
            }, {
                id: 5,
                day: 'Saturday'
            }, {
                id: 6,
                day: 'Sunday'
            }];

            // scope.classes = scope.dashboard.classes
            // for (var i = 0; i < scope.class.length; i++) {
            //figure out how to convert 
            // }
        }
    }
});