app.config(function($stateProvider) {
    $stateProvider.state('quizDashboard', {
        url: '/quizDashboard',
        templateUrl: 'js/authorized/teachers/quizDashboard/quizDashboard.html',
        controller: 'quizDashboardCtrl',
        parent: 'authorized'
    });
});

app.controller('quizDashboardCtrl', ($scope, quizFactory, classroomFactory) => {
    classroomFactory.getClassroomsByTeacher($scope.user.id).then(classrooms => {
        $scope.classrooms = classrooms
    })
    $scope.getQuiz = (id) => {
        quizFactory.getQuizzesByClassroom(id).then(quizzes => {
            $scope.quizzes = quizzes
        })
    }

    $scope.deleteQuiz = (id) => {
        quizFactory.deleteQuiz(id).then(response => {
            console.log('deleted')
        })
    }
})