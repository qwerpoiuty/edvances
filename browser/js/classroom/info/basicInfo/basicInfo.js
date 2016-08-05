app.config(function($stateProvider) {
    $stateProvider.state('basicInfo', {
        templateUrl: 'js/classroom/info/basicInfo/basicInfo.html',
        controller: 'basicInfoCtrl',
        parent: 'info'
    })
});

app.controller('basicInfoCtrl', function($scope, socket, $window) {

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


    $scope.toggleClass = function() {
        socket.emit('toggle class')
    }

    //remember to make the conditional button if you're a teacher
    $scope.joinClass = function() {
        if ($scope.liveClass) $window.open('http://google.com', 'edvances', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=800,height=700');
        else alert('Class is out')
    }

    $scope.checkClass()
})