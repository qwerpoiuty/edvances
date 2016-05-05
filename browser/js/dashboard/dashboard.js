'use strict';

app.config(function($stateProvider) {
    $stateProvider.state('dashboard', {
        url: '/dashboard',
        templateUrl: 'js/dashboard/dashboard.html',
        controller: 'dashboardCtrl',
        resolve: {
            user: function(AuthService) {
                return AuthService.getLoggedInUser().then(function(user) {
                    return user
                })
            }
        }
    })
});
app.controller('dashboardCtrl', function($scope, $state, $rootScope, $timeout) {


});