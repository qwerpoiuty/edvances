app.config(function($stateProvider) {
    $stateProvider.state('basicInfo', {
        templateUrl: 'js/classroom/info/basicInfo/basicInfo.html',
        controller: 'basicInfoCtrl',
        parent: 'info'
    })
});

app.controller('basicInfoCtrl', function($scope) {

})