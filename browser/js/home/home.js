app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'homeCtrl'
    })
});

app.controller('homeCtrl', function($scope, $state) {
    $scope.signupTeacher = function() {
        console.log('hello')
        $state.go('signupTeacher')
    }

    $scope.signupStudent = function() {
        console.log('hello')
        $state.go('signupStudent')
    }
})