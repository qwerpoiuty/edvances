app.config(function($stateProvider) {
    $stateProvider.state('messaging', {
        templateUrl: 'js/classroom/messaging/messaging.html',
        controller: 'messagingCtrl',
        parent: 'classroom'
    })
});

app.controller('messagingCtrl', function($scope, $state) {
    $state.transitionTo('classChat')
    $scope.state = "Messaging Center"
    $scope.items = {
        classChat: {
            name: "Class Chat",
            state: "classChat",
            icon: "fa-2x fa fa-comments"
        },
        pms: {
            name: "Messages",
            state: "pms",
            icon: "glyphicon glyphicon-send"
        },
        messageBoard: {
            name: "Bulletin",
            state: "classBulletin",
            icon: "glyphicon glyphicon-list-alt"
        }
    }
})