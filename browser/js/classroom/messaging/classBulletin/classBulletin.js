app.config(function($stateProvider) {
    $stateProvider.state('classBulletin', {
        templateUrl: 'js/classroom/tools/classBulletin/classBulletin.html',
        controller: 'classBulletinCtrl',
        parent: 'messaging'
    })
});

app.controller('classBulletinCtrl', function($scope) {

})