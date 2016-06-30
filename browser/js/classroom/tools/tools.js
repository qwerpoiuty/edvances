app.config(function($stateProvider) {
    $stateProvider.state('tools', {
        templateUrl: 'js/classroom/tools/tools.html',
        controller: 'toolsCtrl',
        parent: 'classroom'
    })
});

app.controller('toolsCtrl', function($scope) {
    console.log('hello world')
    $scope.items = {
        whiteboard: {
            name: "Whiteboard",
            state: "whiteboard",
            icon: "comment"
        },
        notepad: {
            name: "Notepad",
            state: "notepad",
            icon: "comment"
        },
        scheduling: {
            name: "Calendar",
            state: "classCalendar",
            icon: "comment"
        }
    }
})