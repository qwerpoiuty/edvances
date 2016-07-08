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

<<<<<<< HEAD
app.controller('classroomCtrl', function($scope, AuthService, $state, user, socket) {
    console.log('hello')
=======
app.controller('classroomCtrl', function($scope, AuthService, dataFactory, $state, user, socket, $window) {
>>>>>>> c691af172a79a765e61f2ed9a01881c9431dd352
    $scope.user = user
    $scope.date = Date.now()
<<<<<<< HEAD
    $scope.live = false



    socket.emit('join awesome room', location.pathname.slice(1));
    socket.on('live class'function() {
        $scope.live = true
    })
=======
    $state.transitionTo('info')
    socket.emit('join awesome room', location.pathname.slice(1));
>>>>>>> c691af172a79a765e61f2ed9a01881c9431dd352

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