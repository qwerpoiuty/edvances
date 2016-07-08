app.config(function($stateProvider) {
    $stateProvider.state('whiteboard', {
        templateUrl: 'js/classroom/tools/whiteboard/whiteboard.html',
        controller: 'whiteboardCtrl',
        parent: 'tools'
    })
});

app.controller('whiteboardCtrl', function($scope) {

})