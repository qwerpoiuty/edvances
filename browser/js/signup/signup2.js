app.config(function($stateProvider) {
    $stateProvider.state('signup2', {
        url: '/signup2',
        templateUrl: 'js/signup/signup2.html',
        controller: 'signupCtrl2'
    });

})
app.controller('signupCtrl2', function($scope, dataFactory, $state, AuthService) {

    $scope.teacher = true

    $scope.signup = function(user) {
        if (user.password !== user.comfirm) {
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
