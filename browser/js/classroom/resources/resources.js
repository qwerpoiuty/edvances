app.config(function($stateProvider) {
    $stateProvider.state('resources', {
        templateUrl: 'js/classroom/resources/resources.html',
        controller: 'resourcesCtrl',
        parent: 'classroom'
    })
});

app.controller('resourcesCtrl', function($scope) {
    console.log('hello world')
    $scope.items = {
        roadMap: {
            name: "Class Road Map",
            state: "roadMap",
            icon: ""
        },
        slides: {
            name: "Class Presentations",
            state: "slides",
            icon: ""
        },
        materials: {
            name: "Class Materials",
            state: "materials",
            icon: ""
        },
        handin: {
            name: "Student Handin",
            state: "handin",
            icon: ""
        }
    }
})