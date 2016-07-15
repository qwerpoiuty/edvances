app.config(function($stateProvider) {
    $stateProvider.state('classChat', {
        templateUrl: 'js/classroom/messaging/classChat/classChat.html',
        controller: 'classChatCtrl',
        parent: 'messaging'
    })
});

app.controller('classChatCtrl', function($scope) {
    console.log('hello')
})