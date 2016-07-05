app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'homeCtrl'
    })
});

app.controller('homeCtrl', function($scope, $state) {
    $scope.join_user = ""

    $scope.signup = function(state) {
        $scope.join_user = state
        console.log('hello', $scope.join_user)
    }
    $scope.back = function() {
        $scope.join_user = ""
    }
})