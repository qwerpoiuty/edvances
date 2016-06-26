app.config(function($stateProvider) {
    $stateProvider.state('resources', {
        templateUrl: 'js/classroom/resources/resources.html',
        controller: 'resourcesCtrl',
        parent: 'classroom'
    })
});

app.controller('resourcesCtrl', function($scope) {
    console.log('hello world')
})