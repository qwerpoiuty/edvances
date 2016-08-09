app.config(function($stateProvider) {
    $stateProvider.state('teacherInfo', {
        templateUrl: 'js/classroom/info/teacherInfo/teacherInfo.html',
        controller: 'teacherInfoCtrl',
        parent: 'info'
    })
});

app.controller('teacherInfoCtrl', function($scope) {

})