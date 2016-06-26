app.config(function($stateProvider) {
    $stateProvider.state('info', {
        templateUrl: 'js/classroom/info/info.html',
        controller: 'infoCtrl',
        parent: 'classroom'
    })
});

app.controller('infoCtrl', function($scope) {
    console.log('hello world')
})