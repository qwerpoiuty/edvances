app.controller('createClassCtrl', function($scope, $modalInstance, scheduler, dataFactory) {
    $scope.days = [{
        id: 0,
        day: 'Monday'
    }, {
        id: 1,
        day: 'Tuesday'
    }, {
        id: 2,
        day: 'Wednesday'
    }, {
        id: 3,
        day: 'Thursday'
    }, {
        id: 4,
        day: 'Friday'
    }, {
        id: 5,
        day: 'Saturday'
    }, {
        id: 6,
        day: 'Sunday'
    }];
    $scope.classData = {
        1: {
            checked: false,
            time: new Date
        },
        2: {
            checked: false,
            time: new Date
        },
        3: {
            checked: false,
            time: new Date
        },
        4: {
            checked: false,
            time: new Date
        },
        5: {
            checked: false,
            time: new Date
        },
        6: {
            checked: false,
            time: new Date
        },
        7: {
            checked: false,
            time: new Date
        },
    };
    $scope.class = {
        "classdays": "0000000"
    };
    $scope.hstep = 1;
    $scope.mstep = 15;


    for (var i = 0; i < $scope.class.classdays.length; i++) {
        $scope.classData[i] = !!parseInt($scope.class.classdays[i]);
    }
    $scope.classData = {}

    $scope.ok = function() {
        dataFactory.createClassroom($scope.user.id, $scope.classData).then(function() {
            modalInstance.close(true)
        })
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
});