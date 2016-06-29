app.config(function($stateProvider) {
    $stateProvider.state('handin', {
        templateUrl: 'js/classroom/tools/handin/handin.html',
        controller: 'handinCtrl',
        parent: 'resources'
    })
});

app.controller('handinCtrl', function($scope) {

})