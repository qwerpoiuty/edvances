app.config(function($stateProvider) {
    $stateProvider.state('assignments', {
        templateUrl: 'js/classroom/info/assignments/assignments.html',
        controller: 'assignmentsCtrl',
        parent: 'info'
    })
});

app.controller('assignmentsCtrl', function($scope) {

})