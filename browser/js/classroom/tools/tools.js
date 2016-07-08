app.config(function($stateProvider) {
    $stateProvider.state('tools', {
        templateUrl: 'js/classroom/tools/tools.html',
        controller: 'toolsCtrl',
        parent: 'classroom'
    })
});

app.controller('toolsCtrl', function($scope) {
    console.log('hello world')
    $scope.state = "Class Tools"
    $scope.items = {
        whiteboard: {
            name: "Whiteboard",
            state: "whiteboard",
            icon: "glyphicon glyphicon-blackboard"
        },
        notepad: {
            name: "Notepad",
            state: "notepad",
            icon: "fa-2x fa fa-sticky-note"
        },
        scheduling: {
            name: "Calendar",
            state: "classCalendar",
            icon: "fa-2x fa fa-calendar"
        }
    }
})