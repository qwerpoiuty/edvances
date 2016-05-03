app.config(function($stateProvider) {
    $stateProvider.state('classroom', {
        url: '/classroom',
        templateUrl: 'js/classroom/classroom.html',
        controller: 'classroomCtrl',
        resolve: {
            user: function(AuthService) {
                return AuthService.getLoggedInUser().then(function(user) {
                    return user
                })
            }
        }
    })
});

app.controller('classroomCtrl', function($scope, AuthService, $state, user, jitsi) {
    $scope.user = user
    $scope.title = "This is a filler title";
    $scope.teacher = "Mr. Le"
    $scope.date = Date.now()
    // jitsi.init("test", document.getElementById('jitsiContainer'))
    jitsi.start();
    $scope.hideFilm = function() {
        // console.log(jitsi.api)
    }
});