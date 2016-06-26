app.config(function($stateProvider) {
    $stateProvider.state('messaging', {
        templateUrl: 'js/classroom/messaging/messaging.html',
        controller: 'messagingCtrl',
        parent: 'classroom'
    })
});

app.controller('messagingCtrl', function($scope) {
    console.log('hello world')
})