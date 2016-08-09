app.config(function($stateProvider) {
    $stateProvider.state('profile', {
        templateUrl: 'js/profile/profile.html',
        controller: 'profileCtrl',
        url: '/profile/:id',
        resolve: {
            user: function(AuthService) {
                return AuthService.getLoggedInUser().then(function(user) {
                    return user
                })
            }
        }
    })
})

app.controller("profileCtrl", function($scope, user) {
    $scope.user = user
    $scope.saveChanges = function(user) {
        var bool = true
        for (var keys in user) {
            if (user[keys] === null) bool = false
        }
        if (!bool) alert('please fill out the form')
        else {
            userFactory.updateUser(user).then(function(user) {
                $scope.user = user
            })
        }
    }
})