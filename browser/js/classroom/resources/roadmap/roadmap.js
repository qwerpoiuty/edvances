app.config(function($stateProvider) {
    $stateProvider.state('roadmap', {
        templateUrl: 'js/classroom/tools/roadmap/roadmap.html',
        controller: 'roadmapCtrl',
        parent: 'resources'
    })
});

app.controller('roadmapCtrl', function($scope) {

})