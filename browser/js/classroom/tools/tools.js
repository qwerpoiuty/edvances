app.config(function($stateProvider) {
    $stateProvider.state('tools', {
        templateUrl: 'js/classroom/tools/tools.html',
        controller: 'toolsCtrl',
        parent: 'classroom'
    })
});

app.controller('toolsCtrl', function($scope) {
    console.log('hello world')
})