app.controller('editClassroomCtrl', function($scope, classroomFactory, $stateParams, $uibModalInstance, classroom) {
    $scope.temp_classroom = jQuery.extend(true, {}, classroom)
    $scope.temp_classroom.startDate = new Date($scope.temp_classroom.startDate)
    $scope.temp_classroom.endDate = new Date($scope.temp_classroom.endDate)
    $scope.days = [, , , , , , , ]
    $scope.temp_times = $scope.temp_classroom.class_times
    $scope.weekdays = {
        0: 'Monday',
        1: 'Tuesday',
        2: 'Wednesday',
        3: 'Thursday',
        4: 'Friday',
        5: 'Saturday',
        6: 'Sunday'
    }

    for (var key of Object.keys($scope.temp_classroom.class_times)) {
        $scope.days[key] = true
        $scope.temp_times[key].start = new Date($scope.temp_classroom.class_times[key].start)
        $scope.temp_times[key].end = new Date($scope.temp_classroom.class_times[key].end)
    }

    $scope.cancel = () => {
        $uibModalInstance.close(false)
    }


    $scope.updateClassroom = classroom => {
        classroom.times = {}
        classroom.class_times = null
        for (var i = 0; i < $scope.days.length; i++) {
            if ($scope.days[i]) {
                if ($scope.temp_times[i].start == null || $scope.temp_times[i].end == null) {
                    return alert('please fill out the times')
                }
                classroom.times[i] = $scope.temp_times[i]
            }
        }
        console.log($scope.temp_times, classroom)
        classroomFactory.updateClassroom($stateParams.id, classroom).then(classroom => {
            classroomFactory.changeImage(classThumbnail).then(classroom => {
                $uibModalInstance.close(classroom)
            })
        })
    }
})