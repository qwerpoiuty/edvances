app.config(function($stateProvider) {
    $stateProvider.state('messaging', {
        templateUrl: 'js/classroom/messaging/messaging.html',
        controller: 'messagingCtrl',
        parent: 'classroom'
    })
});

app.controller('messagingCtrl', function($scope) {
    $scope.items = {
        classChat: {
            name: "Class Chat",
            state: "classChat",
            icon: "comment"
        },
        teacherPm: {
            name: "PM the Teaher",
            state: "pmTeach",
            icon: "comment"
        },
        studentPm: {
            name: "PM a student",
            state: "pmStudent",
            icon: "comment"
        },
        messageBoard: {
            name: "Class Bulletin",
            state: "messageBoard",
            icon: "comment"
        }
    }
    console.log($scope.items)
})