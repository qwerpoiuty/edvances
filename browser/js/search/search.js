app.config(function($stateProvider) {
    $stateProvider.state('search', {
        templateUrl: 'js/search/search.html',
        controller: 'searchCtrl',
        url: '/search'
    })
})

app.controller("searchCtrl", function($scope, dataFactory) {

    $scope.search = [{
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