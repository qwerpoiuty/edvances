app.directive('blockschedule', function($rootScope, AuthService, AUTH_EVENTS, $state, socket, scheduler) {
    return {
        restrict: 'E',
        scrope: {
            user: "=",
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

            scheduler.getCalendar(scope.user.id).then(function(dashboard) {
                scope.dashboard = dashboard
                scope.dashboard.Classrooms.push({
                    calendar_id: 1,
                    title: 'Computers',
                    block: 20,
                    year: 2016,
                    month: 6,
                    day: 7
                })
                console.log("test", dashboard)
                // scope.dashboard.Classrooms.forEach(function(e) {
                //     var day = scope.weekdays[new Date(e.year, e.month, e.day).getDay()].day
                //     $('#' + day + e.block).append('<p>hello</p>')
                // })
            })
        }
    }
});