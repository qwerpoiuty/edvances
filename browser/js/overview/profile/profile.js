app.config(function($stateProvider) {
    $stateProvider.state('profile', {
        templateUrl: 'js/overview/profile/profile.html',
        controller: 'profileCtrl',
        parent: 'overview',
        resolve: {
            user: function(AuthService) {
                return AuthService.getLoggedInUser().then(function(user) {
                    return user
                })
            }
        }
    })
})

app.controller("profileCtrl", function($scope){
    
})