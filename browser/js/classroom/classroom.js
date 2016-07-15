app.config(function($stateProvider) {
    $stateProvider.state('classroom', {
        url: '/classroom/:id',
        templateUrl: 'js/classroom/classroom1.html',
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
    $scope.live = false

    //REMEMBER TO ADD THE MARGINS TO THE WHITEBOARD!!!!!

    socket.emit('join awesome room', location.pathname.slice(1));
    socket.on('live class', function() {
        $scope.live = true
    })
    $state.transitionTo('info')
    socket.emit('join awesome room', location.pathname.slice(1));


    $scope.toggleClass = function() {
        socket.emit('toggle class')
    }

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