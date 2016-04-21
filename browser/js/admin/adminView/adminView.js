app.config(function($stateProvider) {
    $stateProvider.state('adminview', {
        url: '/admin/view',
        templateUrl: 'js/admin/adminView/adminview.html',
        controller: 'adminViewCtrl',
        resolve: {
            user: function(AuthService) {
                return AuthService.getLoggedInUser().then(function(user) {
                    return user
                })
            },
            users: function(dataFactory) {
                return dataFactory.getUsers().then(function(userList) {
                    return userList
                })
            }
        }
    })
});


app.controller('adminViewCtrl', function($scope, AuthService, user, users, dataFactory) {
    $scope.user = user
    $scope.list = users
    $scope.update = function(user) {
        dataFactory.updateUser(user)
    }
});