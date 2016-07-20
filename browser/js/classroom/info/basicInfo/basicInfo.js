app.config(function($stateProvider) {
    $stateProvider.state('basicInfo', {
        templateUrl: 'js/classroom/info/basicInfo/basicInfo.html',
        controller: 'basicInfoCtrl',
        parent: 'info'
    })
});

app.controller('basicInfoCtrl', function($scope, socket) {

    $scope.times = [{
        day: 'Monday',
        time: '16:30'
    }, {
        day: "Wednesday",
        time: "15:30",
    }, {
        day: "Friday",
        time: "17:30"
    }]

    $scope.checkClass = function() {
        console.log('hello')
        socket.emit('check class')
    }
    socket.on('class check', function(liveClass) {
        if (liveClass) {
            $scope.liveClass = true
            $scope.$apply()
        } else {
            $scope.liveClass = false
            $scope.$apply()
        }
        console.log('hello', liveClass, $scope.liveClass)
    })

    $scope.joinClass = function() {
        if ($scope.liveClass === "Class is live") $window.open('//humantics.build/' + $scope.date)
        else alert('Class is out')
    }

    $scope.checkClass()
})