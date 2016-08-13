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

app.controller("profileCtrl", function($scope, user, userFactory, searchFactory, classroomFactory) {
    $scope.user= user

    $scope.getSearch = function(tags){  
        searchFactory.searchClassroomsByTag(tags)
            .then(function(classroom){
        })
    }

    $scope.saveChanges = function(user){
        userFactory.updateUser(user)
            .then(function(user){
                $scope.user = user
        })
});