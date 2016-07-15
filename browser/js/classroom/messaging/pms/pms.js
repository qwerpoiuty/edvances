app.config(function($stateProvider) {
    $stateProvider.state('pms', {
        templateUrl: 'js/classroom/messaging/pms/pms.html',
        controller: 'pmsCtrl',
        parent: 'messaging'
    })
});

app.controller('pmsCtrl', function($scope) {

})