app.config(function($stateProvider) {
    $stateProvider.state('resources', {
        templateUrl: 'js/classroom/resources/resources.html',
        controller: 'resourcesCtrl',
        parent: 'classroom'
    })
});

app.controller('resourcesCtrl', function($scope) {
    $scope.state = "Class Resources"
    $scope.items = {
        slides: {
            name: "Presentations",
            state: "slides",
            icon: "fa-2x fa fa-slideshare"
        },
        handin: {
            name: "Handin",
            state: "handin",
            icon: "fa-2x fa fa-upload"
        },
        assignments: {
            name: "Assignments",
            state: "assignment",
            icon: "fa-2x fa fa-exclamation-circle"
        }
    }
})