app.config(function($stateProvider) {
    $stateProvider.state('pmTeach', {
        templateUrl: 'js/classroom/tools/pmTeach/pmTeach.html',
        controller: 'pmTeachCtrl',
        parent: 'messaging'
    })
});

app.controller('pmTeachCtrl', function($scope) {

})