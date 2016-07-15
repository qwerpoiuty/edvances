app.config(function($stateProvider) {
    $stateProvider.state('info', {
        templateUrl: 'js/classroom/info/info.html',
        controller: 'infoCtrl',
        parent: 'classroom'
    })
});

app.controller('infoCtrl', function($scope, socket, $state) {

    $scope.checkClass = function() {
        socket.emit('check class')
    }
    socket.on('class check', function(liveClass) {
        if (liveClass) {
            $scope.liveClass = "Class is live"
            $scope.startClass = "End Class"
            $scope.$apply()
        } else {
            $scope.liveClass = "Class is out"
            $scope.startClass = "Start Class"
            $scope.$apply()
        }
        console.log('hello', liveClass, $scope.liveClass)
    })

    $scope.joinClass = function() {
        if ($scope.liveClass === "Class is live") $window.open('//humantics.build/' + $scope.date)
        else alert('Class is out')
    }

    $scope.items = {
        basic: {
            name: "Basic Info",
            state: "basicinfo",
            icon: "fa-2x fa fa-info"
        },
        teacher: {
            name: "Teacher Info",
            state: "teacher",
            icon: "glyphicon glyphicon-education"
        },
        assignments: {
            name: "assignments",
            state: "assignment",
            icon: "fa-2x fa fa-exclamation-circle"
        }
    }





    $scope.checkClass()
})