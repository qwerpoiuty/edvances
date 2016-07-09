app.config(function($stateProvider) {
    $stateProvider.state('resources', {
        templateUrl: 'js/classroom/resources/resources.html',
        controller: 'resourcesCtrl',
        parent: 'classroom'
    })
});

app.controller('resourcesCtrl', function($scope) {
    console.log('hello world')
    $scope.state = "Class Resources"
    $scope.items = {
        roadMap: {
            name: "Class Road Map",
            state: "roadMap",
            icon: "glyphicon glyphicon-map-marker"
        },
        slides: {
            name: "Class Presentations",
            state: "slides",
            icon: "fa-2x fa fa-slideshare"
        },
        materials: {
            name: "Class Materials",
            state: "materials",
            icon: "fa-2x fa fa-suitcase"
        },
        handin: {
            name: "Student Handin",
            state: "handin",
            icon: "fa-2x fa fa-upload"
        }
    }
})