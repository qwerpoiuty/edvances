app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'homeCtrl'
    })
});

app.controller('homeCtrl', function($scope, $state, userFactory) {
    $scope.join_user = ""

    $scope.signup = function(state) {
        $scope.join_user = state
    }
    $scope.back = function() {
        $scope.join_user = ""
    }

    $scope.signupTeacher = function(user) {
        console.log(user)
        user.powerLevel = 2;
        userFactory.createUser(user).then(function(bool) {
            if (bool) $state.transitionTo('dashboard')
            else alert('Email in use')
        })
        //input userFactory signup function
    }

    $scope.signupStudent = function(user) {
        console.log('hi')
        user.powerLevel = 1;
        userFactory.createUser(user).then(function() {
            // $state.transitionTo('dashboard')
        })
        //input datafactory signup function
    }


})