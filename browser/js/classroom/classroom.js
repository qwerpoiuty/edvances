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

app.controller('classroomCtrl', function($scope, AuthService, $state, user, socket) {
    console.log('hello')
    $scope.user = user
    console.log(user)
    $scope.date = Date.now()
    socket.emit('join awesome room', location.pathname.slice(1));
    $scope.liveClass = "Class is out"
    $scope.checkClass = function() {
        socket.emit('check class')
    }
    socket.on('class check', function(liveClass) {
        if (liveClass) {
            $scope.liveClass = "Class is live"

        }
    })

    $scope.checkClass()
});