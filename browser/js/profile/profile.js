app.config(function($stateProvider) {
    $stateProvider.state('profile', {
        url: '/profile',
        templateUrl: 'js/profile/profile.html',
        controller: 'profileCtrl',
        resolve: {
            user: function(AuthService) {
                return AuthService.getLoggedInUser().then(function(user) {
                    return user
                })
            }
        },
        data: {
            authenticate: true
        }
    });

})

app.controller('profileCtrl', function($scope, dataFactory, user, fileUpload) {
    $scope.user = user;
    console.log($scope.user)
    $scope.uploadFile = function() {
        var file = $scope.myFile;

        console.log('file is ');
        console.dir(file);

        var uploadUrl = "/api/users/docs/" + $scope.user._id;
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };
});