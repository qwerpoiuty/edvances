'use strict';

app.config(function($stateProvider) {
    $stateProvider.state('overview', {
        url: '/dashboard',
        templateUrl: 'js/overview/overview.html',
        controller: 'overviewCtrl',
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
    })
});
app.controller('overviewCtrl', function($scope, $state, $rootScope, $timeout) {
    $state.transitionTo('dashboard')

});