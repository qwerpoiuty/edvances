app.config(function($stateProvider) {
    $stateProvider.state('info', {
        templateUrl: 'js/classroom/info/info.html',
        controller: 'infoCtrl',
        parent: 'classroom'
    })
});

app.controller('infoCtrl', function($scope, socket) {
    console.log('hello world')
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
    $scope.checkClass()
})