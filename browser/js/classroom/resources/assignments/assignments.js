app.config(function($stateProvider) {
    $stateProvider.state('assignments', {
        templateUrl: 'js/classroom/resources/assignments/assignments.html',
        controller: 'assignmentsCtrl',
        parent: 'resources'
    })
});

app.controller('assignmentsCtrl', function($scope) {

})