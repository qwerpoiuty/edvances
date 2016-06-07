app.directive('event', function($rootScope, AuthService, AUTH_EVENTS, $state, socket) {
    return {
        restrict: 'E',
        scrope: {
            user: "="
        },
        templateUrl: 'js/common/directives/blockSchedule/blockSchedule.html',
        link: function(scope, element, attrs) {


        }
    }
});