app.config(function($stateProvider) {
    $stateProvider.state('pmStudent', {
        templateUrl: 'js/classroom/tools/pmStudent/pmStudent.html',
        controller: 'pmStudentCtrl',
        parent: 'messaging'
    })
});

app.controller('pmStudentCtrl', function($scope) {

})