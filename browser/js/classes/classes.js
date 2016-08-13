app.config(function($stateProvider) {
    $stateProvider.state('classes', {
        templateUrl: 'js/classes/classes.html',
        controller: 'classesCtrl',
        url: '/classes'
    })
})

app.controller("classesCtrl", function($scope, userFactory, classroomFactory, scheduler, $state, searchFactory) {

    $scope.createClassroom = function(classroom) {

        var now = new Date(2016, 7, 8)
            // console.log(start, now, ((now - start) / 1000) / 1800)
        var classroom = {
            title: "Test2",
            start: Date.now(),
            end: Date.now(),
            teacher: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati consequatur soluta possimus commodi ab expedita ullam, dolorem impedit beatae quis. Veritatis delectus possimus incidunt sed commodi ut natus, dignissimos tempore.'
        }
        classroomFactory.createClassroom(classroom).then(function(id) {
            console.log(id)
            $state.transitionTo('classroom', {
                id: id
            })
        })
    }

    $scope.test = function(classroom) {
        var classroom = {
            classroom_id: 1,
            title: 'hello world',
            teacher: 1,
            description: 'lorem sucks'
        }
        classroomFactory.updateClassroom(classroom)
    }

    $scope.schedule = function(classroomId, blocks) {

        var blocks = [1, 2, 3, 4, 5]
        var classroomId = 1
        scheduler.schedule(2, blocks).then(function(classroom) {
            console.log(classroom)
        })
    }

    $scope.addClass = function(studentId, classroomId) {
        userFactory.addClass(2, 1).then(function(user) {
            console.log(user)
        })
    }

    $scope.removeClass = function(studentId, classroomId) {
        var studentId = 1
        var classroomId = 1
        userFactory.removeClass(1, 1).then(function(user) {
            console.log(user)
        })
    }

    $scope.getCalendar = function(studentId) {
        scheduler.getCalendar(1).then(function(calendar) {
            console.log(calendar)
        })
    }
    $scope.search = function(search) {
        searchFactory.searchClassroomsByTags(['hello', 'world', 'math'])
            .then(function(classrooms) {
                console.log('here!')
            })
        // dataFactory.getClassrooms(search)
    }
    // $scope.search('test,testing');
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