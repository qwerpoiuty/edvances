app.config(function($stateProvider) {
    $stateProvider.state('info', {
        templateUrl: 'js/classroom/info/info.html',
        controller: 'infoCtrl',
        parent: 'classroom'
    })
});

app.controller('infoCtrl', function($scope, socket, $state) {


    $scope.items = {
        basic: {
            name: "Basic Info",
            state: "basicInfo",
            icon: "fa-2x fa fa-info"
        },
        teacher: {
            name: "Teacher Info",
            state: "teacher",
            icon: "glyphicon glyphicon-education"
        },
        roadMap: {
            name: "Road Map",
            state: "roadmap",
            icon: "glyphicon glyphicon-map-marker"
        }
    }




    $state.transitionTo('basicInfo')


})