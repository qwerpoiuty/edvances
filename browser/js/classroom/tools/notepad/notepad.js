app.config(function($stateProvider) {
    $stateProvider.state('notepad', {
        templateUrl: 'js/classroom/tools/notepad/notepad.html',
        controller: 'notepadCtrl',
        parent: 'tools'
    })
});

app.controller('notepadCtrl', function($scope) {

})