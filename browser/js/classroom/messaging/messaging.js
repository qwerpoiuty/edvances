app.config(function($stateProvider) {
    $stateProvider.state('messaging', {
        templateUrl: 'js/classroom/messaging/messaging.html',
        controller: 'messagingCtrl',
        parent: 'classroom'
    })
});

app.controller('messagingCtrl', function($scope) {
    $scope.state = "Messaging Center"
    $scope.items = {
        classChat: {
            name: "Class Chat",
            state: "classChat",
            icon: "fa-2x fa fa-comments"
        },
        teacherPm: {
            name: "PM the Teaher",
            state: "pmTeach",
            icon: "glyphicon glyphicon-send"
        },
        studentPm: {
            name: "PM a student",
            state: "pmStudent",
            icon: "glyphicon glyphicon-send reverse"
        },
        messageBoard: {
            name: "Class Bulletin",
            state: "classBulletin",
            icon: "glyphicon glyphicon-list-alt"
        }
    }
    console.log($scope.items)
})