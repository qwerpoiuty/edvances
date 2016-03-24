app.config(function($stateProvider) {
    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/signup/signup.html',
        controller: 'signupCtrl'
    });

})
app.controller('signupCtrl', function($scope, dataFactory, $state, AuthService) {

    $scope.teacher = true

    $scope.signup = function(user) {
        if (user.password !== user.confirm) {
            alert('Passwords do not match')
        } else {
            $scope.error = null;


            dataFactory.createUser(user)
                .then(function() {
                    return AuthService.login(user);
                })
                .then(function() {
                    $state.go('home');
                }).catch(function() {
                    $scope.error = 'Invalid signup credentials.';
                });
        }
    };

});