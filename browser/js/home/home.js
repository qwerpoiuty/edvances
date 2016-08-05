app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'homeCtrl'
    })
});

app.controller('homeCtrl', function($scope, $state, dataFactory) {
    $scope.join_user = ""

    $scope.signup = function(state) {
        $scope.join_user = state
    }
    $scope.back = function() {
        $scope.join_user = ""
    }

    $scope.signupTeacher = function(user) {
        user.powerLevel = 2;
        dataFactory.createUser(user).then(function() {
            $state.transitionTo('dashboard')
        })
        //input datafactory signup function
    }

    $scope.signupStudent = function(user) {
        console.log('hi')
        user.powerLevel = 1;
        dataFactory.createUser(user).then(function() {
            $state.transitionTo('dashboard')
        })
        //input datafactory signup function
    }


})