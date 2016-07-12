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

app.controller("profileCtrl", function($scope) {

})