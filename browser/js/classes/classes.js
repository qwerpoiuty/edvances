app.config(function($stateProvider) {
    $stateProvider.state('classes', {
        templateUrl: 'js/classes/classes.html',
        controller: 'classesCtrl',
        url: '/classes'
    })
})

app.controller("classesCtrl", function($scope, classroomFactory, $state) {

    $scope.createClassroom = function(classroom) {

        var now = new Date(2016, 7, 8)
        console.log(start, now, ((now - start) / 1000) / 1800)
        // var classroom = {
        //         title: "Test",
        //         start: Date.now(),
        //         end: Date.now(),
        //         teacher: 5,
        //         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati consequatur soluta possimus commodi ab expedita ullam, dolorem impedit beatae quis. Veritatis delectus possimus incidunt sed commodi ut natus, dignissimos tempore.'
        //     }
        classroomFactory.createClassroom(classroom).then(function(id) {
            $state.transitionTo('classroom', {
                id: id
            })
        })
    }

    $scope.test = function() {
        var classroom = {
            classroom_id: 10,
            title: 'Hello',
            teacher: 7,
            description: 'lorem sucks'
        }
        classroomFactory.updateClassroom(classroom)
    }

    $scope.updateClassroom = function() {

    }

    $scope.search = function(search) {

        // dataFactory.getClassrooms(search)
    }
    $scope.search('test,testing');
    $scope.classes = [{
        title: "Math",
        teacher: "Stan",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quisquam minus, illum omnis accusamus praesentium corporis sunt, laboriosam nostrum aliquid nulla, consectetur veniam amet quam laborum impedit dolorem fuga. Omnis.",
        times: "Monday, 8:30, Wednesday 9:30"
    }, {
        title: "English",
        teacher: "Stan",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quisquam minus, illum omnis accusamus praesentium corporis sunt, laboriosam nostrum aliquid nulla, consectetur veniam amet quam laborum impedit dolorem fuga. Omnis.",
        times: "Monday, 8:30, Wednesday 9:30"
    }, {
        title: "History",
        teacher: "Stan",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quisquam minus, illum omnis accusamus praesentium corporis sunt, laboriosam nostrum aliquid nulla, consectetur veniam amet quam laborum impedit dolorem fuga. Omnis.",
        times: "Monday, 8:30, Wednesday 9:30"
    }, {
        title: "Science",
        teacher: "Stan",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quisquam minus, illum omnis accusamus praesentium corporis sunt, laboriosam nostrum aliquid nulla, consectetur veniam amet quam laborum impedit dolorem fuga. Omnis.",
        times: "Monday, 8:30, Wednesday 9:30"
    }, {
        title: "Programming",
        teacher: "Stan",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quisquam minus, illum omnis accusamus praesentium corporis sunt, laboriosam nostrum aliquid nulla, consectetur veniam amet quam laborum impedit dolorem fuga. Omnis.",
        times: "Monday, 8:30, Wednesday 9:30"
    }];


})