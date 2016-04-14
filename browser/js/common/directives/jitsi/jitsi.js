app.directive('jitsi', function($rootScope, AuthService, AUTH_EVENTS, $state) {
    return {
        restrict: 'E',
        scrope: {
            user: "="
        },
        templateUrl: 'js/common/directives/jitsi/jitsi.html',
        link: function(scope, element, attrs) {
            var room = "crashthedomain"
            scope.api = new JitsiMeetExternalAPI("74.208.126.7", room, 100, 100, document.getElementById('jitsi'));
            scope.api.executeCommand('filmStrip', [])

        }
    }
});