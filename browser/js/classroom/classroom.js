app.config(function($stateProvider) {
    $stateProvider.state('classroom', {
        url: '/classroom/:id',
        templateUrl: 'js/classroom/classroom.html',
        controller: 'classroomCtrl',
        resolve: {
            user: function(AuthService) {
                return AuthService.getLoggedInUser().then(function(user) {
                    return user
                })
            }
            // classroom: function(dataFactory, $stateParams) {
            //     return dataFactory.getClassroomById($stateParams.id).then(function(classroom) {
            //         return classroom
            //     })
            // }
        }
    })
});

app.controller('classroomCtrl', function($scope, AuthService, dataFactory, $state, user, socket, $window) {
    $scope.user = user
    $scope.date = Date.now()
    $state.transitionTo('info')
    socket.emit('join awesome room', location.pathname.slice(1));
    $scope.joinClass = function() {
        console.log($scope.liveClass)
        if ($scope.liveClass === "Class is live") $window.open('//humantics.build/' + $scope.date)
        else alert('Class is out')
    }
    $scope.toggleClass = function() {
        socket.emit('toggle class')
    }
    $scope.checkClass = function() {
        socket.emit('check class')
    }
    socket.on('class check', function(liveClass) {
        if (liveClass) {
            $scope.liveClass = "Class is live"
            $scope.startClass = "End Class"
            $scope.$apply()
        } else {
            $scope.liveClass = "Class is out"
            $scope.startClass = "Start Class"
            $scope.$apply()
        }
        console.log(liveClass, $scope.liveClass)
    })
    $scope.transition = function(state) {
        $state.transitionTo(state)
    }
    // $scope.checkTeacher = function() {
    //     console.log('hello')
    //     dataFactory.getClassroom()
    // }
    // $scope.checkClass()
    // $scope.checkTeacher()
});