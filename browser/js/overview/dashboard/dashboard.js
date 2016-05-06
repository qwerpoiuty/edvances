app.config(function($stateProvider) {
    $stateProvider.state('dashboard', {
        templateUrl: 'js/overview/dashboard/dashboard.html',
        controller: 'dashboardCtrl',
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

app.controller('dashboardCtrl', function($scope, $state, $rootScope, $timeout, user) {
    $scope.user = user
    $scope.date = new Date();
    $scope.eventSources = [];


})