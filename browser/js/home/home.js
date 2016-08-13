app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'homeCtrl'
    })
});

app.controller('homeCtrl', function($scope, $state, userFactory, AuthService) {
    $scope.join_user = ""

    $scope.signup = function(state) {
        $scope.join_user = state
    }
    $scope.back = function() {
        $scope.join_user = ""
    }

    $scope.signupTeacher = function(user) {
        user.powerLevel = 2;
        userFactory.createUser(user).then(function(credits) {
            if (credits) {
                AuthService.login(credits)
                $state.transitionTo('dashboard')
            } else alert('Email in use')
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

function shift(obj) {
    var temp = []
    var i = 0
    for (var keys in obj) {
        console.log(obj[keys])
        temp.pueh(obj[keys])
        if (i > 0) {
            obj[keys] = temp[i - 1]
        }
    }
}