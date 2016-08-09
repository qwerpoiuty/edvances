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
            },
            classroom: function(classroomFactory, $stateParams) {
                return classroomFactory.getClassroomById($stateParams.id).then(function(classroom) {
                    return classroom
                })
            }
        }
    })
});


app.controller('classroomCtrl', function($scope, AuthService, dataFactory, $state, user, socket, $window) {
    $scope.user = user
    $scope.live = false

    //REMEMBER TO ADD THE MARGINS TO THE WHITEBOARD!!!!!

    socket.emit('join awesome room', location.pathname.slice(1));
    $state.transitionTo('info')
    socket.emit('join awesome room', location.pathname.slice(1));



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