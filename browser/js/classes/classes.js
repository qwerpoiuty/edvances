app.config(function($stateProvider) {
    $stateProvider.state('classes', {
        templateUrl: 'js/classes/classes.html',
        controller: 'classesCtrl',
        url: '/classes'
    })
})

app.controller("classesCtrl", function($scope, dataFactory) {

    $scope.search = function(search) {

        dataFactory.getClassrooms(search)
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